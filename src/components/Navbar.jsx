import React, { useState, useEffect } from 'react';

export default function Navbar({ activeSection: externalActiveSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [internalActiveSection, setInternalActiveSection] = useState('hero');

  const activeSection = externalActiveSection || internalActiveSection;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (!externalActiveSection) {
        const sections = [
          'hero',
          'what-i-do',
          'about',
          'media-kit',
          'portfolio',
          'services',
          'contact',
        ];
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
              setInternalActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [externalActiveSection]);

  // Keydown ESC to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuActive) {
        setMenuActive(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuActive]);

  const handleLinkClick = (e, id) => {
    setMenuActive(false);
    if (onNavigate) {
      e.preventDefault();
      onNavigate(id);
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="main-header">
      <div className="nav-container">
        <a
          href="#hero"
          className="logo"
          onClick={(e) => handleLinkClick(e, 'hero')}
        >
          <span className="logo-accent">BIKASH</span>SUNA
        </a>

        {/* Backdrop for mobile drawer */}
        {menuActive && (
          <div
            className="nav-drawer-backdrop"
            onClick={() => setMenuActive(false)}
            aria-hidden="true"
          />
        )}

        <nav className={`nav-menu ${menuActive ? 'active' : ''}`} id="nav-menu">
          <ul>
            <li>
              <a
                href="#hero"
                className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'hero')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#what-i-do"
                className={`nav-link ${activeSection === 'what-i-do' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'what-i-do')}
              >
                What I Do
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#media-kit"
                className={`nav-link ${activeSection === 'media-kit' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'media-kit')}
              >
                Media Kit
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'portfolio')}
              >
                Showreels
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'services')}
              >
                Packages
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, 'contact')}
              >
                Contact
              </a>
            </li>
            <li className="mobile-menu-cta-item">
              <a
                href="#contact"
                className="btn btn-primary btn-block mobile-menu-cta-btn"
                onClick={(e) => handleLinkClick(e, 'contact')}
              >
                <i className="fa-solid fa-handshake"></i> Collab / Hire
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a
            href="#contact"
            className="btn btn-nav-cta"
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            <i className="fa-solid fa-handshake"></i> Collab / Hire
          </a>
          <button
            className="mobile-toggle"
            id="mobile-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuActive(!menuActive)}
          >
            <i className={`fa-solid ${menuActive ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
