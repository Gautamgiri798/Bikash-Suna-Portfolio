import React from 'react';

export default function About() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header scroll-reveal">
          <div className="badge-wrapper-pill">
            <span className="section-subtitle-pill">
              <i className="fa-solid fa-user-astronaut"></i> WHO I AM
            </span>
          </div>
          <h2 className="section-title">The Creative Mind Behind Every Cut</h2>
          <div className="title-underline"></div>
          <p className="section-intro-text">
            Fusing rhythmic editorial precision with high-impact influencer strategy to turn raw clips into viral retention assets.
          </p>
        </div>

        <div className="about-grid">
          {/* Column 1: Cinematic Portrait Card with Camera HUD & Shimmer */}
          <div className="about-portrait-wrapper stagger-1 scroll-reveal">
            {/* Ambient Background Aura Glow */}
            <div className="portrait-ambient-glow" aria-hidden="true"></div>

            <div className="profile-cinematic-card">
              {/* Camera Viewfinder Overlays */}
              <div className="hud-corner hud-top-left" aria-hidden="true"></div>
              <div className="hud-corner hud-top-right" aria-hidden="true"></div>
              <div className="hud-corner hud-bottom-left" aria-hidden="true"></div>
              <div className="hud-corner hud-bottom-right" aria-hidden="true"></div>

              {/* Viewfinder Header Status */}
              <div className="viewfinder-top-bar">
                <div className="viewfinder-rec">
                  <span className="rec-dot-pulse"></span>
                  <span className="rec-text">REC</span>
                  <span className="timecode-text">00:24:18:05</span>
                </div>
                <div className="viewfinder-res">
                  <span className="res-badge">4K UHD</span>
                  <span className="fps-badge">60 FPS</span>
                </div>
              </div>

              <img
                src="assets/profile.jpg"
                alt="Bikash Suna Profile"
                className="profile-cinematic-img"
              />

              {/* Shimmer Light Sweep */}
              <div className="portrait-shimmer-sweep" aria-hidden="true"></div>


              {/* Bottom Gradient Overlay */}
              <div className="profile-cinematic-overlay">
                <div className="profile-tag-row">
                  <span className="profile-cinematic-tag">
                    <i className="fa-solid fa-clapperboard"></i> VIDEO EDITOR &bull; CONTENT CREATOR
                  </span>
                </div>
                <div className="profile-name-row">
                  <h3 className="profile-cinematic-name">Bikash Suna</h3>
                  <i className="fa-solid fa-circle-check verified-badge" title="Verified Professional Creator"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Technical Profile Details Card */}
          <div className="about-card intro-card-premium stagger-2 scroll-reveal">
            {/* Ambient Corner Glow */}
            <div className="card-ambient-corner" aria-hidden="true"></div>

            <div className="about-card-header">
              <div className="slate-badge-premium">
                <i className="fa-solid fa-location-dot"></i> JHARSUGUDA, ODISHA, IN
              </div>
              <div className="status-badge-premium">
                <span className="pulse-dot"></span> Available for Collabs
              </div>
            </div>

            <div className="about-title-group">
              <h3 className="about-name-premium">
                Bikash Suna
                <i className="fa-solid fa-circle-check verified-badge-inline" title="Verified Creator & Editor"></i>
              </h3>
              <span className="about-role-subheading">
                Digital Storyteller &bull; Video Post-Production &bull; Brand Partner
              </span>
            </div>

            <p className="about-description">
              Operating out of Jharsuguda, Odisha. I translate raw footage into high-impact,
              scroll-stopping narratives while partnering with brands and digital creators for
              high-engagement paid promotions, sponsored reels, and authentic product showcases.
            </p>

            {/* Thematic Video Spec Sheet */}
            <div className="video-spec-sheet-premium">
              <div className="spec-header">
                <div className="spec-title-left">
                  <i className="fa-solid fa-sliders"></i>
                  <span>CREATOR & EDITOR SPECIFICATION</span>
                </div>
                <span className="spec-live-pill">LIVE BENCHMARKS</span>
              </div>

              <div className="spec-grid">
                <div className="spec-grid-item">
                  <span className="spec-label">
                    <i className="fa-solid fa-briefcase"></i> Primary Role
                  </span>
                  <span className="spec-value">Editor & Content Creator</span>
                </div>

                <div className="spec-grid-item">
                  <span className="spec-label">
                    <i className="fa-solid fa-wand-magic-sparkles"></i> Primary Tools
                  </span>
                  <span className="spec-value highlight-cyan">CapCut Pro &bull; Premiere Pro</span>
                </div>

                <div className="spec-grid-item">
                  <span className="spec-label">
                    <i className="fa-solid fa-bullhorn"></i> Promo Formats
                  </span>
                  <span className="spec-value">Reels, Stories, Co-Author Tag</span>
                </div>

                <div className="spec-grid-item">
                  <span className="spec-label">
                    <i className="fa-solid fa-cubes"></i> Core Niches
                  </span>
                  <span className="spec-value">Tech, Lifestyle, Gear & Apps</span>
                </div>

                <div className="spec-grid-item">
                  <span className="spec-label">
                    <i className="fa-solid fa-stopwatch"></i> Express Turnaround
                  </span>
                  <span className="spec-value highlight-emerald">24h Priority &bull; 48h Standard</span>
                </div>

                <div className="spec-grid-item">
                  <span className="spec-label">
                    <i className="fa-solid fa-chart-line"></i> Retention Target
                  </span>
                  <span className="spec-value highlight-gold">Top 15% Viral Benchmarks</span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="about-action-bar">
              <a
                href="https://wa.me/919360870164?text=Hi%20Bikash,%20I'd%20love%20to%20collaborate%20with%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm pulse-on-hover"
              >
                <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
              </a>
              <a href="#portfolio" className="btn btn-secondary btn-sm">
                <i className="fa-solid fa-play"></i> Watch Showreels
              </a>
            </div>
          </div>
        </div>

        {/* Section 3: Skills Stack with Interactive Glowing Cards */}
        <div className="about-skills-stack">
          <div className="skill-item-premium stagger-1 scroll-reveal">
            <div className="skill-top-bar">
              <span className="skill-badge-tag tag-cyan">PACING ARCHITECTURE</span>
              <span className="skill-metric">99% SYNC</span>
            </div>
            <div className="skill-body">
              <div className="skill-icon-wrapper skill-cyan">
                <i className="fa-solid fa-gauge-high"></i>
              </div>
              <div className="skill-text-box">
                <h4>Velocity & Speed Ramps</h4>
                <p>
                  Applying smooth custom speed curves, velocity ramps, and optical flow slow-motion to
                  sync cuts with visual transitions.
                </p>
              </div>
            </div>
            <div className="skill-card-glow-bar glow-cyan"></div>
          </div>

          <div className="skill-item-premium stagger-2 scroll-reveal">
            <div className="skill-top-bar">
              <span className="skill-badge-tag tag-purple">ENGAGEMENT HOOKS</span>
              <span className="skill-metric">VIRAL RETENTION</span>
            </div>
            <div className="skill-body">
              <div className="skill-icon-wrapper skill-purple">
                <i className="fa-solid fa-comment-dots"></i>
              </div>
              <div className="skill-text-box">
                <h4>Trending Auto-Captions</h4>
                <p>
                  Generating auto-sync'd dynamic text overlays with CapCut's trending typography styles
                  and slide-in motion presets.
                </p>
              </div>
            </div>
            <div className="skill-card-glow-bar glow-purple"></div>
          </div>

          <div className="skill-item-premium stagger-3 scroll-reveal">
            <div className="skill-top-bar">
              <span className="skill-badge-tag tag-blue">CINEMATIC DYNAMICS</span>
              <span className="skill-metric">60 FPS SMOOTH</span>
            </div>
            <div className="skill-body">
              <div className="skill-icon-wrapper skill-blue">
                <i className="fa-solid fa-key"></i>
              </div>
              <div className="skill-text-box">
                <h4>Keyframe Animations</h4>
                <p>
                  Adding custom keyframe trajectories for smooth camera zooms, overlay panning, and
                  picture-in-picture (PIP) layouts.
                </p>
              </div>
            </div>
            <div className="skill-card-glow-bar glow-blue"></div>
          </div>

          <div className="skill-item-premium stagger-4 scroll-reveal">
            <div className="skill-top-bar">
              <span className="skill-badge-tag tag-teal">SPONSOR STRATEGY</span>
              <span className="skill-metric">HIGH CONVERTING</span>
            </div>
            <div className="skill-body">
              <div className="skill-icon-wrapper skill-teal">
                <i className="fa-solid fa-bullhorn"></i>
              </div>
              <div className="skill-text-box">
                <h4>Brand Collabs & Paid Promo</h4>
                <p>
                  Tailored brand integrations, high-converting sponsor hooks, co-authored Instagram
                  reels, and authentic product showcases.
                </p>
              </div>
            </div>
            <div className="skill-card-glow-bar glow-teal"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
