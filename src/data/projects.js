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
    title: 'She Is Just My Best Friend | Sambalpuri Reel',
    desc: 'A playful Sambalpuri dialogue reel built around natural performances, expressive reactions, and relationship-driven storytelling. The edit combines conversational pacing, cinematic framing, clean transitions, and carefully timed visual cuts to create a relatable, engaging story with a light romantic and humorous tone.',
    img: 'assets/thumbnails/reel-1.jpg',
    videoUrl: '/videos/short-reels/bestfriend-reel.mp4',
    externalUrl: 'https://www.instagram.com/reel/DIx7upbzs2B/',
    tags: ['Dialogue Editing', 'Sambalpuri Reel', 'Storytelling', 'Cinematic Framing', 'Visual Pacing'],
    badge: 'Short Reel',
    color: 'cyan',
    icon: 'fa-bolt',
    duration: '1:13',
    quality: '4K • 60 FPS',
    metric: '🔥 62K+ Likes',
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
    title: 'Mor Maa 🫶🏻 | Emotional Sambalpuri Reel',
    desc: 'A heartfelt Sambalpuri mother-son story capturing simple, intimate moments with genuine emotion. The edit focuses on expressive close-ups, natural performances, gentle pacing, warm cinematic color grading, and carefully selected transitions to create an authentic visual tribute that communicates love, gratitude, and emotional connection.',
    img: 'assets/thumbnails/reel-2.jpg',
    videoUrl: '/videos/short-reels/mor-maa.mp4',
    externalUrl: 'https://www.instagram.com/reel/DcIfzBrTLb3/',
    tags: ['Emotional Editing', 'Sambalpuri Reel', 'Cinematic Storytelling', 'Color Grading', 'Visual Pacing'],
    badge: 'Short Reel',
    color: 'gold',
    icon: 'fa-heart',
    duration: '1:35',
    quality: '4K • 60 FPS',
    metric: '❤️ Viral Reel',
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
    title: 'Pahela Nazar | Cinematic Sambalpuri Reel',
    desc: 'A cinematic Sambalpuri romantic story centered around the emotions and atmosphere of a first encounter. The edit combines expressive performances, intimate close-ups, atmospheric night cinematography, cinematic transitions, selective color treatment, and carefully paced visual progression to create a dramatic and immersive romantic experience.',
    img: 'assets/thumbnails/reel-3.jpg',
    videoUrl: '/videos/short-reels/pahela-nazar.mp4',
    externalUrl: 'https://www.instagram.com/reel/DZ7auHfBmwX/',
    tags: ['Romantic Storytelling', 'Sambalpuri Reel', 'Cinematic Editing', 'Color Grading', 'Visual Rhythm'],
    badge: 'Short Reel',
    color: 'blue',
    icon: 'fa-fire',
    duration: '1:28',
    quality: '4K • 60 FPS',
    metric: '✨ 21K+ Likes',
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
