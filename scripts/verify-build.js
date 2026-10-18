#!/usr/bin/env node
// Runs after `npm run build` (see `npm run check`). Confirms the prerendered
// dist/index.html contains the site's key copy and that required public assets
// exist. Expected copy is read from src/content.js, so editing the copy there
// never leaves this check out of date.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { hero, caseStudy, projects } from '../src/content.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const htmlPath = path.join(root, 'dist', 'index.html');

if (!fs.existsSync(htmlPath)) {
  throw new Error('dist/index.html is missing after the production build');
}

// Same escaping the prerender step applies.
const esc = s => String(s)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const html = fs.readFileSync(htmlPath, 'utf8');
const requiredContent = [
  'Yury Shirokov',
  `${hero.title} - ${hero.school}`,
  hero.bio,
  caseStudy.title,
  ...caseStudy.story.map(item => item.text),
  ...projects.map(project => project.title),
  'Contact',
].map(esc);
const missingContent = requiredContent.filter(value => !html.includes(value));

if (missingContent.length > 0) {
  throw new Error(`prerendered HTML is missing: ${missingContent.join(' | ')}`);
}

for (const asset of ['favicon.svg', 'og-image.png', 'resume.pdf']) {
  if (!fs.existsSync(path.join(root, 'public', asset))) {
    throw new Error(`required public asset is missing: ${asset}`);
  }
}

console.log('[check] production build contains prerendered content and required public assets.');
