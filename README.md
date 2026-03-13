# 🚀 Dev Portfolio — Mithun Halder

A modern, animated personal portfolio built with **React** and **Framer Motion**. Colorful, bold, and blazing fast.

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## ✨ Features

- **Smooth scroll animations** — Framer Motion powered scroll reveals
- **Custom cursor** — Lime green cursor with hover effects
- **Animated hero** — Rotating role text, gradient avatar ring, floating stat cards
- **Skills section** — Animated progress bars + scrolling tech ticker
- **Zigzag timeline** — Color-coded experience cards
- **Projects grid** — Filter by category, hover effects, live demo links
- **Testimonials carousel** — Auto-scrolling with manual controls
- **Working contact form** — EmailJS integration with validation
- **Fully responsive** — Mobile, tablet, desktop

---

## 🛠 Tech Stack

| Tech | Use |
|------|-----|
| React 18 | UI framework |
| Framer Motion | Animations |
| EmailJS | Contact form |
| Google Fonts | Syne + DM Sans |
| CSS Variables | Theming & design tokens |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── App.js              # Root component + loader + cursor
│   ├── App.css             # Loader & cursor styles
│   ├── index.js            # Entry point
│   ├── index.css           # Global styles & design tokens
│   └── components/
│       ├── Navbar.jsx/css
│       ├── Hero.jsx/css
│       ├── About.jsx/css
│       ├── Skills.jsx/css
│       ├── Experience.jsx/css
│       ├── Projects.jsx/css
│       ├── Testimonials.jsx/css
│       ├── Blog.jsx/css
│       ├── Contact.jsx/css
│       └── Footer.jsx/css
├── EMAILJS_SETUP.md        # Contact form setup guide
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/mithunhalder01/portfolio_dev.git
cd portfolio_dev
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm start
```

Opens at `http://localhost:3000`

---

## 📧 Contact Form Setup (EmailJS)

The contact form uses EmailJS — free, no backend needed.

See **[EMAILJS_SETUP.md](./EMAILJS_SETUP.md)** for the full step-by-step guide.

Quick steps:
1. Create free account at [emailjs.com](https://emailjs.com)
2. Connect your Gmail
3. Create an email template
4. Add your keys in `src/components/Contact.jsx`:

```js
const EMAILJS_SERVICE_ID  = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY  = 'your_public_key';
```

---

## 🎨 Customization

### Personal Info
Update these files with your details:

| File | What to change |
|------|---------------|
| `Hero.jsx` | Name, roles, stats |
| `About.jsx` | Bio, fun facts |
| `Experience.jsx` | Work history |
| `Projects.jsx` | Your projects |
| `Testimonials.jsx` | Client reviews |
| `Blog.jsx` | Your articles |
| `Contact.jsx` | Social links, email |
| `Footer.jsx` | Name, email |
| `Navbar.jsx` | Logo name |

### Colors
All colors are CSS variables in `src/index.css`:

```css
--c-lime:    #c8ff00;   /* Primary accent */
--c-cyan:    #00e5ff;   /* Secondary accent */
--c-magenta: #ff2d78;   /* Highlight */
--c-purple:  #9b5dff;   /* Extra accent */
```

---

## 📦 Build for Production

```bash
npm run build
```

Output in `/build` folder — ready to deploy on Vercel, Netlify, or GitHub Pages.

### Deploy on Vercel (recommended)

```bash
npm install -g vercel
vercel
```

---

## 📄 License

MIT License — free to use and modify.

---

<p align="center">Built with ❤️ by <a href="https://github.com/mithunhalder01">Mithun Halder</a></p>