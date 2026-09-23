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
      'Built an options-first paper-trading system: deterministic indicators screen closed 3-minute candles against a 15-minute trend, then Claude reviews actionable setups and selects a liquid call or put. A FastAPI backend and React dashboard expose scans, positions, trade history, and risk controls.',
  },
  {
    title: 'E-commerce Funnel Analytics',
    description:
      'Analyzed 12M+ hit-level records from the public Google Analytics sample in BigQuery, built session-level funnel and engagement metrics, and compared conversion behavior by device. The largest funnel drop-off was from product view to add-to-cart.',
  },
];

const skills = [
  'Python', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'React', 'Flask', 'FastAPI',
  'Firebase', 'BigQuery', 'PyTorch', 'Claude API', 'Plaid API', 'Stripe',
];

module.exports = { SITE, projects, skills };
