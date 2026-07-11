# Smell Report: SteelFlow Piping Solutions

**Score:** 7/10 — FAINT
**Date:** 2026-07-09
**Target:** `index.html`, `css/style.css`, `js/main.js`

## TL;DR

The site is structurally competent and the content shows genuine domain knowledge (ASME codes, welding processes, material specs). Two primary smells are present: a **feature tile grid** in the services section (every card equal, nothing prioritized) and **default type** (Inter without a specific reason). The stronger concern is materials that feel placeholder — emoji replacing all imagery, a non-functional contact form, and fake phone numbers — which make the site feel unfinished rather than just generic.

---

## Heuristic Scores

| # | Odor | Score | Finding |
|---|---|---|---|
| 1 | Tech gradient | 1 — Absent | Dark navy-to-blue gradient is industrial, not AI-startup. |
| 2 | Generic tech hue | 1 — Absent | #0d47a1 blue fits the construction/piping domain. |
| 3 | Feature tile grid | **0 — Detected** | 6 service cards in an equal grid — icon, heading, text, link. Every card carries the same visual weight. |
| 4 | Accent rail | 1 — Absent | Gradient top border only appears on hover; not permanent decoration. |
| 5 | Unearned blur | 1 — Absent | Frosted nav is justified. No floating glass panels elsewhere. |
| 6 | Stat monument | 1 — Absent | Stats are real business metrics (15+ years, 500+ projects, 98% satisfaction, 50+ welders) with context. |
| 7 | Icon topper | 1 — Absent | Icons are used as content, not as decorative section headers. |
| 8 | Bounce everywhere | 1 — Absent | No bounce easing anywhere. Transitions use standard ease curves. |
| 9 | Default type | **0 — Detected** | Inter is the default "didn't think about it" choice. For an Indonesian industrial company, a more distinctive or localized typeface would signal intent. |
| 10 | Center stack | 1 — Absent | Mixed layout: hero left-aligned, section headers centered, content grids asymmetric. Not a pure center stack. |

---

## Materials Issues (Outside the 10-Odor Catalog)

### Strong: Emoji-as-Imagery
The entire site uses emoji as its only visual content — 🔧 for the about section hero, 🔩🔧🔍 for service icons, 🏭🏢⚡ for project thumbnails, 🏗️ for the why-us image. For a construction/industrial company, real project photos, workshop shots, and team imagery are primary trust signals. Emoji placeholders read as "AI generated and never finished."

### Strong: Non-Functional Contact Form
`onsubmit="event.preventDefault(); alert(...)"` is a dev artifact, not a production form. A piping contractor's contact form is the primary lead channel — it needs actual submission handling.

### Medium: Placeholder Contact Details
Phone number `+62 812-3456-7890` and `tel:+628****7890` use obviously fake digits. For a local Indonesian company, real contact information is essential for credibility.

---

## What's Working

Strong domain-specific content that shows real expertise — ASME B31.1/B31.3 references, specific welding processes (SMAW, GTAW, FCAW, SAW), genuine project descriptions with industry details (50,000 BPD refinery, 35-story HVAC, 100MW power plant). The technical vocabulary is correct and specific enough that it could not have been trivially generated without domain knowledge.

Color palette is appropriate for the industrial sector — dark blue primary with orange accent reads as trustworthy and industrial rather than generic tech.

---

## Priority Issues

**P1 — Emoji replacing all imagery**
Every section that should show real project photos, workshop facilities, or team shots uses an emoji on a gradient background. This is the single strongest "unfinished" signal on the page.

**P2 — Feature tile services grid**
Six identical cards with no hierarchy means a visitor scanning the page can't tell which service is most relevant to their project. A lead looking for "pipe installation" gets the same visual treatment as "inspection & testing."

**P2 — Non-functional contact form**
The primary lead capture mechanism does not submit data anywhere. This makes the site a brochure with no conversion path.

**P3 — Default type selection**
Inter works but communicates nothing about this specific company. A typeface that carries industrial character or Indonesian context would strengthen the brand.

---

## Primary Recommendation

**`/design deslop`** to fix the four material issues (emoji replacement, form backend, real contact details, and service card hierarchy) without a full redesign, followed by **`/design typeset`** to give the typography a voice-driven reason.
