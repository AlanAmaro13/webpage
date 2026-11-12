# SSOT — Alan Amaro Portfolio

Single Source of Truth for this repository. If another document (README.md, handoff.md) disagrees with this file, this file wins.
Last updated: 2026-11-12 (at commit `e367ece`).

---

## 1. What this is

A personal portfolio for Alan Amaro (physicist and AI developer). It has a homepage and 10 project pages, each in English and Spanish, and it embeds the AmaroX brandbook.

- **Stack:** plain HTML, CSS and vanilla JS. There is no framework, no build step and no package manager.
- **Repo:** `git@github.com:AlanAmaro13/webpage.git`, branch `main`. It deploys as a static site, and any static host works (GitHub Pages, Netlify, Vercel).
- **Run locally:** open `index.html` in a browser, or run `python3 -m http.server` in the repo root.
- **Brand:** AmaroX v3.0 **"Inox"**. The source of truth is `/home/alan-amaro/Desktop/personalBranding/brand/visual` (outside this repo), and copies are vendored into `brand/`.

---

## 2. Directory map

```
├── index.html               Homepage (EN)
├── index-es.html            Homepage (ES)
├── SSOT.md                  This file
├── README.md                Public readme (partly stale: still mentions the old starfield)
├── handoff.md               Historical notes (neumorphic redesign Aug 2026, AzoNet publish Nov 2026)
├── links.txt                AzoNet Colab notebook and paper Drive links (reference only)
├── .gitignore               ignores origin_data/
├── brand/
│   ├── tokens.css           AmaroX Inox design tokens + @font-face (load FIRST)
│   ├── fonts/               Inter + JetBrains Mono woff2 (latin, latin-ext)
│   ├── logo/amx-favicon.svg Favicon
│   └── brandbook/index.html Full brandbook page (supports ?lang=es)
├── css/
│   ├── style.css            Main stylesheet (Inox rewrite + legacy-variable aliases)
│   ├── simplify.css         Simplify product brand (teal) + shared sp-* layout
│   ├── unified.css          Unified product brand (royal blue), reuses sp-*
│   └── nova.css             Nova product brand (blue + violet), reuses sp-*/un-*
├── js/main.js               Theme toggle, mobile nav, scroll reveal, mailto form
├── images/                  Photos and paper figures (shown in full colour)
│   ├── azonet/              graphical-abstract.png, fig1–fig9.png (ACS Omega, CC-BY 4.0)
│   ├── calnali/             CICHAZ fieldwork photos
│   ├── institute_physics/   XRD staff photos
│   ├── internal_symposium_institute_chemistry/  QSAR poster + photos
│   ├── national_congress_physics/               AzoNet congress photos (no longer on card)
│   └── profile/             Perfil.jpeg, Perfil2.png (hero avatar)
├── projects/                20 pages: <slug>.html (EN) + <slug>-es.html (ES)
└── old_version/             Frozen copy of the previous neumorphic site. Do not edit.
```

Untracked and never committed: `.opencode/` (67 MB of local tooling skills) and `origin_data/` (gitignored).

---

## 3. Pages

### 3.1 Homepage sections (`index.html` / `index-es.html`)

| # | id | EN title | Content |
|---|----|----------|---------|
| — | `home` | Hero | Eyebrow, "Alan Amaro.", claim "From research to product." / "De la investigación al producto.", CTAs, avatar |
| 01 | `about` | About | Bio. The EN text says "where I specialized in…" and the ES text says "con conocimientos en…" (intentionally different) |
| 02 | `projects` | Projects | 10 project cards (see 3.2) |
| 03 | `skills` | Skills | Programming, AI/ML, Data & Infra, Frameworks, Languages |
| 04 | `brand` | Brand | "Inox: the tools you trust every morning." Colour-ratio swatches, 3 meta items, and a link to `brand/brandbook/index.html` (ES adds `?lang=es`) |
| 05 | `contact` | Contact | `alan@amarox.dev`, a mailto form, social links |

**Nav order:** About · Projects · Skills · Brand · Contact, then the EN/ES `lang-switch`, then the theme toggle.
**Head of every page:** favicon, `theme-color #0E0E10`, `brand/tokens.css` (first), `css/style.css`, product CSS as needed, and `hreflang` en/es alternates.

### 3.2 Projects

