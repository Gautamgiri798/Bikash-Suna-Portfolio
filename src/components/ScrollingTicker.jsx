import React from 'react';

const tickerItems = [
  { icon: 'fa-clapperboard', text: 'Cinematic 4K Editing' },
  { icon: 'fa-bolt', text: 'Velocity Curves & Speed Ramps' },
  { icon: 'fa-closed-captioning', text: 'Kinetic Typography & Captions' },
  { icon: 'fa-wand-magic-sparkles', text: 'Color Grading & LUTs' },
  { icon: 'fa-volume-high', text: 'Sound Design & SFX Mastering' },
  { icon: 'fa-handshake', text: 'Brand Collabs & Sponsored Reels' },
  { icon: 'fa-fire', text: 'Viral Reels & Shorts' },
  { icon: 'fa-layer-group', text: 'CapCut & Premiere Pro Specialist' },
];

export default function ScrollingTicker() {
  return (
    <div className="scrolling-ticker-wrapper" aria-hidden="true">
      <div className="scrolling-ticker-track">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="ticker-item">
            <i className={`fa-solid ${item.icon} ticker-icon`} />
            <span className="ticker-text">{item.text}</span>
            <span className="ticker-dot">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
