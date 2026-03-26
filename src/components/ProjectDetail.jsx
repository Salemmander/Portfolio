import { useParams, Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import './ProjectDetail.css'
import { projects } from '../data'

function DetailSection({ title, content }) {
  const isStructured = typeof content === 'object'
  return (
    <section className="detail-section">
      <h2>{title}</h2>
      {isStructured ? (
        <>
          <p>{content.intro}</p>
          <ul className="bullet-list">
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
      <div className="project-detail">
        <Link to="/" className="back-link">Back to home</Link>
        <h1>Project not found</h1>
      </div>
    )
  }

  const { details } = project

  return (
    <div className="project-detail">
      <Link to="/" className="back-link">Back to home</Link>

      {project.media && (
        <div className="detail-media">
          {project.media.type === 'image'
            ? <img src={project.media.src} alt={project.title} />
            : <video src={project.media.src} autoPlay loop muted playsInline />
          }
        </div>
      )}

      <div className="detail-header">
        <h1>{project.title}</h1>
        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="detail-github-icon"><FaGithub /></a>
      </div>

      <div className="detail-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {details?.story && (
        <section className="detail-section">
          <h2>The Story</h2>
          <p>{details.story}</p>
        </section>
      )}

      {details?.howItWorks && (
        <DetailSection title="How It Works" content={details.howItWorks} />
      )}


      {details?.whatsNext && (
        <DetailSection title="What's Next" content={details.whatsNext} />
      )}
    </div>
  )
}

export default ProjectDetail
