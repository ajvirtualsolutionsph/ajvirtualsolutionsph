# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A professional, responsive portfolio website for **AJ Virtual Solutions** — built with plain HTML, CSS, and JavaScript (no frameworks). Hosted on Vercel with a custom domain from Namecheap.

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript (no libraries or frameworks)
- Deployed via Vercel (GitHub integration, auto-deploy on push)
- Domain via Namecheap (.COM)

## File Structure

```
portfolio/
├── index.html                                   # Single-page app, all sections
├── styles.css
├── script.js
├── assets/
│   ├── images/
│   │   ├── logo.png                             # Brand logo (used in nav + hero)
│   │   ├── profile.png                          # Profile headshot (used in About section)
│   │   ├── favicon.svg                          # Browser tab icon (dark teal + gold "AJ")
│   │   └── og-image.svg                         # 1200×630 OG/Twitter social share image
│   └── projects/
│       ├── ai_executive_assistant_project_card.svg
│       ├── bookkeeping_automation_project_card.svg
│       └── ai_lead_generation_pipeline_project_card.svg
├── .gitignore
├── README.md
└── CLAUDE.md
```

## Architecture

Single-page layout with anchor-based navigation. All sections live in `index.html`. `script.js` handles smooth scroll, sticky nav active-link highlighting, and the mobile hamburger menu. No build step — files are served directly.

## Brand Identity

- **Business name:** AJ Virtual Solutions
- **Owner title:** AI Automation Specialist / Bookkeeper / Admin Assistant
- **Email:** aj.virtualsolutionsph@gmail.com
- **Logo file:** `assets/images/logo.png`
- **Profile photo:** `assets/images/profile.png`
- **Color palette (from logo):**
  - Background: `#0a2e2c` (dark teal)
  - Surface: `#0f3533` (cards, nav)
  - Primary: `#0d9488` (mid teal)
  - Accent: `#c9a240` (gold — CTAs, highlights)
  - Text: `#ffffff` / `#a8d5d1` (muted)

## Page Sections

1. **Navigation** — Fixed header, logo, smooth scroll, active link, mobile hamburger
2. **Hero** — Logo image, name, three-part title, tagline, CTA button
3. **About** — Bio, skills badges, professional summary
4. **Services** — 3 service cards (AI Automation, Bookkeeping, Admin Support)
5. **Projects** — 3 project cards (4/3 aspect ratio, object-fit: contain, third card centered on row 2)
6. **Pricing** — Cost comparison table, 3 AI build cards, 3 retainer tier cards, demo CTA
7. **Contact** — Form + mailto / LinkedIn / GitHub links
8. **Footer** — Copyright, social icons

---

## Roadmap & Progress Tracker

### ✅ Phase 1 — Foundation (Complete)
- [x] Brand identity established (colors, logo, titles)
- [x] `index.html` — full page structure with all sections
- [x] `styles.css` — mobile-first, teal/gold palette, responsive layout
- [x] `script.js` — smooth scroll, active nav, hamburger menu, contact form validation
- [x] `assets/images/` and `assets/projects/` directories created
- [x] `.gitignore` and `README.md` created
- [x] Email updated to `aj.virtualsolutionsph@gmail.com`

### ✅ Phase 2 — Content & Personalization (Complete)
- [x] Add real LinkedIn profile URL → https://www.linkedin.com/in/andrei-james-javier/
- [x] Add real GitHub profile URL → https://github.com/ajvirtualsolutionsph
- [x] Write real bio in the About section (corporate tone, resume-based)
- [x] Replace 3 placeholder project cards with real projects (title, description, tech tags, status badges)
- [x] Add project images to `assets/projects/` (SVGs for cards 1 & 2, PNG for card 3)
- [x] Add profile photo to `assets/images/` and wire it into the About section
- [x] Move logo to `assets/images/logo.png` and update all references

**Project Cards (current state):**
1. AI-Powered Executive Assistant — `ai_executive_assistant_project_card.svg` — **Live**
2. Intelligent Bookkeeping Assistant — `bookkeeping_automation_project_card.svg` — **In Progress**
3. AI Lead Generation Pipeline — `ai_lead_generation_pipeline_project_card.svg` — **In Progress**

### ✅ Phase 3 — Polish & Accessibility (Complete)
- [x] Test on mobile (375px), tablet (768px), and desktop (1280px) — fixed hardcoded `<br />` in hero tagline
- [x] Run Lighthouse audit — applied 4 fixes: `fetchpriority="high"` on hero logo, `width`/`height` on all images, `aria-label` on `<nav>`, `og:image` meta tag
- [x] Verify all links work (email, LinkedIn, GitHub, project links) — all clean; removed 3 placeholder `href="#"` View Details buttons
- [x] Add favicon — `assets/images/favicon.svg` (dark teal + gold "AJ" initials, SVG format)
- [x] Finalize SEO meta tags — full OG + Twitter Card tags added; `assets/images/og-image.svg` created (1200×630)

**Note:** OG/Twitter image tags updated to absolute Vercel URLs (`https://ajvirtualsolutionsph.vercel.app/assets/images/og-image.svg`). Update again if a custom domain is added.

### ✅ Phase 3.5 — Layout & Pricing Enhancements (Complete)
- [x] Widened global max-width from 1100px → 1400px (nav, sections, footer) for better page utilization
- [x] Project cards updated: aspect ratio 16/9 → 4/3, `object-fit: cover` → `contain` so full SVG artwork is visible
- [x] Third project card centered on its own row (2-column grid with `grid-column: 1 / -1` + `justify-self: center`)
- [x] Added full **Pricing & Packages** section with:
  - Cost comparison table (US/UK local vs Filipino VA vs AI build) with vertical divider line and uniform row spacing
  - 3 AI automation build cards (Admin & Lead Gen, Marketing Agent, Video Automation) with price ranges
  - 3 retainer tier cards (3-month 30%, 6-month 25%, 12-month 20%) — 6-month marked "Popular"
  - "Book a Free Demo Call" CTA linking to Contact
- [x] "Pricing" added to nav

### ✅ Phase 4 — Deployment (Complete)
- [x] `git init` and push to GitHub repo → https://github.com/ajvirtualsolutionsph/ajvirtualsolutionsph
- [x] Import repo in Vercel → auto-deploy verified → https://ajvirtualsolutionsph.vercel.app
- [ ] Purchase custom domain on Namecheap (optional — site is live on Vercel URL)
- [ ] Configure Namecheap DNS → point to Vercel
- [ ] Add custom domain in Vercel project settings
- [ ] Confirm site is live on custom domain with HTTPS

### 🔲 Phase 5 — Post-Launch (Optional)
- [ ] Connect contact form to a real backend (Formspree or Netlify Forms)
- [ ] Add Google Analytics or Plausible for traffic tracking
- [ ] Dark/light mode toggle
- [ ] Project filtering by category
- [ ] Blog section with markdown support
- [ ] PWA features (offline support, installable)

---

## Design Constraints

- Mobile-first responsive design
- No frameworks or unnecessary dependencies — target page load under 2 seconds
- WCAG accessibility compliance
- Cross-browser compatible

## Deployment Workflow

1. Push to GitHub → Vercel auto-deploys on every push
2. Purchase domain on Namecheap
3. Point Namecheap DNS to Vercel (CNAME `www` → `cname.vercel-dns.com`)
4. Add custom domain in Vercel project settings
5. Site goes live on custom domain with HTTPS
