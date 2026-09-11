import React, { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const upiId = '9360870164@superyes';
  const upiNumber = '9360870164';

  const fallbackCopy = (text) => {
    try {
      const el = document.createElement('textarea');
      el.value = text;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Fallback copy failed', err);
    }
  };

  const handleCopy = (textToCopy = upiId) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => fallbackCopy(textToCopy));
    } else {
      fallbackCopy(textToCopy);
    }
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
              <p className="payment-intro">Direct payments accepted via GPay, PhonePe, Paytm, or any UPI app.</p>
            </div>

            <div className="payment-body-block">
              {/* UPI Input with Integrated Copy Button */}
              <div className="upi-payment-box">
                <div className="upi-label-row">
                  <span className="upi-field-label">OFFICIAL UPI ID / VPA</span>
                  <span className="upi-verified-badge">
                    <i className="fa-solid fa-circle-check"></i> Verified
                  </span>
                </div>
                <div className="upi-input-wrapper">
                  <input
                    type="text"
                    value={upiId}
                    readOnly
                    className="upi-number-field"
                    aria-label="Official UPI ID"
                  />
                  <button
                    type="button"
                    className="btn-copy-upi"
                    onClick={() => handleCopy(upiId)}
                    aria-label="Copy UPI ID"
                    title="Copy UPI ID to clipboard"
                  >
                    <i
                      className={copied ? 'fa-solid fa-check text-emerald' : 'fa-regular fa-copy'}
                      style={{ color: copied ? '#10b981' : '' }}
                    ></i>
                    <span className="btn-copy-label">{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                  <span className={`copy-toast-tooltip ${copied ? 'show' : ''}`}>Copied UPI ID!</span>
                </div>

                {/* Beneficiary Name Row */}
                <div className="upi-beneficiary-row">
                  <span className="beneficiary-title">Payee Name:</span>
                  <span className="beneficiary-name">BIKASH SUNA</span>
                  <span className="beneficiary-app">super.money</span>
                </div>
              </div>

              {/* Stylized QR Code Scanner Container with Real Super.money QR */}
              <div className="qr-scanner-box">
                <div className="qr-viewport">
                  {/* 4 Viewfinder Corner Brackets */}
                  <span className="qr-corner qr-tl"></span>
                  <span className="qr-corner qr-tr"></span>
                  <span className="qr-corner qr-bl"></span>
                  <span className="qr-corner qr-br"></span>

                  {/* Sweeping Laser Line */}
                  <div className="qr-laser-line"></div>

                  {/* Real, Clean & Scannable QR Code */}
                  <img
                    src="assets/payment-qr-code.png"
                    alt="Scan to pay Bikash Suna via UPI (9360870164@superyes)"
                    className="payment-qr-img"
                    loading="eager"
                  />
                </div>

                <span className="qr-instruction-text">
                  <i className="fa-solid fa-qrcode"></i> Scan with GPay / PhonePe / Paytm / super.money
                </span>

                {/* Instant Mobile Deep Link */}
                <a
                  href="upi://pay?pa=9360870164@superyes&pn=Bikash%20Suna&cu=INR"
                  className="upi-direct-intent-btn"
                  title="Click to open your default UPI payment app"
                >
                  <i className="fa-solid fa-bolt"></i> Tap to Pay via UPI App
                </a>
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
                <span className="upi-app-pill super-pill">
                  <i className="fa-solid fa-bolt"></i> super.money
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
