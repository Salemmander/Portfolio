function ProjectCard({ project }) {
  return (
    <div className="project-card card">
      {project.media && (
        <div className="media">
          {project.media.type === 'image'
            ? <img src={project.media.src} alt={project.title} />
            : <video src={project.media.src} autoPlay loop muted playsInline />
          }
        </div>
      )}
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.achievements && (
          <ul className="achievements bullet-list">
            {project.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
