# Handoff — Neumorphic Redesign (Aug 16, 2026)

## Summary

Complete visual redesign of the Alan Amaro portfolio from the previous dark
"starfield" theme to an evolved **neumorphism** (soft-UI) style, with a
light/dark theme toggle. The AzoNet project page was deactivated and replaced
with a "Coming Soon" placeholder. The contact form now opens the user's email
provider via `mailto:alan@amarox.dev`, and the visitor counter was removed.

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
- Contact form handler now builds a `mailto:` link (subject + body prefilled
  from name/email/message) and opens the email provider.
- Kept: mobile nav toggle, scroll-reveal.
- Removed: visitor counter logic.

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

### 5. Contact section — mailto
- Displayed email and form target updated to **`alan@amarox.dev`**.
- Form now opens the default email provider on submit, with a prefilled
  subject ("Portfolio contact from [name]") and body (name, email, message).
- Button relabeled "Send Email", inputs given `name` attributes, and a small
  hint added below the button.

### 6. Visitor counter removed
- Removed the visitor counter markup, JS logic, and CSS styles entirely.

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

- `f1c15bc` — "Redesign site with neumorphic theme (light/dark) and deactivate
  AzoNet".
- `bd7ecaa` — "Update contact section and remove visitor counter".
- Both pushed to `origin/main`.
- `.opencode/` (skills directory) is intentionally left untracked.

## Notes / Next Steps

- Contact uses `mailto:` (no backend/email service) — replace with a real form
  endpoint or service (e.g. Formspree) if you want server-side delivery.
- Consider `origin_data/` (already gitignored) for any future data assets.

## Update — AzoNet made public (Nov 10, 2026)

The AzoNet paper was published: "A Deep Learning Approach for Thickness
Determination of AZO Thin Films", *ACS Omega* 2026, 11, 69373–69380,
DOI `10.1021/acsomega.6c10558` (CC-BY 4.0). So the Coming Soon state from
section 4 was reverted:

- `projects/azonet.html`: full project page restored in the neumorphic layout,
  `noindex` removed. Facts corrected to match the published paper: added
  co-author Miguel Esquivel-García, 12 free fit parameters, 80/10/10 split,
  1000 epochs (Adam, cosine LR from 1e-4, batch 512, A100 80 GB), results
  MAPE 5.3% / MAE 15.7 nm (synthetic validation) and MAPE 6.91% / MAE 22.7 nm
  (145 experimental films). Old numbers not in the paper were dropped
  (MAPE 1.16%, MAE 5.1 nm, FCNN 15.6 nm, Keras Tuner 300 trials, V100).
  The paper resource now links to the DOI; both Colab notebooks restored.
- `index.html`: AzoNet card is a normal clickable card again with an
  "ACS Omega" tag.
- README project table links the paper.
- `.coming-soon*` and `.project-card-soon` CSS are now unused but kept for
  future placeholders.
- Paper figures (graphical abstract + Figs 1–9, extracted with `pdfimages`)
  live in `images/azonet/` and are embedded with captions and a CC-BY credit
  line (`.paper-figure*` styles in `css/style.css`).
- Spanish version `projects/azonet-es.html` with EN/ES switch. The `.sp-topbar`
  rule moved from `css/simplify.css` to `css/style.css` so non-Simplify pages
  can use the switch.
- "Published" badge: `.pub-badge` (header of both AzoNet pages, links to the
  DOI) and `.tag-published` (homepage card), both mint with a check-seal icon.
