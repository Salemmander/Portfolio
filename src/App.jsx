import './App.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Nav from './components/Nav'
import Project from './components/Project'

import Experience from './components/Experience'
import Education from './components/Education'
import { projects, education, experience } from './data'

function App() {
  return (
    <>
      <Nav />

      <section className="hero fade-section">
        <img src="/profile.jpg" alt="Salem Nassar" className="hero-photo" />
        <div className="hero-text">
          <h1>Salem Nassar</h1>
          <p className="hero-subtitle">Software Engineer | Robotics &amp; ML</p>
          <p className="tagline">
            Building end-to-end computer vision systems for robots that move, sense, and think.
          </p>
          <div className="hero-accent-line" />
          <div className="hero-links">
            <a href="https://github.com/Salemmander" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com/in/salemnassar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:Salem.Nassar1@outlook.com" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
      </section>

      <section id="projects" className="section fade-section">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </section>

      <Experience experience={experience} />
      <Education education={education} />

      <footer>
        <div className="contact-links">
          <a href="https://github.com/Salemmander" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com/in/salemnassar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="mailto:Salem.Nassar1@outlook.com" aria-label="Email"><FaEnvelope /></a>
        </div>
      </footer>
    </>
  )
}

export default App
