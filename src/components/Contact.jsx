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
      <div className="container">
        <div className="section-header scroll-reveal">
          <span className="section-subtitle">GET IN TOUCH & PAY</span>
          <h2 className="section-title">Start Your Project Today</h2>
          <div className="title-underline"></div>
        </div>

        <div className="contact-grid">
          {/* Contact info & Socials */}
          <div className="contact-info-card scroll-reveal">
            <h3>Contact Information</h3>
            <p>
              Have an idea or raw footage that needs visual magic? Reach out on phone or social
              media to discuss rates, storyboards, or brand sponsorships.
            </p>

            <div className="contact-details">
              <a
                href="https://wa.me/919360870164?text=Hi%20Bikash!%20I%20represent%20a%20brand%20and%20want%20to%20collaborate%20for%20a%20paid%20promotion."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail-item collab-highlight-item"
              >
                <div className="icon-box collab-icon">
                  <i className="fa-solid fa-bullhorn"></i>
                </div>
                <div>
                  <span className="contact-label">Brand Inquiries & Collabs</span>
                  <span className="contact-value">
                    WhatsApp Sponsor Desk{' '}
                    <i
                      className="fa-solid fa-arrow-up-right-from-square"
                      style={{ fontSize: '0.75rem', marginLeft: '0.25rem' }}
                    ></i>
                  </span>
                </div>
              </a>

              <a href="tel:9360870164" className="contact-detail-item">
                <div className="icon-box">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <span className="contact-label">Mobile Call</span>
                  <span className="contact-value">+91 9360870164</span>
                </div>
              </a>

              <a
                href="https://instagram.com/bikash_suna_07"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail-item"
              >
                <div className="icon-box">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div>
                  <span className="contact-label">Instagram Profile</span>
                  <span className="contact-value">@bikash_suna_07</span>
                </div>
              </a>

              <div className="contact-detail-item">
                <div className="icon-box">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Odisha, Jharsuguda</span>
                </div>
              </div>
            </div>

            <div className="social-links-row">
              <a
                href="https://instagram.com/bikash_suna_07"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/919360870164"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="tel:9360870164" aria-label="Phone">
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>

          {/* Payments Info & UPI QR */}
          <div className="payment-card scroll-reveal">
            <div className="payment-header">
              <h3>Quick & Easy Payments</h3>
              <p>Direct payments accepted via GPay, PhonePe, or Paytm UPI.</p>
            </div>

            <div className="payment-body">
              <div className="upi-number-box">
                <span className="upi-label">UPI Phone / Payment Number</span>
                <div className="copy-input-wrapper">
                  <input type="text" value={upiNumber} readOnly />
                  <button
                    className="btn-copy"
                    onClick={handleCopy}
                    aria-label="Copy UPI number"
                  >
                    <i
                      className={
                        copied
                          ? 'fa-solid fa-check text-emerald'
                          : 'fa-regular fa-copy'
                      }
                      style={{ color: copied ? '#10b981' : '' }}
                    ></i>
                  </button>
                  <span className={`copy-tooltip ${copied ? 'show' : ''}`}>Copied!</span>
                </div>
              </div>

              {/* Stylized QR Code Scanner */}
              <div className="qr-container">
                <div className="qr-box">
                  <svg className="qr-svg" viewBox="0 0 100 100">
                    <path
                      d="M 10 10 L 25 10 M 10 10 L 10 25"
                      stroke="#7c3aed"
                      strokeWidth="3"
                      fill="none"
                    />
                    <path
                      d="M 90 10 L 75 10 M 90 10 L 90 25"
                      stroke="#7c3aed"
                      strokeWidth="3"
                      fill="none"
                    />
                    <path
                      d="M 10 90 L 25 90 M 10 90 L 10 75"
                      stroke="#7c3aed"
                      strokeWidth="3"
                      fill="none"
                    />
                    <path
                      d="M 90 90 L 75 90 M 90 90 L 90 75"
                      stroke="#7c3aed"
                      strokeWidth="3"
                      fill="none"
                    />

                    <rect x="20" y="20" width="15" height="15" fill="#f8fafc" rx="2" />
                    <rect x="25" y="25" width="5" height="5" fill="#0d0f12" />
                    <rect x="65" y="20" width="15" height="15" fill="#f8fafc" rx="2" />
                    <rect x="70" y="25" width="5" height="5" fill="#0d0f12" />
                    <rect x="20" y="65" width="15" height="15" fill="#f8fafc" rx="2" />
                    <rect x="25" y="70" width="5" height="5" fill="#0d0f12" />

                    <rect x="45" y="20" width="6" height="6" fill="#7c3aed" rx="1" />
                    <rect x="53" y="28" width="4" height="4" fill="#2563eb" rx="1" />
                    <rect x="42" y="38" width="8" height="4" fill="#2563eb" rx="1" />
                    <rect x="65" y="45" width="4" height="12" fill="#7c3aed" rx="1" />
                    <rect x="20" y="45" width="10" height="4" fill="#7c3aed" rx="1" />
                    <rect x="35" y="52" width="6" height="6" fill="#2563eb" rx="1" />
                    <rect x="48" y="65" width="12" height="4" fill="#2563eb" rx="1" />
                    <rect x="75" y="65" width="6" height="6" fill="#7c3aed" rx="1" />
                    <rect x="45" y="77" width="4" height="8" fill="#7c3aed" rx="1" />
                    <rect x="65" y="75" width="6" height="4" fill="#2563eb" rx="1" />
                  </svg>
                  <div className="qr-icon-center">
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                  </div>
                </div>
                <span className="qr-text">Scan with GPay / PhonePe / Paytm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
