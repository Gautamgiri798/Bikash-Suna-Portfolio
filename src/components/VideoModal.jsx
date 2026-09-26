import React, { useState, useEffect, useRef, useCallback } from 'react';

// Helper to convert YouTube standard, short, or share URLs to embed URLs
function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  );
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1`;
  }
  return null;
}

export default function VideoModal({ isOpen, project, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [currentQuality, setCurrentQuality] = useState('1080p');
  const [showQualityMenu, setShowQualityMenu] = useState(false);
  const [activeVideoSrc, setActiveVideoSrc] = useState('');

  const playerContainerRef = useRef(null);
  const progressBarRef = useRef(null);
  const videoRef = useRef(null);
  const bufferingTimerRef = useRef(null);
  const qualityMenuRef = useRef(null);
  const isUserActionRef = useRef(false);
  const progressFillRef = useRef(null);
  const currentTimeDisplayRef = useRef(null);
  const hudTimecodeRef = useRef(null);
  const lastStateSyncTimeRef = useRef(0);

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const fallbackDuration = project?.category === 'album' ? 75 : 32;
  const ytEmbedUrl = getYouTubeEmbedUrl(project?.videoUrl);
  const isYouTube = Boolean(ytEmbedUrl);
  const isRealVideo = Boolean(project?.videoUrl && !isYouTube);

  const duration = isRealVideo && videoDuration > 0 ? videoDuration : fallbackDuration;

  const updateScrubberDirect = (time, totalDuration) => {
    const d = totalDuration > 0 ? totalDuration : duration;
    const pct = d > 0 ? Math.min(100, (time / d) * 100) : 0;
    if (progressFillRef.current) {
      progressFillRef.current.style.width = `${pct}%`;
    }
    if (currentTimeDisplayRef.current) {
      currentTimeDisplayRef.current.textContent = formatTime(time);
    }
    if (hudTimecodeRef.current) {
      hudTimecodeRef.current.textContent = `00:${formatTime(time)}:24`;
    }
  };

  // Safe Play action that handles browser Autoplay and Abort policies properly
  const safePlay = useCallback(() => {
    if (!videoRef.current) return;
    const vid = videoRef.current;
    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          // AbortError happens when pause() is called before play() resolves — safe to ignore!
          if (err.name === 'AbortError') return;
          // NotAllowedError happens when browser prevents unmuted autoplay without prior interaction
          if (err.name === 'NotAllowedError') {
            vid.muted = true;
            setIsMuted(true);
            vid.play().then(() => setIsPlaying(true)).catch(() => {});
          }
        });
    }
  }, []);

  // Safe Pause action that does NOT alter volume or mute state
  const safePause = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.pause();
  }, []);

  // Central toggle for play / pause
  const togglePlay = useCallback(() => {
    if (!isRealVideo) {
      setIsPlaying((prev) => !prev);
      return;
    }
    const video = videoRef.current;
    if (!video) return;

    isUserActionRef.current = true;
    if (video.paused) {
      safePlay();
    } else {
      safePause();
    }
  }, [isRealVideo, safePlay, safePause]);

  // Auto-recovery pause handler: automatically resumes if pause was caused by browser buffer hitch
  const handlePause = useCallback(() => {
    if (isUserActionRef.current) {
      setIsPlaying(false);
      isUserActionRef.current = false;
    } else {
      // Unintentional pause by browser (buffer hiccup, audio stall)
      if (videoRef.current && !videoRef.current.ended) {
        videoRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      } else {
        setIsPlaying(false);
      }
    }
  }, []);

  // Central toggle for mute / unmute
  const toggleMute = useCallback(() => {
    if (isRealVideo && videoRef.current) {
      const target = !videoRef.current.muted;
      videoRef.current.muted = target;
      setIsMuted(target);
    } else {
      setIsMuted((prev) => !prev);
    }
  }, [isRealVideo]);

  // Debounced buffering handler: only shows spinner if video is truly stalled for >600ms
  const handleWaiting = useCallback(() => {
    if (bufferingTimerRef.current) clearTimeout(bufferingTimerRef.current);
    bufferingTimerRef.current = setTimeout(() => {
      if (videoRef.current && videoRef.current.readyState < 3 && !videoRef.current.paused) {
        setIsBuffering(true);
      }
    }, 600);
  }, []);

  const handleClearBuffering = useCallback(() => {
    if (bufferingTimerRef.current) {
      clearTimeout(bufferingTimerRef.current);
      bufferingTimerRef.current = null;
    }
    setIsBuffering(false);
  }, []);

  // Quality switch handler: seamlessly switches stream and restores playback position
  const handleQualityChange = (quality) => {
    setCurrentQuality(quality);
    setShowQualityMenu(false);
    setHasVideoError(false);

    if (!videoRef.current || !project?.videoUrl) return;

    const vid = videoRef.current;
    const prevTime = vid.currentTime || 0;
    const wasPlaying = !vid.paused;

    let targetSrc = project.videoUrl;
    if (quality === '720p') {
      targetSrc = project.videoUrl.replace('.mp4', '-720p.mp4');
    }

    isUserActionRef.current = true;
    setActiveVideoSrc(targetSrc);

    const onReady = () => {
      vid.removeEventListener('loadedmetadata', onReady);
      vid.removeEventListener('canplay', onReady);
      try {
        if (prevTime > 0 && (!vid.duration || prevTime < vid.duration)) {
          vid.currentTime = prevTime;
        }
      } catch (e) {}
      if (wasPlaying) {
        vid.play().catch(() => {});
      }
    };

    vid.addEventListener('loadedmetadata', onReady, { once: true });
    vid.addEventListener('canplay', onReady, { once: true });

    vid.src = targetSrc;
    vid.load();
  };

  // Close quality menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (qualityMenuRef.current && !qualityMenuRef.current.contains(e.target)) {
        setShowQualityMenu(false);
      }
    };
    if (showQualityMenu) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showQualityMenu]);

  // Reset and initialize when modal opens or active project changes
  useEffect(() => {
    if (isOpen && project) {
      handleClearBuffering();
      setHasVideoError(false);
      setPlaybackSpeed(1);
      setIsFullscreen(false);
      setShowQualityMenu(false);

      const isMobile =
        typeof window !== 'undefined' &&
        (window.innerWidth <= 768 ||
          /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent));

      // On mobile devices/narrow screens, default to 720p for instant, bufferless, zero-lag playback!
      const initialQuality = isMobile ? '720p' : '1080p';
      setCurrentQuality(initialQuality);

      let initialSrc = project.videoUrl || '';
      if (initialQuality === '720p' && project.videoUrl && project.videoUrl.endsWith('.mp4')) {
        initialSrc = project.videoUrl.replace('.mp4', '-720p.mp4');
      }
      setActiveVideoSrc(initialSrc);

      if (isRealVideo && videoRef.current) {
        const vid = videoRef.current;
        vid.currentTime = 0;
        vid.playbackRate = 1;
        // On mobile, start muted so browser allows instant autoplay without stopping/blocking
        if (isMobile) {
          vid.muted = true;
          setIsMuted(true);
        } else {
          vid.muted = false;
          setIsMuted(false);
        }
        safePlay();
      } else if (!isYouTube) {
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(false);
      handleClearBuffering();
      setShowQualityMenu(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isOpen, project, isRealVideo, isYouTube, safePlay, handleClearBuffering]);

  // Handle video loaded metadata
  const handleLoadedMetadata = () => {
    if (videoRef.current && !isNaN(videoRef.current.duration) && isFinite(videoRef.current.duration)) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  // Handle video time update with direct DOM performance (no lagging or frame drops)
  const handleTimeUpdate = () => {
    const vid = videoRef.current;
    if (!vid) return;
    const t = vid.currentTime;
    updateScrubberDirect(t, vid.duration || duration);
    handleClearBuffering();
  };

  // Simulated video playback timer when no real video file is supplied (fallback only)
  useEffect(() => {
    if (isRealVideo || isYouTube) return;
    let interval;
    if (isPlaying) {
      const tick = 100 / playbackSpeed;
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            return 0; // Loop seamlessly
          }
          return Math.min(duration, +(prev + 0.1).toFixed(1));
        });
      }, tick);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration, playbackSpeed, isRealVideo, isYouTube]);

  // Fullscreen state listener
  useEffect(() => {
    const handleFsChange = () => {
      const isFs = Boolean(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );
      setIsFullscreen(isFs);
    };

    document.addEventListener('fullscreenchange', handleFsChange);
    document.addEventListener('webkitfullscreenchange', handleFsChange);
    document.addEventListener('mozfullscreenchange', handleFsChange);
    document.addEventListener('MSFullscreenChange', handleFsChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange);
      document.removeEventListener('mozfullscreenchange', handleFsChange);
      document.removeEventListener('MSFullscreenChange', handleFsChange);
    };
  }, []);

  // Keyboard shortcuts: Space (play/pause), F (fullscreen), M (mute), Escape (close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        if (isFullscreen) {
          exitFullscreen();
        } else {
          onClose();
        }
      } else if (!isYouTube) {
        if (e.code === 'Space') {
          e.preventDefault();
          togglePlay();
        } else if (e.key === 'f' || e.key === 'F') {
          e.preventDefault();
          toggleFullscreen();
        } else if (e.key === 'm' || e.key === 'M') {
          e.preventDefault();
          toggleMute();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isFullscreen, onClose, isYouTube, togglePlay, toggleMute]);

  if (!isOpen || !project) return null;

  // Fullscreen toggle logic
  const toggleFullscreen = () => {
    const elem = playerContainerRef.current;
    if (!elem) return;

    const isCurrentlyFs = Boolean(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );

    if (!isCurrentlyFs) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(() => setIsFullscreen(true));
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else {
        setIsFullscreen(true);
      }
    } else {
      exitFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsFullscreen(false);
  };

  // Interactive scrubber click
  const handleScrubberClick = (e) => {
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const target = +(ratio * duration).toFixed(1);
    setCurrentTime(target);
    lastStateSyncTimeRef.current = target;
    updateScrubberDirect(target, duration);
    if (isRealVideo && videoRef.current) {
      videoRef.current.currentTime = target;
    }
  };

  // Cycle playback speed
  const handleSpeedCycle = () => {
    const speeds = [1, 1.25, 1.5, 2];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    const newSpeed = speeds[nextIdx];
    setPlaybackSpeed(newSpeed);
    if (isRealVideo && videoRef.current) {
      videoRef.current.playbackRate = newSpeed;
    }
  };

  // Download active video stream (1080p / 720p)
  const handleDownload = (e) => {
    if (e) e.stopPropagation();
    const downloadUrl = activeVideoSrc || project.videoUrl;
    if (!downloadUrl) return;
    const cleanTitle = (project.title || 'video')
      .replace(/[^\w\s-]/gi, '')
      .trim()
      .replace(/\s+/g, '_');
    const filename = `${cleanTitle}_${currentQuality || '1080p'}.mp4`;
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const badgeText =
    project.badge ||
    (project.category === 'edited'
      ? 'Cinematic Edit'
      : project.category === 'reel'
      ? 'Viral Reel'
      : project.category === 'album'
      ? 'Music Video Album'
      : 'Brand Campaign');

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`} id="video-modal">
      <div className="modal-backdrop" onClick={onClose}></div>

      {/* Dynamic Ambient Glow Behind Modal */}
      <div className={`modal-ambient-glow glow-${project.color || 'cyan'}`}></div>

      <div
        ref={playerContainerRef}
        className={`modal-content modal-content-cinema ${
          project.category === 'reel' || project.category === 'edited'
            ? 'modal-format-reel'
            : 'modal-format-widescreen'
        } ${isFullscreen ? 'is-fullscreen' : ''} ${
          isYouTube ? 'modal-has-youtube' : ''
        }`}
      >
        {/* Floating Close Button */}
        <button
          className="modal-close-luxury"
          onClick={isFullscreen ? exitFullscreen : onClose}
          aria-label="Close modal"
          title="Close (ESC)"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="video-container-cinema">
          <div className="simulated-player-cinema">
            {/* Visual Canvas Background with Project Image or Real Video */}
            <div className="cinema-canvas">
              {isYouTube ? (
                <div className="cinema-iframe-wrapper">
                  <iframe
                    src={ytEmbedUrl}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="cinema-iframe"
                  ></iframe>
                </div>
              ) : isRealVideo && !hasVideoError ? (
                <video
                  ref={videoRef}
                  src={activeVideoSrc || project.videoUrl}
                  className="cinema-real-video"
                  playsInline
                  webkit-playsinline="true"
                  x5-playsinline="true"
                  muted={isMuted}
                  loop
                  preload="auto"
                  onLoadedMetadata={handleLoadedMetadata}
                  onTimeUpdate={handleTimeUpdate}
                  onPlay={() => {
                    setIsPlaying(true);
                    handleClearBuffering();
                  }}
                  onPause={handlePause}
                  onWaiting={handleWaiting}
                  onPlaying={handleClearBuffering}
                  onCanPlay={handleClearBuffering}
                  onCanPlayThrough={handleClearBuffering}
                  onSeeked={handleClearBuffering}
                  onProgress={() => {
                    if (videoRef.current && !videoRef.current.paused) {
                      handleClearBuffering();
                    }
                  }}
                  onVolumeChange={() => {
                    if (videoRef.current) {
                      setIsMuted(videoRef.current.muted);
                    }
                  }}
                  onError={() => {
                    handleClearBuffering();
                    // If a quality stream fails, gracefully fall back to original video stream
                    if (activeVideoSrc && activeVideoSrc !== project.videoUrl) {
                      setActiveVideoSrc(project.videoUrl);
                      setCurrentQuality('1080p');
                      if (videoRef.current) {
                        videoRef.current.src = project.videoUrl;
                        videoRef.current.load();
                        videoRef.current.play().catch(() => {});
                      }
                    } else {
                      setHasVideoError(true);
                    }
                  }}
                  onEnded={() => {
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                      videoRef.current.play().catch(() => {});
                    }
                  }}
                />
              ) : (
                <>
                  <img
                    src={project.img}
                    alt={project.title}
                    className={`cinema-source-image ${isPlaying ? 'is-playing' : ''}`}
                    style={project.style || {}}
                  />
                  <div className="cinema-grain-overlay"></div>
                  <div className="cinema-lens-flare"></div>
                  <div className="cinema-vignette"></div>
                  <div
                    className="cinema-waveform-glow"
                    style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
                  ></div>
                  {hasVideoError && (
                    <div style={{
                      position: 'absolute',
                      bottom: '80px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 20,
                      background: 'rgba(15, 23, 42, 0.92)',
                      border: '1px solid rgba(6, 182, 212, 0.4)',
                      borderRadius: '12px',
                      padding: '12px 18px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
                      backdropFilter: 'blur(10px)',
                      maxWidth: '90%',
                      width: 'max-content'
                    }}>
                      <i className="fa-solid fa-file-video" style={{ color: '#06b6d4', fontSize: '1.2rem' }}></i>
                      <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
                        <span>High-bitrate ProRes/HEVC .MOV stream.</span>
                      </div>
                      <a
                        href={project.videoUrl}
                        download
                        style={{
                          background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                          color: '#fff',
                          padding: '6px 14px',
                          borderRadius: '8px',
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <i className="fa-solid fa-download"></i> Open / Download
                      </a>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Camera Viewfinder Framing Overlays (for real video or simulated) */}
            {!isYouTube && (
              <div className="cinema-hud-overlay">
                <span className="hud-corner top-left">⌜</span>
                <span className="hud-corner top-right">⌝</span>
                <span className="hud-corner bottom-left">⌞</span>
                <span className="hud-corner bottom-right">⌟</span>

                {/* Live Record Timecode HUD */}
                <div className="hud-rec-indicator">
                  <span className={`hud-rec-dot ${isPlaying ? 'blinking' : ''}`}></span>
                  <span className="hud-rec-text">REC</span>
                  <span ref={hudTimecodeRef} className="hud-timecode">00:{formatTime(currentTime)}:24</span>
                </div>
              </div>
            )}

            {/* Interactive Player Overlay UI */}
            <div
              className={`player-overlay-ui-cinema ${
                !isPlaying && !isYouTube ? 'is-paused-overlay' : ''
              } ${isYouTube ? 'overlay-youtube-mode' : ''}`}
            >
              {/* Header Bar */}
              <div className="player-header-cinema">
                <div className="header-left-meta">
                  <span className={`player-badge-cinema badge-${project.color || 'cyan'}`}>
                    <i className={`fa-solid ${project.icon || 'fa-film'}`}></i> {badgeText}
                  </span>
                  <h3 className="player-title-cinema">{project.title}</h3>
                  <span className="player-res-tag">
                    {currentQuality === '720p'
                      ? '720p HD • Fast'
                      : currentQuality === '1080p'
                      ? '1080p FHD • 60 FPS'
                      : currentQuality === '4K'
                      ? '4K UHD • 60 FPS'
                      : project.quality || '4K UHD • 60 FPS'}
                  </span>
                </div>

                <div className="header-right-meta">
                  <a
                    href={`https://wa.me/919360870164?text=${encodeURIComponent(
                      project.category === 'reels'
                        ? `Hi Bikash! I watched your viral reel "${project.title}" on your portfolio. I want to hire you to edit a similar viral short reel for ₹600.`
                        : `Hi Bikash! I watched the "${project.title}" showreel on your portfolio. I want to hire you for a similar editing project.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="player-inquire-btn"
                  >
                    <i className="fa-brands fa-whatsapp"></i> Inquire This Edit
                  </a>
                </div>
              </div>

              {/* Center Play / Pause Trigger */}
              {!isYouTube && (
                <div
                  className={`player-center-cinema ${isPlaying ? 'is-playing-area' : 'is-paused-area'}`}
                  onClick={togglePlay}
                  role="button"
                  tabIndex={0}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  title={isPlaying ? 'Click to Pause' : 'Click to Play'}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      togglePlay();
                    }
                  }}
                >
                  {isBuffering && (
                    <div className="buffering-spinner-subtle" aria-label="Loading stream"></div>
                  )}
                  {!isPlaying && !isBuffering && (
                    <div
                      className="center-play-button-luxury"
                      role="button"
                      tabIndex={0}
                      aria-label="Play video"
                    >
                      <div className="pulse-outer-ring"></div>
                      <div className="center-play-icon">
                        <i className="fa-solid fa-play"></i>
                      </div>
                    </div>
                  )}
                  {isPlaying && !isBuffering && (
                    <div
                      className="center-stop-button-luxury"
                      role="button"
                      tabIndex={0}
                      aria-label="Stop video"
                    >
                      <div className="center-stop-icon">
                        <i className="fa-solid fa-pause"></i>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Footer Controls Area */}
              {!isYouTube && (
                <div className="player-footer-cinema">
                  {/* Interactive Scrubber Bar */}
                  <div
                    ref={progressBarRef}
                    className="progress-scrubber-track"
                    onClick={handleScrubberClick}
                    title="Click to seek"
                  >
                    <div
                      ref={progressFillRef}
                      className="progress-scrubber-fill"
                      style={{ width: `${progressPercent}%` }}
                    >
                      <span className="scrubber-head-thumb"></span>
                    </div>
                  </div>

                  {/* Bottom Control Bar */}
                  <div className="player-controls-row">
                    {/* Left Controls */}
                    <div className="controls-left-group">
                      {/* Play / Pause Toggle */}
                      <button
                        type="button"
                        className="cinema-control-btn play-pause-btn"
                        onClick={togglePlay}
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
                      >
                        <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                      </button>

                      {/* Mute / Unmute Toggle */}
                      <button
                        type="button"
                        className="cinema-control-btn volume-btn"
                        onClick={toggleMute}
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                        title={isMuted ? 'Unmute (M)' : 'Mute (M)'}
                      >
                        <i
                          className={`fa-solid ${
                            isMuted ? 'fa-volume-xmark text-red' : 'fa-volume-high'
                          }`}
                        ></i>
                      </button>

                      {/* Audio Equalizer Waveform indicator */}
                      <div
                        className="player-audio-bars"
                        title={isMuted ? 'Muted (Click to Unmute)' : 'Audio Active (Click to Mute)'}
                        onClick={toggleMute}
                        style={{ cursor: 'pointer' }}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            toggleMute();
                          }
                        }}
                      >
                        <span
                          className={`audio-bar bar-1 ${isPlaying && !isMuted ? 'active' : ''}`}
                        ></span>
                        <span
                          className={`audio-bar bar-2 ${isPlaying && !isMuted ? 'active' : ''}`}
                        ></span>
                        <span
                          className={`audio-bar bar-3 ${isPlaying && !isMuted ? 'active' : ''}`}
                        ></span>
                      </div>

                      {/* Time Counter */}
                      <span className="player-time-display">
                        <span ref={currentTimeDisplayRef} className="current-time">{formatTime(currentTime)}</span>
                        <span className="time-separator">/</span>
                        <span className="total-time">{formatTime(duration)}</span>
                      </span>
                    </div>

                    {/* Right Controls */}
                    <div className="controls-right-group">
                      {/* Quality Selector */}
                      {isRealVideo && (
                        <div className="quality-selector-wrapper" ref={qualityMenuRef}>
                          <button
                            type="button"
                            className={`cinema-control-pill quality-pill ${showQualityMenu ? 'active' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowQualityMenu((prev) => !prev);
                            }}
                            title="Select stream quality"
                            aria-label="Quality settings"
                          >
                            <i className="fa-solid fa-sliders"></i> {currentQuality}
                          </button>
                          {showQualityMenu && (
                            <div className="quality-dropdown-menu" onClick={(e) => e.stopPropagation()}>
                              <div className="quality-menu-header">STREAM QUALITY</div>
                              {[
                                { label: '4K Ultra HD', val: '4K' },
                                { label: '1080p Full HD', val: '1080p' },
                                { label: '720p HD (Fast)', val: '720p' },
                                { label: 'Auto (Optimal)', val: 'Auto' },
                              ].map((opt) => (
                                <button
                                  key={opt.val}
                                  type="button"
                                  className={`quality-option-item ${currentQuality === opt.val ? 'active' : ''}`}
                                  onClick={() => handleQualityChange(opt.val)}
                                >
                                  <span>{opt.label}</span>
                                  {currentQuality === opt.val && (
                                    <i className="fa-solid fa-check text-cyan" style={{ fontSize: '0.75rem' }}></i>
                                  )}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Download Pill */}
                      {isRealVideo && (
                        <button
                          type="button"
                          className="cinema-control-pill download-pill"
                          onClick={handleDownload}
                          title={`Download ${currentQuality} MP4`}
                          aria-label="Download video"
                        >
                          <i className="fa-solid fa-download"></i> <span className="pill-download-label">Download</span>
                        </button>
                      )}

                      {/* Speed Selector */}
                      <button
                        type="button"
                        className="cinema-control-pill speed-pill"
                        onClick={handleSpeedCycle}
                        title="Cycle playback speed"
                      >
                        {playbackSpeed}x
                      </button>

                      {/* Watermark Label */}
                      <span className="cinema-watermark">
                        <i className="fa-solid fa-scissors"></i> BIKASH SUNA PRO
                      </span>

                      {/* Fullscreen Button */}
                      <button
                        type="button"
                        className="cinema-control-btn fullscreen-btn"
                        onClick={toggleFullscreen}
                        aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                        title={isFullscreen ? 'Exit Fullscreen (F)' : 'Fullscreen (F)'}
                      >
                        <i
                          className={`fa-solid ${
                            isFullscreen ? 'fa-compress text-cyan' : 'fa-expand'
                          }`}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* YouTube Mode Persistent Bottom Bar */}
              {isYouTube && (
                <div className="player-footer-cinema youtube-footer-bar">
                  <div className="player-controls-row">
                    <div className="controls-left-group">
                      <a
                        href={project.externalUrl || project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cinema-control-pill yt-open-pill"
                        title="Watch full video on YouTube"
                      >
                        <i className="fa-brands fa-youtube text-red"></i> Watch on YouTube
                      </a>
                    </div>
                    <div className="controls-right-group">
                      <button
                        type="button"
                        className="cinema-control-btn fullscreen-btn"
                        onClick={toggleFullscreen}
                        aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                        title={isFullscreen ? 'Exit Fullscreen (F)' : 'Fullscreen (F)'}
                      >
                        <i
                          className={`fa-solid ${
                            isFullscreen ? 'fa-compress text-cyan' : 'fa-expand'
                          }`}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