| Slug | Card title | Institution (never translated) | Dates | Card image |
|------|-----------|--------------------------------|-------|-----------|
| `simplify` | Simplify — Calm Kanban Task Manager | Simplify · Personal Product | Jul 2026 — Present | Logo (`sp-card-logo`) |
| `unified` | Unified — Personal Life Dashboard | Unified · Personal Product | Sep 2026 — Present | Logo |
| `nova` | Nova — AI Language Learning | Nova · Personal Product | Jul 2026 — Present | Logo |
| `azonet` | AzoNet — Thin-Film UNET | Institute of Physics & Materials, UNAM | Jan 2025 — Aug 2025 | Inline SVG spectrum cover (`azo-cover`) |
| `qsar` | QSAR Predictive Modeling | FES Zaragoza & Institute of Chemistry, UNAM | May 2025 — Dec 2025 | `internal_symposium_institute_chemistry/poster.jpeg` |
| `nexus` | Nexus+ — B2B AI Assistants | Nexus+ | May 2025 — Dec 2025 | Placeholder |
| `paleonet` | Paleo-Net — 3D Fossil Reconstruction | Institute of Geology, UNAM | Dec 2025 — Apr 2026 | Placeholder |
| `cansat` | CanSat Satellite Prototype | CanSat — University Space Program, UNAM | Jan 2023 — May 2023 | Placeholder |
| `xrd-crystal` | XRD Crystal Classification | Institute of Physics, UNAM | Feb 2024 — Jan 2026 | `institute_physics/picture_with_staff.jpeg` |
| `cichaz` | CICHAZ Research Internship | CICHAZ — University of Padova, Italy | Mar 2026 — Apr 2026 | `calnali/view_from_mountains.jpeg` |

