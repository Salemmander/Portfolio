import './Experience.css'

function Experience({ experience }) {
  return (
    <section id="experience" className="section fade-section">
      <h2>Experience</h2>
      {experience.map((job) => (
        <div key={`${job.company}-${job.title}`} className="experience-item card">
          <h3>{job.title}</h3>
          <p className="experience-meta">{job.company} | {job.period}</p>
          <ul className="bullet-list">
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Experience
