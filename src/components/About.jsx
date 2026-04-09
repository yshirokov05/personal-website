import './About.css'

const facts = [
  { label: 'Based in', value: 'San Jose / Los Gatos, CA' },
  { label: 'Currently', value: 'Studying Economics @ UC Berkeley' },
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
              I am a third-year undergraduate student at the University of California, Berkeley
              majoring in Economics and minoring in Data Science. I am based in the San Jose /
              Los Gatos area. My background is in full-stack development, machine learning, and
              algorithmic trading. I have a bit of a case of perfectionism which prohibits me
              from settling for things that are good enough.
            </p>
            <p>
              I like building things that solve problems and serve a purpose, oftentimes my own,
              but I am a firm believer that I am pretty similar to the average well-intentioned
              human who is equally burdened by mundane problems, so I tend to think that the
              solutions I come up with will serve more than just myself.
            </p>
            <p>
              Outside of thinking about solutions to problems, I enjoy partaking in the lovely
              worldly offerings that the South Bay offers. I spend a good deal of time taking
              care of my body and mind — I have been training Jiu-Jitsu for over 9 years and
              weightlifting for over 7 years. I strongly believe in staying in motion. To clear
              my head I enjoy hiking the trails in Rancho San Antonio and driving up Highway 9
              to catch the sunrise over the Skyline.
            </p>
            <p>
              Some of my other interests include: culinary <em>(my favorite cuisine varies with my mood)</em>,
              automotives <em>(I have a strong admiration for JDM cars)</em>, and gaming <em>(some
              of my favorite titles are Rust, Escape from Tarkov, CS2, and War Thunder)</em>.
            </p>
            <a href="#contact" className="btn btn-outline" style={{ marginTop: '24px' }}>
              Let's Talk
            </a>
          </div>

          <div className="about__sidebar">
            <div className="about__avatar">
              <div className="about__avatar-placeholder">YS</div>
            </div>
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
