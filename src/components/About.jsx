import './About.css'

const facts = [
  { label: 'Based in', value: 'San Jose, CA' },
  { label: 'Education', value: 'Economics @ UC Berkeley' },
  { label: 'Work', value: 'Personal Trainer' },
  { label: 'Interests', value: 'BJJ · Weightlifting · Hiking' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <p className="section-label">Who I am</p>
        <h2 className="section-title">About Me</h2>

        <div className="about__grid">
          <div className="about__text">
            <p>
              I’m a UC Berkeley senior studying Economics with a minor in Data Science. I build
              products at the intersection of finance, data, and AI, with hands-on experience in
              full-stack development, machine learning, analytics, and algorithmic trading.
            </p>
            <p>
              Outside of technology, I work as a personal trainer and have trained Brazilian
              Jiu-Jitsu for more than eight years. I also enjoy strength training, hiking,
              cooking, cars, and games. The same habits shape both sides of my work: stay curious,
              test what matters, and keep improving the system.
            </p>
            <a href="#contact" className="btn btn-outline" style={{ marginTop: '24px' }}>
              Let's Talk
            </a>
          </div>

          <div className="about__sidebar">
            <p className="about__sidebar-title">Quick profile</p>
            <ul className="about__facts">
              {facts.map(f => (
                <li key={f.label}>
                  <span className="about__fact-label">{f.label}</span>
                  <span className="about__fact-value">{f.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
