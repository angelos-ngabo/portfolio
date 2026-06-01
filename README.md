# Ngabo Angelos — Portfolio

Pixel-perfect portfolio based on the [Figma Tomasz Gajda template](https://www.figma.com/design/euMKvuVj0GM9avjfEdM3CK/Portfolio---Tomasz-Gajda--Community-), built with **HTML, CSS, and vanilla JavaScript** (no React).

## Stack

- `index.html` — semantic markup
- `css/style.css` — layout & Figma-accurate styling
- `js/script.js` — nav, filters, scroll animations
- `public/figma_images/` — exported Figma assets
- CDN: Google Fonts, Font Awesome 6, Devicon (skills icons)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

Output is in `dist/`.

## Sections

1. Navigation (fixed)
2. Hero (diagonal split + IT BERRIES)
3. About Me (services grid)
4. Skills (Devicon icons)
5. Portfolio (filter tabs + project grid)
6. Contact (L-shaped form fields)
7. Footer

## Note

The previous React/TypeScript source remains in `src/` for reference but is **not** used by the dev server anymore.
