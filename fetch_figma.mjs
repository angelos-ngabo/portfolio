import fs from 'fs';
import https from 'https';

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = 'euMKvuVj0GM9avjfEdM3CK';

if (!FIGMA_TOKEN) {
  throw new Error('Missing FIGMA_TOKEN environment variable.');
}

const fetchFigma = (path) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.figma.com',
      path: `/v1${path}`,
      method: 'GET',
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
};

async function main() {
  try {
    console.log('Fetching Figma document...');
    const fileData = await fetchFigma(`/files/${FILE_KEY}`);
    if (fileData.err) {
      console.error('Error fetching file:', fileData.err);
      return;
    }
    
    // Save to analyze
    fs.writeFileSync('figma_doc.json', JSON.stringify(fileData, null, 2));
    console.log('Document saved to figma_doc.json');

    // Also fetch image fills
    const imageFills = await fetchFigma(`/files/${FILE_KEY}/images`);
    fs.writeFileSync('figma_images.json', JSON.stringify(imageFills, null, 2));
    console.log('Images saved to figma_images.json');
    
  } catch (error) {
    console.error('Failed:', error);
  }
}

main();
