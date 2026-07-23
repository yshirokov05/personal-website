---
name: ship-and-deploy
description: >-
  The standard workflow for shipping any change to Yury's personal portfolio
  site (yshirokov05/personal-website) — content sync, copy fixes, new
  projects, SEO/asset changes. Use this whenever you're about to commit and
  open a PR here. Covers verification (npm run build), the PR flow, and the
  owner's standing auto-merge-on-green-CI policy so changes go live without
  waiting on a manual merge step. Trigger on "sync the updates", "fix X on
  the site", "ship this", or any PR you're about to open against this repo.
---

# Shipping a change to the personal website

This is a static Vite + React SPA on Vercel with GitHub integration — a push
to `main` auto-deploys to production, no manual `firebase deploy`-style step.
There's no backend, no user data, and no test suite beyond `npm run build`
succeeding, so the bar here is lower than a repo like `perfinlab`. Still
respect it: this is a public resume, factual accuracy in the copy matters.

## 1. Branch

Fetch `origin/main` first. If your designated session branch's last PR
already merged, restart it from `origin/main`
(`git checkout -B <branch> origin/main`) rather than force-pushing — this
environment's safety policy blocks force-push outright. For follow-up work
after a merge, it's simplest to just use a new branch name.

## 2. Implement

- Keep `scripts/site-content.cjs` in sync with `Projects.jsx` / `Skills.jsx`
  — the prerender script duplicates that content because the build step
  can't execute JSX, not because it's a second source of truth to grow
  independently.
- **Verify factual claims before writing them** — check the actual source
  repo (its CLAUDE.md / README / code) for whatever project or fact you're
  describing; don't restate old copy. This has caught real staleness twice:
  an FYMO → PerfinLab rebrand that lagged the live app by weeks, and a
  "dual-layer persistence" claim that was never in the codebase.

## 3. Verify

```bash
npm run build
```

Must succeed (`vite build && node scripts/prerender.cjs`). This is the only
gate — there is no test suite to run.

## 4. Commit, push, PR

Push the branch and open a PR against `main` (check for a PR template
first). A short Summary + a one-line Test plan ("npm run build passes") is
enough for a repo this size.

## 5. Auto-merge and confirm deploy

**Standing owner policy for this repo: auto-merge on green CI, no need to
ask first each time.** Once the Vercel deploy-preview check on the PR reads
`success`:

1. If the PR is a draft, mark it ready for review (`draft: false`).
2. Merge it (squash).
3. Confirm the resulting **production** deployment (Vercel project
   `personal-website`, `target: production`) reaches `READY` — the merge to
   `main` auto-deploys via the GitHub integration; no manual redeploy step
   is needed.

If CI is still running when you check, schedule a check-in rather than
polling in a loop.

## Scope note

This auto-merge authorization is specific to **this repo** — a personal
static site with no backend, no user data, and no money on the line. It does
not extend to `perfinlab` (a live financial app) or any other repo unless
the owner separately says so there.
