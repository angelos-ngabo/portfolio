import fs from 'fs';

const doc = JSON.parse(fs.readFileSync('figma_doc.json', 'utf8'));

// Recursive search for a text node with "Hi, I am"
let heroParent = null;

function searchTree(node, parent) {
  if (node.type === 'TEXT' && node.characters && node.characters.includes('Hi, I am')) {
    heroParent = parent;
  }
  if (node.children) {
    for (const child of node.children) {
      searchTree(child, node);
    }
  }
}

searchTree(doc.document, null);

if (heroParent) {
  console.log("Hero Parent Type:", heroParent.type);
  console.log("Hero Parent Name:", heroParent.name);
  console.log("Hero Parent Box:", heroParent.absoluteBoundingBox);
  
  console.log("\nChildren of Hero Parent:");
  heroParent.children.forEach(child => {
    console.log(`- [${child.type}] ${child.name} : BoundingBox = ${JSON.stringify(child.absoluteBoundingBox)}`);
    if (child.type === 'TEXT') {
        console.log(`  Text: "${child.characters}"`);
        console.log(`  Font: ${child.style.fontFamily} ${child.style.fontSize}px fontWeight: ${child.style.fontWeight}, textAlign: ${child.style.textAlignHorizontal}`);
    }
    if (child.type === 'RECTANGLE' || child.type === 'VECTOR') {
        if (child.fills && child.fills.some(f => f.type === 'IMAGE')) {
            console.log(`  ** IS IMAGE ** (ScaleMode: ${child.fills.find(f => f.type==='IMAGE').scaleMode})`);
        }
    }
  });
} else {
  console.log("Could not find 'Hi, I am' text node.");
}
