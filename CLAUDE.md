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
- Rewrote `index.html` top to bottom: removed About and Services sections; replaced VA salary comparison with SaaS subscription cost comparison
- Added new `#comparison` section (right after hero) with a big GoHighLevel-vs-$1,500 visual callout and a 5-row comparison table (GoHighLevel, HubSpot Pro, Zoho Pro, Pipedrive vs AJ's CRM) including honest fine print on hosting costs
- Updated nav to: Features · Who It's For · Pricing · FAQ · Contact
- Rewrote hero copy and tags to CRM focus (personal brand kept); updated typewriter roles in `script.js`
- Renamed `#projects` → `#features` ("What You Get"); removed "What We Built / restaurant analogy" tech stack section; kept 7 capability cards and audience pills intact
- Rewrote `#pricing` to two clean cards: $1,500 one-time CRM build (gold-bordered, featured) + $500/month support retainer (weekly call, ongoing builds, maintenance)
- Replaced all 8 FAQ questions with CRM-specific objections (build time, hosting costs, GoHighLevel comparison, data security, white-labeling, etc.)
- Updated contact form select dropdown to CRM-relevant options
- Updated meta title, description, keywords, OG tags, and JSON-LD structured data to CRM focus
- Added CSS for comparison callout, comparison table, 2-column pricing grid, pricing includes list, retainer card overrides

### 🔲 Next Session
<!-- Updated automatically by the 123 workflow at end of each session -->
- Visually review live site at `https://ajvirtualsolutionsph.vercel.app/` — verify all new sections (comparison, features, pricing) render correctly on mobile and desktop; check table horizontal scroll on narrow screens
- Add a CRM-specific demo video (current demos are AI Executive Assistant + AI Landing Page — not the CRM itself)
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
