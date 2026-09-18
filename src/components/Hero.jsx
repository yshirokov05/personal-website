import { track } from '@vercel/analytics'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner container">
        <div className="hero__copy">
          <p className="section-label">Economics + data + software</p>
          <h1 className="hero__name">Yury Shirokov</h1>
          <h2 className="hero__title">
            UC Berkeley senior building <span>AI-powered finance and data products.</span>
          </h2>
          <p className="hero__bio">
            I turn complex financial and behavioral data into useful products,
            from consumer finance software to machine-learning systems.
          </p>
          <p className="hero__availability">Open to software, data, and product opportunities.</p>
          <div className="hero__cta">
            <a href="#projects" className="btn btn-primary">View selected work</a>
            <a
              href="/resume.pdf"
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
              onClick={() => track('resume_click', { location: 'hero' })}
            >
              View résumé
            </a>
          </div>
        </div>

        <a
          className="hero__showcase"
          href="https://perfinlab.com/"
          target="_blank"
          rel="noreferrer"
          onClick={() => track('perfinlab_click', { location: 'hero' })}
          aria-label="Open PerfinLab, Yury's flagship personal finance project"
        >
          <div className="hero__showcase-topline">
            <span>Currently building</span>
            <span aria-hidden="true">↗</span>
          </div>
          <img src="/perfinlab-screenshot.png" alt="PerfinLab financial dashboard" />
          <div className="hero__showcase-copy">
            <strong>PerfinLab</strong>
            <p>Personal finance intelligence for clearer, better-informed decisions.</p>
            <ul aria-label="Selected PerfinLab capabilities">
              <li>Bank sync</li>
              <li>50-state tax engine</li>
              <li>AI analysis</li>
            </ul>
          </div>
        </a>

        <div className="hero__scroll-hint" aria-hidden="true">
          <span />
        </div>
      </div>

      <div className="hero__glow" aria-hidden="true" />
    </section>
  )
}
