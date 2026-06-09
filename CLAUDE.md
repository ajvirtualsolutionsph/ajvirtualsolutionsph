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

Nav → Hero → Showcase (bento) → About → Services → Projects → Demo Videos → Pricing → FAQ → Contact → Footer

## Current State

All phases through **Post-Launch Audit** are complete. Site is live at `https://ajvirtualsolutionsph.vercel.app`.

**Open items:**
- Custom domain not yet purchased — when ready: update `canonical`, `og:url`, JSON-LD, and `sitemap.xml`
- Notion integration: DB `34336c4814bf806eb6a9f0e483991571`, secrets in Vercel env vars (`NOTION_API_TOKEN`, `NOTION_DATABASE_ID`)

### ✅ Done
<!-- Updated automatically by the 123 workflow at end of each session -->
- Updated featured project section based on `CRM_PROMO.md` — retitled to "All-in-One Business CRM Platform"
- Rewrote project description to highlight GoHighLevel/HubSpot/Zoho replacement, 31+ feature stages, and full feature scope (Gmail, Stripe, e-sign, Google Calendar, financial dashboard)
- Added gold stats row: "31+ Feature Stages · Production-Ready · White-Label Ready"
- Updated project tags: added Stripe, Claude AI, TailwindCSS; updated "React" to "React 18 + Vite"
- Added 8-item CRM feature highlights grid (Lead Pipeline, Gmail + Social Inbox, Invoices & Stripe, Calendar, Client Portal, Reporting, AI Outreach, Multi-Role Access)
- Updated Kitchen built-card: added Stripe and Claude AI entries
- Updated Pantry built-card: added JWT Authentication and Sentry entries
- Added `.crm-stats-row`, `.crm-stat`, `.crm-features-grid`, `.crm-feature-item` CSS in `styles.css`

### 🔲 Next Session
<!-- Updated automatically by the 123 workflow at end of each session -->
- Visually review the updated featured project section live at `https://ajvirtualsolutionsph.vercel.app/` — confirm feature grid and stats row render correctly
- Purchase and configure custom domain (update canonical, og:url, JSON-LD, sitemap.xml)
- Verify Notion form integration is live and receiving submissions
- Consider adding a second project card (e.g. a completed automation build) to grow the Projects section

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
