import Project from '../components/Project'
import Experience from '../components/Experience'
import Education from '../components/Education'
import { profile, projects, education, experience } from '../data'

function LinkRow() {
  return (
    <nav className="link-row" aria-label="Links">
      {profile.links.map(({ label, href }) => (
        <a key={label} href={href} {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}>
          {label}
        </a>
      ))}
    </nav>
  )
}

function Home() {
  return (
    <main className="page">
      <header>
        <div className="masthead">
          <img src="/profile.jpg" alt="" />
          <h1>{profile.name}</h1>
        </div>
        <p className="headline">{profile.headline}</p>
        <p className="meta">
          {profile.meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
        <LinkRow />
      </header>

      <section id="projects">
        <hr className="rule" />
        <h2 className="section-title label">Projects</h2>
        {projects.map((project, index) => (
          <Project key={project.slug} project={project} index={index} />
        ))}
      </section>

      <Experience experience={experience} />
      <Education education={education} />

      <footer className="colophon">
        <hr className="rule" />
        <p>Thanks for reading.</p>
        <LinkRow />
      </footer>
    </main>
  )
}

export default Home
