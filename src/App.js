import React, { useEffect, useState } from 'react';
import './App.css';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import About        from './components/About';
import Skills       from './components/Skills';
import Experience   from './components/Experience';
import Projects     from './components/Projects';
import Testimonials from './components/Testimonials';
import Blog         from './components/Blog';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

function useTheme() {
  const getInitial = () => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches 
      ? 'light' : 'dark';
  };
  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const handler = (e) => {
      if (!localStorage.getItem('theme'))
        setTheme(e.matches ? 'light' : 'dark');
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return [theme, () => setTheme(t => t === 'dark' ? 'light' : 'dark')];
}

/* ── Loader ─────────────────────────────────────── */
function Loader({ onDone }) {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
    >
      <motion.div
        className="loader-bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], onComplete: onDone }}
      />
      <motion.p
        className="loader-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Loading Portfolio...
      </motion.p>
    </motion.div>
  );
}

/* ── Cursor ──────────────────────────────────────── */
function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMove = e => {
      setPos({ x: e.clientX, y: e.clientY });
      setTimeout(() => setTrail({ x: e.clientX, y: e.clientY }), 80);
    };
    const onEnter = e => { if (e.target.closest('a, button')) setHovered(true); };
    const onLeave = e => { if (e.target.closest('a, button')) setHovered(false); };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout',  onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout',  onLeave);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" style={{ left: pos.x, top: pos.y }} />
      <div
        className={`cursor-ring ${hovered ? 'cursor-hovered' : ''}`}
        style={{ left: trail.x, top: trail.y }}
      />
    </>
  );
}

/* ── App ─────────────────────────────────────────── */
export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onDone={() => setTimeout(() => setLoading(false), 200)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <CustomCursor />
          <Navbar theme={theme} onToggle={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Testimonials />
            <Blog />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
