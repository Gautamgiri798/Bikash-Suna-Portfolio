import React from 'react';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#hero" className="logo">
              <span className="logo-accent">BIKASH</span>SUNA
            </a>
            <p>
              Professional video editing and content creator services helping brands and digital
              creators tell visual stories that convert and engage.
            </p>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
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
                <a href="#services">Services & Collabs</a>
              </li>
              <li>
                <a href="#contact">Contact & WhatsApp</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact-info">
            <h4>Get in Touch</h4>
            <p>
              <i className="fa-solid fa-phone"></i> +91 9360870164
            </p>
            <p>
              <i className="fa-brands fa-instagram"></i> @bikash_suna_07
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> Jharsuguda, Odisha
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Bikash Suna. All Rights Reserved. Powered by React &
            Three.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
