// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for the site's main copy.
//
// The React components render this data, and scripts/prerender.js bakes the
// same data into dist/index.html for crawlers and link previews. Keep this
// file plain data (no JSX, no CSS or asset imports) so Node can import it
// directly during the build.
// ─────────────────────────────────────────────────────────────────────────────

// "Join the beta" opens an email to PerfinLab support with the subject filled in,
// so Yury can send the person an invite. There is no separate beta signup page.
export const perfinlabBetaLink =
  'mailto:support@perfinlab.com?subject=' +
  encodeURIComponent('PerfinLab beta') +
  '&body=' +
  encodeURIComponent("Hi Yury, I'd like to try the PerfinLab beta.\n\nA bit about how I manage money today (optional):\n")

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
    // Facts checked against the yshirokov05/perfinlab repo (CLAUDE.md, landing
    // page, CHANGELOG v1.8.0) on 2026-11-18; forecast added 2026-11-23. Re-check there before editing.
    title: 'PerfinLab',
    logo: '/perfinlab-logo.png',
    // Same sample-data card the PerfinLab landing page uses (frontend/public/landing/q-cashflow.png).
    // The hero already shows the net worth card, so this one shows cash flow.
    screenshot: '/perfinlab-cashflow.png',
    screenshotAlt: 'PerfinLab monthly cash flow card with income, spending, and savings rate',
    description:
      'A personal finance app I designed, built, and run myself. It shows net worth, cash flow, and a running tax estimate for all 50 states, and a Show Math button opens the calculation behind each figure. Premium ($9.99 a month or $99.99 a year) links accounts through Plaid and adds a Claude-powered AI Analyst, a daily portfolio briefing, and a net worth forecast.',
    tags: ['Python', 'Flask', 'React', 'Firebase', 'Plaid API', 'Claude API', 'Stripe'],
    highlights: ['50-state tax estimate', 'Show Math on every number', 'AI Analyst + daily briefing'],
    // "Latest updates" log, newest first. The weekly website-update routine adds
    // entries here (playbook: .claude/skills/weekly-progress-update/SKILL.md).
    // `prs` lists the perfinlab pull requests each line is based on, so a later
    // run never writes the same milestone twice. The card shows the first 3.
    updates: [
      {
        date: '2026-11-23',
        text: 'Added a Premium net worth forecast: a Monte Carlo simulation of where net worth could be in 1 or 5 years, shown as a likely range and labeled as a projection.',
        prs: [280],
      },
      {
        date: '2026-11-23',
        text: 'Added a "What\'s worth it to you?" card: users rate how much they enjoy each kind of non-essential spending, and the app suggests cuts to the least-valued, with each cut\'s 5-year effect.',
        prs: [278, 282],
      },
      {
        date: '2026-11-23',
        text: 'Made state taxes more precise: separate 2025 and 2026 tables, real head-of-household rates, and city and county income taxes such as New York City and Philadelphia.',
        prs: [277, 279, 281],
      },
      {
        date: '2026-11-21',
        text: 'Turned the tax estimate into a full return: deductions, credits (child, education, Earned Income), and the final refund or amount owed.',
        prs: [232, 252, 264],
      },
      {
        date: '2026-11-21',
        text: 'Made bank data refresh on its own with Plaid webhooks and automatic sync, and made sure a failed bank read can never overwrite saved data.',
        prs: [233, 251],
      },
      {
        date: '2026-11-21',
        text: 'Hardened security for the beta: a separate encryption key for each kind of secret, revoked-login checks, and limits on two-factor code guesses.',
        prs: [229, 239, 240, 244],
      },
    ],
    link: 'https://perfinlab.com/',
    demo: 'https://perfinlab.com/demo',
    beta: perfinlabBetaLink,
    repo: null,
    privateRepo: true,
    featured: true,
  },
  {
    title: 'E-commerce Funnel Analysis',
    description:
      'Where does an online store lose its buyers? A BigQuery SQL funnel analysis of 12M+ Google Analytics records. The full write-up is in the Analysis section below.',
    tags: ['SQL', 'BigQuery', 'Python', 'pandas'],
    highlights: ['12M+ records', '56% drop before add-to-cart', '1.4% overall conversion'],
    link: null,
    caseStudyAnchor: '#analysis',
    repo: 'https://github.com/yshirokov05/product-analytics-case-study',
  },
  {
    title: 'Quantbot',
    description:
      'In progress: an options paper-trading system (simulated money only) that tests a rules-based strategy. Technical indicators screen 3-minute price candles against the 15-minute trend, then Claude reviews each setup and picks a liquid call or put. A dashboard tracks positions, trade history, and risk limits.',
    tags: ['Python', 'FastAPI', 'React', 'Claude API'],
    highlights: ['Rules-based screening', 'Paper trading', 'Risk limits'],
    link: null,
    repo: null,
    privateRepo: true,
  },
  {
    // Owner confirmed 2026-11-18 that he can't back the old "1.6M timesteps" or
    // "200 steps/sec" figures from the rust-rl-agent README. Don't add metrics here
    // unless he confirms them. Wording matches the master resume.
    title: 'RustBot',
    description:
      'In progress: an AI agent that learns by trial and error to survive and gather resources in the video game Rust. A custom C# plugin on a private game server talks to a Python training loop (PPO with Stable-Baselines3), with checkpointing and Weights & Biases tracking.',
    tags: ['Python', 'C#', 'PyTorch', 'Stable-Baselines3'],
    highlights: ['Reinforcement learning (PPO)', 'C# game plugin + Python', 'In progress'],
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
