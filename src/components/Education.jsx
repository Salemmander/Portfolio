import './Education.css'

function Education({ education }) {
  return (
    <section id="education" className="section fade-section">
      <h2>Education</h2>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={edu.school} className={`education-item card ${index % 2 === 0 ? 'left' : 'right'}`}>
            <span className="education-period">{edu.period}</span>
            <h3>{edu.school}</h3>
            <p className="education-degree">{edu.degree}</p>
            {edu.detail && <p className="education-specialization">{edu.detail}</p>}
            {edu.gpa && <p className="education-gpa">GPA: {edu.gpa}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
