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

  const playerContainerRef = useRef(null);
  const progressBarRef = useRef(null);
  const videoRef = useRef(null);

  const fallbackDuration = project?.category === 'album' ? 75 : 32;
  const ytEmbedUrl = getYouTubeEmbedUrl(project?.videoUrl);
  const isYouTube = Boolean(ytEmbedUrl);
  const isRealVideo = Boolean(project?.videoUrl && !isYouTube);

  const duration = isRealVideo && videoDuration > 0 ? videoDuration : fallbackDuration;

  // Safe Play action that handles browser Autoplay and Abort policies properly
  const safePlay = useCallback(() => {
    if (!videoRef.current) return;
    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        // AbortError happens when pause() is called before play() resolves — safe to ignore!
        if (err.name === 'AbortError') return;
        // NotAllowedError happens when browser prevents unmuted autoplay without prior interaction
        if (err.name === 'NotAllowedError') {
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(() => {});
          }
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

    if (video.paused) {
      safePlay();
    } else {
      safePause();
    }
  }, [isRealVideo, safePlay, safePause]);

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

  // Reset and initialize when modal opens or active project changes
  useEffect(() => {
    if (isOpen) {
      setCurrentTime(0);
      setIsBuffering(false);
      setPlaybackSpeed(1);
      setIsFullscreen(false);

      if (isRealVideo && videoRef.current) {
        const vid = videoRef.current;
        vid.currentTime = 0;
        vid.playbackRate = 1;
        vid.muted = false;
        setIsMuted(false);
        safePlay();
      } else if (!isYouTube) {
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(false);
      setIsBuffering(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isOpen, project, isRealVideo, isYouTube, safePlay]);

  // Handle video loaded metadata
  const handleLoadedMetadata = () => {
    if (videoRef.current && !isNaN(videoRef.current.duration) && isFinite(videoRef.current.duration)) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  // Handle video time update
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
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

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const badgeText =
    project.category === 'reel'
      ? 'Short Reel'
      : project.category === 'album'
      ? 'Video Album'
      : 'Brand Collab';

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`} id="video-modal">
      <div className="modal-backdrop" onClick={onClose}></div>

      {/* Dynamic Ambient Glow Behind Modal */}
      <div className={`modal-ambient-glow glow-${project.color || 'cyan'}`}></div>

      <div
        ref={playerContainerRef}
        className={`modal-content modal-content-cinema ${
          project.category === 'reel' ? 'modal-format-reel' : 'modal-format-widescreen'
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
              ) : isRealVideo ? (
                <video
                  ref={videoRef}
                  src={project.videoUrl}
                  className="cinema-real-video"
                  playsInline
                  loop
                  preload="auto"
                  onLoadedMetadata={handleLoadedMetadata}
                  onTimeUpdate={handleTimeUpdate}
                  onPlay={() => {
                    setIsPlaying(true);
                    setIsBuffering(false);
                  }}
                  onPause={() => setIsPlaying(false)}
                  onWaiting={() => setIsBuffering(true)}
                  onPlaying={() => setIsBuffering(false)}
                  onCanPlay={() => setIsBuffering(false)}
                  onVolumeChange={() => {
                    if (videoRef.current) {
                      setIsMuted(videoRef.current.muted);
                    }
                  }}
                  onError={() => setIsBuffering(false)}
                  onEnded={() => setIsPlaying(false)}
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
                  <span className="hud-timecode">00:{formatTime(currentTime)}:24</span>
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
                  <span className="player-res-tag">{project.quality || '4K UHD • 60 FPS'}</span>
                </div>

                <div className="header-right-meta">
                  <a
                    href={`https://wa.me/919360870164?text=Hi%20Bikash!%20I%20love%20the%20"${encodeURIComponent(
                      project.title
                    )}"%20showreel.%20I%20want%20to%20hire%20you%20for%20a%20similar%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="player-inquire-btn"
                  >
                    <i className="fa-brands fa-whatsapp"></i> Inquire This Edit
                  </a>
                </div>
              </div>

              {/* Center Play/Pause / Buffering Trigger */}
              {!isYouTube && (
                <div
                  className="player-center-cinema"
                  onClick={togglePlay}
                >
                  {isBuffering && (
                    <div className="center-buffering-indicator">
                      <div className="buffering-spinner"></div>
                      <span className="buffering-label">LOADING HD STREAM...</span>
                    </div>
                  )}
                  {!isPlaying && !isBuffering && (
                    <div className="center-play-button-luxury">
                      <div className="pulse-outer-ring"></div>
                      <div className="center-play-icon">
                        <i className="fa-solid fa-play"></i>
                      </div>
                      <span className="center-play-label">PRESS SPACE TO PLAY</span>
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
                        <span className="current-time">{formatTime(currentTime)}</span>
                        <span className="time-separator">/</span>
                        <span className="total-time">{formatTime(duration)}</span>
                      </span>
                    </div>

                    {/* Right Controls */}
                    <div className="controls-right-group">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
