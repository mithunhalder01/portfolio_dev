import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    name:    'Priya Sharma',
    role:    'Product Manager, TechCorp',
    avatar:  'PS',
    color:   'lime',
    quote:   'Working with this developer was an absolute pleasure. The attention to detail and animation quality were beyond our expectations. Delivered 2 weeks ahead of schedule!',
    rating:  5,
  },
  {
    name:    'Rahul Mehta',
    role:    'CEO, Startup Labs',
    avatar:  'RM',
    color:   'cyan',
    quote:   'Our new dashboard looks stunning. Users keep complimenting the UI. The code quality is excellent — clean, well-documented, and easy to maintain.',
    rating:  5,
  },
  {
    name:    'Sarah Johnson',
    role:    'Design Lead, Pixel Agency',
    avatar:  'SJ',
    color:   'magenta',
    quote:   'Finally a developer who truly understands design. Every pixel was treated with care. The Framer Motion animations brought our brand to life.',
    rating:  5,
  },
  {
    name:    'Arjun Kapoor',
    role:    'CTO, WebWorks Co.',
    avatar:  'AK',
    color:   'purple',
    quote:   'Top-notch React skills, great communication, always proactive. One of the best frontend developers we have worked with. Will definitely hire again.',
    rating:  5,
  },
  {
    name:    'Neha Gupta',
    role:    'Founder, DesignFirst',
    avatar:  'NG',
    color:   'orange',
    quote:   'Transformed our outdated website into a modern, blazing-fast experience. Lighthouse score went from 55 to 97. Incredible work!',
    rating:  5,
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next) => {
    setDir(next > active ? 1 : -1);
    setActive(next);
  };

  const prev = () => go(active === 0 ? testimonials.length - 1 : active - 1);
  const next = () => go(active === testimonials.length - 1 ? 0 : active + 1);

  // Auto-advance
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setDir(1);
      setActive(a => (a + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [inView]);

  const variants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  const t = testimonials[active];

  return (
    <section id="testimonials" className="testimonials section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Kind Words
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Client <span className="highlight-cyan">Love</span>
        </motion.h2>

        <motion.div
          className="testimonials-wrapper"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Big quote mark */}
          <div className="quote-mark" aria-hidden="true">"</div>

          {/* Card */}
          <div className="testimonial-stage">
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={active}
                className={`testimonial-card tcard--${t.color}`}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Stars count={t.rating} />
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-author">
                  <div className={`author-avatar avatar--${t.color}`}>{t.avatar}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="testimonial-controls">
            <button className="ctrl-btn" onClick={prev} aria-label="Previous">←</button>

            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot-btn ${i === active ? 'dot-active' : ''}`}
                  onClick={() => go(i)}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>

            <button className="ctrl-btn" onClick={next} aria-label="Next">→</button>
          </div>
        </motion.div>

        {/* Small cards below (desktop) */}
        <motion.div
          className="testimonial-mini-row"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {testimonials.map((tt, i) => (
            <button
              key={tt.name}
              className={`mini-card ${i === active ? 'mini-active' : ''}`}
              onClick={() => go(i)}
            >
              <div className={`mini-avatar avatar--${tt.color}`}>{tt.avatar}</div>
              <div className="mini-name">{tt.name}</div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
