<div align="center">

# ⚡ Harshad Dhonde — Portfolio

**A modern, dark-themed developer portfolio built with React + Vite + Tailwind CSS**

[![Live Demo](https://img.shields.io/badge/🔗_Live_Demo-00f5d4?style=for-the-badge&logoColor=black)](https://harshaddhonde.vercel.app)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

## 🎯 Overview

A premium, responsive portfolio website showcasing **9 projects** across full-stack development, AI/ML pipelines, systems programming, and desktop applications. Each project has a **dedicated detail page** with architecture breakdowns, tech stack, and GitHub links.

### ✨ Highlights

| Feature | Description |
|---------|-------------|
| 🎭 **Glitch Text** | Animated cyberpunk-style text effect on the hero heading |
| 🌌 **Particle Background** | Floating dots with smooth parallax animations |
| 🖱️ **Custom Cursor** | Dot + ring follower cursor with mix-blend-mode (desktop only) |
| 🃏 **Glassmorphism Cards** | `backdrop-filter: blur` with subtle hover lift effects |
| 📄 **Project Detail Pages** | Individual pages for each project with Overview, Tech Stack, Key Features & Architecture Flow |
| 📱 **Fully Responsive** | Optimized for mobile, tablet, and desktop breakpoints |
| 🔍 **SEO Optimized** | Meta tags, Open Graph, Twitter Cards, canonical URLs |
| ♿ **Accessible** | Keyboard focus outlines, semantic HTML, mobile-safe cursor |
| 🧭 **Client-Side Routing** | React Router with SPA fallback for Vercel |
| ✨ **Scroll Reveal** | Intersection Observer-powered section animations |

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technologies |
|:-----:|:-------------|
| ⚛️ **Framework** | React 19, Vite 8 |
| 🎨 **Styling** | Tailwind CSS 3, Custom CSS Animations |
| 🧭 **Routing** | React Router DOM v7 |
| 🎬 **Animations** | Framer Motion, CSS Keyframes, Intersection Observer |
| 🎯 **Icons** | Lucide React |
| 🔤 **Typography** | Clash Display, Cabinet Grotesk, JetBrains Mono |
| 🚀 **Deployment** | Vercel (SPA fallback via `vercel.json`) |

</div>

---

## 📁 Project Structure

```
harshad-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Landing — glitch text, stats, CTA
│   │   ├── About.jsx             # Bio, trait cards, terminal widget
│   │   ├── Skills.jsx            # Tech arsenal — 6 skill categories
│   │   ├── Projects.jsx          # 9 project cards (3 featured + 6)
│   │   ├── ProjectDetail.jsx     # Individual project detail page
│   │   ├── Contact.jsx           # Contact cards + footer
│   │   ├── Navbar.jsx            # Fixed navbar + mobile hamburger
│   │   ├── Cursor.jsx            # Custom cursor (desktop only)
│   │   ├── Particles.jsx         # Animated particle background
│   │   └── Home.jsx              # Home page layout wrapper
│   ├── data/
│   │   └── projectsData.js       # All 9 projects — centralized data
│   ├── index.css                 # Global styles, animations, cursors
│   ├── App.jsx                   # BrowserRouter + Routes
│   └── main.jsx                  # React DOM entry point
├── index.html                    # SEO meta tags, OG, Twitter cards
├── vercel.json                   # SPA rewrites for Vercel
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/harshaddhonde4/Portfolio.git
cd Portfolio

# 2. Install
npm install

# 3. Dev server (hot reload)
npm run dev

# 4. Production build
npm run build

# 5. Preview production build
npm run preview
```

---

## 🌐 Deploy to Vercel

| Step | Action |
|------|--------|
| 1️⃣ | Push to GitHub |
| 2️⃣ | Import repo on [vercel.com/new](https://vercel.com/new) |
| 3️⃣ | **Framework Preset:** Vite |
| 4️⃣ | **Build Command:** `npm run build` |
| 5️⃣ | **Output Directory:** `dist` |
| 6️⃣ | Click **Deploy** 🚀 |

> ✅ `vercel.json` handles SPA routing automatically — no extra config needed.

---

## 📋 Projects Showcased

| # | Project | Stack | Type |
|---|---------|-------|------|
| 1 | **LlamaLocal with RAG** | Python, LangChain, Ollama, ChromaDB | 🤖 AI / Privacy |
| 2 | **StickyVibe** | React, Redux, Spring Boot, Stripe | 🛒 E-Commerce |
| 3 | **Gemini Agentic RAG** | Gemini, Qdrant, Exa AI, Agno | 🤖 Multi-Agent AI |
| 4 | **Groq Finance Agent** | Groq, Llama 3.1, YFinance, Agno | 📈 AI / Finance |
| 5 | **EazySchool** | Spring Boot, Thymeleaf, MySQL | 🎓 School ERP |
| 6 | **Smart Crop Advisory** | Spring Boot, Gemini API, Thymeleaf | 🌱 AI / AgriTech |
| 7 | **Java Socket Chat** | Java, TCP/IP, Multi-threading | 💬 Networking |
| 8 | **Virtual File System** | C++, Inodes, File Descriptors | 💽 Systems |
| 9 | **Packer Unpacker** | Java Swing, File I/O, Serialization | 📦 Desktop GUI |

---

## 👨‍💻 Author

<div align="center">

**Harshad Dhonde**

[![GitHub](https://img.shields.io/badge/GitHub-harshaddhonde4-181717?style=flat-square&logo=github)](https://github.com/harshaddhonde4)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-harshaddhonde4-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/harshaddhonde4)
[![Email](https://img.shields.io/badge/Email-dhondeharshad4@gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:dhondeharshad4@gmail.com)

Computer Engineering · Dr. D.Y. Patil College of Engineering, Akurdi · Pune 🇮🇳

---

Made with ❤️ by Harshad

</div>
