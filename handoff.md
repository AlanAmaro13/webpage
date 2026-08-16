# Handoff — Neumorphic Redesign (Aug 16, 2026)

## Summary

Complete visual redesign of the Alan Amaro portfolio from the previous dark
"starfield" theme to an evolved **neumorphism** (soft-UI) style, with a
light/dark theme toggle. The AzoNet project page was deactivated and replaced
with a "Coming Soon" placeholder.

## What Changed

### 1. Design system rewrite — `css/style.css`
- Full rewrite around neumorphic design tokens (two-layer CSS variables:
  `:root` for light, `[data-theme='dark']` for dark).
- Light base surface `#E4E9F0`; dark base `#23262E`.
- Dual soft shadows: raised `8px 8px 16px` + `-8px -8px 16px`, and inset
  variants for pressed/concave states (inputs, tags, pressed buttons).
- Rounded corners 12–16px, pill-shaped buttons/badges.
- Fresh pastel accent set (replaces old teal/gold):
  - blue `#3d6be0` / `#7fa8f0` (dark)
  - mint `#2e8b7a` / `#56c4b3`
  - violet `#6b4fa3` / `#a894e8`
  - amber `#a9761a` / `#e0b65a` (used for "gold" tags)
- Typography: **Plus Jakarta Sans** (headings + body) + **Fira Code** (mono),
  loaded via Google Fonts.
- Ambient radial-gradient background replaces the canvas starfield.
- Added `prefers-reduced-motion` support (disables reveal animations/transitions).

### 2. JavaScript — `js/main.js`
- Removed all starfield canvas logic.
- Added theme toggle (persists via `localStorage`, defaults to
  `prefers-color-scheme`, sets `data-theme` on `<html>`).
- Kept: mobile nav toggle, scroll-reveal, contact form handler, visitor counter.

### 3. Markup — `index.html` + 7 project pages
- Removed `<canvas id="starfield">` from every page.
- Added a sun/moon theme-toggle button to the navbar (wrapped social icons +
  toggle in a `.nav-actions` container).
- Added Google Fonts links to `<head>`.

### 4. AzoNet deactivated
- `projects/azonet.html` now shows a neumorphic **"Coming Soon"** page
  (added `noindex, nofollow` meta). All methodology, results, and resource
  links were removed.
- Homepage AzoNet card is now a non-clickable, dimmed card with a gold
  "Coming Soon" tag (no longer links anywhere).

## Bug Fixed

- The homepage linked to `projects/azonet.html`, but the file was named
  `azonet_down.html` (broken link). Renamed `azonet_down.html` → `azonet.html`
  to match the README structure and existing link.

## Files Touched

- `css/style.css` (rewritten)
- `js/main.js` (rewritten)
- `index.html`
- `projects/azonet.html` (renamed from `azonet_down.html`, now Coming Soon)
- `projects/cansat.html`, `cichaz.html`, `nexus.html`, `paleonet.html`,
  `qsar.html`, `xrd-crystal.html`

## How to Run / Verify

- Static site, no build step — open `index.html` in a browser.
- Test: theme toggle (nav sun/moon), mobile hamburger at <768px, keyboard
  focus, `prefers-reduced-motion`, and all project page links.

## Git

- Committed and pushed to `origin/main` as `f1c15bc`
  ("Redesign site with neumorphic theme (light/dark) and deactivate AzoNet").
- `.opencode/` (skills directory) is intentionally left untracked.

## Notes / Next Steps

- README still lists AzoNet as an active project in the table; update if you
  want the docs to reflect the "Coming Soon" status.
- Consider `origin_data/` (already gitignored) for any future data assets.
