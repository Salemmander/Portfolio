function Education({ education }) {
  return (
    <section id="education">
      <hr className="rule" />
      <h2 className="section-title label">Education</h2>
      {education.map((edu) => (
        <div key={edu.school} className="item">
          <div className="item-head">
            <h3>{edu.school}</h3>
            <span className="label">{edu.period}</span>
          </div>
          <p className="item-sub">{edu.degree}</p>
          {edu.detail && <p className="item-detail">{edu.detail}</p>}
          {edu.courses?.map((line) => (
            <p key={line} className="item-detail">{line}</p>
          ))}
        </div>
      ))}
    </section>
  )
}

export default Education
