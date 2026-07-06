# Fuzail — Portfolio

A React + Tailwind CSS + Framer Motion portfolio: a scrolling site with a navy/orange
color scheme, animated hero photo, an orange scroll-progress indicator, clickable
certifications, a resume viewer/downloader, and live project previews.

## Stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion
- lucide-react (icons)

## Sections
Home (hero) → About → Projects → Certifications → Resume → Toolbox → Contact

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Deploy to Vercel

Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.

## Resume

Your resume is already included at `public/resume.pdf` — the View/Download buttons
work out of the box. If you ever update your resume, just replace that file with
the new PDF (keep the same filename) and redeploy.

## What's included

- **Certifications section** — three cards (IBM JavaScript Backend Developer,
  Generative AI for UI UX Design, and your Elite Tech Solutions MERN internship
  certificate). Clicking any card opens a full-size viewer with a download link,
  plus a "Verify on Coursera" link for the two Coursera credentials.
- **Resume section** — "View" opens an embedded PDF preview in a modal; "Download"
  saves it directly.
- **Performance-tuned for phones and desktops**:
  - Removed the in-site project preview (iframe) — projects now link straight to
    their live site in a new tab, which is lighter and avoids loading a second
    full website inside your portfolio.
  - Replaced `box-shadow` keyframe animations (a common source of scroll jank,
    since animating box-shadow forces a repaint every frame) with GPU-friendly
    opacity/scale glows on the CTA buttons.
  - Navbar's `backdrop-blur` (expensive during scroll on phones) is now
    desktop-only; mobile uses a solid background instead.
  - Ambient background glows are smaller and less blurred on mobile.
  - Hero photo loads eagerly with high priority (it's the first thing visible);
    certificate thumbnails lazy-load since they're below the fold.
- **Scroll progress bar** — fixed on the right edge; the overshoot-past-100% bug on
  mobile has been fixed by clamping the progress value both before and after the
  spring animation.
- **WhatsApp integration** — icon in the hero social row, a dedicated card in
  Contact, and a floating action button (bottom-left) — all linking to
  wa.me/923492423177.
- Email: bukharifuzail58@gmail.com · Phone: 0349 2423177 · City: Swabi, Pakistan
- GitHub: github.com/Fuzail-Bukhari · LinkedIn: linkedin.com/in/syed-fuzail-bukhari-a77305372

## Customize further

- **Certificates**: edit the `CERTS` array in `src/components/Certifications.jsx`.
  Source images/PDFs live in `public/certificates/`.
- **Colors/fonts**: `tailwind.config.js` and the Google Fonts link in `index.html`.
