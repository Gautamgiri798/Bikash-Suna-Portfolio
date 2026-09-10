import React from 'react';

export default function About() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="section-header scroll-reveal">
          <span className="section-subtitle">WHO I AM</span>
          <h2 className="section-title">The Mind Behind The Timeline</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-grid">
          {/* Column 1: Profile Image Card */}
          <div className="profile-simple-card about-image-card stagger-1 scroll-reveal">
            <img
              src="assets/profile.jpg"
              alt="Bikash Suna Profile"
              className="profile-simple-img"
            />
            <div className="profile-simple-overlay">
              <span className="profile-simple-tag">VIDEO EDITOR & CONTENT CREATOR</span>
              <h3 className="profile-simple-name">Bikash Suna</h3>
            </div>
          </div>

          {/* Column 2: Technical Profile Details */}
          <div className="about-card intro-card stagger-2 scroll-reveal">
            <div className="about-card-header">
              <div className="slate-badge">
                <i className="fa-solid fa-location-dot"></i> ODISHA, IN
              </div>
              <span className="active-status">
                <span className="pulse-dot"></span> Available for Collabs
              </span>
            </div>

            <h3 className="about-name">Bikash Suna</h3>
            <p className="about-description">
              Operating out of Jharsuguda, Odisha. I translate raw footage into high-impact,
              scroll-stopping narratives while partnering with brands and digital creators for
              high-engagement paid promotions, sponsored reels, and authentic product showcases.
            </p>

            {/* Thematic Video Spec Sheet */}
            <div className="video-spec-sheet">
              <div className="spec-header">
                <i className="fa-solid fa-circle-info"></i> CREATOR & EDITOR PROFILE METADATA
              </div>
              <div className="spec-row">
                <span className="spec-label">Role</span>
                <span className="spec-value">Editor & Content Creator</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Primary Tool</span>
                <span className="spec-value">CapCut Specialist</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Paid Promo Modes</span>
                <span className="spec-value">Reels, Stories, Co-Author</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Collab Niches</span>
                <span className="spec-value">Tech, Lifestyle, Gear & Apps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Skills Stack */}
        <div className="about-skills-stack">
          <div className="skill-item stagger-1 scroll-reveal">
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

          <div className="skill-item stagger-2 scroll-reveal">
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

          <div className="skill-item stagger-3 scroll-reveal">
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

          <div className="skill-item stagger-4 scroll-reveal">
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
        </div>
      </div>
    </section>
  );
}
