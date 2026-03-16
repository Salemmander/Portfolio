export const projects = [
  {
    title: 'Autonomous RC Car',
    slug: 'autonomous-rc-car',
    description: 'I taught an RC car to drive itself using nothing but a camera and a neural network. Built on a Raspberry Pi 5 with a PyTorch implementation of NVIDIA\'s PilotNet architecture, it predicts steering angles directly from raw camera images.',
    achievements: [
      'Trained on 10K+ frames collected from manual driving',
      'Real-time inference on Raspberry Pi 5 edge hardware',
      'Autonomously navigates a track in both directions',
    ],
    tags: ['Python', 'PyTorch', 'CNNs', 'OpenCV', 'NumPy'],
    github: 'https://github.com/Salemmander/autonomous-rc-car',
    media: { type: 'video', src: '/autonomous_rc_car_demo.mp4' },
    demo: 'https://youtu.be/KV0Y-V7XpoU',
    details: {
      // TODO: Write 2-3 sentences about what made you want to build this.
      // What was the spark? How did the self-driving car experience connect to this project?
      story: '',
      // TODO: Walk through the pipeline. Camera captures frame -> preprocessing ->
      // PilotNet CNN predicts steering angle -> PWM signal to motor controller.
      // What does the model architecture look like? How did you collect training data?
      howItWorks: '',
      // TODO: What was hard? Data collection issues? Model not generalizing?
      // Latency problems on the Pi? What did you try that didn't work?
      challenges: '',
      // TODO: Quantify what you achieved. Lap times, success rate, track complexity,
      // inference speed, how many different tracks it handles.
      results: '',
      // TODO: Custom model architecture, more complex tracks, better data collection,
      // different sensors, faster inference, etc.
      whatsNext: '',
    },
  },
  {
    title: 'Object Tracking Camera',
    slug: 'object-tracking-camera',
    description: 'A camera that follows you around the room. Uses YOLOv11 for real-time object detection on a Raspberry Pi 5, with PID-controlled servo motors for smooth pan-tilt tracking.',
    achievements: [
      'Low-latency face detection in video streams using YOLOv11 and OpenCV',
      'Closed-loop PID controller in C++ driving PCA9685 servo motors for smooth pan-tilt tracking',
    ],
    tags: ['Python', 'OpenCV', 'C++', 'PID Control'],
    github: 'https://github.com/Salemmander/object-tracking-camera',
    media: { type: 'image', src: '/object_tracking_demo.gif' },
    details: {
      // TODO: Why did you build this? What problem were you solving?
      // Was it a stepping stone to the RC car? A standalone idea?
      story: '',
      // TODO: Detection pipeline: camera frame -> YOLOv11 inference -> bounding box ->
      // error calculation -> PID controller -> servo PWM signals.
      // Why YOLOv11? Why C++ for the PID controller?
      howItWorks: '',
      // TODO: PID tuning difficulties? Latency between detection and servo response?
      // Jittery tracking? How did you solve these?
      challenges: '',
      // TODO: Tracking accuracy, response time, how smoothly it follows,
      // what objects/people it can track, range of motion.
      results: '',
      // TODO: Different objects to track, faster models, outdoor use, etc.
      whatsNext: '',
    },
  },
]

export const education = [
  {
    school: 'Georgia Institute of Technology (Online)',
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

export const experience = [
  {
    title: 'Software Engineer',
    company: 'Verizon',
    period: '2024 - Present',
    bullets: [
      'Led development of 20+ Python automation tools for edge network infrastructure across 8+ vendor platforms',
      'Reduced deployment time by 90% through multi-stage Docker builds and CI/CD pipelines',
      'Architected HashiCorp Vault infrastructure across multiple Kubernetes clusters using Terraform',
    ],
  },
]
