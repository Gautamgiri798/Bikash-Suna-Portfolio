import React, { useState, useEffect } from 'react';

export default function VideoModal({ isOpen, project, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const duration = project?.category === 'album' ? 90 : 30;

  // Reset when modal opens/changes
  useEffect(() => {
    if (isOpen) {
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [isOpen, project]);

  // Keydown ESC to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Video timeline simulation
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) return 0;
          return prev + 0.1;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  if (!isOpen || !project) return null;

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
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
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="video-container">
          <div className="simulated-player">
            <div className="player-overlay-ui">
              <div className="player-header">
                <span className="player-title">{project.title}</span>
                <span className="player-badge">{badgeText}</span>
              </div>

              <div className="player-center">
                {!isPlaying && (
                  <button
                    className="player-play-trigger"
                    onClick={() => setIsPlaying(true)}
                    aria-label="Play video"
                  >
                    <i className="fa-solid fa-play"></i>
                  </button>
                )}
              </div>

              <div className="player-footer">
                <div className="progress-bar-container">
                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                  </div>
                </div>

                <div className="player-controls">
                  <div className="left-controls">
                    <button
                      className="control-btn"
                      onClick={() => setIsPlaying(!isPlaying)}
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                    </button>
                    <button className="control-btn" aria-label="Volume">
                      <i className="fa-solid fa-volume-high"></i>
                    </button>
                    <span className="player-time">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>
                  <div className="right-controls">
                    <span className="editor-watermark">Edited by Bikash Suna</span>
                    <button className="control-btn" aria-label="Maximize">
                      <i className="fa-solid fa-maximize"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="player-video-canvas">
              <div
                className="glow-wave"
                style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
              ></div>
              <div
                className="glow-wave-two"
                style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
