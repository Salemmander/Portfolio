import './App.css'
import Nav from './components/Nav'
import Project from './components/Project'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import { projects, skills, education, experience } from './data'

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

      <Skills skills={skills} />
      <Experience experience={experience} />
      <Education education={education} />

      <section id="about" className="section fade-section">
        <h2>About</h2>
        <p className="about">
          I'm Salem Nassar. A software engineer at Verizon with a passion for autonomous robotics.
          I wish to create the brains of robots that will change the world like autonomous cars, and humanoid robots. This technology will make transport accessible
          to everyone, save countless lives, and change the way people travel. Humanoid robots will do the dangerous work, boring physical tasks, and even provide
          medical care.
          I am creating end to end machine learning systems for these exact robotics problems. I'm pursuing a Masters in Computer Science with a specialization
          in Machine Learning online at Georgia Tech. Using the knowledge from that program I created a vision only autonomous rc car.
        </p>
      </section>

      <footer>
        <div className="contact-links">
          <a href="https://github.com/Salemmander" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/salemnassar/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:Salem.Nassar1@outlook.com">Email</a>
        </div>
      </footer>
    </>
  )
}

export default App
