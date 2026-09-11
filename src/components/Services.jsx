import React from 'react';

export default function Services() {
  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header scroll-reveal">
          <div className="badge-wrapper-pill">
            <span className="section-subtitle-pill">
              <i className="fa-solid fa-tag"></i> TRANSPARENT RATES & PACKAGES
            </span>
          </div>
          <h2 className="section-title">Transparent & Affordable Packages</h2>
          <div className="title-underline"></div>
          <p className="section-intro">
            No hidden costs, no complicated contracts. High-retention video editing and creator sponsorship packages built for rapid delivery and measurable ROI.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="services-grid">
          {/* Package 1: Short Reel Edit */}
          <div className="pricing-card-premium card-glow-cyan stagger-1 scroll-reveal">
            <div className="pricing-card-top">
              <span className="pricing-badge-luxury badge-cyan">
                <i className="fa-solid fa-bolt"></i> SHORT FORMAT
              </span>
              <span className="delivery-time-pill">
                <i className="fa-regular fa-clock"></i> 24h Express
              </span>
            </div>

            <h3 className="package-name">Short Reel Edit</h3>
            <p className="package-target">Instagram Reels, YouTube Shorts, TikToks</p>

            <div className="price-box">
              <span className="currency">₹</span>
              <span className="price price-cyan">600</span>
              <span className="duration">/ video</span>
            </div>

            <p className="package-desc">
              Engineered to stop scrolling and hold retention through high-velocity beat syncs, kinetic captions, and punchy visual hooks.
            </p>

            <div className="feature-divider"></div>

            <ul className="package-features-premium">
              <li>
                <span className="check-icon-circle check-cyan">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span><strong>Up to 90 seconds</strong> finished cut</span>
              </li>
              <li>
                <span className="check-icon-circle check-cyan">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>Dynamic word-by-word animated captions</span>
              </li>
              <li>
                <span className="check-icon-circle check-cyan">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>Sound effects (whooshes, risers & beat drops)</span>
              </li>
              <li>
                <span className="check-icon-circle check-cyan">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>Vibrant color grading & skin tone balancing</span>
              </li>
              <li>
                <span className="check-icon-circle check-cyan">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>4K 60FPS crisp vertical export</span>
              </li>
              <li>
                <span className="check-icon-circle check-cyan">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span><strong>2 Revision Cycles</strong> included free</span>
              </li>
            </ul>

            <div className="pricing-cta-premium">
              <a
                href="https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20order%20the%20Short%20Reel%20Editing%20package%20(₹600)."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-pricing btn-cyan btn-block pulse-on-hover"
              >
                <i className="fa-brands fa-whatsapp"></i> Order Short Reel
              </a>
            </div>

            {/* Bottom Glow Laser Accent */}
            <div className="card-bottom-glow-bar glow-cyan"></div>
          </div>

          {/* Package 2: Long Video Album */}
          <div className="pricing-card-premium card-glow-purple stagger-2 scroll-reveal">

            <div className="pricing-card-top">
              <span className="pricing-badge-luxury badge-purple">
                <i className="fa-solid fa-film"></i> LONG FORMAT
              </span>
              <span className="delivery-time-pill pill-purple">
                <i className="fa-regular fa-clock"></i> 48h Delivery
              </span>
            </div>

            <h3 className="package-name">Long Video Album</h3>
            <p className="package-target">Weddings, Music Videos, Vlogs & Documentaries</p>

            <div className="price-box">
              <span className="currency">₹</span>
              <span className="price price-purple">3000</span>
              <span className="duration">/ video</span>
            </div>

            <p className="package-desc">
              Comprehensive story-driven cinematic production featuring multi-track acoustic audio design, cinematic speed ramps, and Hollywood-grade color palettes.
            </p>

            <div className="feature-divider"></div>

            <ul className="package-features-premium">
              <li>
                <span className="check-icon-circle check-purple">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span><strong>Full length narrative</strong> (up to 15 mins)</span>
              </li>
              <li>
                <span className="check-icon-circle check-purple">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>Emotional storytelling & pacing curve</span>
              </li>
              <li>
                <span className="check-icon-circle check-purple">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>Advanced cinematic LUT grading & correction</span>
              </li>
              <li>
                <span className="check-icon-circle check-purple">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>Full multi-track vocal leveling & sound mixing</span>
              </li>
              <li>
                <span className="check-icon-circle check-purple">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>Smooth speed ramping & whip transitions</span>
              </li>
              <li>
                <span className="check-icon-circle check-purple">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span><strong>3 Revision Cycles</strong> + raw project files</span>
              </li>
            </ul>

            <div className="pricing-cta-premium">
              <a
                href="https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20order%20the%20Long%20Video%20Album%20package%20(₹3000)."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-pricing btn-purple btn-block pulse-on-hover"
              >
                <i className="fa-brands fa-whatsapp"></i> Order Long Album
              </a>
            </div>

            {/* Bottom Glow Laser Accent */}
            <div className="card-bottom-glow-bar glow-purple"></div>
          </div>

          {/* Package 3: Paid Promotion & Brand Collab */}
          <div className="pricing-card-premium card-glow-emerald stagger-3 scroll-reveal">
            <div className="pricing-card-top">
              <span className="pricing-badge-luxury badge-emerald">
                <i className="fa-solid fa-handshake"></i> SPONSOR COLLAB
              </span>
              <span className="delivery-time-pill pill-emerald">
                <i className="fa-solid fa-chart-line"></i> 50K+ Reach
              </span>
            </div>

            <h3 className="package-name">Paid Promotion & Collab</h3>
            <p className="package-target">Brands, Startups, SaaS Apps & Creators</p>

            <div className="price-box">
              <span className="price price-emerald">DM</span>
              <span className="duration">/ for Collaboration</span>
            </div>

            <p className="package-desc">
              Designed for products looking for organic reach, authentic creator advocacy, and published co-author posts with tracked conversion bio-links.
            </p>

            <div className="feature-divider"></div>

            <ul className="package-features-premium">
              <li>
                <span className="check-icon-circle check-emerald">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span><strong>1 Dedicated Sponsored Reel</strong> authored by Bikash</span>
              </li>
              <li>
                <span className="check-icon-circle check-emerald">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>Instagram Co-Author & Tagged Collab Post</span>
              </li>
              <li>
                <span className="check-icon-circle check-emerald">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>24h Active Story blast with Link Sticker</span>
              </li>
              <li>
                <span className="check-icon-circle check-emerald">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>Scripting, hook architecture & product b-roll</span>
              </li>
              <li>
                <span className="check-icon-circle check-emerald">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>Complete 4K editing & sound design included</span>
              </li>
              <li>
                <span className="check-icon-circle check-emerald">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>Targeted creator & tech demographic delivery</span>
              </li>
            </ul>

            <div className="pricing-cta-premium">
              <a
                href="https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20collaborate%20for%20a%20Paid%20Promotion%20/%20Brand%20Sponsorship."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-pricing btn-emerald btn-block pulse-on-hover"
              >
                <i className="fa-brands fa-whatsapp"></i> DM for Brand Collab
              </a>
            </div>

            {/* Bottom Glow Laser Accent */}
            <div className="card-bottom-glow-bar glow-emerald"></div>
          </div>
        </div>

        {/* Studio Service Guarantees Ribbon */}
        <div className="pricing-guarantee-ribbon scroll-reveal">
          <div className="guarantee-box">
            <div className="guarantee-icon-wrap icon-cyan">
              <i className="fa-solid fa-shield-heart"></i>
            </div>
            <div className="guarantee-text">
              <h4>100% Satisfaction</h4>
              <p>Free revisions until your vision is perfectly delivered.</p>
            </div>
          </div>

          <div className="guarantee-box">
            <div className="guarantee-icon-wrap icon-purple">
              <i className="fa-solid fa-bolt-lightning"></i>
            </div>
            <div className="guarantee-text">
              <h4>24–48h Rapid Delivery</h4>
              <p>Direct Google Drive & WhatsApp private download links.</p>
            </div>
          </div>

          <div className="guarantee-box">
            <div className="guarantee-icon-wrap icon-emerald">
              <i className="fa-solid fa-lock"></i>
            </div>
            <div className="guarantee-text">
              <h4>Transparent Milestones</h4>
              <p>50% advance to start, 50% post final review approval.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

