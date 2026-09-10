import React, { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const upiNumber = '9360870164';

  const handleCopy = () => {
    navigator.clipboard.writeText(upiNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="contact-section section-padding" id="contact">
      {/* Subtle ambient backlights */}
      <div className="contact-ambient-glow glow-left"></div>
      <div className="contact-ambient-glow glow-right"></div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header scroll-reveal">
          <span className="section-subtitle">GET IN TOUCH & PAY</span>
          <h2 className="section-title">Start Your Project Today</h2>
          <div className="title-underline"></div>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="contact-grid">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Contact Information                         */}
          {/* ========================================================= */}
          <div className="contact-info-card scroll-reveal">
            <h3 className="contact-heading">Contact Information</h3>
            <p className="contact-intro">
              Have an idea or raw footage that needs visual magic? Reach out on phone or social media
              to discuss rates, storyboards, or brand sponsorships.
            </p>

            <div className="contact-details-list">
              {/* Highlighted Item: Brand Inquiries & Collabs */}
              <a
                href="https://wa.me/919360870164?text=Hi%20Bikash!%20I%20represent%20a%20brand%20and%20want%20to%20collaborate%20for%20a%20paid%20promotion."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-row-item collab-highlight-row"
              >
                <div className="contact-icon-box icon-cyan">
                  <i className="fa-solid fa-bullhorn"></i>
                </div>
                <div className="contact-row-text">
                  <span className="contact-label label-cyan">BRAND INQUIRIES & COLLABS</span>
                  <span className="contact-value">
                    WhatsApp Sponsor Desk{' '}
                    <i className="fa-solid fa-arrow-up-right-from-square row-arrow"></i>
                  </span>
                </div>
              </a>

              {/* Mobile Call */}
              <a href="tel:9360870164" className="contact-row-item">
                <div className="contact-icon-box icon-blue">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="contact-row-text">
                  <span className="contact-label">MOBILE CALL</span>
                  <span className="contact-value">+919360870164</span>
                </div>
              </a>

              {/* Instagram Profile */}
              <a
                href="https://instagram.com/bikash_suna_07"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-row-item"
              >
                <div className="contact-icon-box icon-instagram">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="contact-row-text">
                  <span className="contact-label">INSTAGRAM PROFILE</span>
                  <span className="contact-value">
                    @bikash_suna_07{' '}
                    <i className="fa-solid fa-arrow-up-right-from-square row-arrow"></i>
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="contact-row-item contact-row-static">
                <div className="contact-icon-box icon-purple">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-row-text">
                  <span className="contact-label">LOCATION</span>
                  <span className="contact-value">Odisha, Jharsuguda</span>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="contact-social-row">
              <a
                href="https://instagram.com/bikash_suna_07"
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle-link ig-circle"
                aria-label="Instagram Profile"
                title="Instagram Profile"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/919360870164"
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle-link wa-circle"
                aria-label="WhatsApp Chat"
                title="WhatsApp Chat"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="tel:9360870164"
                className="social-circle-link phone-circle"
                aria-label="Call Mobile"
                title="Call Mobile"
              >
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Quick & Easy Payments                       */}
          {/* ========================================================= */}
          <div className="payment-card scroll-reveal">
            <div className="payment-header-block">
              <h3 className="payment-heading">Quick & Easy Payments</h3>
              <p className="payment-intro">Direct payments accepted via GPay, PhonePe, or Paytm UPI.</p>
            </div>

            <div className="payment-body-block">
              {/* UPI Input with Integrated Copy Button */}
              <div className="upi-payment-box">
                <span className="upi-field-label">UPI PHONE / PAYMENT NUMBER</span>
                <div className="upi-input-wrapper">
                  <input
                    type="text"
                    value={upiNumber}
                    readOnly
                    className="upi-number-field"
                    aria-label="UPI Payment Number"
                  />
                  <button
                    type="button"
                    className="btn-copy-upi"
                    onClick={handleCopy}
                    aria-label="Copy UPI number"
                    title="Copy to clipboard"
                  >
                    <i
                      className={copied ? 'fa-solid fa-check text-emerald' : 'fa-regular fa-copy'}
                      style={{ color: copied ? '#10b981' : '' }}
                    ></i>
                  </button>
                  <span className={`copy-toast-tooltip ${copied ? 'show' : ''}`}>Copied!</span>
                </div>
              </div>

              {/* Stylized QR Code Scanner Container */}
              <div className="qr-scanner-box">
                <div className="qr-viewport">
                  {/* 4 Viewfinder Corner Brackets */}
                  <span className="qr-corner qr-tl"></span>
                  <span className="qr-corner qr-tr"></span>
                  <span className="qr-corner qr-bl"></span>
                  <span className="qr-corner qr-br"></span>

                  {/* Sweeping Laser Line */}
                  <div className="qr-laser-line"></div>

                  {/* High-Contrast SVG QR Matrix */}
                  <svg
                    className="qr-matrix-svg"
                    viewBox="0 0 160 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Dark Background */}
                    <rect width="160" height="160" rx="10" fill="#0b0e17" />

                    {/* Corner Position Patterns */}
                    {/* Top-Left */}
                    <rect x="14" y="14" width="38" height="38" rx="5" fill="#18152e" stroke="#c084fc" strokeWidth="3" />
                    <rect x="22" y="22" width="22" height="22" rx="3" fill="#0b0e17" />
                    <rect x="27" y="27" width="12" height="12" rx="2" fill="#c084fc" />

                    {/* Top-Right */}
                    <rect x="108" y="14" width="38" height="38" rx="5" fill="#18152e" stroke="#c084fc" strokeWidth="3" />
                    <rect x="116" y="22" width="22" height="22" rx="3" fill="#0b0e17" />
                    <rect x="121" y="27" width="12" height="12" rx="2" fill="#c084fc" />

                    {/* Bottom-Left */}
                    <rect x="14" y="108" width="38" height="38" rx="5" fill="#18152e" stroke="#c084fc" strokeWidth="3" />
                    <rect x="22" y="116" width="22" height="22" rx="3" fill="#0b0e17" />
                    <rect x="27" y="121" width="12" height="12" rx="2" fill="#c084fc" />

                    {/* Alignment Pattern Bottom-Right */}
                    <rect x="112" y="112" width="24" height="24" rx="3" fill="#18152e" stroke="#38bdf8" strokeWidth="2.5" />
                    <rect x="119" y="119" width="10" height="10" rx="2" fill="#0b0e17" />
                    <rect x="122" y="122" width="4" height="4" rx="1" fill="#38bdf8" />

                    {/* QR Modules (Timing & Data) */}
                    <g fill="#f8fafc" opacity="0.9">
                      {/* Timing bars */}
                      <rect x="58" y="18" width="5" height="5" rx="1" />
                      <rect x="68" y="18" width="5" height="5" rx="1" fill="#c084fc" />
                      <rect x="78" y="18" width="5" height="5" rx="1" />
                      <rect x="88" y="18" width="5" height="5" rx="1" fill="#38bdf8" />
                      <rect x="98" y="18" width="5" height="5" rx="1" />

                      <rect x="18" y="58" width="5" height="5" rx="1" />
                      <rect x="18" y="68" width="5" height="5" rx="1" fill="#c084fc" />
                      <rect x="18" y="78" width="5" height="5" rx="1" />
                      <rect x="18" y="88" width="5" height="5" rx="1" fill="#38bdf8" />
                      <rect x="18" y="98" width="5" height="5" rx="1" />

                      {/* Middle Data Modules */}
                      <rect x="28" y="58" width="6" height="6" rx="1" fill="#38bdf8" />
                      <rect x="38" y="58" width="6" height="6" rx="1" />
                      <rect x="48" y="58" width="6" height="6" rx="1" fill="#c084fc" />
                      <rect x="28" y="70" width="6" height="6" rx="1" />
                      <rect x="38" y="70" width="6" height="6" rx="1" fill="#38bdf8" />
                      <rect x="48" y="70" width="6" height="6" rx="1" />
                      <rect x="28" y="82" width="6" height="6" rx="1" fill="#c084fc" />
                      <rect x="38" y="82" width="6" height="6" rx="1" />
                      <rect x="48" y="82" width="6" height="6" rx="1" fill="#38bdf8" />

                      <rect x="58" y="28" width="6" height="6" rx="1" fill="#c084fc" />
                      <rect x="70" y="28" width="6" height="6" rx="1" />
                      <rect x="82" y="28" width="6" height="6" rx="1" fill="#38bdf8" />
                      <rect x="94" y="28" width="6" height="6" rx="1" />

                      <rect x="58" y="40" width="6" height="6" rx="1" />
                      <rect x="70" y="40" width="6" height="6" rx="1" fill="#c084fc" />
                      <rect x="82" y="40" width="6" height="6" rx="1" />
                      <rect x="94" y="40" width="6" height="6" rx="1" fill="#38bdf8" />

                      <rect x="58" y="112" width="6" height="6" rx="1" fill="#38bdf8" />
                      <rect x="70" y="112" width="6" height="6" rx="1" />
                      <rect x="82" y="112" width="6" height="6" rx="1" fill="#c084fc" />
                      <rect x="94" y="112" width="6" height="6" rx="1" />

                      <rect x="58" y="124" width="6" height="6" rx="1" />
                      <rect x="70" y="124" width="6" height="6" rx="1" fill="#38bdf8" />
                      <rect x="82" y="124" width="6" height="6" rx="1" />
                      <rect x="94" y="124" width="6" height="6" rx="1" fill="#c084fc" />

                      <rect x="58" y="136" width="6" height="6" rx="1" fill="#c084fc" />
                      <rect x="70" y="136" width="6" height="6" rx="1" />
                      <rect x="82" y="136" width="6" height="6" rx="1" fill="#38bdf8" />
                      <rect x="94" y="136" width="6" height="6" rx="1" />

                      <rect x="108" y="58" width="6" height="6" rx="1" fill="#38bdf8" />
                      <rect x="120" y="58" width="6" height="6" rx="1" />
                      <rect x="132" y="58" width="6" height="6" rx="1" fill="#c084fc" />
                      <rect x="108" y="70" width="6" height="6" rx="1" />
                      <rect x="120" y="70" width="6" height="6" rx="1" fill="#38bdf8" />
                      <rect x="132" y="70" width="6" height="6" rx="1" />
                      <rect x="108" y="82" width="6" height="6" rx="1" fill="#c084fc" />
                      <rect x="120" y="82" width="6" height="6" rx="1" />
                      <rect x="132" y="82" width="6" height="6" rx="1" fill="#38bdf8" />
                      <rect x="108" y="94" width="6" height="6" rx="1" />
                      <rect x="120" y="94" width="6" height="6" rx="1" fill="#c084fc" />
                      <rect x="132" y="94" width="6" height="6" rx="1" />
                    </g>
                  </svg>

                  {/* Center Rupee Emblem Disc */}
                  <div className="qr-center-emblem">
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                  </div>
                </div>

                <span className="qr-instruction-text">Scan with GPay / PhonePe / Paytm</span>
              </div>

              {/* Supported UPI Apps Pills */}
              <div className="upi-apps-dock">
                <span className="upi-app-pill gpay-pill">
                  <i className="fa-brands fa-google-pay"></i> GPay
                </span>
                <span className="upi-app-pill phonepe-pill">
                  <i className="fa-solid fa-wallet"></i> PhonePe
                </span>
                <span className="upi-app-pill paytm-pill">
                  <i className="fa-solid fa-receipt"></i> Paytm
                </span>
                <span className="upi-app-pill bhim-pill">
                  <i className="fa-solid fa-building-columns"></i> BHIM UPI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
