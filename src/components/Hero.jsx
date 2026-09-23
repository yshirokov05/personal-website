import { track } from '@vercel/analytics'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner container">
        <div className="hero__copy">
          <p className="section-label">Economics · Product and data analytics</p>
          <h1 className="hero__name">Yury Shirokov</h1>
          <h2 className="hero__title">
            UC Berkeley Economics student focused on <span>product and data analytics.</span>
          </h2>
          <p className="hero__bio">
            I apply economic reasoning and hands-on analytics to answer product questions
            and build useful financial tools.
          </p>
          <p className="hero__availability">Seeking Product Analyst, Data Analyst, and Business Analyst roles.</p>
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
