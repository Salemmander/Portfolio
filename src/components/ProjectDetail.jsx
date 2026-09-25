import { useParams, Link } from 'react-router-dom'
import Media from './Media'
import { projects } from '../data'

function DetailSection({ title, content }) {
  const isStructured = typeof content === 'object'
  return (
    <section>
      <h2 className="label">{title}</h2>
      {isStructured ? (
        <>
          <p>{content.intro}</p>
          <ul>
            {content.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>{content}</p>
      )}
    </section>
  )
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main className="page detail">
        <Link to="/" className="back">← Salem Nassar</Link>
        <h1>Project not found</h1>
      </main>
    )
  }

  const { details } = project

  return (
    <main className="page detail">
      <Link to="/" className="back">← Salem Nassar</Link>

      <h1>{project.title}</h1>

      <div className="entry-links detail-links">
        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">Code</a>}
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Video</a>}
        {project.note && <span className="note">{project.note}</span>}
      </div>

      <p className="lede">{project.description}</p>

      {project.media && <Media media={project.media} alt={project.title} />}

      <p className="tags label">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </p>

      {details?.story && <DetailSection title="The story" content={details.story} />}
      {details?.howItWorks && <DetailSection title="How it works" content={details.howItWorks} />}
      {details?.whatsNext && <DetailSection title="What's next" content={details.whatsNext} />}

      <footer className="colophon">
        <hr className="rule" />
        <Link to="/">← Back to everything</Link>
      </footer>
    </main>
  )
}

export default ProjectDetail
