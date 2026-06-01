# Ngabo Angelos — Portfolio

Portfolio site based on the [Figma Tomasz Gajda template](https://www.figma.com/design/euMKvuVj0GM9avjfEdM3CK/Portfolio---Tomasz-Gajda--Community-), built with **HTML, CSS, and vanilla JavaScript**.

## Stack

- `index.html` — page markup
- `public/css/style.css` — layout and responsive styling
- `public/js/script.js` — navigation, filters, scroll effects
- `public/assets/` — logo and hero image
- `public/figma_images/` — section and project imagery
- CDN: Google Fonts, Font Awesome 6, Devicon

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

## Figma tooling (optional)

Scripts in the repo root (`fetch_figma.mjs`, etc.) require a `FIGMA_TOKEN` environment variable. Do not commit tokens.

## Note

Legacy React source in `src/` is kept for reference and is not used by the live site.
