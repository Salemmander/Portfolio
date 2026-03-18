import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import './Project.css'

function Project({ project }) {
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
        <div className="card-header">
          <Link to={`/projects/${project.slug}`} className="project-overlay-link">
            <h3>{project.title}</h3>
          </Link>
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="github-icon"><FaGithub /></a>
        </div>
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
      </div>
    </div>
  )
}

export default Project
