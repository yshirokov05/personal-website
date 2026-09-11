#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const htmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(htmlPath)) {
  throw new Error('dist/index.html is missing after the production build');
}

const html = fs.readFileSync(htmlPath, 'utf8');
const requiredContent = [
  'Yury Shirokov',
  'UC Berkeley senior building AI-powered finance and data products',
  'Projects',
  'PerfinLab',
  'Contact',
];
const missingContent = requiredContent.filter(value => !html.includes(value));

if (missingContent.length > 0) {
  throw new Error(`prerendered HTML is missing: ${missingContent.join(', ')}`);
}

for (const asset of ['favicon.svg', 'og-image.png', 'resume.pdf']) {
  if (!fs.existsSync(path.join(root, 'public', asset))) {
    throw new Error(`required public asset is missing: ${asset}`);
  }
}

console.log('[check] production build contains prerendered content and required public assets.');
