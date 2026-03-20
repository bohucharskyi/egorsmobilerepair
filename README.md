# Egor's Mobile Repair

Business card website for **Egor's Mobile Repair** — a 24/7 mobile mechanic and welding service in the DFW area.

**Live phone:** [817-807-3410](tel:8178073410)

---

## Stack

- [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) icons
- [Elfsight](https://elfsight.com/) Google Reviews widget

## Project Structure

```
src/
  components/
    Hero.jsx        # Full-screen video background, headline, CTA
    Services.jsx    # 3-card service grid (Cars, Semi Trucks, Welding)
    Reviews.jsx     # Elfsight Google Reviews embed
    Footer.jsx      # Phone, Google Maps, Yelp, Instagram links
  App.jsx
  main.jsx
  index.css
public/
  images/           # hero.mp4, 6.jpg poster, service card images
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build & Preview

```bash
npm run build     # outputs to dist/
npm run preview   # preview production build locally
```

## Deployment

Deploy the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

### Netlify (drag & drop)
1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Vercel
```bash
npx vercel --prod
```
