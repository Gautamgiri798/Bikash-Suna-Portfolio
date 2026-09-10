import React from 'react';

export default function CreatorMediaKit() {
  const steps = [
    {
      num: '01',
      title: 'Briefing & Goal Alignment',
      desc: 'We discuss your product, target audience, key selling points, and the core call-to-action (CTA).',
      icon: 'fa-clipboard-list',
    },
    {
      num: '02',
      title: 'Scripting & Hook Engineering',
      desc: 'I draft a punchy 3-second hook and structured storyline tailored to hook viewers and avoid skip-offs.',
      icon: 'fa-pen-ruler',
    },
    {
      num: '03',
      title: 'Cinematic Shooting & Editing',
      desc: 'High-definition capture with dynamic speed ramping, beat syncing, color grading, and SFX.',
      icon: 'fa-video',
    },
    {
      num: '04',
      title: 'Review & Collaborative Launch',
      desc: 'You review the final edit, then we publish as a tagged Instagram Co-Author Reel with story links.',
      icon: 'fa-rocket',
    },
  ];

  return (
    <section className="mediakit-section section-padding" id="media-kit">
      <div className="container">
        <div className="section-header scroll-reveal">
          <span className="section-subtitle">CREATOR MEDIA KIT</span>
          <h2 className="section-title">Brand Partnerships & Audience Metrics</h2>
          <div className="title-underline"></div>
          <p className="section-intro">
            Connect with a highly engaged demographic of creators, tech enthusiasts, and digital
            trendsetters. Transparent metrics built for measurable sponsor ROI.
          </p>
        </div>

        {/* Metrics Bar */}
        <div className="mediakit-stats-grid">
          <div className="mediakit-stat-card stagger-1 scroll-reveal">
            <span className="mediakit-stat-number gradient-text">50K+</span>
            <span className="mediakit-stat-label">Monthly Impressions</span>
            <span className="mediakit-stat-sub">Across Reels & Shorts</span>
          </div>

          <div className="mediakit-stat-card stagger-2 scroll-reveal">
            <span className="mediakit-stat-number text-cyan">15K - 45K</span>
            <span className="mediakit-stat-label">Avg Reel Views</span>
            <span className="mediakit-stat-sub">High watch-time retention</span>
          </div>

          <div className="mediakit-stat-card stagger-3 scroll-reveal">
            <span className="mediakit-stat-number text-teal">8.4%</span>
            <span className="mediakit-stat-label">Engagement Rate</span>
            <span className="mediakit-stat-sub">High comment & save ratio</span>
          </div>

          <div className="mediakit-stat-card stagger-4 scroll-reveal">
            <span className="mediakit-stat-number text-purple">18 - 34</span>
            <span className="mediakit-stat-label">Core Demographic</span>
            <span className="mediakit-stat-sub">Tech, Creator & Lifestyle</span>
          </div>
        </div>

        {/* Workflow Timeline */}
        <div className="workflow-container scroll-reveal">
          <div className="workflow-header">
            <h3>How Brand Collaborations Work</h3>
            <p>From initial contact to live published campaign in 4 structured steps.</p>
          </div>

          <div className="workflow-steps-grid">
            {steps.map((step, index) => (
              <div key={index} className={`workflow-step-card stagger-${(index % 4) + 1} scroll-reveal`}>
                <div className="step-badge">{step.num}</div>
                <div className="step-icon">
                  <i className={`fa-solid ${step.icon}`}></i>
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="workflow-cta-banner scroll-reveal">
            <div>
              <h4>Ready to promote your product or campaign?</h4>
              <p>Starter packages begin at ₹1,500 with full video production included.</p>
            </div>
            <a
              href="https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20collaborate%20for%20a%20Paid%20Promotion%20/%20Brand%20Sponsorship."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              <i className="fa-solid fa-handshake"></i> Book Brand Sponsorship
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
