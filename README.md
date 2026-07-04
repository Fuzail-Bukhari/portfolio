# Fuzail — Portfolio

A React + Tailwind CSS + Framer Motion portfolio: a scrolling site with a navy/orange
color scheme, animated hero photo, an orange scroll-progress indicator, and clickable
certifications linking to Coursera.

## Stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion (scroll reveals, count-up stats, floating badges, rotating rings,
  scroll-progress marker, pulsing CTA glow, animated nav underline)
- lucide-react (icons)

## Sections
Home (hero) → About (bio + certifications) → Projects → Toolbox → Contact

A fixed vertical scroll-progress indicator (orange marker, dot track, live %) sits on
the right edge of the viewport throughout.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Outputs a `dist/` folder ready to deploy.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

## Already filled in
- Your photo (`public/profile.jpg`)
- Email: bukharifuzail58@gmail.com · Phone: 0349 2423177 · City: Swabi, Pakistan
- Projects: BidVerse, MediCore, Bukhari's Store (live Vercel links)
- GitHub: github.com/Fuzail-Bukhari
- LinkedIn: linkedin.com/in/syed-fuzail-bukhari-a77305372
- Certifications (click to verify on Coursera):
  - IBM JavaScript Backend Developer — Professional Certificate
  - Generative AI for UI UX Design — Specialization

## Customize further
- **Stat badges**: hero shows "3+ Projects Built", "1 MERN Internship",
  "2 Certifications" — edit `src/components/Hero.jsx`.
- **Scroll progress bar**: `src/components/ScrollProgress.jsx` — adjust dot count,
  track height, or colors.
- **Colors/fonts**: `tailwind.config.js` and the Google Fonts link in `index.html`
  (Poppins + Caveat).
