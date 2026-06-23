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
- Pivoted site from general AI automation portfolio to focused CRM product/service marketing page
- Rewrote `index.html` top to bottom: removed original About and Services sections; replaced VA salary comparison with SaaS subscription cost comparison
- Updated nav to: About · Features · Who It's For · Pricing · FAQ · Contact
- Rewrote hero copy and tags to CRM focus (personal brand kept); updated typewriter roles in `script.js`
- Renamed `#projects` → `#features` ("What You Get"); kept 7 capability cards and audience pills intact
- Replaced all 8 FAQ questions with CRM-specific objections; updated contact form select dropdown
- Updated meta title, description, keywords, OG tags, and JSON-LD structured data to CRM focus
- Added `#about` section between Hero and Features: two-column layout (profile photo + bio), 3 stat pills, "Work With Me" CTA; added About nav link
- Changed About stat label from "Your Data" to "Full Ownership"
- Synced `#comparison` and `#pricing` sections with `CRM_PRICING_COMPARISON.md`:
  - Updated pricing model to $1,500 one-time + $149/mo (hosting + support + updates), Month 1 FREE
  - Rewrote hero callout: GoHighLevel now shows $297/mo → $10,692 Y3 vs AJ $3,145 Y1 → $6,721 Y3
  - Section heading changed to "Less Than GoHighLevel. Done For You."
  - Updated all 4 competitor rows with correct per-seat pricing (HubSpot $15/seat, Zoho $23/seat, Pipedrive $39/seat)
  - Renamed table column "You Own It?" → "Hidden Fees?"; updated all values
  - Replaced fine print with per-seat footnote from MD
  - Removed $500/mo Support Retainer card from `#pricing`; pricing card now shows $149/mo + Month 1 FREE
  - Added `.pricing-grid-one` CSS class in `styles.css` for centered single-card layout

### 🔲 Next Session
<!-- Updated automatically by the 123 workflow at end of each session -->
- Visually review live site at `https://ajvirtualsolutionsph.vercel.app/` — verify comparison section and pricing card render correctly on mobile and desktop; check table horizontal scroll on narrow screens
- Add a CRM-specific demo video (current demos are AI Executive Assistant + AI Landing Page — not the CRM itself)
- Review `CRM_PROMO.md` (opened this session but not yet used) — assess if promo copy should be incorporated into the site
- Purchase and configure custom domain (update `canonical`, `og:url`, JSON-LD, `sitemap.xml`)
- Verify Notion form integration still receives submissions after contact form select options changed
- Consider adding a social proof section (testimonials or client logos) above the pricing section

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
