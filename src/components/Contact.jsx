import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Contact.css';

const socials = [
  { label: 'GitHub',    handle: '@mithunhalder01',      href: 'https://github.com/mithunhalder01',    color: 'lime' },
  { label: 'LinkedIn',  handle: 'mithunhaldermithun-halder-946704362',        href: 'https://www.linkedin.com/in/mithun-halder-946704362/',  color: 'cyan' },
  { label: 'Instagram',   handle: '@mithun_webdev',       href: 'https://www.instagram.com/mithun_webdev/',   color: 'magenta' },
  { label: 'Email',     handle: 'mithunhalder.dev@gmail.com',   href: 'mailto:mithunhalder.dev@gmail.com',  color: 'purple' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    // Simulate sending (replace with real API call)
    await new Promise(r => setTimeout(r, 1400));
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }
  });

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="contact-bg-glow" aria-hidden="true" />

      <div className="container contact-grid">
        {/* Left: Info */}
        <div className="contact-info">
          <motion.div className="section-label" {...fadeUp(0)}>
            Get In Touch
          </motion.div>

          <motion.h2 className="section-title" {...fadeUp(0.1)}>
            Let's <span className="highlight">Build</span><br />Something Cool
          </motion.h2>

          <motion.p className="contact-desc" {...fadeUp(0.2)}>
            Currently open to new freelance projects and full-time opportunities.
            Have an idea? Let's make it happen.
          </motion.p>

          {/* Social links */}
          <motion.div className="contact-socials" {...fadeUp(0.3)}>
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                className={`contact-social csocial--${s.color}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.08 + 0.4 }}
              >
                <div className="csocial-label">{s.label}</div>
                <div className="csocial-handle">{s.handle}</div>
                <span className="csocial-arrow">↗</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Availability badge */}
          <motion.div className="availability" {...fadeUp(0.6)}>
            <span className="avail-dot" />
            <span>Available for work — Response within 24h</span>
          </motion.div>
        </div>

        {/* Right: Form */}
        <motion.div className="contact-form-wrap" {...fadeUp(0.2)}>
          {status === 'sent' ? (
            <motion.div
              className="form-success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
              <button className="btn btn-primary" onClick={() => setStatus('idle')}>
                Send Another
              </button>
            </motion.div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Mithun Halder</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Rahul Kumar"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="rahul@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Hey! I have a project idea..."
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn btn-primary form-submit ${status === 'sending' ? 'sending' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <><span className="spinner" />Sending...</>
                ) : (
                  <>Send Message ↗</>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
