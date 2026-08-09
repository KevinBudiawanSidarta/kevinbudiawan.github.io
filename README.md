# Kevin Budiawan Sidarta — Portfolio Website

A 4-page personal portfolio (Home, About, Experience, Projects) built with plain
HTML5, CSS3, and vanilla JavaScript. No build step — just open `index.html`
in a browser, or upload the folder to any static host (GitHub Pages, Netlify,
Vercel, etc).

## Design direction

- **Palette:** warm-white background, near-black text, circuit red (`#D91E2B`)
  and teal (`#0E7C7A`) accents.
- **Type:** Space Grotesk (headings), IBM Plex Sans (body), IBM Plex Mono
  (labels, stats, timeline "sector" tags).
- **Signature detail:** a thin red-to-teal "lap trace" progress line at the
  very top of the page that fills as you scroll, and sector-numbered
  timeline cards on the Experience page — a small nod to your Formula 1
  prediction thesis, kept subtle enough for a recruiter-facing site.

## Before you publish — things to personalize

1. **Profile photo** — drop a photo at `assets/img/profile.jpg`
   (portrait orientation works best, ~4:5). The hero frame shows a
   placeholder message until this file exists, then swaps automatically.
2. **CV file** — add your PDF at `assets/Kevin_Budiawan_Sidarta_CV.pdf`
   (or update the `href` on the "Download CV" button in `index.html`).
3. **Links** — search each HTML file for `your-linkedin`, `your-github`,
   and `kevin.budiawan@example.com`, and replace with your real profile
   URLs and email address.
4. **Project GitHub links** — in `projects.html`, each project card has an
   `href="#"` placeholder (marked with `<!-- TODO -->` comments) — swap
   in your actual repository URLs.
5. **Education dates** — `about.html` has a `20XX — Present` placeholder
   for your enrollment year; update it to your real start year.
6. **Skill bar percentages** — the values in `about.html`
   (`data-level="90"`, etc.) are a self-rated visual guide — adjust freely.

## File structure

```
kevin-portfolio/
├── index.html          Home
├── about.html           About
├── experience.html      Experience
├── projects.html        Projects
├── css/style.css        All styling (shared across pages)
├── js/script.js         Nav, scroll effects, reveal animations, skill bars
└── assets/
    ├── img/              Add profile.jpg here
    └── Kevin_Budiawan_Sidarta_CV.pdf   Add your CV here
```

## Notes

- Icons are loaded from the [Lucide](https://lucide.dev) CDN.
- Fonts are loaded from Google Fonts.
- Both require an internet connection when the page is viewed; if you need
  a fully offline copy, download the font files and Lucide's icon set and
  reference them locally instead of via CDN.
- Animations respect `prefers-reduced-motion`.
