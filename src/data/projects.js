/**
 * =========================================================================
 * BIKASH SUNA - PORTFOLIO SHOWREEL PROJECTS
 * =========================================================================
 *
 * YOUR VIDEO FOLDERS IN THIS PROJECT:
 *
 * 📁 assets/videos/short-reels/   -> Put your Short Reels (MP4/WebM) here
 * 📁 assets/videos/long-videos/   -> Put your Long Video Albums here
 * 📁 assets/videos/brand-collabs/ -> Put your Brand Collabs / Sponsored Reels here
 *
 * HOW TO LINK A VIDEO:
 *
 * 1. For a Short Reel (in assets/videos/short-reels/):
 *    videoUrl: 'assets/videos/short-reels/my-reel-1.mp4'
 *
 * 2. For a Long Video (in assets/videos/long-videos/):
 *    videoUrl: 'assets/videos/long-videos/wedding-film.mp4'
 *
 * 3. For a Brand Collab (in assets/videos/brand-collabs/):
 *    videoUrl: 'assets/videos/brand-collabs/sponsor-reel.mp4'
 *
 * 4. Or use any YouTube / YouTube Shorts link:
 *    videoUrl: 'https://youtube.com/shorts/VIDEO_ID'
 * =========================================================================
 */

export const projects = [
  {
    id: 'reel-1',
    category: 'reel',
    title: 'Dynamic Motion & Beat-Sync Reel',
    desc: "High-energy visual cuts sync'd with electronic soundbeats, speed ramping, and stylized kinetic typography overlays.",
    img: 'assets/reel.jpg',
    videoUrl: '', // e.g., 'assets/videos/short-reels/your-reel.mp4'
    tags: ['Beat Sync', 'Speed Ramping', 'Kinetic SFX'],
    badge: 'Short Reel',
    color: 'cyan',
    icon: 'fa-bolt',
    duration: '0:32',
    quality: '4K • 60 FPS',
    metric: '🔥 68K+ Views',
  },
  {
    id: 'album-1',
    category: 'album',
    title: 'Babu Zaraa Bachke | Official Sambalpuri Rap MV',
    desc: 'Edited a high-energy Sambalpuri rap music video with cinematic color grading, performance-driven cuts, rhythmic pacing, and immersive sound design, transforming regional rap into a visually dynamic music experience.',
    img: 'assets/babu-zaraa-bachke.jpg',
    videoUrl: 'https://youtu.be/3lBV0PMO6ec',
    externalUrl: 'https://youtu.be/3lBV0PMO6ec',
    tags: ['Video Editing', 'Sambalpuri Rap', 'Music Video', 'Color Grading', 'Sound Design'],
    badge: 'Video Album',
    color: 'purple',
    icon: 'fa-film',
    duration: '2:20',
    quality: '4K Cinema • 24 FPS',
    metric: '🎵 Official MV',
  },
  {
    id: 'reel-2',
    category: 'reel',
    title: 'Neon Cyberpunk Gaming Highlights',
    desc: 'Intense high-FPS montage featuring rhythmic speed ramps, chromatic glitch transitions, and punchy visual impacts.',
    img: 'assets/hero.jpg',
    videoUrl: '', // e.g., 'assets/videos/short-reels/gaming-edit.mp4'
    style: { objectPosition: 'center bottom' },
    tags: ['Speed Ramps', 'VFX', 'Glitch FX'],
    badge: 'Short Reel',
    color: 'blue',
    icon: 'fa-gamepad',
    duration: '0:45',
    quality: '4K • 60 FPS',
    metric: '⚡ 42K+ Views',
  },
  {
    id: 'collab-1',
    category: 'collab',
    title: 'Creator Tech Unbox & Sponsored Reel',
    desc: 'High-converting sponsored showcase with retention-engineered hook, macro product b-roll, and story link stickers.',
    img: 'assets/reel.jpg',
    videoUrl: '', // e.g., 'assets/videos/brand-collabs/tech-collab.mp4'
    style: { filter: 'hue-rotate(50deg) saturate(1.2)' },
    tags: ['Paid Promotion', 'Brand Collab', 'Hook Retention'],
    badge: 'Brand Collab',
    color: 'emerald',
    icon: 'fa-handshake',
    duration: '0:28',
    quality: '4K UHD',
    metric: '🚀 50K+ Reach',
    isCollab: true,
  },
  {
    id: 'reel-3',
    category: 'reel',
    title: 'Urban Streetwear & Fast-Cut Reel',
    desc: 'Whip-pan camera wipes, dynamic frame matching, dynamic typography tracking, and bass-drop rhythmic synchronization.',
    img: 'assets/reel.jpg',
    videoUrl: '', // e.g., 'assets/videos/short-reels/streetwear-reel.mp4'
    style: { filter: 'contrast(1.15) brightness(1.05)' },
    tags: ['Whip Transitions', 'Typography', 'Bass Drops'],
    badge: 'Short Reel',
    color: 'gold',
    icon: 'fa-fire',
    duration: '0:38',
    quality: '4K • 60 FPS',
    metric: '🔥 35K+ Views',
  },
  {
    id: 'collab-2',
    category: 'collab',
    title: 'SaaS App Teaser & Feature Walkthrough',
    desc: 'High-energy screencast animation, punchy UI callouts, and kinetic sound design engineered for sponsor app conversions.',
    img: 'assets/hero.jpg',
    videoUrl: '', // e.g., 'assets/videos/brand-collabs/saas-promo.mp4'
    style: { objectPosition: 'center top' },
    tags: ['Sponsor Promo', 'UI Motion', 'Call to Action'],
    badge: 'Brand Collab',
    color: 'cyan',
    icon: 'fa-laptop-code',
    duration: '0:34',
    quality: '4K UHD',
    metric: '💼 4.8x ROI',
    isCollab: true,
  },
];
