#!/usr/bin/env node
/* eslint-disable */
// ─────────────────────────────────────────────────────────────────────────────
// Static prerender step — runs AFTER `vite build`.
//
// This is a Vite SPA: the shipped dist/index.html has an empty <div id="root">
// until the JS bundle runs, so crawlers and link unfurlers see no content.
// This script bakes real, crawlable body copy into that div (name, bio,
// projects, skills, contact) so search engines and previews see something
// meaningful. React's createRoot replaces it on mount, so the live site is
// unchanged for real visitors.
//
// HARD RULE: this script must NEVER fail the production build. Every step is
// wrapped; on any error we log and exit 0, leaving the pre-prerender SPA
// behavior intact.
// ─────────────────────────────────────────────────────────────────────────────

const fs = require('fs');
const path = require('path');

function main() {
  const distDir = path.resolve(__dirname, '..', 'dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.warn('[prerender] dist/index.html not found — skipping (did the build run?)');
    return;
  }

  let content;
  try {
    content = require('./site-content.cjs');
  } catch (e) {
    console.warn('[prerender] could not load site-content.js — skipping:', e.message);
    return;
  }

  const html = fs.readFileSync(templatePath, 'utf8');
  const body = buildBody(content);
  const injected = html.replace(/(<div id=["']root["']>)\s*(<\/div>)/i, `$1${body}$2`);

  if (injected === html) {
    console.warn('[prerender] could not find <div id="root"></div> — skipping injection.');
    return;
  }

  fs.writeFileSync(templatePath, injected, 'utf8');
  console.log('[prerender] injected crawlable body content into dist/index.html.');
}

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildBody({ projects, skills }) {
  const parts = [];
  parts.push('<main style="max-width:720px;margin:0 auto;padding:24px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif">');
  parts.push('<h1>Yury Shirokov</h1>');
  parts.push('<p>Economics @ UC Berkeley &middot; Developer. I build full-stack web apps, trading tools, and AI-powered systems.</p>');

  parts.push('<h2>Projects</h2>');
  parts.push('<ul>');
  for (const p of projects) {
    parts.push(`<li><strong>${esc(p.title)}</strong> &mdash; ${esc(p.description)}</li>`);
  }
  parts.push('</ul>');

  parts.push('<h2>Skills</h2>');
  parts.push(`<p>${skills.map(esc).join(', ')}</p>`);

  parts.push('<h2>Contact</h2>');
  parts.push('<p><a href="mailto:yshirokov05@gmail.com">yshirokov05@gmail.com</a> &middot; <a href="https://github.com/yshirokov05">github.com/yshirokov05</a> &middot; <a href="https://www.linkedin.com/in/yury-shirokov-2a1867275/">linkedin.com/in/yury-shirokov</a></p>');

  parts.push('</main>');
  return parts.join('');
}

try {
  main();
} catch (e) {
  console.warn('[prerender] unexpected error, skipping prerender:', e && e.message);
}
process.exit(0);
