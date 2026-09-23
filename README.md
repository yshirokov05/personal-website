# Yury Shirokov — Portfolio

[![CI](https://github.com/yshirokov05/personal-website/actions/workflows/ci.yml/badge.svg)](https://github.com/yshirokov05/personal-website/actions/workflows/ci.yml)

Personal portfolio for Yury Shirokov, a current UC Berkeley Economics student with a minor in Data Science, building products across finance, AI, and analytics.

**Live site:** [yuryshirokov.vercel.app](https://yuryshirokov.vercel.app/)

## Highlights

- Flagship PerfinLab case study with product capabilities and a live product link
- Selected machine-learning, trading, and analytics projects with measurable signals
- Concise problem → change → result build log
- Responsive, keyboard-friendly interface with reduced-motion support
- Prerendered content and structured metadata for search engines and link previews

## Stack

- React 18 and Vite
- Vercel Analytics
- Formspree contact form
- Custom CSS with responsive layouts and design tokens

## Local development

```bash
npm ci
npm run dev
```

The Vite development server prints the local URL after startup.

## Production checks

```bash
npm run check
```

This builds the site, prerenders meaningful page content into `dist/index.html`, and verifies the expected content and public assets. Pull requests and pushes to `main` run the same check in GitHub Actions.

## Project structure

```text
src/components/       Page sections and section-level styles
scripts/              Prerendering and production verification
public/               Resume, project media, favicon, and social preview
index.html            Metadata and application entry document
vercel.json           Routing, caching, and security headers
```

## Deployment

The site deploys to Vercel from the `main` branch. Vercel builds with `npm run build` and serves the generated `dist` directory.

## Contact

- [LinkedIn](https://www.linkedin.com/in/yury-shirokov-2a1867275/)
- [GitHub](https://github.com/yshirokov05)
