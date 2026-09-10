import React from 'react';

export default function CreatorMediaKit() {
  const steps = [
    {
      num: '01',
      title: 'Briefing & Goal Alignment',
      subtitle: 'Target Audience & Hook Setup',
      desc: 'We discuss your product, target demographic, unique selling propositions (USPs), and campaign call-to-action.',
      icon: 'fa-clipboard-list',
      tag: 'Day 1 • Blueprint',
      color: 'cyan',
    },
    {
      num: '02',
      title: 'Scripting & Hook Engineering',
      subtitle: 'First 3-Second Retention Lock',
      desc: 'Drafting high-retention viral hooks and narrative structure tailored to stop scrolling and maximize watch-time.',
      icon: 'fa-pen-ruler',
      tag: 'Day 1–2 • Script Draft',
      color: 'purple',
    },
    {
      num: '03',
      title: 'Cinematic Shooting & Editing',
      subtitle: '4K Capture & Dynamic Rhythm',
      desc: 'High-definition production with seamless speed ramping, beat syncing, vocal leveling, and custom LUT color grading.',
      icon: 'fa-video',
      tag: 'Day 2 • 4K Production',
      color: 'blue',
    },
    {
      num: '04',
      title: 'Review & Collaborative Launch',
      subtitle: 'Co-Author Post & Story Blast',
      desc: 'You review and approve the final cut, followed by a published Instagram Co-Author Reel with targeted story link stickers.',
      icon: 'fa-rocket',
      tag: 'Day 3 • Live Campaign',
      color: 'emerald',
    },
  ];

  return (
    <section className="mediakit-section section-padding" id="media-kit">
      <div className="container">
        {/* Section Header */}
        <div className="section-header scroll-reveal">
          <div className="badge-wrapper-pill">
            <span className="section-subtitle-pill">
              <i className="fa-solid fa-chart-pie"></i> CREATOR MEDIA KIT & SPONSOR DESK
            </span>
          </div>
          <h2 className="section-title">Brand Partnerships & Audience Metrics</h2>
          <div className="title-underline"></div>
          <p className="section-intro">
            Connect with a highly engaged demographic of creators, tech enthusiasts, and digital trendsetters.
            Transparent, verified metrics built for measurable sponsor ROI.
          </p>

          {/* Social Platforms Snapshot Pill Bar */}
          <div className="platform-snapshot-bar">
            <span className="platform-chip">
              <i className="fa-brands fa-instagram text-pink"></i> Instagram Reels
            </span>
            <span className="platform-chip">
              <i className="fa-brands fa-youtube text-red"></i> YouTube Shorts
            </span>
            <span className="platform-chip">
              <i className="fa-solid fa-circle-check text-cyan"></i> Verified Creator
            </span>
          </div>
        </div>

        {/* Dynamic Metrics Cards */}
        <div className="mediakit-stats-grid">
          {/* Stat 1: Monthly Impressions */}
          <div className="mediakit-stat-card-premium card-glow-cyan stagger-1 scroll-reveal">
            <div className="stat-card-top">
              <span className="stat-category-pill">REACH METRIC</span>
              <span className="stat-growth-pill text-emerald">
                <i className="fa-solid fa-arrow-trend-up"></i> +32% MoM
              </span>
            </div>
            <div className="stat-number-wrapper">
              <span className="mediakit-stat-number stat-cyan">50K+</span>
            </div>
            <span className="mediakit-stat-label">Monthly Impressions</span>
            <span className="mediakit-stat-sub">Across viral Reels, Shorts & videos</span>

            {/* Mini Sparkline SVG */}
            <div className="stat-sparkline-wrapper">
              <svg className="sparkline-svg" viewBox="0 0 120 28" fill="none">
                <path
                  d="M0 22 Q 25 18, 45 12 T 80 14 T 120 4"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0 22 Q 25 18, 45 12 T 80 14 T 120 4 L 120 28 L 0 28 Z"
                  fill="url(#cyanGlowGrad)"
                  opacity="0.3"
                />
                <defs>
                  <linearGradient id="cyanGlowGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Stat 2: Avg Reel Views */}
          <div className="mediakit-stat-card-premium card-glow-purple stagger-2 scroll-reveal">
            <div className="stat-card-top">
              <span className="stat-category-pill">VIRALITY</span>
              <span className="stat-growth-pill text-purple">
                <i className="fa-solid fa-fire"></i> 85%+ Watch
              </span>
            </div>
            <div className="stat-number-wrapper">
              <span className="mediakit-stat-number stat-purple">15K – 45K</span>
            </div>
            <span className="mediakit-stat-label">Avg Reel Views</span>
            <span className="mediakit-stat-sub">High watch-time & viewer retention</span>

            {/* Mini Sparkline SVG */}
            <div className="stat-sparkline-wrapper">
              <svg className="sparkline-svg" viewBox="0 0 120 28" fill="none">
                <path
                  d="M0 24 Q 20 20, 50 8 T 85 10 T 120 2"
                  stroke="#c084fc"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0 24 Q 20 20, 50 8 T 85 10 T 120 2 L 120 28 L 0 28 Z"
                  fill="url(#purpleGlowGrad)"
                  opacity="0.3"
                />
                <defs>
                  <linearGradient id="purpleGlowGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Stat 3: Engagement Rate */}
          <div className="mediakit-stat-card-premium card-glow-emerald stagger-3 scroll-reveal">
            <div className="stat-card-top">
              <span className="stat-category-pill">BENCHMARK</span>
              <span className="stat-growth-pill text-emerald">
                <i className="fa-solid fa-star"></i> 3.2x Average
              </span>
            </div>
            <div className="stat-number-wrapper">
              <span className="mediakit-stat-number stat-emerald">8.4%</span>
            </div>
            <span className="mediakit-stat-label">Engagement Rate</span>
            <span className="mediakit-stat-sub">High comment, share & save ratio</span>

            {/* Mini Sparkline SVG */}
            <div className="stat-sparkline-wrapper">
              <svg className="sparkline-svg" viewBox="0 0 120 28" fill="none">
                <path
                  d="M0 20 Q 30 16, 60 14 T 90 6 T 120 2"
                  stroke="#34d399"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0 20 Q 30 16, 60 14 T 90 6 T 120 2 L 120 28 L 0 28 Z"
                  fill="url(#emeraldGlowGrad)"
                  opacity="0.3"
                />
                <defs>
                  <linearGradient id="emeraldGlowGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Stat 4: Core Demographic */}
          <div className="mediakit-stat-card-premium card-glow-gold stagger-4 scroll-reveal">
            <div className="stat-card-top">
              <span className="stat-category-pill">AUDIENCE</span>
              <span className="stat-growth-pill text-gold">
                <i className="fa-solid fa-users"></i> Gen-Z & Millennial
              </span>
            </div>
            <div className="stat-number-wrapper">
              <span className="mediakit-stat-number stat-gold">18 – 34</span>
            </div>
            <span className="mediakit-stat-label">Core Demographic</span>
            <span className="mediakit-stat-sub">Tech, Creators, Lifestyle & Gear</span>

            {/* Demographic Ratio Indicator */}
            <div className="demo-bar-wrapper">
              <div className="demo-bar-track">
                <div className="demo-bar-fill" style={{ width: '72%' }} title="72% Active Age 18-28"></div>
              </div>
              <div className="demo-bar-labels">
                <span>72% Age 18–28</span>
                <span>High Buying Power</span>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Timeline Section */}
        <div className="workflow-container-premium scroll-reveal">
          <div className="workflow-header-premium">
            <span className="workflow-badge">
              <i className="fa-solid fa-diagram-project"></i> 4-STEP CAMPAIGN LIFECYCLE
            </span>
            <h3>How Brand Collaborations Work</h3>
            <p>From initial briefing to a published, co-authored viral campaign.</p>
          </div>

          {/* Steps Grid */}
          <div className="workflow-steps-grid-premium">
            {steps.map((step, index) => (
              <div key={index} className={`workflow-card-premium card-${step.color} stagger-${(index % 4) + 1} scroll-reveal`}>
                <div className="step-card-header">
                  <div className={`step-icon-premium icon-${step.color}`}>
                    <i className={`fa-solid ${step.icon}`}></i>
                  </div>
                  <span className="step-number-pill">{step.num}</span>
                </div>

                <div className="step-content">
                  <span className={`step-phase-tag tag-${step.color}`}>
                    {step.tag}
                  </span>
                  <h4>{step.title}</h4>
                  <span className="step-subtitle">{step.subtitle}</span>
                  <p>{step.desc}</p>
                </div>

                <div className={`step-bottom-glow-bar glow-${step.color}`}></div>
              </div>
            ))}
          </div>

          {/* Luxury Sponsor CTA Banner */}
          <div className="workflow-cta-banner-premium scroll-reveal">
            <div className="cta-left-content">
              <div className="cta-status-pill">
                <span className="pulse-dot"></span>
                <span>SPONSOR SLOTS OPEN FOR THIS MONTH</span>
              </div>
              <h4>Ready to promote your product, app, or brand?</h4>
              <p>Starter sponsorship packages begin at <strong>₹1,500</strong> with complete video editing, scripting, and tagged co-authorship included.</p>
            </div>
            <div className="cta-actions">
              <a
                href="https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20collaborate%20for%20a%20Paid%20Promotion%20/%20Brand%20Sponsorship."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary pulse-on-hover btn-cta-luxury"
              >
                <i className="fa-solid fa-handshake"></i> Book Brand Sponsorship
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
