import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const floatingOrbs = [
  { size: 480, x: '70%', y: '-10%', color: '#9b5dff', delay: 0 },
  { size: 320, x: '-5%', y: '40%',  color: '#ff2d78', delay: 0.5 },
  { size: 260, x: '55%', y: '65%',  color: '#00e5ff', delay: 1 },
  { size: 180, x: '20%', y: '10%',  color: '#c8ff00', delay: 1.5 },
];

const roles = ['Frontend Developer', 'React Specialist', 'UI Craftsman', 'Web Animator'];

export default function Hero() {
  const roleRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const el = roleRef.current;
    if (!el) return;
    const cycle = () => {
      indexRef.current = (indexRef.current + 1) % roles.length;
      el.style.transition = 'opacity 0.3s, transform 0.3s';
      el.style.opacity = 0;
      el.style.transform = 'translateY(10px)';
      setTimeout(() => {
        el.textContent = roles[indexRef.current];
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, 300);
    };
    const id = setInterval(cycle, 2800);
    return () => clearInterval(id);
  }, []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section id="hero" className="hero section">
      {/* Orbs */}
      <div className="hero-orbs" aria-hidden="true">
        {floatingOrbs.map((orb, i) => (
          <div
            key={i}
            className="orb"
            style={{
              width:  orb.size,
              height: orb.size,
              left:   orb.x,
              top:    orb.y,
              background: orb.color,
              animationDelay: `${orb.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Grid dots */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-content">
        <motion.div
          className="hero-text"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div className="hero-badge" variants={item}>
            <span className="badge-dot" />
            Available for work
          </motion.div>

          {/* Heading */}
          <motion.h1 className="hero-heading" variants={item}>
            Hey, I'm{' '}
            <span className="name-highlight">
              Mithun Halder
              <svg className="name-underline" viewBox="0 0 280 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2 9C60 3 160 3 278 9" stroke="#c8ff00" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div className="hero-role" variants={item}>
            <span className="role-prefix">I build </span>
            <span className="role-text" ref={roleRef}>{roles[0]}</span>
            <span className="role-cursor">_</span>
          </motion.div>

          {/* Description */}
          <motion.p className="hero-desc" variants={item}>
            Crafting pixel-perfect, blazing-fast web experiences with React & modern tooling.
            Turning ideas into <span className="highlight-cyan">interactive reality</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div className="hero-ctas" variants={item}>
            <a href="#projects" className="btn btn-primary">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Talk
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div className="hero-socials" variants={item}>
            {[
              { label: 'GitHub',   href: 'https://github.com', icon: 'GH' },
              { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'LI' },
              { label: 'Twitter',  href: 'https://twitter.com', icon: 'TW' },
            ].map(s => (
              <a key={s.label} href={s.href} className="social-link" target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <span className="social-icon">{s.icon}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Avatar placeholder */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="avatar-ring">
            <div className="avatar-img">
              <span>YN</span>
            </div>
          </div>
          {/* Floating stat cards */}
          <motion.div
            className="stat-card stat-card--tl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <span className="stat-num">3+</span>
            <span className="stat-label">Years Exp.</span>
          </motion.div>
          <motion.div
            className="stat-card stat-card--br"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <span className="stat-num">20+</span>
            <span className="stat-label">Projects</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
