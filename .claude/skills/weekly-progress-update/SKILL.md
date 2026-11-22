---
name: weekly-progress-update
description: >-
  The weekly routine that adds PerfinLab's latest milestones to the "Latest
  updates" list on Yury's personal website and ships it. Use when a scheduled
  run (or Yury) asks to "update the website with this week's progress".
---

# Weekly progress update

Goal: the PerfinLab card on the site shows 1-3 short, true, resume-style lines
about what shipped recently. Visitors are recruiters and classmates, so a line
must make sense to someone who has never seen the codebase.

## 1. Gather what shipped

List pull requests in `yshirokov05/perfinlab` merged into `main` in the last
8 days (title, description, labels). Skip any PR number already listed in a
`prs` array under `projects[0].updates` in `src/content.js`: that milestone is
already on the site. Also read the newest `CHANGELOG.md` entry if it changed.

## 2. Pick what is worth a line

Keep a PR only if a visitor would care about it:

- **Keep:** a new feature users can see or use, a launch (beta, new plan,
  mobile app), a big accuracy upgrade (e.g. the tax engine handling something
  new), a meaningful security or reliability win, a new integration.
- **Drop:** bug fixes to things already described, layout tweaks, copy edits,
  SEO, refactors, tests, dependency bumps, CI, docs, logging, internal tools,
  analytics/privacy-policy plumbing.

Group related PRs into one line (e.g. three tax PRs become one tax line).
Write at most 3 lines; fewer is fine. **If nothing passes, change nothing and
stop: no PR.** A quiet week is normal.

## 3. Write the lines

- Past tense, first person implied, one sentence, 20-220 characters
  ("Added...", "Made...", "Launched..."). Plain words, no internal names
  (no file names, function names, PR numbers in the text).
- **Only claims the PR itself proves.** No user counts, revenue, speed or
  accuracy figures, "first", "only" or "best" unless Yury has confirmed the
  number. If a PR says a feature is behind a flag, report-only, or unfinished,
  don't call it live.
- Insert new entries at the TOP of `updates`:
  `{ date: '<today YYYY-MM-DD>', text: '...', prs: [<numbers>] }`.
  Keep at most 6 entries (delete the oldest). The card shows the first 3.
- If a milestone makes the card's `description` or `highlights` wrong or
  incomplete in a big way (e.g. a new Premium feature), update those too and
  re-check facts in perfinlab's `CLAUDE.md`.

## 4. Ship

Follow `.claude/skills/ship-and-deploy/SKILL.md`: `npm run check` must pass
(it also rejects a malformed `updates` entry), open a PR titled
"Weekly update: <short summary>", list each new line with the PR numbers it
came from and why other merged PRs were left out, then merge once CI is green
(standing owner policy for this repo) and confirm the Vercel production
deploy is READY.
