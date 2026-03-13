import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    role:     'Senior Frontend Developer',
    company:  'TechCorp Inc.',
    period:   '2023 – Present',
    location: 'Remote',
    color:    'lime',
    desc:     'Led frontend architecture for SaaS dashboard serving 50k+ users. Built reusable component library reducing dev time by 40%.',
    tags:     ['React', 'TypeScript', 'Framer Motion', 'GraphQL'],
  },
  {
    role:     'Frontend Developer',
    company:  'Startup Labs',
    period:   '2022 – 2023',
    location: 'Bangalore',
    color:    'cyan',
    desc:     'Built mobile-first e-commerce platform from scratch. Improved core web vitals score from 60 to 95 on Lighthouse.',
    tags:     ['React', 'Next.js', 'Tailwind', 'Stripe'],
  },
  {
    role:     'Junior Web Developer',
    company:  'Digital Agency',
    period:   '2021 – 2022',
    location: 'Hybrid',
    color:    'magenta',
    desc:     'Developed landing pages and marketing websites for 15+ clients. Wrote pixel-perfect HTML/CSS from Figma designs.',
    tags:     ['HTML/CSS', 'JavaScript', 'WordPress', 'GSAP'],
  },
  {
    role:     'Frontend Intern',
    company:  'WebWorks Co.',
    period:   '2020 – 2021',
    location: 'On-site',
    color:    'purple',
    desc:     'Assisted in building React components, fixing UI bugs, and writing documentation for internal design system.',
    tags:     ['React', 'SCSS', 'Storybook'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Work History
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My <span className="highlight-magenta">Journey</span>
        </motion.h2>

        <div className="timeline">
          {/* Vertical line */}
          <motion.div
            className="timeline-line"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 + 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Dot */}
              <div className={`timeline-dot dot--${exp.color}`} />

              {/* Card */}
              <div className={`exp-card exp-card--${exp.color}`}>
                <div className="exp-card-top">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-meta">
                      <span className={`exp-company company--${exp.color}`}>{exp.company}</span>
                      <span className="exp-sep">·</span>
                      <span className="exp-location">{exp.location}</span>
                    </div>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>

                <p className="exp-desc">{exp.desc}</p>

                <div className="exp-tags">
                  {exp.tags.map(tag => (
                    <span key={tag} className={`exp-tag tag--${exp.color}`}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
