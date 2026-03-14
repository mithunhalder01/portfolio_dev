import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

function ThemeToggle({ theme, onToggle }) {
  return (
    <motion.button
      className="theme-toggle"
      onClick={onToggle}
      whileTap={{ scale: 0.88 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {theme === 'dark' ? (
          <motion.span 
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ fontSize: 16 }}
          >
            ☀
          </motion.span>
        ) : (
          <motion.span 
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ fontSize: 16 }}
          >
            ☾
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function Navbar({ theme, onToggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="nav-inner container">
        {/* Logo */}
        <a href="#hero" className="nav-logo">
          <span className="logo-bracket">{'<'}</span>
          dev
          <span className="logo-dot">.</span>
          <span className="logo-name">Mithun Halder</span>
          <span className="logo-bracket">{'/>'}</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <a
                href={link.href}
                className={`nav-link ${activeLink === link.href ? 'active' : ''}`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <ThemeToggle theme={theme} onToggle={onToggle} />

        {/* CTA - Download CV */}
        <motion.a
          href="/Resume.pdf"
          download="Mithun_Halder_Resume.pdf"
          className="nav-cta btn btn-primary"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          Download CV ↓
        </motion.a>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="mobile-link"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mobile-link-num">0{i + 1}.</span>
                {link.label}
              </motion.a>
            ))}
            <ThemeToggle theme={theme} onToggle={onToggle} />
            <motion.a
              href="/Resume.pdf"
              download="Mithun_Halder_Resume.pdf"
              className="mobile-cta btn btn-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setMenuOpen(false)}
            >
              Download CV ↓
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}