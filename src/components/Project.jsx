import { Link } from 'react-router-dom'
import Media from './Media'

const NUMERALS = ['i', 'ii', 'iii', 'iv', 'v', 'vi']

function Project({ project, index }) {
  return (
    <article className="entry">
      <span className="entry-number label">{NUMERALS[index]}.</span>
      <h2>
        <Link to={`/projects/${project.slug}`}>{project.title}</Link>
      </h2>

      {project.media && <Media media={project.media} alt={project.title} />}

      <p>{project.description}</p>

      {project.facts && (
        <ul className="facts">
          {project.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      )}

      <p className="tags label">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </p>

      <div className="entry-links">
        <Link to={`/projects/${project.slug}`}>How it works</Link>
        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">Code</a>}
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Video</a>}
        {project.note && <span className="note">{project.note}</span>}
      </div>
    </article>
  )
}

export default Project
