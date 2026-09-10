import React from 'react';

export default function DualPillars() {
  return (
    <section className="pillars-section section-padding" id="what-i-do">
      <div className="container">
        <div className="section-header scroll-reveal">
          <span className="section-subtitle">DUAL SUPERPOWERS</span>
          <h2 className="section-title">Two Passions. One Powerful Creator.</h2>
          <div className="title-underline"></div>
          <p className="section-intro">
            Whether you need a high-end cinematic video editor to transform your raw footage or an
            authentic content creator to promote your brand to an engaged audience — I bring both
            worlds together.
          </p>
        </div>

        <div className="pillars-grid">
          {/* Pillar 1: The Video Editor */}
          <div className="pillar-card editor-pillar stagger-1 scroll-reveal">
            <div className="pillar-header">
              <div className="pillar-icon-box">
                <i className="fa-solid fa-clapperboard"></i>
              </div>
              <div className="pillar-title-area">
                <span className="pillar-tag">POST-PRODUCTION</span>
                <h3>The Video Editor</h3>
              </div>
            </div>

            <p className="pillar-desc">
              Transforming raw, unpolished clips into scroll-stopping visual narratives that grip
              viewer attention from the first second and keep watch times high.
            </p>

            <div className="pillar-features-list">
              <div className="feature-row">
                <i className="fa-solid fa-bolt text-purple"></i>
                <div>
                  <strong>Velocity Curves & Speed Ramping:</strong> Perfectly timed cut transitions
                  matching rhythmic beats.
                </div>
              </div>
              <div className="feature-row">
                <i className="fa-solid fa-closed-captioning text-cyan"></i>
                <div>
                  <strong>Kinetic Typography & Captions:</strong> Dynamic animations in high-converting
                  creator styles.
                </div>
              </div>
              <div className="feature-row">
                <i className="fa-solid fa-wand-magic-sparkles text-purple"></i>
                <div>
                  <strong>Cinematic LUT Color Grading:</strong> Rich contrast and professional cinematic
                  tones.
                </div>
              </div>
              <div className="feature-row">
                <i className="fa-solid fa-volume-high text-cyan"></i>
                <div>
                  <strong>Multi-Track Sound Design:</strong> Immersive whooshes, risers, impacts, and
                  audio mastering.
                </div>
              </div>
            </div>

            <div className="pillar-footer">
              <div className="tools-badges">
                <span>CapCut Pro</span>
                <span>Premiere Pro</span>
                <span>After Effects</span>
              </div>
              <a href="#services" className="pillar-link">
                View Editing Rates <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Pillar 2: The Content Creator & Collaborator */}
          <div className="pillar-card creator-pillar stagger-2 scroll-reveal">
            <div className="pillar-header">
              <div className="pillar-icon-box creator-icon-box">
                <i className="fa-solid fa-bullhorn"></i>
              </div>
              <div className="pillar-title-area">
                <span className="pillar-tag creator-tag">INFLUENCE & REACH</span>
                <h3>The Content Creator</h3>
              </div>
            </div>

            <p className="pillar-desc">
              Building authentic trust with a passionate digital audience. Helping brands, apps, and
              startups reach targeted viewers through seamless sponsored integrations.
            </p>

            <div className="pillar-features-list">
              <div className="feature-row">
                <i className="fa-solid fa-handshake text-teal"></i>
                <div>
                  <strong>Dedicated Sponsored Reels:</strong> Custom high-energy hook scripting, full
                  video edit, and co-author tag.
                </div>
              </div>
              <div className="feature-row">
                <i className="fa-solid fa-box-open text-blue"></i>
                <div>
                  <strong>Product Showcases & Unboxings:</strong> Authentic reviews and hands-on feature
                  highlights.
                </div>
              </div>
              <div className="feature-row">
                <i className="fa-solid fa-share-nodes text-teal"></i>
                <div>
                  <strong>Story Promotions & Link Stickers:</strong> 24h active engagement directly
                  driving traffic to your brand.
                </div>
              </div>
              <div className="feature-row">
                <i className="fa-solid fa-chart-line text-blue"></i>
                <div>
                  <strong>Organic Viral Potential:</strong> Algorithm-optimized formats engineered for
                  maximum shares and saves.
                </div>
              </div>
            </div>

            <div className="pillar-footer">
              <div className="tools-badges creator-badges">
                <span>Tech Gear</span>
                <span>Creative Apps</span>
                <span>Lifestyle</span>
                <span>Audio</span>
              </div>
              <a
                href="https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20discuss%20a%20Brand%20Sponsorship%20/%20Paid%20Promotion%20collab."
                target="_blank"
                rel="noopener noreferrer"
                className="pillar-link creator-link"
              >
                Discuss Brand Collab <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
