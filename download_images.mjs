import fs from 'fs';
import https from 'https';
import path from 'path';

const imagesJson = JSON.parse(fs.readFileSync('figma_images.json', 'utf8'));
const images = imagesJson.meta.images;

const outDir = path.join(process.cwd(), 'public', 'figma_images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }
      const file = fs.createWriteStream(filename);
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
      file.on('error', reject);
    }).on('error', reject);
  });
};

async function main() {
  console.log(`Downloading ${Object.keys(images).length} images...`);
  for (const [hash, url] of Object.entries(images)) {
    const ext = url.includes('.png') ? '.png' : url.includes('.jpg') ? '.jpg' : '.png'; // Default to png for figma fills
    const filename = path.join(outDir, `${hash}${ext}`);
    try {
      await downloadImage(url, filename);
      console.log(`Downloaded ${hash}`);
    } catch (e) {
      console.error(`Failed to download ${hash}:`, e.message);
    }
  }
  console.log('All images downloaded successfully to public/figma_images/');
}

main();
