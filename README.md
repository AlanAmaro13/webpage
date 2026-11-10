# Alan Amaro — Portfolio

Personal portfolio website showcasing my work in AI research, scientific computing, and product development.

## Overview

Single-page portfolio with dedicated sub-pages for 10 major projects. Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no dependencies.

### Features

- **Animated starfield background** via HTML5 Canvas with parallax and twinkling effects
- **Fully responsive** — works on mobile, tablet, and desktop
- **10 project pages** with detailed descriptions, tech stacks, and image galleries
- **Contact form** with email integration
- **Social links** — GitHub, LinkedIn, Instagram
- **Scroll-reveal animations** for smooth content presentation
- **Mobile navigation** with hamburger toggle

### Projects

| Project | Description |
|---|---|
| **Simplify** | Zero-configuration kanban task manager (Next.js + Supabase) with Telegram reminders and AI email summaries |
| **Unified** | Personal life dashboard (finance, investments, nutrition, sleep, water, gym, goals) with DeepSeek AI coaching (Next.js + Supabase) |
| **Nova** | AI language-learning platform: leveled readings in English, Italian, German and Korean with vocabulary help, quizzes, an AI tutor and flash cards (Next.js + Supabase + DeepSeek) |
| **AzoNet** | Deep U-NET for thin-film thickness prediction from transmittance spectra |
| **QSAR Modeling** | Deep Neural Networks for predicting biological activity of molecules |
| **Nexus+** | B2B SaaS — AI Assistants for healthcare with RAG pipelines |
| **Paleo-Net** | 3D Convolutional U-NET for fossil reconstruction |
| **CanSat** | Canned satellite prototype with real-time data visualization |
| **XRD Crystal** | U-NET for crystal system classification from XRD spectra |
| **CICHAZ** | International research internship — 3D tracking with OpenCV |

## Structure

```
├── index.html          # Homepage
├── css/
│   ├── style.css       # Stylesheet
│   ├── simplify.css    # Simplify page branding (teal accent, board preview)
│   ├── unified.css     # Unified page branding (royal blue, module tiles; reuses sp-* layout)
│   └── nova.css        # Nova page branding (royal blue + violet, sample reading; reuses sp-*/un-* layout)
├── js/
│   └── main.js         # Starfield, scroll reveals, form handling
├── images/             # Photos and gallery assets
└── projects/
    ├── simplify.html     # Simplify (EN)
    ├── simplify-es.html  # Simplify (ES)
    ├── unified.html      # Unified (EN)
    ├── unified-es.html   # Unified (ES)
    ├── nova.html         # Nova (EN)
    ├── nova-es.html      # Nova (ES)
    ├── azonet.html
    ├── qsar.html
    ├── nexus.html
    ├── paleonet.html
    ├── cansat.html
    ├── xrd-crystal.html
    └── cichaz.html
```

## Usage

Open `index.html` in any browser — no build step or server required.

To deploy, upload the entire directory to any static hosting service (GitHub Pages, Netlify, Vercel, etc.).

## Social

- **GitHub:** [AlanAmaro13](https://github.com/AlanAmaro13)
- **LinkedIn:** [Alan Amaro](https://www.linkedin.com/in/alanamaro/)
- **Instagram:** [@todo.es.relativo13](https://www.instagram.com/todo.es.relativo13/)

## License

All rights reserved.
