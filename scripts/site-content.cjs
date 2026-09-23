// ─────────────────────────────────────────────────────────────────────────────
// Source of truth for the crawlable body copy baked in by scripts/prerender.cjs.
//
// This is a single-page site (one URL, anchor-linked sections), so unlike a
// multi-route SEO table this lists the hero, case study, projects, and skills.
// Keep it in sync with src/components/{Hero,Updates,Projects,Skills}.jsx —
// it's duplicated because the build step can't execute JSX.
// ─────────────────────────────────────────────────────────────────────────────

const SITE = 'https://yuryshirokov.vercel.app';

const hero =
  'UC Berkeley Economics student focused on product and data analytics. I apply economic reasoning and hands-on analytics to answer product questions and build useful financial tools. Seeking Product Analyst, Data Analyst, and Business Analyst roles.';

const caseStudy = {
  title: 'Safer portfolio edits at PerfinLab',
  problem:
    'Guests shared one demo portfolio, so an anonymous save could alter its sample data. Manual cash, savings, checking, and housing values could also be saved blank, zero, or negative.',
  change:
    'Made the guest demo read-only, required sign-in for portfolio writes, and added validation before manual values can be saved.',
  result:
    'Confirmed the validation in production with a synthetic QA entry. An isolated browser harness verified persistence after reload and stale-save conflict handling.',
};

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

module.exports = { SITE, hero, caseStudy, projects, skills };