**AzoNet facts.** The paper is published, so use only these figures.
- Paper: "A Deep Learning Approach for Thickness Determination of AZO Thin Films", *ACS Omega* 2026, 11, 69373–69380, DOI [10.1021/acsomega.6c10558](https://doi.org/10.1021/acsomega.6c10558), CC-BY 4.0.
- Co-author: Miguel Esquivel-García.
- Model fit: 12 free fit parameters and an 80/10/10 data split.
- Training: 1000 epochs, Adam with a cosine LR schedule from 1e-4, batch size 512, on an A100 80 GB.
- Synthetic validation: MAPE 5.3%, MAE 15.7 nm.
- 145 experimental films: MAPE 6.91%, MAE 22.7 nm.
- The homepage card cover is **illustrative**: an interference-formula curve, not paper data.

### 3.3 Project page conventions

- **Top bar:** every project page starts with `.sp-topbar`. It holds "← Back to home" (ES: "Volver al inicio", which links to `../index-es.html`) and an EN/ES switch that links to the sibling page.
- **Theming:** product pages (Simplify, Unified, Nova) keep **their own brand colours**, as the brandbook requires. All other pages use pure Inox.
- **Paper figures:** `.paper-figure*` sit on a white plate in both themes, because the source figures have white backgrounds.
- **Published badges:** `.pub-badge` (the DOI badge in the AzoNet header) and `.tag-published` (the homepage card tag).
- **Unused CSS kept on purpose:** `.coming-soon*` and `.project-card-soon` are kept for future placeholders.

---

## 4. Design system — AmaroX Inox

Tokens live in `brand/tokens.css` (`--amx-*`). Never hard-code colours in new CSS; use the tokens.

| Role | Dark (default) | Light |
|------|----------------|-------|
| Background: powder black / bone | `#0E0E10` | `#EEECE7` |
| Surface: graphite | `#1A1A1D` | — |
| Secondary text: steel | `#A9ABAE` | `#66686C` |
| Body text (`--text-secondary`) | `#C4C3BF` | `#3A3B3F` |
| Accent: **crema** | `#C29468` | `#8A5A33` |

**Rules**
- Use **one crema accent per composition**: the X in the wordmark, `.btn-primary`, or a single highlight. Never several.
- **Colour ratio** (shown in the Brand swatches): 70 / 14 / 10 / 5 / 1.5.
- **Type.** Headlines use Inter 500 with tracking −0.045em and line-height 0.98. Labels use JetBrains Mono, UPPERCASE, with +0.16em tracking. Section labels follow the form `01 / About`.
- **Radii** are 2–4px.
- **Rings, not shadows.** Use 1px hairline rings (`0 0 0 1px var(--amx-line)`), never soft shadows.
- **Colour photos.** Images show in full colour, with no grayscale filters.
- **Project grid.** It uses `gap:1px; padding:1px`, and each card gets its own ring. Don't use the grid background as the hairline, because empty cells turn grey.

**Theme handling**
- Dark is the default. Light comes from `[data-theme='light']`.
- `js/main.js` always sets `data-theme` on `<html>` and stores it in `localStorage['theme']`.
- Product CSS keys off `[data-theme='dark']` (for example `.brand-x`).

**Legacy aliases.** The top of `css/style.css` maps old neumorphic variables (`--bg`, `--accent`, `--mint`, `--shadow-raised*`, `--radius-lg`, `--font-sans`…) onto Inox values, so that `simplify.css`, `unified.css` and `nova.css` work unchanged. Keep these aliases until the product CSS is migrated.

**Wordmark.** The nav uses an inline SVG with `clipPath id="amx-band"`. Its letters use `currentColor` and the X uses `var(--amx-x)`.

### `css/style.css` section index
Tokens · Reset & Base · Navigation · Sections · Hero · Buttons · About · Projects grid · Skills · Contact · Coming soon · Footer · Project detail pages · EN/ES topbar · Paper figures · Responsive · Animations · Lang switch (nav) · Brand section · AzoNet cover.

---

## 5. JavaScript (`js/main.js`)

One IIFE with no dependencies. It does four things:
1. **Theme toggle** (`#themeToggle`): saved value, otherwise dark.
2. **Mobile nav** (`#navToggle` toggles `.active` on `#navLinks`, and the menu closes when a link is clicked).
3. **Scroll reveal:** `.reveal` gets `.visible` once it is within 85% of the viewport height.
4. **Contact form** (`#contactForm`): it builds a `mailto:alan@amarox.dev` link with a subject and body. The language comes from `<html lang>`: ES gives "Contacto desde el portafolio: …" and EN gives "Portfolio contact from …".

There is no backend. To get real delivery, swap the mailto for a form endpoint such as Formspree.

---

## 6. Internationalisation

- **Naming:** each English page `X.html` has a Spanish twin `X-es.html` in the same folder. The ES pages set `<html lang="es">`.
- **Never translate institution names.** For example, "Institute of Physics, UNAM" and "University of Padova" stay in English on the ES pages. Body copy, headings, buttons and labels are translated.
- **Links stay in their language:** every link on a `-es` page goes to `-es` pages, including home (`../index-es.html`).
- **The brandbook** switches language with `?lang=es`.
- **When adding a page,** create both versions, add the `hreflang` alternates, add the topbar EN/ES switch, and link it from both homepages.

---

## 7. Contact and social

- Email: `alan@amarox.dev`
- GitHub: https://github.com/AlanAmaro13
- LinkedIn: https://www.linkedin.com/in/alanamaro/
- Instagram (README only): @todo.es.relativo13

---

## 8. How-tos

**Add a project**
1. Copy an existing page pair, for example `projects/qsar.html` and `projects/qsar-es.html`.
2. Update the title, meta description, `hreflang`, topbar links and body.
3. Add a `.project-card` to **both** `index.html` and `index-es.html`, keeping the institution text identical in both.
4. Add any images under `images/<topic>/`.
5. Add a row to the table in §3.2 of this file.

**Change the brand**
- Edit the source in `personalBranding/brand/visual`, then re-copy `tokens.css`, the fonts and the logo into `brand/`.
- If you replace `brand/brandbook/index.html`, change its `href="../visual/tokens.css"` to `href="../tokens.css"`.

**Verify visually.** There is no test suite, so check each change by eye:
- dark and light themes;
- mobile width below 768px;
- both languages;
- every project link;
- `prefers-reduced-motion`.

For headless screenshots, use the Chromium at `~/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome` with `--screenshot --virtual-time-budget=…`. Force `.reveal` to be visible, or the screenshot shows blank sections.

---

## 9. History

| Commit | Change |
|--------|--------|
| `e367ece` | AzoNet card photo replaced with the drawn spectrum cover; ES about text now says "con conocimientos en" |
| `91a5976` | Redesign with the AmaroX Inox brand, full Spanish version, Brand section, old site moved to `old_version/` |
| `aa233dc` | AzoNet page published (ACS Omega 2026), with figures and an ES version |
| `65ca47b` / `af4d974` | Nova and Unified project pages (EN + ES) |
| earlier | Neumorphic redesign (Aug 2026, see `handoff.md`), and before that the starfield site |

## 10. Known gaps

- `README.md` still describes the starfield background and an outdated file tree.
- The EN about text ("specialized in") has not been aligned with the ES text ("con conocimientos en").
- The AzoNet cover curve is illustrative, not real data.
- Nexus+, Paleo-Net and CanSat have no card images (placeholders).
- `brand/brandbook/index.html` exposes internal file paths and role details from the brand repo. Review it before treating the site as fully public.
