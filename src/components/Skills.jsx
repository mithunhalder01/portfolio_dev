import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

const categories = [
  {
    name: 'Frontend',
    color: 'lime',
    skills: [
      { name: 'React',       level: 95 },
      { name: 'JavaScript',  level: 92 },
      { name: 'TypeScript',  level: 80 },
      { name: 'HTML/CSS',    level: 98 },
    ]
  },
  {
    name: 'Styling',
    color: 'cyan',
    skills: [
      { name: 'Tailwind CSS',   level: 90 },
      { name: 'Framer Motion',  level: 85 },
      { name: 'SASS/SCSS',      level: 82 },
      { name: 'CSS Animations', level: 88 },
    ]
  },
  {
    name: 'Tools',
    color: 'magenta',
    skills: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'Figma',        level: 75 },
      { name: 'Vite / CRA',   level: 90 },
      { name: 'VS Code',      level: 95 },
    ]
  },
  {
    name: 'Extras',
    color: 'purple',
    skills: [
      { name: 'Node.js',    level: 65 },
      { name: 'REST APIs',  level: 80 },
      { name: 'Firebase',   level: 70 },
      { name: 'Vercel/Netlify', level: 85 },
    ]
  },
];

const techIcons = [
  'React', 'JS', 'TS', 'HTML', 'CSS', 'SASS',
  'Git', 'Figma', 'Vite', 'Node', 'TW', 'FM'
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="skills section" ref={ref}>
      {/* Background accent */}
      <div className="skills-bg-accent" aria-hidden="true" />

      <div className="container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          What I Know
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My <span className="highlight-cyan">Tech</span> Stack
        </motion.h2>

        <motion.p
          className="skills-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technologies and tools I use to bring ideas to life.
        </motion.p>

        {/* Scrolling tech ticker */}
        <div className="tech-ticker">
          <div className="ticker-track">
            {[...techIcons, ...techIcons].map((t, i) => (
              <span key={i} className="ticker-item">{t}</span>
            ))}
          </div>
        </div>

        {/* Skill categories grid */}
        <div className="skills-grid">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              className={`skill-card skill-card--${cat.color}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.12 + 0.3 }}
            >
              <div className="skill-card-header">
                <span className={`skill-category-dot dot--${cat.color}`} />
                <span className="skill-category-name">{cat.name}</span>
              </div>

              <div className="skill-bars">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name} className="skill-bar-row">
                    <div className="skill-bar-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                    <div className="skill-track">
                      <motion.div
                        className={`skill-fill fill--${cat.color}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: ci * 0.1 + si * 0.1 + 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
