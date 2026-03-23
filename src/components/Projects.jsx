import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    title:    'hello',
    category: 'Web App',
    color:    'lime',
    year:     '2024',
    desc:     'Modern animated portfolio built with React, Framer Motion, and CSS Grid. Fully responsive with theme toggle.',
    tags:     ['React', 'Framer Motion', 'CSS Grid', 'JavaScript'],
    demo:     'https://get-fit-n-fine-gym.vercel.app/',
    github:   'https://github.com/mithunhalder01/portfolio',
  },
  {
    id: 2,
    title:    'E-Commerce Dashboard',
    category: 'Web App',
    color:    'cyan',
    year:     '2024',
    desc:     'Admin dashboard for e-commerce with sales analytics, inventory management, and user reports.',
    tags:     ['React', 'Chart.js', 'Tailwind CSS', 'Node.js'],
    demo:     'https://get-fit-n-fine-gym.vercel.app/',
    github:   'https://github.com/mithunhalder01/ecommerce-dashboard',
  },
  {
    id: 3,
    title:    'Task Tracker Pro',
    category: 'Productivity',
    color:    'magenta',
    year:     '2023',
    desc:     'Advanced task management app with drag-drop, categories, priorities, and local storage sync.',
    tags:     ['React', 'Zustand', 'React DnD', 'Tailwind'],
    demo:     '#',
    github:   'https://github.com/mithunhalder01/task-tracker',
  },
  {
    id: 4,
    title:    'Weather Dashboard',
    category: 'Mini App',
    color:    'orange',
    year:     '2023',
    desc:     'Multi-city weather app with animated UI, forecasts, and geolocation. OpenWeatherMap API.',
    tags:     ['React', 'OpenWeather API', 'CSS Animations', 'PWA'],
    demo:     '#',
    github:   'https://github.com/mithunhalder01/weather-dashboard',
  },
  {
    id: 5,
    title:    'Movie Finder',
    category: 'Web App',
    color:    'purple',
    year:     '2023',
    desc:     'TMDB movie search app with search, favorites, trending, and detailed movie pages.',
    tags:     ['React', 'TMDB API', 'React Query', 'Tailwind'],
    demo:     '#',
    github:   'https://github.com/mithunhalder01/movie-finder',
  },
  {
    id: 6,
    title:    'Chat App UI',
    category: 'Design System',
    color:    'cyan',
    year:     '2022',
    desc:     'Modern messaging UI kit with animations, dark mode, emoji picker, and typing indicators.',
    tags:     ['React', 'Framer Motion', 'Styled Components', 'React Icons'],
    demo:     '#',
    github:   'https://github.com/mithunhalder01/chat-ui',
  },
];

const filters = ['All', 'Web App', 'E-Commerce', 'Design System', 'Blog', 'Productivity', 'Mini App'];

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
                {/* Card header — colored area */}
                <div className={`project-header header--${project.color}`}>
                  <span className="project-category">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                  <div className="project-header-title">{project.title}</div>
                </div>

                {/* Card body */}
                <div className="project-body">
                  <p className="project-desc">{project.desc}</p>

                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.demo} className={`project-link link-demo demo--${project.color}`} target="_blank" rel="noopener noreferrer">
                      Live Demo ↗
                    </a>
                    <a href={project.github} className="project-link link-github" target="_blank" rel="noopener noreferrer">
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
