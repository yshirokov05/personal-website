// ─────────────────────────────────────────────────────────────────────────────
// Source of truth for the crawlable body copy baked in by scripts/prerender.js.
//
// This is a single-page site (one URL, anchor-linked sections), so unlike a
// multi-route SEO table this just lists the real content once. Keep it in
// sync with src/components/{Projects,Skills}.jsx when those change — it's a
// duplicate by necessity (the build step can't execute JSX), not a second
// source of truth to maintain new features in.
// ─────────────────────────────────────────────────────────────────────────────

const SITE = 'https://yuryshirokov.vercel.app';

const projects = [
  {
    title: 'PerfinLab',
    description:
      'Built a full-stack personal finance app that turns linked account data into cash-flow, tax, and financial-health guidance. It combines Plaid sync, 50-state tax projections, and AI-assisted analysis on a Flask/Firebase backend.',
  },
  {
    title: 'Vanguard RL',
    description:
      'Built a reinforcement-learning prototype that connects a Rust game server to a Gymnasium/PPO training loop through a versioned JSON bridge. Deterministic resets, action acknowledgments, and automated smoke tests make experiments reproducible.',
  },
  {
    title: 'Quantbot',
    description:
      'Built an options-research engine with a FastAPI backend, React telemetry dashboard, vectorized technical indicators, and a PPO policy trained on QQQ options data.',
  },
  {
    title: 'E-commerce Funnel Analytics',
    description:
      'Analyzed 12M+ Google Analytics rows in BigQuery, identified a 15% mobile checkout drop-off, and validated a 5% conversion lift with a two-proportion z-test.',
  },
];

const skills = [
  'Python', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'React', 'Flask', 'FastAPI',
  'Firebase', 'BigQuery', 'PyTorch', 'Claude API', 'Plaid API', 'Stripe',
];

module.exports = { SITE, projects, skills };
