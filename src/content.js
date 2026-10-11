// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for the site's main copy.
//
// The React components render this data, and scripts/prerender.js bakes the
// same data into dist/index.html for crawlers and link previews. Keep this
// file plain data (no JSX, no CSS or asset imports) so Node can import it
// directly during the build.
// ─────────────────────────────────────────────────────────────────────────────

export const hero = {
  title: 'Economics & Data Science',
  school: 'UC Berkeley',
  bio: 'I build software and work on data projects, mostly in finance.',
}

export const caseStudy = {
  title: 'Safer portfolio edits at PerfinLab',
  problem:
    'Guests shared one demo portfolio, so an anonymous save could alter its sample data. Manual cash, savings, checking, and housing values could also be saved blank, zero, or negative.',
  change:
    'Made the guest demo read-only, required sign-in for portfolio writes, and added validation before manual values can be saved.',
  result:
    'Confirmed the validation in production with a synthetic QA entry. An isolated browser harness verified persistence after reload and stale-save conflict handling.',
  tags: ['Access Control', 'Validation', 'QA'],
}

export const projects = [
  {
    title: 'PerfinLab',
    logo: '/perfinlab-logo.png',
    screenshot: '/perfinlab-screenshot.png',
    description:
      'Built a full-stack personal finance app that turns linked account data into cash-flow, tax, and financial-health guidance. It combines Plaid sync, 50-state tax projections, and AI-assisted analysis on a Flask/Firebase backend.',
    tags: ['React', 'Flask', 'Firebase', 'Plaid API', 'Claude API'],
    highlights: ['50-state tax engine', '0–100 health score', 'Live bank sync'],
    link: 'https://perfinlab.com/',
    repo: null,
    privateRepo: true,
    featured: true,
  },
  {
    title: 'Vanguard RL',
    description:
      'Built a reinforcement-learning prototype that connects a private server for the video game Rust to a Gymnasium/PPO training loop through a versioned JSON bridge. Deterministic resets, action acknowledgments, and automated smoke tests make experiments reproducible.',
    tags: ['Python', 'C#', 'PyTorch', 'Stable-Baselines3'],
    highlights: ['Atomic JSON bridge', 'One-bot MVP', '13 passing tests'],
    link: null,
    repo: 'https://github.com/yshirokov05/rust-rl-agent',
  },
  {
    title: 'Quantbot',
    description:
      'Built an options-first paper-trading system: deterministic indicators screen closed 3-minute candles against a 15-minute trend, then Claude reviews actionable setups and selects a liquid call or put. A FastAPI backend and React dashboard expose scans, positions, trade history, and risk controls.',
    tags: ['Python', 'FastAPI', 'React', 'Claude API'],
    highlights: ['Indicator-based screening', 'Claude-reviewed setups', 'Paper trading with risk limits'],
    link: null,
    repo: null,
    privateRepo: true,
  },
  {
    title: 'E-commerce Funnel Analytics',
    description:
      'Analyzed 12M+ hit-level records from the public Google Analytics sample in BigQuery, built session-level funnel and engagement metrics, and compared conversion behavior by device. The largest funnel drop-off was from product view to add-to-cart.',
    tags: ['Python', 'BigQuery', 'SQL', 'Pandas'],
    highlights: ['12M+ hit-level records', 'Session-level funnel', 'Device segmentation'],
    link: null,
    repo: 'https://github.com/yshirokov05/product-analytics-case-study',
  },
]

export const skillCategories = [
  {
    name: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C#', 'SQL'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Vite', 'HTML/CSS', 'Responsive Design'],
  },
  {
    name: 'Backend & Data',
    skills: ['Flask', 'FastAPI', 'Node.js', 'Firebase', 'REST APIs', 'BigQuery'],
  },
  {
    name: 'ML & Tools',
    skills: ['PyTorch', 'Pandas', 'Claude API', 'Plaid API', 'Stripe', 'Docker', 'Git', 'Vercel'],
  },
]
