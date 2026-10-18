// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for the site's main copy.
//
// The React components render this data, and scripts/prerender.js bakes the
// same data into dist/index.html for crawlers and link previews. Keep this
// file plain data (no JSX, no CSS or asset imports) so Node can import it
// directly during the build.
// ─────────────────────────────────────────────────────────────────────────────

export const hero = {
  title: 'Economics',
  school: 'UC Berkeley',
  bio: 'I study economics and use Python and SQL to analyze financial and business data.',
}

// Numbers come from data/funnel_metrics.csv in the
// yshirokov05/product-analytics-case-study repo (July 2017 GA sample).
export const caseStudy = {
  eyebrow: 'Google Analytics sample · July 2017',
  title: 'Where an online store loses its buyers',
  intro:
    'A funnel analysis of 12M+ Google Analytics records, written up the way I would present it to a business team.',
  story: [
    {
      label: 'Question',
      text: 'Between viewing a product and paying for it, where does an online store lose the most would-be buyers, and which step should it fix first?',
    },
    {
      label: 'Approach',
      text: 'Queried 12M+ hit-level records in BigQuery SQL, collapsed them into about 72,000 sessions, and flagged how far each session got in the purchase funnel.',
    },
    {
      label: 'Finding',
      text: '56% of product viewers never add to cart. That first step loses about 5,900 sessions, more than every later step combined (about 3,600). Only 1.4% of all sessions end in a purchase.',
    },
    {
      label: 'Recommendation',
      text: 'Test changes on the product page first (pricing, shipping details, trust signals). Checkout is less urgent: half of the shoppers who reach it already buy.',
    },
  ],
  totalSessions: 71708,
  funnel: [
    { stage: 'Product view', sessions: 10539 },
    { stage: 'Add to cart', sessions: 4618 },
    { stage: 'Checkout', sessions: 2061 },
    { stage: 'Purchase', sessions: 1031 },
  ],
  tags: ['SQL', 'BigQuery', 'Python', 'pandas'],
  link: 'https://github.com/yshirokov05/product-analytics-case-study',
}

export const projects = [
  {
    title: 'PerfinLab',
    logo: '/perfinlab-logo.png',
    screenshot: '/perfinlab-screenshot.png',
    description:
      'Built a personal finance app that turns linked bank accounts into a picture of cash flow, projected taxes, and overall financial health. It projects taxes for all 50 states, scores financial health from 0 to 100, and adds AI-assisted analysis.',
    tags: ['Python', 'Flask', 'React', 'Plaid API', 'Claude API'],
    highlights: ['50-state tax engine', '0–100 health score', 'Live bank sync'],
    link: 'https://perfinlab.com/',
    repo: null,
    privateRepo: true,
    featured: true,
  },
  {
    title: 'E-commerce Funnel Analysis',
    description:
      'Where does an online store lose its buyers? Analyzed 12M+ hit-level records from the public Google Analytics sample in BigQuery, built a session-level purchase funnel, and compared conversion by device type. The largest drop came before shoppers ever added to cart.',
    tags: ['SQL', 'BigQuery', 'Python', 'pandas'],
    highlights: ['12M+ records', '56% drop before add-to-cart', '1.4% overall conversion'],
    link: null,
    repo: 'https://github.com/yshirokov05/product-analytics-case-study',
  },
  {
    title: 'Quantbot',
    description:
      'An options paper-trading system (simulated money) that tests a rules-based strategy: technical indicators screen 3-minute price candles against the 15-minute trend, then Claude reviews each setup and picks a liquid call or put. A dashboard tracks positions, trade history, and risk limits.',
    tags: ['Python', 'FastAPI', 'React', 'Claude API'],
    highlights: ['Rules-based screening', 'Paper trading', 'Risk limits'],
    link: null,
    repo: null,
    privateRepo: true,
  },
  {
    title: 'AI Game Agent',
    description:
      'A machine learning side project: a prototype for training an AI agent in the video game Rust. It connects a private game server to a reinforcement-learning (PPO) training loop, with deterministic resets and automated tests so experiments can be repeated.',
    tags: ['Python', 'C#', 'PyTorch'],
    highlights: ['Reinforcement learning', 'One-bot prototype', '13 passing tests'],
    link: null,
    repo: 'https://github.com/yshirokov05/rust-rl-agent',
  },
]

export const skillCategories = [
  {
    name: 'Economics coursework',
    skills: [
      'Econometrics (ECON\u00a0140)',
      'Corporate & Personal Finance (ECON\u00a0158)',
      'Money & Banking (ECON\u00a0165, in progress)',
      'Microeconomics (ECON\u00a0100A)',
      'Macroeconomics (ECON\u00a0100B)',
      'Labor Economics (ECON\u00a0151, in progress)',
    ],
  },
  {
    name: 'Methods',
    skills: ['Regression analysis', 'Hypothesis testing', 'Funnel & conversion analysis'],
  },
  {
    name: 'Data tools',
    skills: ['Python', 'pandas', 'matplotlib', 'SQL', 'BigQuery'],
  },
  {
    name: 'Built with',
    skills: ['React', 'Flask', 'FastAPI', 'Firebase', 'Plaid API', 'Claude API', 'PyTorch'],
  },
]
