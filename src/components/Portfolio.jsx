import React, { useState } from 'react';
import VideoModal from './VideoModal';

const projects = [
  {
    id: 'reel-1',
    category: 'reel',
    title: 'Dynamic Motion & Beat-Sync Reel',
    desc: "High-energy visual cuts sync'd with electronic soundbeats, speed ramping, and stylized kinetic typography overlays.",
    img: 'assets/reel.jpg',
    tags: ['Beat Sync', 'Speed Ramping', 'Kinetic SFX'],
    badge: 'Short Reel',
    color: 'cyan',
    icon: 'fa-bolt',
    duration: '0:32',
    quality: '4K • 60 FPS',
    metric: '🔥 68K+ Views',
  },
  {
    id: 'album-1',
    category: 'album',
    title: 'The Golden Union Wedding Cinema',
    desc: 'Emotionally charged, slow-paced wedding narrative showcasing warm grading, soft focus edits, and immersive ambient audio.',
    img: 'assets/album.jpg',
    tags: ['Storytelling', 'Color Grading', 'Sound Mix'],
    badge: 'Video Album',
    color: 'purple',
    icon: 'fa-film',
    duration: '3:45',
    quality: '4K Cinema • 24 FPS',
    metric: '💍 Cinematic Love',
  },
  {
    id: 'reel-2',
    category: 'reel',
    title: 'Neon Cyberpunk Gaming Highlights',
    desc: 'Intense high-FPS montage featuring rhythmic speed ramps, chromatic glitch transitions, and punchy visual impacts.',
    img: 'assets/hero.jpg',
    style: { objectPosition: 'center bottom' },
    tags: ['Speed Ramps', 'VFX', 'Glitch FX'],
    badge: 'Short Reel',
    color: 'blue',
    icon: 'fa-gamepad',
    duration: '0:45',
    quality: '4K • 60 FPS',
    metric: '⚡ 42K+ Views',
  },
  {
    id: 'collab-1',
    category: 'collab',
    title: 'Creator Tech Unbox & Sponsored Reel',
    desc: 'High-converting sponsored showcase with retention-engineered hook, macro product b-roll, and story link stickers.',
    img: 'assets/reel.jpg',
    style: { filter: 'hue-rotate(50deg) saturate(1.2)' },
    tags: ['Paid Promotion', 'Brand Collab', 'Hook Retention'],
    badge: 'Brand Collab',
    color: 'emerald',
    icon: 'fa-handshake',
    duration: '0:28',
    quality: '4K UHD',
    metric: '🚀 50K+ Reach',
    isCollab: true,
  },
  {
    id: 'reel-3',
    category: 'reel',
    title: 'Urban Streetwear & Fast-Cut Reel',
    desc: 'Whip-pan camera wipes, dynamic frame matching, dynamic typography tracking, and bass-drop rhythmic synchronization.',
    img: 'assets/reel.jpg',
    style: { filter: 'contrast(1.15) brightness(1.05)' },
    tags: ['Whip Transitions', 'Typography', 'Bass Drops'],
    badge: 'Short Reel',
    color: 'gold',
    icon: 'fa-fire',
    duration: '0:38',
    quality: '4K • 60 FPS',
    metric: '🔥 35K+ Views',
  },
  {
    id: 'collab-2',
    category: 'collab',
    title: 'SaaS App Teaser & Feature Walkthrough',
    desc: 'High-energy screencast animation, punchy UI callouts, and kinetic sound design engineered for sponsor app conversions.',
    img: 'assets/hero.jpg',
    style: { objectPosition: 'center top' },
    tags: ['Sponsor Promo', 'UI Motion', 'Call to Action'],
    badge: 'Brand Collab',
    color: 'cyan',
    icon: 'fa-laptop-code',
    duration: '0:34',
    quality: '4K UHD',
    metric: '💼 4.8x ROI',
    isCollab: true,
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

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
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setSelectedProject(project);
              }}
            >
              {/* Thumbnail Container with Cinema Monitor HUD */}
              <div className="portfolio-img-wrapper">
                <img
                  src={project.img}
                  alt={project.title}
                  className="portfolio-img"
                  style={project.style || {}}
                  loading="lazy"
                />

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
                  <span className="thumb-quality-badge">
                    {project.quality}
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

                  {/* Dancing Equalizer Waveform */}
                  <div className="thumb-equalizer" title="Beat Synced">
                    <span className="eq-bar bar-1"></span>
                    <span className="eq-bar bar-2"></span>
                    <span className="eq-bar bar-3"></span>
                    <span className="eq-bar bar-4"></span>
                  </div>
                </div>

                {/* Bottom Overlay Bar */}
                <div className="thumb-bottom-bar">
                  <span className="thumb-metric-pill">
                    {project.metric}
                  </span>
                  <span className="thumb-duration-pill">
                    <i className="fa-regular fa-clock"></i> {project.duration}
                  </span>
                </div>
              </div>

              {/* Card Info Content */}
              <div className="portfolio-info">
                <div className="card-title-row">
                  <h3>{project.title}</h3>
                  <span className="card-open-arrow">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
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
                  <span className="action-link-text">
                    <i className="fa-solid fa-circle-play"></i> Watch Project Preview
                  </span>
                  <span className="action-hover-hint">Tap to play</span>
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

