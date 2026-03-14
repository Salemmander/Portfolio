import './Skills.css'

function Skills({ skills }) {
  return (
    <section id="skills" className="section fade-section">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((category) => (
          <div key={category.title} className="skill-row">
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.items.map((skill) => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
