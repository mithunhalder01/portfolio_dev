import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Portfolio 2024',
    category: 'Web App',
    color: 'lime',
    year: '2024',
    desc: 'Modern animated portfolio built with React, Framer Motion, and CSS Grid. Fully responsive with theme toggle.',
    tags: ['React', 'Framer Motion', 'CSS Grid', 'JavaScript'],
    demo: 'https://mithunhalder01.github.io/portfolio',
    github: 'https://github.com/mithunhalder01/portfolio',
    preview: 'https://mithunhalder01.github.io/portfolio',
  },
  {
    id: 2,
    title: 'E-Commerce Dashboard',
    category: 'Web App',
    color: 'cyan',
    year: '2024',
    desc: 'Admin dashboard for e-commerce with sales analytics, inventory management, and user reports.',
    tags: ['React', 'Chart.js', 'Tailwind CSS', 'Node.js'],
    demo: '#',
    github: 'https://github.com/mithunhalder01/ecommerce-dashboard',
    preview: null,
  },
  {
    id: 3,
    title: 'Task Tracker Pro',
    category: 'Productivity',
    color: 'magenta',
    year: '2023',
    desc: 'Advanced task management app with drag-drop, categories, priorities, and local storage sync.',
    tags: ['React', 'Zustand', 'React DnD', 'Tailwind'],
    demo: '#',
    github: 'https://github.com/mithunhalder01/task-tracker',
    preview: null,
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    category: 'Mini App',
    color: 'orange',
    year: '2023',
    desc: 'Multi-city weather app with animated UI, forecasts, and geolocation. OpenWeatherMap API.',
    tags: ['React', 'OpenWeather API', 'CSS Animations', 'PWA'],
    demo: '#',
    github: 'https://github.com/mithunhalder01/weather-dashboard',
    preview: null,
  },
  {
    id: 5,
    title: 'Movie Finder',
    category: 'Web App',
    color: 'purple',
    year: '2023',
    desc: 'TMDB movie search app with search, favorites, trending, and detailed movie pages.',
    tags: ['React', 'TMDB API', 'React Query', 'Tailwind'],
    demo: '#',
    github: 'https://github.com/mithunhalder01/movie-finder',
    preview: null,
  },
  {
    id: 6,
    title: 'Chat App UI',
    category: 'Design System',
    color: 'cyan',
    year: '2022',
    desc: 'Modern messaging UI kit with animations, dark mode, emoji picker, and typing indicators.',
    tags: ['React', 'Framer Motion', 'Styled Components', 'React Icons'],
    demo: '#',
    github: 'https://github.com/mithunhalder01/chat-ui',
    preview: null,
  },
  {
    id: 7,
    title: 'Kartik Painter Services',
    category: 'Business Site',
    color: 'orange',
    year: '2024',
    desc: 'Professional lead-generation website for a local painting contractor in Noida. Features service listings, contact section, and strong call-to-action flow to attract more clients.',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    demo: 'https://kartikpainterservices.vercel.app/',
    github: '#',
    preview: 'https://kartikpainterservices.vercel.app/',
  },
  {
    id: 8,
    title: 'Get Fit N Fine Gym',
    category: 'Landing Page',
    color: 'lime',
    year: '2024',
    desc: 'Bold and energetic landing page for a gym brand — "Forge Your Legend". Strong visual identity, service highlights, and membership call-to-actions to convert visitors into members.',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    demo: 'https://get-fit-n-fine-gym.vercel.app/',
    github: '#',
    preview: 'https://get-fit-n-fine-gym.vercel.app/',
  },
  {
    id: 9,
    title: 'The Crochet Land',
    category: 'E-Commerce',
    color: 'magenta',
    year: '2024',
    desc: 'Aesthetic e-commerce style website for a handmade crochet brand. Warm artsy vibe with product showcase designed to attract buyers and build brand identity for a creative small business.',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    demo: 'https://the-crochet-land.vercel.app/',
    github: '#',
    preview: 'https://the-crochet-land.vercel.app/',
  },
];

const filters = ['All', 'Web App', 'E-Commerce', 'Business Site', 'Landing Page', 'Design System', 'Productivity', 'Mini App'];

function PreviewCard({ project }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  return (
    <div className={`preview-wrapper preview--${project.color}`}>
      {project.preview && !iframeError ? (
        <>
          {!iframeLoaded && (
            <div className="preview-skeleton">
              <div className="skeleton-bar w-60" />
              <div className="skeleton-bar w-80" />
              <div className="skeleton-bar w-40" />
              <div className="skeleton-grid">
                <div className="skeleton-block" />
                <div className="skeleton-block" />
                <div className="skeleton-block" />
              </div>
            </div>
          )}
          <iframe
            src={project.preview}
            title={`${project.title} preview`}
            className={`preview-iframe ${iframeLoaded ? 'loaded' : ''}`}
            onLoad={() => setIframeLoaded(true)}
            onError={() => setIframeError(true)}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
          <div className="preview-overlay" />
        </>
      ) : (
        <div className="preview-placeholder">
          <div className={`placeholder-icon icon--${project.color}`}>
            {categoryIcon(project.category)}
          </div>
          <span className="placeholder-label">{project.category}</span>
        </div>
      )}
    </div>
  );
}

function categoryIcon(cat) {
  const icons = {
    'Web App': '⚡',
    'E-Commerce': '🛍️',
    'Business Site': '🏢',
    'Landing Page': '🚀',
    'Design System': '🎨',
    'Productivity': '✅',
    'Mini App': '🌤️',
  };
  return icons[cat] || '💻';
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="projects-bg-accent" aria-hidden="true" />

      <div className="container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Portfolio
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Featured <span className="highlight">Work</span>
        </motion.h2>

        {/* Filters */}
        <motion.div
          className="projects-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className={`project-card card--${project.color}`}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                {/* Live Preview Area */}
                <PreviewCard project={project} />

                {/* Card meta row */}
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>

                {/* Card body */}
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>

                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.demo}
                      className={`project-link link-demo demo--${project.color}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo ↗
                    </a>
                    <a
                      href={project.github}
                      className="project-link link-github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
