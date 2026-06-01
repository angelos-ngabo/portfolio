import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'figma_images');
const images = fs.readdirSync(imagesDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));

let html = `
<!DOCTYPE html>
<html>
<head>
  <title>Figma Images Gallery</title>
  <style>
    body { font-family: sans-serif; padding: 20px; background: #eee; }
    .gallery { display: flex; flex-wrap: wrap; gap: 20px; }
    .card { background: white; padding: 10px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); width: 300px; }
    img { max-width: 100%; height: auto; border-radius: 4px; }
    .hash { font-family: monospace; font-size: 10px; word-break: break-all; margin-top: 10px; color: #555; }
  </style>
</head>
<body>
  <h1>Downloaded Figma Assets</h1>
  <div class="gallery">
    ${images.map(img => `
      <div class="card">
        <img src="/figma_images/${img}" alt="${img}">
        <div class="hash">${img}</div>
      </div>
    `).join('')}
  </div>
</body>
</html>
`;

fs.writeFileSync(path.join(process.cwd(), 'public', 'gallery.html'), html);
console.log('Gallery generated at public/gallery.html');
