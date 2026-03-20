# Copilot Instructions — Egor's Mobile Repair

## Project Overview
A mobile-first business card website for a 24/7 mobile mechanic and welding business in the DFW area.

## Stack
- React 19 + Vite 8 (no TypeScript — plain JSX)
- Tailwind CSS v4 with `@tailwindcss/vite` plugin (no `tailwind.config.js` — theme in `src/index.css` via `@theme {}`)
- Lucide React for icons
- No router — single-page, scroll-based layout

## Design Tokens (defined in `src/index.css`)
- `--color-accent`: `#f59e0b` (amber/safety yellow) — use `text-accent`, `bg-accent`
- `--color-accent-hover`: `#d97706`
- `--color-surface`: `#1a1a2e`
- `--color-surface-card`: `#16213e`
- Base background: `#0f0f1a`

## Component Conventions
- One component per file in `src/components/`
- No prop drilling needed — all data is local to each component
- Service card data is defined as a plain array at the top of `Services.jsx`
- Images are served from `/public/images/` and referenced as `/images/filename`

## Key Constraints
- Mobile-first: always add `sm:` / `md:` / `lg:` breakpoints, never desktop-first
- The phone CTA (`tel:8178073410`) must be present and prominent on every major section
- External links (Maps, Yelp, Instagram) must use `target="_blank" rel="noopener noreferrer"`
- No TypeScript, no CSS modules, no styled-components
