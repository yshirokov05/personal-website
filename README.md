# Yury Shirokov — Portfolio

[![CI](https://github.com/yshirokov05/personal-website/actions/workflows/ci.yml/badge.svg)](https://github.com/yshirokov05/personal-website/actions/workflows/ci.yml)

Personal portfolio for Yury Shirokov, studying Economics at UC Berkeley (class of 2027) with projects in finance and data analysis.

**Live site:** [yuryshirokov.vercel.app](https://yuryshirokov.vercel.app/)

## Highlights

- Flagship PerfinLab case study with product capabilities and a live product link
- Selected machine-learning, trading, and analytics projects with measurable signals
- A funnel analysis case study structured around question, approach, finding, and recommendation
- Responsive, keyboard-friendly interface with reduced-motion support
- Prerendered content and structured metadata for search engines and link previews

## Stack

- React 18 and Vite
- Vercel Analytics
- Formspree contact form
- Visit counter: a Vercel Function (`api/visits.js`) backed by Upstash Redis
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
src/content.js        Hero, case study, project, and coursework/skills copy (single source)
src/components/       Page sections and section-level styles
api/visits.js         Visit counter function (Upstash Redis via the Vercel Marketplace)
scripts/              Prerendering and production verification
public/               Resume, project media, favicon, and social preview
index.html            Metadata and application entry document
vercel.json           Routing, caching, and security headers
```

## Deployment

The site deploys to Vercel from the `main` branch. Vercel builds with `npm run build` and serves the generated `dist` directory.

The footer's visit count needs an Upstash Redis database connected to the Vercel project (Storage tab → Upstash for Redis). Until one is connected, `/api/visits` returns 503 and the footer hides the count. The count only appears on Vercel deployments; `npm run dev` doesn't run the `api/` function.

## Contact

- [LinkedIn](https://www.linkedin.com/in/yury-shirokov-2a1867275/)
- [GitHub](https://github.com/yshirokov05)
