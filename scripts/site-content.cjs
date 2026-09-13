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
      'Full-stack personal finance platform with Plaid bank sync, a 50-state tax projection engine, a 0-100 financial health score, and Claude-powered AI insights — chat with live web search, morning briefs, and document extraction — on a 7-blueprint Flask/Firebase backend.',
  },
  {
    title: 'Vanguard RL',
    description:
      'Private-server Rust reinforcement-learning prototype connecting a Carbon C# plugin to a Gymnasium/Stable-Baselines3 PPO environment through a versioned atomic JSON bridge. The one-bot MVP adds exact action acknowledgments, deterministic resets, bot-local resource telemetry, and automated smoke gates before live wood-gather training.',
  },
  {
    title: 'Quantbot',
    description:
      'Hybrid options trading engine with a decoupled FastAPI backend, React telemetry dashboard, vectorized TA engine (EMAs, Bollinger Bands) in sub-millisecond ranges, and a PPO agent trained on QQQ options.',
  },
  {
    title: 'E-commerce Funnel Analytics',
    description:
      'Analyzed 12M+ rows of Google Analytics data in BigQuery to build a multi-stage conversion funnel, identified a 15% mobile checkout drop-off, and validated a 5% lift via A/B test with two-proportion Z-tests.',
  },
];

const skills = [
  'Python', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'React', 'Flask', 'FastAPI',
  'Firebase', 'BigQuery', 'PyTorch', 'Claude API', 'Plaid API', 'Stripe',
];

module.exports = { SITE, projects, skills };
