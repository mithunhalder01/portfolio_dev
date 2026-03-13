import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Blog.css';

const posts = [
  {
    slug:     'framer-motion-secrets',
    title:    '10 Framer Motion Tricks Every React Dev Should Know',
    excerpt:  'Deep dive into advanced animation patterns — staggered reveals, layout animations, shared element transitions, and more.',
    date:     'Feb 12, 2025',
    readTime: '8 min read',
    tag:      'Animation',
    color:    'lime',
  },
  {
    slug:     'react-performance-2024',
    title:    'Optimizing React Apps for Core Web Vitals in 2025',
    excerpt:  'Practical techniques to hit 95+ Lighthouse scores: code splitting, lazy loading, memo, and avoiding common pitfalls.',
    date:     'Jan 28, 2025',
    readTime: '12 min read',
    tag:      'Performance',
    color:    'cyan',
  },
  {
    slug:     'css-variables-system',
    title:    'Building a Design Token System with CSS Variables',
    excerpt:  'How I built a scalable, themeable design system using pure CSS variables — no JavaScript required for theming.',
    date:     'Jan 5, 2025',
    readTime: '6 min read',
    tag:      'CSS',
    color:    'magenta',
  },
];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="blog section" ref={ref}>
      <div className="container">
        <div className="blog-header">
          <div>
            <motion.div
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Writing
            </motion.div>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Latest <span className="highlight-magenta">Articles</span>
            </motion.h2>
          </div>
          <motion.a
            href="/blog"
            className="btn btn-outline blog-all-btn"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            All Posts →
          </motion.a>
        </div>

        <div className="blog-grid">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              className={`blog-card bcard--${post.color}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 + 0.3 }}
            >
              {/* Accent bar */}
              <div className={`blog-accent accent--${post.color}`} />

              <div className="blog-card-body">
                <div className="blog-meta">
                  <span className={`blog-tag btag--${post.color}`}>{post.tag}</span>
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-sep">·</span>
                  <span className="blog-read">{post.readTime}</span>
                </div>

                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>

                <a href={`/blog/${post.slug}`} className={`blog-read-link rlink--${post.color}`}>
                  Read Article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
