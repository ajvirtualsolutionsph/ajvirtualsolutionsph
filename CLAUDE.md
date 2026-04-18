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
├── api/
│   └── submit-demo.js                           # Vercel serverless function → Notion API
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
2. **Hero** — Animated logo card ("AJ Virtual Solutions"), typewriter role cycling, skill tag pills, floating particles, dots indicator, tagline, CTA button
3. **About** — Bio (name: AJ Javier), skills badges, professional summary
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

### ✅ Phase 4.5 — Notion Demo Booking Integration (Complete)
- [x] Upgraded contact form into a demo booking form with 2 new fields: Service Interest (dropdown) and Preferred Contact Time (optional text)
- [x] Created `api/submit-demo.js` — Vercel serverless function that proxies form submissions to Notion API
- [x] Notion database "Demo Booking Leads" stores: Name, Email, Service Interest, Preferred Contact Time, Message, Submitted At
- [x] Secrets stored in Vercel environment variables (`NOTION_API_TOKEN`, `NOTION_DATABASE_ID`) — never in code
- [x] Form handler in `script.js` updated to async fetch `/api/submit-demo` with button disable guard

**Notion setup:**
- Integration name: AJVS Website
- Database: Demo Booking Leads (ID: `34336c4814bf806eb6a9f0e483991571`)
- Notion API version pinned: `2022-06-28`

### ✅ Phase 4.8 — Hero Redesign & SEO (Complete)
- [x] Hero section rebuilt: animated logo card ("AJ Virtual Solutions"), pulse rings, orbiting dots, floating gold/teal particles
- [x] Typewriter role cycling (4 roles) with blinking cursor and synced dot indicator
- [x] Skill tag pills added (AI Automation, Bookkeeping, Admin Support) with tagFloat animation
- [x] About section: name updated to "AJ Javier"; tools copy updated to "N8N, Make, and Claude Code"
- [x] SEO: title tag strengthened with keywords, meta description updated with geo + tool signals
- [x] SEO: canonical, robots, author, theme-color, og:url meta tags added
- [x] SEO: JSON-LD structured data added (Person + ProfessionalService schemas)
- [x] Google Search Console: site verified, indexed, sitemap.xml submitted
- [x] `sitemap.xml` created and deployed

### ✅ Phase 4.9 — Scroll Animations & Bento Gallery (Complete)
- [x] Scroll-triggered entrance animations added to all sections (About, Services, Projects, Demos, Pricing, Contact) using IntersectionObserver + `data-animate` / `data-delay` attributes
- [x] Section `<h2>` titles all animate in (`data-animate="up"`) ahead of their cards
- [x] Animation direction variants: `up`, `left`, `right`, `scale` — 60px offset, 0.75s cubic-bezier easing
- [x] `prefers-reduced-motion` respected: all animations skipped for users who prefer it
- [x] 3D perspective tilt on Projects grid: starts at 18° rotateX, flattens to 0° as section fills viewport
- [x] Bento gallery scroll section added between Hero and About:
  - 300vh scroll container, sticky 100vh bento grid, 5 Unsplash AI/tech images
  - Images scale from 0.5→1 and translateY from -35%→0% as user scrolls
  - Centered text overlay ("Smarter workflows. Better outcomes.") fades + scales to 0 over first 50% of scroll
  - On mobile: cells 2+3 hidden, 3-cell layout fills screen
- [x] Bug fixes: `select` element styled, `label-optional` class added, Loom iframes get `loading="lazy"`, `#showcase` excluded from nav IntersectionObserver, 3 scroll listeners consolidated into 1

### ✅ Phase 4.10 — Bug Fixes & Code Audit (Complete)
- [x] Fixed showcase overlay (`position: fixed` → `position: absolute`) bleeding over hero section on page load
- [x] Removed JS line toggling overlay position during scroll (root cause of hero overlap bug)
- [x] Scroll animations now replay on scroll-up: removed `unobserve()`, toggle `scroll-visible` on both enter and leave
- [x] Removed unused CSS classes: `.btn-outline`, `.btn-outline:hover`, `.btn-sm`, `.hero-logo` (media), `.project-links`
- [x] Deleted orphaned asset: `assets/projects/project-3.png` (not referenced anywhere)
- [x] Updated `sitemap.xml` lastmod date to 2026-04-18

### 🔲 Phase 5 — Post-Launch (Optional)
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
