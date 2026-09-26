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
    videoUrl: '/videos/short-reels/bestfriend-reel-opt.mp4',
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
    videoUrl: '/videos/long-videos/babu-zaraa-bachke.mp4',
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
    videoUrl: '/videos/short-reels/mor-maa-opt.mp4',
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
    title: 'Shree Soni Jewellers',
    desc: 'An engaging jewellery brand collaboration combining character-driven storytelling, humorous moments, in-store interactions, and promotional messaging to transform a traditional offer announcement into an entertaining and attention-grabbing commercial reel.',
    img: 'assets/thumbnails/collab-1.jpg',
    videoUrl: '/videos/brand-collabs/shree-soni-jewellers.mp4',
    externalUrl: 'https://www.instagram.com/reel/DXUZlMakxJP/',
    tags: ['Brand Collab', 'Commercial Edit', 'Storytelling', 'Retail Marketing'],
    badge: 'Brand Collab',
    color: 'emerald',
    icon: 'fa-gem',
    duration: '1:48',
    quality: '4K • 60 FPS',
    metric: '💎 Brand Sponsor',
    isCollab: true,
  },
  {
    id: 'reel-3',
    category: 'reel',
    title: 'Pahela Nazar | Cinematic Sambalpuri Reel',
    desc: 'A cinematic Sambalpuri romantic story centered around the emotions and atmosphere of a first encounter. The edit combines expressive performances, intimate close-ups, atmospheric night cinematography, cinematic transitions, selective color treatment, and carefully paced visual progression to create a dramatic and immersive romantic experience.',
    img: 'assets/thumbnails/reel-3.jpg',
    videoUrl: '/videos/short-reels/pahela-nazar-opt.mp4',
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
    title: 'Diwali & Dhanteras Mega Offer',
    desc: 'A festive retail campaign designed to communicate a 20% Diwali and Dhanteras discount through presenter-led storytelling, dynamic in-store footage, branded visuals, and fast-paced promotional editing that keeps the offer clear while maintaining strong viewer engagement.',
    img: 'assets/thumbnails/collab-2.jpg',
    videoUrl: '/videos/brand-collabs/diwali-dhanteras-offer.mp4',
    externalUrl: 'https://www.instagram.com/reel/DP5oFEOE5D_/',
    tags: ['Festive Campaign', '20% Discount', 'Commercial Edit', 'Brand Promotion'],
    badge: 'Brand Collab',
    color: 'gold',
    icon: 'fa-gift',
    duration: '2:00',
    quality: '4K • 60 FPS',
    metric: '✨ 20% Festive Promo',
    isCollab: true,
  },
  {
    id: 'reel-4',
    category: 'edited',
    title: 'A Moment in Motion 🎬 | Cinematic Couple Reel | Before & After',
    desc: 'A cinematic night-time storytelling reel capturing natural interactions between two people. The edit combines intimate walking shots, expressive moments, atmospheric street lighting, and a dramatic before-and-after color grade to create a polished cinematic mood. Carefully balanced tones, contrast, and warm highlights bring depth and emotion to every frame.',
    img: 'assets/thumbnails/reel-5.jpg',
    videoUrl: '/videos/short-reels/color-grade-night-talk.mp4',
    tags: ['Cinematic Editing', 'Couple Reel', 'Color Grading', 'Night Cinematography', 'Visual Storytelling'],
    badge: 'Cinematic Edit',
    color: 'purple',
    icon: 'fa-wand-magic-sparkles',
    duration: '0:15',
    quality: '4K • 60 FPS',
    metric: '❤️ Couple Reel',
  },
  {
    id: 'reel-5',
    category: 'edited',
    title: 'Unspoken Moments 🎬 | Cinematic Storytelling Reel | Before & After',
    desc: 'A cinematic night-time sequence built around natural interactions, expressive reactions, and character-driven moments. The edit moves between group shots, intimate close-ups, and conversational scenes, enhanced with selective color grading, controlled contrast, and cinematic lighting to create a visually engaging narrative.',
    img: 'assets/thumbnails/reel-6.jpg',
    videoUrl: '/videos/short-reels/color-grade-street-walk.mp4',
    tags: ['Cinematic Storytelling', 'Color Grading', 'Character Moments', 'Night Cinematography', 'Visual Pacing'],
    badge: 'Cinematic Edit',
    color: 'gold',
    icon: 'fa-wand-magic-sparkles',
    duration: '0:21',
    quality: '4K • 60 FPS',
    metric: '🎬 Storytelling',
  },
  {
    id: 'reel-6',
    category: 'edited',
    title: 'Royal Elegance 👑 | Bridal Cinematic Reel | Before & After',
    desc: 'A graceful bridal portrait reel showcasing traditional bridal styling through elegant poses, detailed close-ups, and beautifully composed frames. The transformation from muted before footage to rich, vibrant color brings out the red attire, jewelry, makeup, and natural surroundings while maintaining a soft cinematic aesthetic.',
    img: 'assets/thumbnails/reel-4.jpg',
    videoUrl: '/videos/short-reels/color-grade-bridal.mp4',
    tags: ['Bridal Cinematography', 'Color Grading', 'Traditional Portrait', 'Cinematic Editing', 'Beauty & Fashion'],
    badge: 'Cinematic Edit',
    color: 'cyan',
    icon: 'fa-wand-magic-sparkles',
    duration: '0:15',
    quality: '4K • 60 FPS',
    metric: '✨ Bridal Edit',
  },
];
