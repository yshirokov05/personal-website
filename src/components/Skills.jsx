import './Skills.css'

const categories = [
  {
    name: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Rust', 'SQL'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Vite', 'HTML/CSS', 'Responsive Design'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'REST APIs', 'PostgreSQL', 'Redis'],
  },
  {
    name: 'Tools & Other',
    skills: ['Git', 'Docker', 'Vercel', 'Linux', 'Machine Learning'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Skills</h2>

        <div className="skills__grid">
          {categories.map(cat => (
            <div key={cat.name} className="skills__category">
              <h3 className="skills__category-name">{cat.name}</h3>
              <ul className="skills__list">
                {cat.skills.map(s => (
                  <li key={s} className="skills__item">
                    <span className="skills__dot" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
