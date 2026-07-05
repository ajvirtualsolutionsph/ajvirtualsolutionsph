# CLAUDE.md

## Project Overview

Portfolio website for **AJ Virtual Solutions** — plain HTML/CSS/JS, no frameworks. Hosted on Vercel, domain via Namecheap.

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- Vercel (GitHub auto-deploy)
- Namecheap (.COM domain — not yet configured)

## File Structure

```
├── index.html          # Single-page app, all sections
├── styles.css
├── script.js
├── api/
│   └── submit-demo.js  # Vercel serverless → Notion API
├── assets/
│   ├── images/         # logo.png, profile.png, favicon.svg, og-image.svg, og-image.png
│   └── projects/       # 3 SVG project card images
├── sitemap.xml
└── CLAUDE.md
```

## Architecture

Single-page, anchor nav. `script.js` handles smooth scroll, active nav, hamburger, scroll animations (IntersectionObserver), bento gallery parallax, FAQ accordion, and contact form (`/api/submit-demo`). No build step.

## Brand Identity

- **Owner:** AJ Javier / AJ Virtual Solutions
- **Email:** aj.virtualsolutionsph@gmail.com
- **Colors:** bg `#0a2e2c`, surface `#0f3533`, primary `#0d9488`, accent `#c9a240` (gold), text `#fff` / `#a8d5d1`

## Page Sections

Nav → Hero → Cost Comparison → Features (CRM) → Demo Videos → Pricing → FAQ → Contact → Footer

## Current State

All phases through **Post-Launch Audit** are complete. Site is live at `https://ajvirtualsolutionsph.vercel.app`.

**Open items:**
- Custom domain not yet purchased — when ready: update `canonical`, `og:url`, JSON-LD, and `sitemap.xml`
- Notion integration: DB `34336c4814bf806eb6a9f0e483991571`, secrets in Vercel env vars (`NOTION_API_TOKEN`, `NOTION_DATABASE_ID`)

### ✅ Done
<!-- Updated automatically by the 123 workflow at end of each session -->
- v1.0 premium overhaul (`OVERHAUL_PLAN.md`) largely executed across prior sessions: glassmorphism dark theme, numbered feature cards, tabbed "Deep Dive" capabilities (Lead Pipeline / Finance / Calendar / AI), ROI break-even calculator, Calendly inline widget on contact, real CRM screenshot gallery with lightbox (dashboard, leads, calendar, tasks, financial)
- Deliberately reverted the hero CRM dashboard mockup, the standalone "See It In Action" section, and a placeholder testimonial — team judged fake visuals/testimonials a credibility risk before the first real client (see commit `7d1c4c4`)
- This session: performance pass on `assets/images/` — resized oversized originals (logo.png 1536×1024→300px wide, profile.png 1024×1024→640px wide, CRM screenshot thumbnails 1920×1080→640px wide) and added `.webp` siblings with `<picture>`/`<source>` fallback for logo (nav + footer), profile photo, featured dashboard screenshot, and all 4 screenshot-gallery thumbnails. Combined image payload for these 8 files dropped from ~3.3MB to ~430KB (PNG fallback) / further less on WebP-capable browsers. Lightbox in `script.js` unaffected (reads nested `<img>` via `querySelector`).
- Reconciled this file's Done/Next log, which had drifted out of sync with several completed sessions

### 🔲 Next Session
<!-- Updated automatically by the 123 workflow at end of each session -->
- **Blocked on AJ:** real client testimonial (name + quote, photo optional) — add to a new Social Proof section once available; do not re-add a placeholder
- **Blocked on AJ:** a real/live-looking CRM dashboard visual for the hero, if he still wants one — otherwise leave the current cost-callout hero as final
- Add a CRM-specific demo video (current demos are AI Executive Assistant + AI Landing Page — not the CRM itself)
- Purchase and configure custom domain (update `canonical`, `og:url`, JSON-LD, `sitemap.xml`)
- Verify Notion form integration still receives submissions
- Visually spot-check the resized/WebP images on the live site (mobile + desktop) after this session's changes are pushed
- `OVERHAUL_PLAN.md` and `CRM_PRICING_COMPARISON.md` are untracked in git — decide whether to commit them for history or delete now that they're superseded by this file

## Deployment

Push to GitHub → Vercel auto-deploys. Always push after every commit.

## Design Constraints

- Mobile-first, WCAG accessible, cross-browser
- No frameworks — target < 2s load

## 123 Workflow

**Trigger:** When the user sends the message `123`, execute all three steps below in order without asking for confirmation.

### Step 1 — Update Files
1. Rewrite the `### ✅ Done` section in this file to reflect everything accomplished this session (bullet list, past tense, specific).
2. Rewrite the `### 🔲 Next Session` section with the clearest next priorities based on open items and session context.
3. Update `memory/project_session_status.md` with: date, what was done, what's next, any blockers.

### Step 2 — Commit + Push
1. Stage all changed files (`git add` specific files — never `git add -A` blindly; exclude `.env` or secrets).
2. Commit with a concise message summarizing the session work.
3. Push to `origin main`.

### Step 3 — Chat Report
Respond in chat with a short summary:
- **Files updated:** list which files changed
- **Committed:** the commit message used
- **Next priority:** top item from `### 🔲 Next Session`
