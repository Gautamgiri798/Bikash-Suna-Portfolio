import React, { useState, useEffect } from 'react';
import ThreeCanvas from './ThreeCanvas';

const rotatingPhrases = [
  'Cinematic Video Editor',
  'Influential Content Creator',
  'Viral Reel Specialist',
  'Brand Collab Partner',
];

export default function Hero() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Animated numbers counter state
  const [counterReel, setCounterReel] = useState(0);
  const [counterCollab, setCounterCollab] = useState(0);
  const [counterHours, setCounterHours] = useState(0);
  const [counterReach, setCounterReach] = useState(0);

  // 1. Typewriter Effect
  useEffect(() => {
    const currentPhrase = rotatingPhrases[phraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        setTypingSpeed(80);

        if (text === currentPhrase) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        setTypingSpeed(45);

        if (text === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, typingSpeed]);

  // 2. Count-Up Stat Animation
  useEffect(() => {
    let step = 0;
    const totalSteps = 40;
    const interval = setInterval(() => {
      step++;
      const progress = step / totalSteps;
      setCounterReel(Math.round(600 * progress));
      setCounterCollab(Math.round(1500 * progress));
      setCounterHours(Math.round(48 * progress));
      setCounterReach(Math.round(50 * progress));

      if (step >= totalSteps) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="hero">
      {/* 3D Three.js Interactive WebGL Universe Canvas */}
      <ThreeCanvas />

      {/* Cinematic Ambient Background Atmosphere */}
      <div className="hero-bg" aria-hidden="true"></div>

      {/* Ambient Pulsing Radial Aura */}
      <div className="hero-radial-glow"></div>

      {/* Constrained Editorial Hero Container */}
      <div className="hero-container">
        <div className="hero-layout-grid">
          {/* ================= LEFT CONTENT CONTAINER ================= */}
          <div className="hero-left-column">
            {/* Pill Badge: Category & Status */}
            <div className="hero-badge-pill">
              <div className="soundwave-equalizer" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="badge-category-text">VIDEO EDITOR &bull; CONTENT CREATOR</span>
              <span className="hero-pulse-status">
                <span className="pulse-dot"></span> Available
              </span>
            </div>

            {/* Dominant Editorial Heading with Typewriter */}
            <h1 className="hero-editorial-title">
              I am a <br />
              <span className="gradient-text typewriter-text">
                {text}
                <span className="typewriter-cursor">|</span>
              </span>
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="hero-editorial-subtitle">
              Transforming raw footage into scroll-stopping stories for creators and clients, while
              delivering high-converting paid promotions and sponsored collaborations for brands.
            </p>

            {/* CTA Buttons */}
            <div className="hero-ctas-editorial">
              <a href="#portfolio" className="btn btn-primary pulse-on-hover btn-hero-primary">
                <span className="btn-icon-wrapper">
                  <i className="fa-solid fa-play"></i>
                </span>
                <span>View Showreels</span>
              </a>
              <a
                href="https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20collaborate%20for%20a%20Paid%20Promotion%20/%20Brand%20Sponsorship."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent pulse-on-hover btn-hero-glass"
              >
                <i className="fa-solid fa-handshake"></i>
                <span>Brand Collabs & Promo</span>
              </a>
              <a href="#contact" className="btn btn-secondary btn-hero-subtle">
                <i className="fa-solid fa-envelope"></i>
                <span>Contact Me</span>
              </a>
            </div>

            {/* 4 Horizontal Statistics */}
            <div className="hero-editorial-stats">
              <div className="stat-editorial-item">
                <span className="stat-val">₹{counterReel}</span>
                <span className="stat-desc">Reel Edit Rate</span>
              </div>
              <div className="stat-editorial-item">
                <span className="stat-val">DM</span>
                <span className="stat-desc">Brand Collab & Promo</span>
              </div>
              <div className="stat-editorial-item">
                <span className="stat-val">{counterHours}h</span>
                <span className="stat-desc">Delivery Turnaround</span>
              </div>
              <div className="stat-editorial-item">
                <span className="stat-val">{counterReach}K+</span>
                <span className="stat-desc">Monthly Impressions</span>
              </div>
            </div>

            {/* Editorial Scroll To Explore Indicator */}
            <div className="hero-scroll-explore">
              <a href="#what-i-do" className="scroll-explore-link" aria-label="Scroll to explore">
                <div className="mouse-icon-editorial">
                  <div className="wheel-editorial"></div>
                </div>
                <span className="scroll-explore-label">SCROLL TO EXPLORE</span>
              </a>
            </div>
          </div>

          {/* ================= RIGHT VISUAL CONTAINER ================= */}
          <div className="hero-right-visual">
            <div className="hero-visual-composition">
              {/* Primary Framed Media Container */}
              <div className="hero-media-frame">
                <div className="hero-media-inner">
                  <img
                    src="assets/hero.jpg"
                    alt="Bikash Suna - Professional Video Editor Studio"
                    className="hero-media-img"
                  />
                  {/* Subtle edge vignette */}
                  <div className="hero-media-vignette" />

                  {/* Refined Camera Viewfinder Corners */}
                  <div className="camera-frame-corners" aria-hidden="true">
                    <span className="corner top-left"></span>
                    <span className="corner top-right"></span>
                    <span className="corner bottom-left"></span>
                    <span className="corner bottom-right"></span>
                  </div>
                </div>
              </div>

              {/* Overlapping Element 5: Studio NLE Multi-Track Timeline & Audio Scrubber Deck */}
              <div className="hero-timeline-deck" aria-label="Video Editor Master Timeline">
                {/* Timeline Header Bar */}
                <div className="timeline-deck-header">
                  <div className="timeline-deck-left">
                    <span className="rec-indicator">
                      <span className="rec-dot"></span> LIVE TIMELINE
                    </span>
                    <span className="sequence-name">BIKASH_MASTER_CUT_4K.prproj</span>
                  </div>
                  <div className="timeline-deck-right">
                    <span className="timecode-badge">00:04:18:24</span>
                    <span className="codec-chip">PRORES 422 HQ</span>
                    <span className="fps-chip">4K &bull; 60FPS</span>
                  </div>
                </div>

                {/* Multi-Track Editor View */}
                <div className="timeline-tracks-area">
                  {/* Glowing Playhead Line */}
                  <div className="timeline-playhead" aria-hidden="true">
                    <div className="playhead-cap"></div>
                    <div className="playhead-line"></div>
                  </div>

                  {/* V2 Track (FX & Speed Ramps) */}
                  <div className="timeline-track-row">
                    <div className="track-label">V2</div>
                    <div className="track-lane">
                      <div className="clip-block clip-speedramp" style={{ width: '44%', marginLeft: '10%' }}>
                        <i className="fa-solid fa-bolt"></i>
                        <span>Speed Ramp<span className="timeline-desktop-only"> (400% &rarr; 40%)</span></span>
                        <div className="keyframe-diamond"></div>
                      </div>
                      <div className="clip-block clip-lut" style={{ width: '40%', marginLeft: '4%' }}>
                        <i className="fa-solid fa-wand-magic-sparkles"></i>
                        <span><span className="timeline-desktop-only">Teal & Orange </span>3D LUT</span>
                      </div>
                    </div>
                  </div>

                  {/* V1 Track (Main Storyline Cuts) */}
                  <div className="timeline-track-row">
                    <div className="track-label">V1</div>
                    <div className="track-lane">
                      <div className="clip-block clip-main clip-1" style={{ width: '23%' }}>
                        <img src="assets/reel.jpg" alt="" className="clip-thumb-mini" />
                        <span>01_Hook<span className="timeline-desktop-only">_Cut</span></span>
                      </div>
                      <div className="clip-block clip-main clip-2" style={{ width: '31%', marginLeft: '3px' }}>
                        <img src="assets/hero.jpg" alt="" className="clip-thumb-mini" />
                        <span>02_Hero<span className="timeline-desktop-only">_Cine</span></span>
                      </div>
                      <div className="clip-block clip-main clip-3" style={{ width: '26%', marginLeft: '3px' }}>
                        <img src="assets/album.jpg" alt="" className="clip-thumb-mini" />
                        <span>03_B-Roll</span>
                      </div>
                      <div className="clip-block clip-main clip-4" style={{ width: '18%', marginLeft: '3px' }}>
                        <img src="assets/profile.jpg" alt="" className="clip-thumb-mini" />
                        <span>04_Outro</span>
                      </div>
                    </div>
                  </div>

                  {/* A1 Track (Voiceover & Waveform) */}
                  <div className="timeline-track-row audio-row">
                    <div className="track-label">A1</div>
                    <div className="track-lane audio-lane">
                      <div className="audio-waveform-block" style={{ width: '56%' }}>
                        <svg className="waveform-svg" viewBox="0 0 200 24" preserveAspectRatio="none">
                          <path
                            d="M0,12 L5,8 L10,16 L15,4 L20,20 L25,7 L30,17 L35,3 L40,21 L45,6 L50,18 L55,5 L60,19 L65,8 L70,16 L75,4 L80,20 L85,7 L90,17 L95,5 L100,19 L105,8 L110,16 L115,2 L120,22 L125,6 L130,18 L135,5 L140,19 L145,8 L150,16 L155,4 L160,20 L165,7 L170,17 L175,5 L180,19 L185,8 L190,16 L195,10 L200,12"
                            fill="none"
                            stroke="#06b6d4"
                            strokeWidth="1.8"
                          />
                        </svg>
                        <span className="audio-title">Dialogue<span className="timeline-desktop-only">_Master</span>.wav</span>
                      </div>
                      <div className="audio-waveform-block sfx-block" style={{ width: '41%', marginLeft: '2%' }}>
                        <svg className="waveform-svg sfx-wave" viewBox="0 0 150 24" preserveAspectRatio="none">
                          <path
                            d="M0,12 L10,12 L20,6 L30,18 L40,4 L50,20 L60,8 L70,16 L80,12 L100,12 L110,5 L120,19 L130,12 L150,12"
                            fill="none"
                            stroke="#c084fc"
                            strokeWidth="1.8"
                          />
                        </svg>
                        <span className="audio-title">SFX<span className="timeline-desktop-only">_Impact</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Timeline Toolbar & Workflow Status */}
                <div className="timeline-deck-footer">
                  <div className="timeline-tools-dock">
                    <span className="tool-btn active" title="Selection Tool (V)">
                      <i className="fa-solid fa-arrow-pointer"></i>
                    </span>
                    <span className="tool-btn" title="Razor Cut Tool (C)">
                      <i className="fa-solid fa-scissors"></i>
                    </span>
                    <span className="tool-btn" title="Ripple Edit (B)">
                      <i className="fa-solid fa-arrows-left-right"></i>
                    </span>
                    <span className="tool-btn" title="Keyframe Curve (P)">
                      <i className="fa-solid fa-bezier-curve"></i>
                    </span>
                  </div>
                  <div className="timeline-pipeline-badges">
                    <span className="pipeline-step">
                      <i className="fa-solid fa-check"></i> INGEST
                    </span>
                    <span className="pipeline-arrow">&rarr;</span>
                    <span className="pipeline-step active">
                      <i className="fa-solid fa-wand-magic-sparkles"></i> <span className="timeline-desktop-only">COLOR </span>GRADE
                    </span>
                    <span className="pipeline-arrow">&rarr;</span>
                    <span className="pipeline-step">
                      <i className="fa-solid fa-volume-high"></i> SFX
                    </span>
                    <span className="pipeline-arrow">&rarr;</span>
                    <span className="pipeline-step">
                      <i className="fa-solid fa-film"></i> <span className="timeline-desktop-only">4K </span>EXPORT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
