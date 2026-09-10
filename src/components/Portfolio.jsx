import React, { useState } from 'react';
import VideoModal from './VideoModal';

const projects = [
  {
    id: 'reel-1',
    category: 'reel',
    title: 'Dynamic Motion Reel',
    desc: "High-energy visual cuts sync'd with electronic soundbeats and stylized kinetic text overlays.",
    img: 'assets/reel.jpg',
    tags: ['Beat Sync', 'Color Grade', 'Kinetic SFX'],
    badge: 'Short Reel',
  },
  {
    id: 'album-1',
    category: 'album',
    title: 'The Golden Union Wedding',
    desc: 'Emotionally charged, slow-paced wedding narrative showcasing warm grading and soft focus edits.',
    img: 'assets/album.jpg',
    tags: ['Storytelling', 'Color Correction', 'Sound Mix'],
    badge: 'Video Album',
  },
  {
    id: 'reel-2',
    category: 'reel',
    title: 'Neon Gaming Highlights',
    desc: 'Intense gaming montage featuring speed ramps, glitch transitions, and punchy visual beats.',
    img: 'assets/hero.jpg',
    style: { objectPosition: 'center bottom' },
    tags: ['Speed Ramps', 'VFX', 'Glitch FX'],
    badge: 'Short Reel',
  },
  {
    id: 'collab-1',
    category: 'collab',
    title: 'Creator Gear Unbox & Sponsored Reel',
    desc: 'High-converting sponsored reel featuring fast-paced feature highlights, authentic creator unboxing, and bio-link CTA.',
    img: 'assets/reel.jpg',
    style: { filter: 'hue-rotate(50deg) saturate(1.2)' },
    tags: ['Paid Promotion', 'Brand Collab', 'Sponsor Hook'],
    badge: 'Brand Collab',
    isCollab: true,
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((item) => item.category === activeFilter);

  return (
    <section className="portfolio-section section-padding" id="portfolio">
      <div className="container">
        <div className="section-header scroll-reveal">
          <span className="section-subtitle">MY WORK</span>
          <h2 className="section-title">Featured Editing Showreel</h2>
          <div className="title-underline"></div>
        </div>

        <div className="portfolio-tabs scroll-reveal">
          <button
            className={`portfolio-tab ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`portfolio-tab ${activeFilter === 'reel' ? 'active' : ''}`}
            onClick={() => setActiveFilter('reel')}
          >
            Short Reels
          </button>
          <button
            className={`portfolio-tab ${activeFilter === 'album' ? 'active' : ''}`}
            onClick={() => setActiveFilter('album')}
          >
            Long Albums
          </button>
          <button
            className={`portfolio-tab ${activeFilter === 'collab' ? 'active' : ''}`}
            onClick={() => setActiveFilter('collab')}
          >
            Brand Collabs
          </button>
        </div>

        <div className="portfolio-grid" id="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`portfolio-card stagger-${(index % 4) + 1}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="portfolio-img-wrapper">
                <img
                  src={project.img}
                  alt={project.title}
                  className="portfolio-img"
                  style={project.style || {}}
                />
                <div className="portfolio-overlay">
                  <div className="play-btn">
                    <i className="fa-solid fa-play"></i>
                  </div>
                  <span
                    className={`item-tag ${project.isCollab ? 'collab-tag' : ''}`}
                  >
                    {project.isCollab && <i className="fa-solid fa-handshake"></i>}{' '}
                    {project.badge}
                  </span>
                </div>
              </div>

              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="tag-row">
                  {project.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Simulation Modal */}
      <VideoModal
        isOpen={Boolean(selectedProject)}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
