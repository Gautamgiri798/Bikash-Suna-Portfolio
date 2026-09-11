import React from 'react';

export default function DualPillars() {
  return (
    <section className="pillars-section section-padding" id="what-i-do">
      {/* Background ambient lighting */}
      <div className="pillars-ambient-glow glow-purple-left"></div>
      <div className="pillars-ambient-glow glow-cyan-right"></div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header scroll-reveal">
          <div className="section-subtitle-pill pill-purple-gradient">
            <i className="fa-solid fa-layer-group text-purple"></i>
            <span>DUAL SUPERPOWERS</span>
          </div>
          <h2 className="section-title">Two Passions. One Powerful Creator.</h2>
          <div className="title-underline-laser"></div>
          <p className="section-description-centered">
            Whether you need a high-end cinematic video editor to transform your raw footage or an
            authentic content creator to promote your brand to an engaged audience — I bring both
            worlds together.
          </p>

          {/* Synergy Advantage Badge */}
          <div className="synergy-advantage-pill">
            <span className="synergy-pulse-dot"></span>
            <span className="synergy-text">
              <strong>The 2-in-1 Advantage:</strong> Scripted, 4K Mastered & Published by the Same Creator
            </span>
          </div>
        </div>

        {/* 2-Column Luxury Pillars Grid */}
        <div className="pillars-grid">
          {/* ========================================================= */}
          {/* PILLAR 1: THE VIDEO EDITOR                                */}
          {/* ========================================================= */}
          <div className="pillar-card-premium editor-pillar-premium stagger-1 scroll-reveal">
            {/* Top Luminous Laser Accent Bar */}
            <div className="card-top-laser-bar laser-purple"></div>

            {/* Header: Icon, Tags & Title */}
            <div className="pillar-card-header">
              <div className="pillar-header-top">
                <span className="pillar-badge-luxury badge-purple">
                  <i className="fa-solid fa-film"></i> POST-PRODUCTION
                </span>
                <span className="pillar-metric-chip chip-purple">
                  <i className="fa-solid fa-scissors"></i> 120+ Edits Delivered
                </span>
              </div>

              <div className="pillar-title-row">
                <div className="pillar-icon-orb orb-purple">
                  <i className="fa-solid fa-clapperboard"></i>
                  <span className="orb-ambient-halo"></span>
                </div>
                <div>
                  <h3 className="pillar-title">The Video Editor</h3>
                  <span className="pillar-role-subtitle">Retention-Obsessed Storytelling</span>
                </div>
              </div>
            </div>

            <p className="pillar-desc">
              Transforming raw, unpolished clips into scroll-stopping visual narratives that grip
              viewer attention from the first second and keep watch times high.
            </p>

            <div className="pillar-divider"></div>

            {/* Interactive Feature Rows */}
            <div className="pillar-features-suite">
              <div className="feature-card-item">
                <div className="feature-icon-badge badge-purple-glow">
                  <i className="fa-solid fa-bolt text-purple"></i>
                </div>
                <div className="feature-info">
                  <h4 className="feature-heading">Velocity Curves & Speed Ramping</h4>
                  <p className="feature-detail">
                    Perfectly timed cut transitions matching rhythmic musical beats and motion cadence.
                  </p>
                </div>
              </div>

              <div className="feature-card-item">
                <div className="feature-icon-badge badge-cyan-glow">
                  <i className="fa-solid fa-closed-captioning text-cyan"></i>
                </div>
                <div className="feature-info">
                  <h4 className="feature-heading">Kinetic Typography & Captions</h4>
                  <p className="feature-detail">
                    Dynamic word-by-word animations in high-converting modern creator styles.
                  </p>
                </div>
              </div>

              <div className="feature-card-item">
                <div className="feature-icon-badge badge-purple-glow">
                  <i className="fa-solid fa-wand-magic-sparkles text-purple"></i>
                </div>
                <div className="feature-info">
                  <h4 className="feature-heading">Cinematic LUT Color Grading</h4>
                  <p className="feature-detail">
                    Rich filmic contrast, balanced skin tones, and professional Hollywood palettes.
                  </p>
                </div>
              </div>

              <div className="feature-card-item">
                <div className="feature-icon-badge badge-cyan-glow">
                  <i className="fa-solid fa-volume-high text-cyan"></i>
                </div>
                <div className="feature-info">
                  <h4 className="feature-heading">Multi-Track Sound Design</h4>
                  <p className="feature-detail">
                    Immersive acoustic whooshes, risers, bass impacts, and clean vocal mastering.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar Footer: Stack Badges & CTA */}
            <div className="pillar-footer-suite">
              <div className="tools-badges-dock">
                <span className="tool-chip">
                  <i className="fa-solid fa-scissors text-purple"></i> CapCut Pro
                </span>
                <span className="tool-chip">
                  <i className="fa-solid fa-sliders text-cyan"></i> Premiere Pro
                </span>
              </div>

              <a href="#services" className="pillar-cta-link link-purple">
                <span>View Editing Rates</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            {/* Bottom Expanding Glow Line */}
            <div className="pillar-bottom-glow-bar glow-purple"></div>
          </div>

          {/* ========================================================= */}
          {/* PILLAR 2: THE CONTENT CREATOR                             */}
          {/* ========================================================= */}
          <div className="pillar-card-premium creator-pillar-premium stagger-2 scroll-reveal">
            {/* Top Luminous Laser Accent Bar */}
            <div className="card-top-laser-bar laser-cyan"></div>

            {/* Header: Icon, Tags & Title */}
            <div className="pillar-card-header">
              <div className="pillar-header-top">
                <span className="pillar-badge-luxury badge-cyan">
                  <i className="fa-solid fa-bullhorn"></i> INFLUENCE & REACH
                </span>
                <span className="pillar-metric-chip chip-cyan">
                  <i className="fa-brands fa-instagram"></i> 50K+ Reach
                </span>
              </div>

              <div className="pillar-title-row">
                <div className="pillar-icon-orb orb-cyan">
                  <i className="fa-solid fa-bullhorn"></i>
                  <span className="orb-ambient-halo"></span>
                </div>
                <div>
                  <h3 className="pillar-title">The Content Creator</h3>
                  <span className="pillar-role-subtitle">Authentic Audience Advocacy</span>
                </div>
              </div>
            </div>

            <p className="pillar-desc">
              Building authentic trust with a passionate digital audience. Helping brands, apps, and
              startups reach targeted viewers through seamless sponsored integrations.
            </p>

            <div className="pillar-divider"></div>

            {/* Interactive Feature Rows */}
            <div className="pillar-features-suite">
              <div className="feature-card-item">
                <div className="feature-icon-badge badge-cyan-glow">
                  <i className="fa-solid fa-handshake text-cyan"></i>
                </div>
                <div className="feature-info">
                  <h4 className="feature-heading">Dedicated Sponsored Reels</h4>
                  <p className="feature-detail">
                    Custom high-energy hook scripting, full 4K video edit, and official co-author tag.
                  </p>
                </div>
              </div>

              <div className="feature-card-item">
                <div className="feature-icon-badge badge-blue-glow">
                  <i className="fa-solid fa-box-open text-blue"></i>
                </div>
                <div className="feature-info">
                  <h4 className="feature-heading">Product Showcases & Unboxings</h4>
                  <p className="feature-detail">
                    Authentic reviews, real-world testing, and high-impact feature highlights.
                  </p>
                </div>
              </div>

              <div className="feature-card-item">
                <div className="feature-icon-badge badge-cyan-glow">
                  <i className="fa-solid fa-share-nodes text-cyan"></i>
                </div>
                <div className="feature-info">
                  <h4 className="feature-heading">Story Promotions & Link Stickers</h4>
                  <p className="feature-detail">
                    24h active engagement directly driving conversion traffic to your product bio-link.
                  </p>
                </div>
              </div>

              <div className="feature-card-item">
                <div className="feature-icon-badge badge-blue-glow">
                  <i className="fa-solid fa-chart-line text-blue"></i>
                </div>
                <div className="feature-info">
                  <h4 className="feature-heading">Organic Viral Potential</h4>
                  <p className="feature-detail">
                    Algorithm-optimized formats engineered for maximum audience shares and saves.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar Footer: Stack Badges & CTA */}
            <div className="pillar-footer-suite">
              <div className="tools-badges-dock creator-badges-dock">
                <span className="tool-chip">
                  <i className="fa-solid fa-laptop-code text-cyan"></i> Tech Gear
                </span>
                <span className="tool-chip">
                  <i className="fa-solid fa-mobile-screen text-blue"></i> Creative Apps
                </span>
                <span className="tool-chip">
                  <i className="fa-solid fa-camera-retro text-cyan"></i> Lifestyle
                </span>
                <span className="tool-chip">
                  <i className="fa-solid fa-headphones text-blue"></i> Audio
                </span>
              </div>

              <a
                href="https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20discuss%20a%20Brand%20Sponsorship%20/%20Paid%20Promotion%20collab."
                target="_blank"
                rel="noopener noreferrer"
                className="pillar-cta-link link-cyan"
              >
                <span>Discuss Brand Collab</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            {/* Bottom Expanding Glow Line */}
            <div className="pillar-bottom-glow-bar glow-cyan"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
