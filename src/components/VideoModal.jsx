import React, { useState, useEffect, useRef } from 'react';

export default function VideoModal({ isOpen, project, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const playerContainerRef = useRef(null);
  const progressBarRef = useRef(null);

  const duration = project?.category === 'album' ? 75 : 32;

  // Reset when modal opens or project changes
  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true); // Auto-play simulation for smooth preview
      setCurrentTime(0);
      setIsMuted(false);
      setPlaybackSpeed(1);
      setIsFullscreen(false);
    } else {
      setIsPlaying(false);
    }
  }, [isOpen, project]);

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
      } else if (e.code === 'Space') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        setIsMuted((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isFullscreen, onClose]);

  // Simulated video playback timer with speed adjustment
  useEffect(() => {
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
  }, [isPlaying, duration, playbackSpeed]);

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
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
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
    setCurrentTime(+(ratio * duration).toFixed(1));
  };

  // Cycle playback speed
  const handleSpeedCycle = () => {
    const speeds = [1, 1.25, 1.5, 2];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    setPlaybackSpeed(speeds[nextIdx]);
  };

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const progressPercent = (currentTime / duration) * 100;

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
        className={`modal-content modal-content-cinema ${isFullscreen ? 'is-fullscreen' : ''}`}
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
            {/* Visual Canvas Background with Project Image & Ambient Light */}
            <div className="cinema-canvas">
              <img
                src={project.img}
                alt={project.title}
                className={`cinema-source-image ${isPlaying ? 'is-playing' : ''}`}
                style={project.style || {}}
              />
              <div className="cinema-grain-overlay"></div>
              <div className="cinema-lens-flare"></div>
              <div className="cinema-vignette"></div>

              {/* Anamorphic Waveform Bleed */}
              <div
                className="cinema-waveform-glow"
                style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
              ></div>
            </div>

            {/* Camera Viewfinder Framing Overlays */}
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

            {/* Interactive Player Overlay UI */}
            <div className={`player-overlay-ui-cinema ${!isPlaying ? 'is-paused-overlay' : ''}`}>
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

              {/* Center Play/Pause Trigger */}
              <div
                className="player-center-cinema"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {!isPlaying && (
                  <div className="center-play-button-luxury">
                    <div className="pulse-outer-ring"></div>
                    <div className="center-play-icon">
                      <i className="fa-solid fa-play"></i>
                    </div>
                    <span className="center-play-label">PRESS SPACE TO PLAY</span>
                  </div>
                )}
              </div>

              {/* Footer Controls Area */}
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
                      className="cinema-control-btn play-pause-btn"
                      onClick={() => setIsPlaying(!isPlaying)}
                      aria-label={isPlaying ? 'Pause video' : 'Play video'}
                      title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
                    >
                      <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                    </button>

                    {/* Mute / Unmute Toggle */}
                    <button
                      className="cinema-control-btn volume-btn"
                      onClick={() => setIsMuted(!isMuted)}
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                      title={isMuted ? 'Unmute (M)' : 'Mute (M)'}
                    >
                      <i className={`fa-solid ${isMuted ? 'fa-volume-xmark text-red' : 'fa-volume-high'}`}></i>
                    </button>

                    {/* Audio Equalizer Waveform indicator */}
                    <div className="player-audio-bars" title={isMuted ? 'Muted' : 'Audio Active'}>
                      <span className={`audio-bar bar-1 ${isPlaying && !isMuted ? 'active' : ''}`}></span>
                      <span className={`audio-bar bar-2 ${isPlaying && !isMuted ? 'active' : ''}`}></span>
                      <span className={`audio-bar bar-3 ${isPlaying && !isMuted ? 'active' : ''}`}></span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

