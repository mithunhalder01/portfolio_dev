import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Coffee, Gamepad2, Globe, BookOpen } from 'lucide-react';
import './About.css';

const facts = [
  { icon: Coffee, text: 'Coffee-fueled coder' },
  { icon: Gamepad2, text: 'Gamer in spare time' },
  { icon: Globe, text: 'Open to remote work' },
  { icon: BookOpen, text: 'Always learning' },
];

const stats = [
  { num: '3+',  label: 'Years of Experience' },
  { num: '20+', label: 'Projects Delivered' },
  { num: '10+', label: 'Happy Clients' },
  { num: '5★',  label: 'Average Rating' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
  });

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container about-grid">
        {/* Left: Image placeholder */}
        <motion.div className="about-visual" {...fadeUp(0)}>
          <div className="about-photo">
            <div className="photo-placeholder">
              <img src="/image.png" alt="Mithun Halder" className="about-image" />
            </div>
          </div>
          <div className="about-facts">
            {facts.map((f, i) => (
              <motion.div
                key={f.text}
                className="fact-pill"
                {...fadeUp(0.15 * i + 0.3)}
              >
                <f.icon size={20} />
                <span>{f.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Text */}
        <div className="about-text">
          <motion.div className="section-label" {...fadeUp(0.1)}>
            About Me
          </motion.div>

          <motion.h2 className="section-title" {...fadeUp(0.2)}>
            Passionate about <span className="highlight">beautiful</span>,<br />
            functional web
          </motion.h2>

          <motion.p className="about-bio" {...fadeUp(0.3)}>
            Hey! I'm a Frontend Developer with 3+ years of experience building
            modern, performant web applications. I specialize in <strong>React</strong>,
            <strong> Framer Motion</strong>, and turning Figma designs into pixel-perfect code.
          </motion.p>

          <motion.p className="about-bio" {...fadeUp(0.4)}>
            I care deeply about user experience, accessibility, and writing clean,
            maintainable code. When I'm not coding, you'll find me exploring new
            design trends or contributing to open source.
          </motion.p>

          {/* Stats */}
          <motion.div className="about-stats" {...fadeUp(0.5)}>
            {stats.map(s => (
              <div key={s.label} className="stat-item">
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div className="about-ctas" {...fadeUp(0.6)}>
            <a href="/Resume.pdf" className="btn btn-primary" download="Resume.pdf">
              Download CV
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
