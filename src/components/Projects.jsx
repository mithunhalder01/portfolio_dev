import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    title:    'Dashboard Pro',
    category: 'Web App',
    color:    'lime',
    year:     '2024',
    desc:     'Analytics dashboard with real-time data, drag-and-drop widgets, and advanced filtering. Built for SaaS platform.',
    tags:     ['React', 'TypeScript', 'Recharts', 'Framer Motion'],
    demo:     '#',
    github:   '#',
  },
  {
    id: 2,
    title:    'ShopFlow',
    category: 'E-Commerce',
    color:    'cyan',
    year:     '2024',
    desc:     'Full-featured e-commerce frontend with cart, wishlist, filters, and smooth checkout flow.',
    tags:     ['React', 'Redux', 'Tailwind', 'Stripe'],
    demo:     '#',
    github:   '#',
  },
  {
    id: 3,
    title:    'MotionUI Kit',
    category: 'Design System',
    color:    'magenta',
    year:     '2023',
    desc:     'Open-source animated component library with 40+ components. 500+ GitHub stars.',
    tags:     ['React', 'Framer Motion', 'Storybook', 'TypeScript'],
    demo:     '#',
    github:   '#',
  },
  {
    id: 4,
    title:    'DevBlog',
    category: 'Blog',
    color:    'orange',
    year:     '2023',
    desc:     'Personal blog platform with MDX, code syntax highlighting, and dark/light mode. Built with Next.js.',
    tags:     ['Next.js', 'MDX', 'Tailwind', 'Vercel'],
    demo:     '#',
    github:   '#',
  },
  {
    id: 5,
    title:    'TaskFlow',
    category: 'Productivity',
    color:    'purple',
    year:     '2023',
    desc:     'Kanban-style task manager with drag-and-drop, labels, due dates, and team collaboration.',
    tags:     ['React', 'DnD Kit', 'Firebase', 'Zustand'],
    demo:     '#',
    github:   '#',
  },
  {
    id: 6,
    title:    'WeatherVibe',
    category: 'Mini App',
    color:    'cyan',
    year:     '2022',
    desc:     'Beautiful weather app with animated backgrounds that match current weather. PWA enabled.',
    tags:     ['React', 'OpenWeather API', 'CSS Animations'],
    demo:     '#',
    github:   '#',
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
