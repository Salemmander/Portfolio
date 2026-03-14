import './App.css'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Autonomous RC Car',
    description: 'End-to-end self-driving RC car on Raspberry Pi 5 using NVIDIA\'s PilotNet CNN architecture in PyTorch. Predicts steering angles from raw camera images via behavioral cloning, achieving 0.05 MSE on validation data.',
    tags: ['Python', 'PyTorch', 'CNNs', 'OpenCV'],
    github: 'https://github.com/Salemmander/autonomous-rc-car',
    media: { type: 'video', src: '/autonomous_rc_car_demo.mp4' },
    demo: 'https://youtu.be/KV0Y-V7XpoU',
  },
  {
    title: 'Object Tracking Camera',
    description: 'Real-time object detection and tracking system on Raspberry Pi 5 using YOLOv11 and OpenCV. PID-controlled servo motors enable smooth physical pan-tilt tracking of detected faces.',
    tags: ['Python', 'OpenCV', 'C++', 'PID Control'],
    github: 'https://github.com/Salemmander/object-tracking-camera',
    media: { type: 'image', src: '/object_tracking_demo.gif' },
  },
]

function App() {
  return (
    <>
      <section className="hero">
        <h1>Salem</h1>
        <p className="tagline">
          Robotics enthusiast building things that move, sense, and think.
        </p>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="section">
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
