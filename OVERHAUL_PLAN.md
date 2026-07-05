# Website Overhaul Plan
**Status:** Executed (v1.0, see `CLAUDE.md` for the authoritative Done/Next log). Most sections below shipped; a few were intentionally reverted or remain blocked on real assets — see notes per item.
**Goal:** Premium redesign that showcases the CRM in action and converts visitors into demo bookings.

---

## 1. Visual Identity Upgrade — ✅ Done
- Audit and enforce the teal + gold design system across every section
- Replace any hardcoded font sizes / spacing with CSS tokens
- Add a consistent `clamp()`-based fluid type scale (xs → 5xl)
- Introduce a subtle noise or mesh-gradient texture on dark backgrounds for depth
- Upgrade all card hover states to have a consistent glow + lift treatment

## 2. Hero Section Overhaul — ⚠️ Reverted (blocked on real asset)
Built, then intentionally removed (commit `7d1c4c4`) in favor of a cost-callout hero — a fake/mockup CRM screenshot was judged a credibility risk. Revisit only with a real dashboard visual.
- Replace the logo-card animation with a live-looking CRM dashboard mockup or animated screenshot
- Keep the new outcome-first headline: "Your own CRM. No $300/mo subscriptions. Built in 2 weeks."
- Add a short trust bar below the CTA: client count, build time, uptime stat

## 3. "See It In Action" Section (NEW) — ⚠️ Reverted (superseded)
Built, then removed (commit `7d1c4c4`) as redundant with the real screenshot gallery + lightbox already in `#features`.
- Walk visitors through the CRM with annotated screenshots or a short Loom embed
- Highlight the exact flow: Lead comes in → Call script → Callback scheduled → Proposal sent → Invoice paid
- Use a horizontal step-by-step layout with real CRM screenshots for each stage

## 4. Features Section Polish — ✅ Done (tabbed layout shipped; no sandboxed live-demo instance exists)
- Condense the capabilities deep-dive into scannable icon + one-liner cards
- Add a "Live Demo" badge linking to a sandboxed CRM instance (if available)
- Replace the long bulleted lists with a tabbed layout (Lead Pipeline / Finance / Calendar / AI)

## 5. Social Proof Section (NEW) — ❌ Blocked on AJ
Placeholder testimonial was built then removed (commit `7d1c4c4`) — no first client yet. Do not re-add a fake one.
- Add a real testimonial with name, photo, and company once first client provides one
- Add a "Built by a real developer, not a template shop" credibility block with GitHub/LinkedIn

## 6. Pricing Section Polish — ✅ Done (ROI calculator + availability banner shipped)
- Make the Year 3 savings more prominent — that's where AJ wins big vs GHL
- Add a simple ROI calculator: "If you pay $297/mo for GHL, you break even with AJ's CRM in X months"
- Keep the availability banner ("Only 3 slots/month") — move it closer to the CTA

## 7. Contact Section Polish — ✅ Done (Calendly inline widget shipped)
- Embed the Calendly widget inline (not just a link) so visitors can book without leaving the page
- Slim contact form is already 3 fields — keep it

## 8. Performance & SEO — ✅ Done (2026-07-05 session)
- Lazy-load all screenshots and demo images — done (`loading="lazy"` already present; added to profile photo and both logo instances)
- Compress images (convert to WebP) — done: resized oversized originals and added `<picture>`/WebP siblings for logo, profile, dashboard, and all 4 screenshot thumbnails (~3.3MB → ~430KB combined for those 8 files)
- Add `og:image` with a real CRM dashboard screenshot — already in place (`og-image.png`, 1200×630), just recompressed this session
- Verify structured data is valid — reviewed, JSON-LD Person + ProfessionalService schema looks valid

---

## Assets Needed
- [x] Real CRM screenshot (dashboard, leads pipeline, calendar, financial) — in `assets/images/`, used in gallery
- [ ] At least one client testimonial (name + quote, photo optional) — still the only real blocker
- [x] Calendly embed code (inline widget version) — live in `#contact`
- [x] Brand logo — favicon already SVG (`favicon.svg`); nav/footer use `logo.png`+`.webp`, SVG not required since it's raster-safe at current small display size

---

## Authorization
AJ authorized this full overhaul; v1.0 was executed and is live. Remaining items are blocked on AJ providing real assets (see `CLAUDE.md` Next Session).
