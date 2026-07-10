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
      'Serverless full-stack finance app with Plaid API sync, a 50-state tax module at 98%+ accuracy, Claude-powered AI Analyst chat and financial briefs, and distributed rate-limiting with dual-layer persistence.',
  },
  {
    title: 'Vanguard RL',
    description:
      'Multiplayer game AI agent with a cross-process C# ↔ PyTorch bridge over UDP at 10Hz, a ResNet-18 + 14D fusion model, and an 8-way parallel bot swarm achieving 200 SPS over 1.6M+ timesteps.',
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
