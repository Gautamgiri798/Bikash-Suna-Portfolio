import React, { useState } from 'react';
import VideoModal from './VideoModal';
import { projects } from '../data/projects';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [videoDurations, setVideoDurations] = useState({});

  const handleLoadedMetadata = (id, e) => {
    const d = e.currentTarget.duration;
    if (d && !isNaN(d) && isFinite(d)) {
      const mins = Math.floor(d / 60);
      const secs = Math.floor(d % 60).toString().padStart(2, '0');
      setVideoDurations((prev) => ({ ...prev, [id]: `${mins}:${secs}` }));
    }
  };

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((item) => item.category === activeFilter);

  const counts = {
    all: projects.length,
    reel: projects.filter((p) => p.category === 'reel').length,
    album: projects.filter((p) => p.category === 'album').length,
    collab: projects.filter((p) => p.category === 'collab').length,
  };

  return (
    <section className="portfolio-section section-padding" id="portfolio">
      <div className="container">
        {/* Section Header */}
        <div className="section-header scroll-reveal">
          <div className="badge-wrapper-pill">
            <span className="section-subtitle-pill">
              <i className="fa-solid fa-film"></i> CURATED EDITING SHOWCASE
            </span>
          </div>
          <h2 className="section-title">Featured Editing Showreel</h2>
          <div className="title-underline"></div>
          <p className="section-intro">
            Cinematic storytelling, viral hook architecture, dynamic beat synchronizations, and brand-sponsored deliverables designed to captivate audiences.
          </p>
        </div>

        {/* Filter Dock Navigation */}
        <div className="portfolio-dock-wrapper scroll-reveal">
          <div className="portfolio-tabs-dock">
            <button
              className={`portfolio-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              <i className="fa-solid fa-layer-group"></i>
              <span>All Projects</span>
              <span className="tab-count-pill">{counts.all}</span>
            </button>
            <button
              className={`portfolio-tab-btn ${activeFilter === 'reel' ? 'active' : ''}`}
              onClick={() => setActiveFilter('reel')}
            >
              <i className="fa-solid fa-bolt"></i>
              <span>Short Reels</span>
              <span className="tab-count-pill">{counts.reel}</span>
            </button>
            <button
              className={`portfolio-tab-btn ${activeFilter === 'album' ? 'active' : ''}`}
              onClick={() => setActiveFilter('album')}
            >
              <i className="fa-solid fa-film"></i>
              <span>Long Albums</span>
              <span className="tab-count-pill">{counts.album}</span>
            </button>
            <button
              className={`portfolio-tab-btn ${activeFilter === 'collab' ? 'active' : ''}`}
              onClick={() => setActiveFilter('collab')}
            >
              <i className="fa-solid fa-handshake"></i>
              <span>Brand Collabs</span>
              <span className="tab-count-pill">{counts.collab}</span>
            </button>
          </div>
        </div>

        {/* Projects Showcase Grid */}
        <div className="portfolio-grid" id="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`portfolio-card-premium card-glow-${project.color} stagger-${(index % 4) + 1}`}
            >
              {/* Thumbnail Container with Cinema Monitor HUD */}
              <div
                className="portfolio-img-wrapper clickable-thumb"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                aria-label={`Play preview for ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                {/* Always show the high-res thumbnail image */}
                {project.img && (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="portfolio-img portfolio-thumb-poster"
                    style={project.style || {}}
                    loading="lazy"
                  />
                )}

                {/* Smooth Video Hover Preview (plays and fades in on card hover) */}
                {project.videoUrl && !project.videoUrl.includes('youtube') && !project.videoUrl.includes('youtu.be') && (
                  <video
                    src={project.videoUrl}
                    className="portfolio-img portfolio-video-preview"
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    onLoadedMetadata={(e) => handleLoadedMetadata(project.id, e)}
                    onMouseEnter={(e) => {
                      e.currentTarget.play().catch(() => {});
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                )}

                {/* HUD Corner Framing Brackets */}
                <span className="cinema-hud-bracket top-left">⌜</span>
                <span className="cinema-hud-bracket top-right">⌝</span>
                <span className="cinema-hud-bracket bottom-left">⌞</span>
                <span className="cinema-hud-bracket bottom-right">⌟</span>

                {/* Top Overlay Badges */}
                <div className="thumb-top-bar">
                  <span className={`item-tag-badge tag-${project.color}`}>
                    <i className={`fa-solid ${project.icon}`}></i> {project.badge}
                  </span>
                </div>

                {/* Hover Play Backdrop */}
                <div className="portfolio-overlay">
                  <div className="play-btn-pulse-wrapper">
                    <div className="play-btn-ripple"></div>
                    <div className="play-btn">
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Bar */}
                <div className="thumb-bottom-bar">
                  <div className="thumb-duration-luxury">
                    <div className="duration-eq-indicator" aria-hidden="true">
                      <span className="eq-line line-1"></span>
                      <span className="eq-line line-2"></span>
                      <span className="eq-line line-3"></span>
                    </div>
                    <span className="duration-time">{videoDurations[project.id] || project.duration}</span>
                  </div>
                </div>
              </div>

              {/* Card Info Content */}
              <div className="portfolio-info">
                <div className="card-title-row">
                  <h3>{project.title}</h3>
                  {project.externalUrl || (project.videoUrl && project.videoUrl.startsWith('http')) ? (
                    <a
                      href={project.externalUrl || project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`card-open-arrow clickable ${
                        (project.externalUrl || project.videoUrl).includes('youtu') ? 'yt-icon-link' : ''
                      }`}
                      onClick={(e) => e.stopPropagation()}
                      title={
                        (project.externalUrl || project.videoUrl).includes('instagram')
                          ? 'Watch Reel on Instagram'
                          : 'Watch on YouTube'
                      }
                      aria-label={
                        (project.externalUrl || project.videoUrl).includes('instagram')
                          ? 'Watch Reel on Instagram'
                          : 'Watch on YouTube'
                      }
                    >
                      <i
                        className={
                          (project.externalUrl || project.videoUrl).includes('instagram')
                            ? 'fa-brands fa-instagram'
                            : (project.externalUrl || project.videoUrl).includes('youtu')
                            ? 'fa-brands fa-youtube text-red'
                            : 'fa-solid fa-arrow-up-right-from-square'
                        }
                      ></i>
                    </a>
                  ) : (
                    <span className="card-open-arrow">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </span>
                  )}
                </div>
                <p>{project.desc}</p>

                {/* Skills / Tools Pills */}
                <div className="tag-row">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag-pill">{tag}</span>
                  ))}
                </div>

                {/* Watch Showreel Footer Action */}
                <div className="card-action-footer">
                  <button
                    type="button"
                    className="action-link-btn"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Watch ${project.title} preview`}
                  >
                    <i className="fa-solid fa-circle-play"></i> Watch Project Preview
                  </button>
                  {project.externalUrl && project.externalUrl.includes('instagram') ? (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-footer-instagram-btn"
                      onClick={(e) => e.stopPropagation()}
                      title="Open Reel on Instagram"
                    >
                      <i className="fa-brands fa-instagram"></i> Instagram
                    </a>
                  ) : (project.externalUrl && (project.externalUrl.includes('youtube') || project.externalUrl.includes('youtu.be'))) || (project.videoUrl && (project.videoUrl.includes('youtube') || project.videoUrl.includes('youtu.be'))) ? (
                    <a
                      href={project.externalUrl || project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-footer-youtube-btn"
                      onClick={(e) => e.stopPropagation()}
                      title="Watch on YouTube"
                    >
                      <i className="fa-brands fa-youtube"></i> YouTube
                    </a>
                  ) : project.externalUrl ? (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-footer-external-btn"
                      onClick={(e) => e.stopPropagation()}
                      title="Open Link"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i> View Link
                    </a>
                  ) : (
                    <span className="action-hover-hint">Tap to play</span>
                  )}
                </div>
              </div>

              {/* Bottom Animated Colored Accent Line */}
              <div className={`card-bottom-accent-line line-${project.color}`}></div>
            </div>
          ))}
        </div>

        {/* Quality Guarantee Strip */}
        <div className="portfolio-trust-strip scroll-reveal">
          <div className="trust-item">
            <i className="fa-solid fa-wand-magic-sparkles text-cyan"></i>
            <span>4K Ultra-HD Mastered</span>
          </div>
          <div className="trust-item">
            <i className="fa-solid fa-bolt text-purple"></i>
            <span>24–48h Rapid Delivery</span>
          </div>
          <div className="trust-item">
            <i className="fa-solid fa-music text-emerald"></i>
            <span>100% Commercial Audio</span>
          </div>
          <div className="trust-item">
            <i className="fa-solid fa-mobile-screen text-gold"></i>
            <span>9:16 & 16:9 Multi-Format</span>
          </div>
        </div>
      </div>

      {/* Video Simulation Modal */}
      <VideoModal
        isOpen={Boolean(selectedProject)}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

