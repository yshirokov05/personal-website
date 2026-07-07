import './Skills.css'

const categories = [
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
