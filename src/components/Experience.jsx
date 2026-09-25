function Experience({ experience }) {
  return (
    <section id="experience">
      <hr className="rule" />
      <h2 className="section-title label">Work</h2>
      {experience.map((job) => (
        <div key={`${job.company}-${job.title}`} className="item">
          <div className="item-head">
            <h3>{job.title}, {job.company}</h3>
            <span className="label">{job.period}</span>
          </div>
          <ul>
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
