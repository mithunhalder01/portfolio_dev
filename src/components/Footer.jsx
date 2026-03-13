import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const footerLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Blog',       href: '#blog' },
  { label: 'Contact',    href: '#contact' },
];

const socials = [
  { label: 'GH', href: 'https://github.com',   title: 'GitHub' },
  { label: 'LI', href: 'https://linkedin.com', title: 'LinkedIn' },
  { label: 'TW', href: 'https://twitter.com',  title: 'Twitter' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-top-line" />

      <div className="container footer-inner">
        {/* Left */}
        <div className="footer-brand">
          <a href="#hero" className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            dev<span className="logo-dot">.</span><span className="logo-name">Mithun Halder</span>
            <span className="logo-bracket">/&gt;</span>
          </a>
          <p className="footer-tagline">
            Building fast, beautiful, and accessible web experiences.
          </p>
          <div className="footer-socials">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                className="footer-social"
                target="_blank"
                rel="noopener noreferrer"
                title={s.title}
                aria-label={s.title}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Center */}
        <nav className="footer-nav" aria-label="Footer navigation">
          <span className="footer-nav-title">Navigation</span>
          {footerLinks.map(l => (
            <a key={l.label} href={l.href} className="footer-nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="footer-cta-block">
          <span className="footer-nav-title">Work Together?</span>
          <p className="footer-cta-text">Open to freelance and full-time roles.</p>
          <a href="mailto:you@email.com" className="btn btn-primary footer-email-btn">
            mithunhalder.dev@email.com ↗
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span className="footer-copy">
            © {new Date().getFullYear()} Mithun Halder. Build With ❤️.
          </span>
          <button className="back-top" onClick={scrollTop} aria-label="Back to top">
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
