import './App.css'
import Nav from './Nav'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Autonomous RC Car',
    description: 'End-to-end self-driving RC car on Raspberry Pi 5 using NVIDIA\'s PilotNet CNN architecture in PyTorch. Predicts steering angles from raw camera images via behavioral cloning.',
    achievements: [
      'Trained on 10K+ frames collected from manual driving',
      'Real-time inference on Raspberry Pi 5 edge hardware',
      'Autonomously navigates a track in both directions',
    ],
    tags: ['Python', 'PyTorch', 'CNNs', 'OpenCV'],
    github: 'https://github.com/Salemmander/autonomous-rc-car',
    media: { type: 'video', src: '/autonomous_rc_car_demo.mp4' },
    demo: 'https://youtu.be/KV0Y-V7XpoU',
  },
  {
    title: 'Object Tracking Camera',
    description: 'Real-time object detection and tracking system on Raspberry Pi 5 using YOLOv11 and OpenCV. PID-controlled servo motors enable smooth physical pan-tilt tracking.',
    achievements: [
      'Low-latency face detection in video streams using YOLOv11 and OpenCV',
      'Closed-loop PID controller in C++ driving PCA9685 servo motors for smooth pan-tilt tracking',
    ],
    tags: ['Python', 'OpenCV', 'C++', 'PID Control'],
    github: 'https://github.com/Salemmander/object-tracking-camera',
    media: { type: 'image', src: '/object_tracking_demo.gif' },
  },
]

const skills = [
  {
    title: 'ML / Computer Vision',
    items: ['PyTorch', 'OpenCV', 'NumPy', 'Scikit-learn'],
  },
  {
    title: 'Languages',
    items: ['Python', 'C++', 'Bash', 'Java', 'JavaScript'],
  },
  {
    title: 'DevOps / Infrastructure',
    items: ['Kubernetes', 'OpenShift', 'Docker', 'Helm', 'Terraform', 'GitLab CI/CD', 'Linux', 'Git', 'Vault'],
  },
  {
    title: 'Data / Web',
    items: ['PostgreSQL', 'SQL', 'Redis', 'React'],
  },
]

const education = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'M.S. Computer Science',
    detail: 'Machine Learning Specialization',
    gpa: '4.0',
    period: '2025 - Present',
  },
  {
    school: 'University of Texas at Dallas',
    degree: 'B.S. Computer Science',
    period: '2020 - 2024',
  },
]

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
            Building things that move, sense, and think.
            Creating end-to-end machine learning systems for autonomous robotics.
          </p>
          <div className="hero-accent-line" />
        </div>
      </section>

      <section id="projects" className="section fade-section">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="skills" className="section fade-section">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((category) => (
            <div key={category.title} className="skill-row">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.items.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section fade-section">
        <h2>Experience</h2>
        <div className="experience-item card">
          <h3>Software Engineer</h3>
          <p className="experience-meta">Verizon | 2024 - Present</p>
          <ul className="bullet-list">
            <li>Led development of 20+ Python automation tools for edge network infrastructure across 8+ vendor platforms</li>
            <li>Reduced deployment time by 90% through multi-stage Docker builds and GitLab CI/CD pipelines</li>
            <li>Architected HashiCorp Vault infrastructure across multiple Kubernetes clusters using Terraform</li>
          </ul>
        </div>
      </section>

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
