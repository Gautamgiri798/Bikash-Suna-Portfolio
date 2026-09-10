import React from 'react';

export default function Footer() {
  return (
    <footer className="main-footer" id="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span className="footer-logo-accent">BIKASH</span>
              <span className="footer-logo-main">SUNA</span>
            </a>
            <p className="footer-desc">
              Professional video editing and content creator services helping brands and digital
              creators tell visual stories that convert and engage.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="footer-links">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#services">Services &amp; Collabs</a>
              </li>
              <li>
                <a href="#contact">Contact &amp; WhatsApp</a>
              </li>
            </ul>
          </div>

          {/* Get in Touch Column */}
          <div className="footer-contact-info">
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <a href="tel:+919360870164" className="footer-contact-link">
                  <i className="fa-solid fa-phone footer-icon" aria-hidden="true" />
                  <span>+91 9360870164</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bikash_suna_07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link"
                >
                  <i className="fa-brands fa-instagram footer-icon" aria-hidden="true" />
                  <span>@bikash_suna_07</span>
                </a>
              </li>
              <li>
                <div className="footer-contact-static">
                  <i className="fa-solid fa-location-dot footer-icon" aria-hidden="true" />
                  <span>Jharsuguda, Odisha</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Bikash Suna. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
