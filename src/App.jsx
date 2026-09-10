import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollingTicker from './components/ScrollingTicker';
import DualPillars from './components/DualPillars';
import About from './components/About';
import CreatorMediaKit from './components/CreatorMediaKit';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const lenisRef = useRef(null);

  // Fast direct DOM refs for 0ms synchronous scroll tracking
  const circleIndicatorRef = useRef(null);
  const percentLabelRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    // 1. Initialize Lenis with fast, snappy responsiveness
    const lenis = new Lenis({
      duration: 0.85, // Fast & snappy response
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-grade exponential deceleration
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 1.8,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // 2. Sections to track for scroll position
    const sections = [
      'hero',
      'what-i-do',
      'about',
      'media-kit',
      'portfolio',
      'services',
      'contact',
    ];

    const circumference = 100.53;

    // Instantaneous 1:1 Scroll Handler - Zero Delay
    const handleLenisScroll = ({ scroll, limit, progress }) => {
      const height = limit > 0 ? limit : (document.documentElement.scrollHeight - window.innerHeight);
      const pct = height > 0
        ? Math.min(100, Math.max(0, (progress !== undefined ? progress * 100 : (scroll / height) * 100)))
        : 0;

      const strokeOffset = circumference - (circumference * pct) / 100;

      // 1. Direct synchronous mutation for instant circular dial tracking
      if (circleIndicatorRef.current) {
        circleIndicatorRef.current.style.strokeDashoffset = `${strokeOffset}`;
      }
      if (percentLabelRef.current) {
        percentLabelRef.current.textContent = `${Math.round(pct)}%`;
      }
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${pct / 100})`;
      }

      // 2. Only re-render React state when the visibility threshold is actually crossed
      const shouldShow = scroll > 300;
      setShowScrollTop((prev) => (prev !== shouldShow ? shouldShow : prev));

      // 3. Active section check
      const triggerPoint = window.innerHeight * 0.38;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            setActiveSection((prev) => (prev !== sections[i] ? sections[i] : prev));
            break;
          }
        }
      }
    };

    lenis.on('scroll', handleLenisScroll);

    // Initial sync
    handleLenisScroll({
      scroll: window.scrollY,
      limit: document.documentElement.scrollHeight - window.innerHeight,
      progress: 0,
    });

    // 3. Intercept all internal anchor clicks for unified smooth easing
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: -70, duration: 0.85 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // 4. Staggered Scroll-Driven Reveal Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.08,
      }
    );

    const revealElements = document.querySelectorAll(
      '.scroll-reveal, .reveal-on-scroll, .section-header, .pillar-card, .profile-simple-card, .about-portrait-wrapper, .intro-card, .intro-card-premium, .skill-item, .skill-item-premium, .mediakit-stat-card, .mediakit-stat-card-premium, .workflow-step-card, .workflow-card-premium, .pricing-card, .pricing-card-premium, .calculator-box, .contact-info-card, .payment-card'
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 0.85 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -70, duration: 0.85 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const circumference = 100.53;

  return (
    <div className="app-root">
      {/* Laser Top Neon Scroll Progress Bar with Glowing Head Dot */}
      <div className="scroll-progress-container" aria-hidden="true">
        <div
          ref={progressBarRef}
          className="scroll-progress-bar"
          style={{ transform: 'scaleX(0)' }}
        >
          <div className="scroll-progress-glow-head" />
        </div>
      </div>

      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main>
        <Hero />
        <ScrollingTicker />
        <DualPillars />
        <About />
        <CreatorMediaKit />
        <Portfolio />
        <Services />
        <Contact />
      </main>

      <Footer />

      {/* Interactive Floating WhatsApp Automation Concierge */}
      <FloatingWhatsApp />

      {/* Circular Live Progress Scroll-To-Top Dial with 0ms Instant Tracking */}
      <button
        type="button"
        className={`scroll-to-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
      >
        <svg className="scroll-progress-ring" viewBox="0 0 36 36" aria-hidden="true">
          <circle
            className="progress-ring-track"
            cx="18"
            cy="18"
            r="16"
          />
          <circle
            ref={circleIndicatorRef}
            className="progress-ring-indicator"
            cx="18"
            cy="18"
            r="16"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
          />
        </svg>
        <div className="scroll-btn-inner">
          <i className="fa-solid fa-arrow-up scroll-top-arrow" />
          <span ref={percentLabelRef} className="scroll-percent-label">
            0%
          </span>
        </div>
        <span className="scroll-btn-glow" />
      </button>
    </div>
  );
}
