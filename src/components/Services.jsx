import React from 'react';

export default function Services() {
  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        <div className="section-header scroll-reveal">
          <span className="section-subtitle">SERVICES, COLLABS & PRICING</span>
          <h2 className="section-title">Transparent & Affordable Packages</h2>
          <div className="title-underline"></div>
        </div>

        <div className="services-grid">
          {/* Package 1 */}
          <div className="pricing-card stagger-1 scroll-reveal">
            <div className="pricing-badge">Short Format</div>
            <h3 className="package-name">Short Reel Edit</h3>
            <div className="price-box">
              <span className="currency">₹</span>
              <span className="price">600</span>
              <span className="duration">/ video</span>
            </div>
            <p className="package-desc">
              Perfect for Instagram Reels, YouTube Shorts, and TikToks. Engineered to go viral and
              capture attention instantly.
            </p>

            <ul className="package-features">
              <li>
                <i className="fa-solid fa-check"></i> Up to 2 Minutes Length
              </li>
              <li>
                <i className="fa-solid fa-check"></i> Dynamic Caption Styling
              </li>
              <li>
                <i className="fa-solid fa-check"></i> Sound Effects & Beats Sync
              </li>
              <li>
                <i className="fa-solid fa-check"></i> Color Grading & Correction
              </li>
              <li>
                <i className="fa-solid fa-check"></i> High Resolution Export
              </li>
              <li>
                <i className="fa-solid fa-check"></i> 2 Revision Cycles
              </li>
            </ul>

            <div className="pricing-cta">
              <a
                href="https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20order%20a%20Short%20Reel%20editing%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-block"
              >
                Order Short Reel
              </a>
            </div>
          </div>

          {/* Package 2 */}
          <div className="pricing-card highlighted stagger-2 scroll-reveal">
            <div className="pricing-badge recommended">Best Seller</div>
            <h3 className="package-name">Long Video Album</h3>
            <div className="price-box">
              <span className="currency">₹</span>
              <span className="price">3000</span>
              <span className="duration">/ video</span>
            </div>
            <p className="package-desc">
              Ideal for wedding highlight videos, music videos, vlogs, documentaries, and travel
              albums. Comprehensive story-driven edits.
            </p>

            <ul className="package-features">
              <li>
                <i className="fa-solid fa-check"></i> Fully Customized Length
              </li>
              <li>
                <i className="fa-solid fa-check"></i> Narrative & Storytelling Pacing
              </li>
              <li>
                <i className="fa-solid fa-check"></i> Advanced Color Grading (LUTs)
              </li>
              <li>
                <i className="fa-solid fa-check"></i> Full Multi-track Sound Mixing
              </li>
              <li>
                <i className="fa-solid fa-check"></i> Cinematic Motion Transitions
              </li>
              <li>
                <i className="fa-solid fa-check"></i> 3 Revision Cycles
              </li>
            </ul>

            <div className="pricing-cta">
              <a
                href="https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20order%20a%20Long%20Video%20Album%20editing%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-block"
              >
                Order Long Album
              </a>
            </div>
          </div>

          {/* Package 3: Brand Collab & Paid Promotion */}
          <div className="pricing-card collab-card stagger-3 scroll-reveal">
            <div className="pricing-badge promo-badge">
              <i className="fa-solid fa-bolt"></i> Sponsor Collab
            </div>
            <h3 className="package-name">Paid Promotion & Collab</h3>
            <div className="price-box">
              <span className="currency">₹</span>
              <span className="price">1500</span>
              <span className="duration">/ campaign</span>
            </div>
            <p className="package-desc">
              Designed for brands, startups, music creators, and products looking for organic reach,
              authentic creator advocacy, and sponsored reels.
            </p>

            <ul className="package-features">
              <li>
                <i className="fa-solid fa-check"></i> 1 Dedicated Sponsored Reel
              </li>
              <li>
                <i className="fa-solid fa-check"></i> Co-Author / Tagged Collab Post
              </li>
              <li>
                <i className="fa-solid fa-check"></i> 24h Active Story with Swipe-Up / Link
              </li>
              <li>
                <i className="fa-solid fa-check"></i> High-Energy Hook & Scripting
              </li>
              <li>
                <i className="fa-solid fa-check"></i> Pro Video Production Included
              </li>
              <li>
                <i className="fa-solid fa-check"></i> Direct Traffic to Your Brand
              </li>
            </ul>

            <div className="pricing-cta">
              <a
                href="https://wa.me/919360870164?text=Hi%20Bikash!%20I%20want%20to%20book%20a%20Paid%20Promotion%20/%20Brand%20Collab%20campaign."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent btn-block"
              >
                <i className="fa-solid fa-handshake"></i> Book Brand Collab
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
