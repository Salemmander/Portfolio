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
      story: 'The first time I sat in a self-driving car I was so fascinated that I needed to understand the technology. I knew the impact this would have and I just had to be a part of it. Building an autonomous RC car from scratch was my way into the fundamentals of end-to-end learning, where raw camera input maps directly to control outputs. It\'s the same core idea behind full-scale self-driving, just small enough to crash into a wall without consequences.',
      howItWorks: {
        intro: 'I collected training data by driving the car myself, then trained a neural network to replicate my steering.',
        bullets: [
          'Keyboard controls for manual driving, recorded 10,000 frames paired with steering angles',
          'NVIDIA PilotNet architecture: 5 conv layers into fully connected layers, outputs a single steering angle',
          'Frames resized to 120x160, top 30% cropped, converted to YCbCr per the PilotNet paper',
          'Full inference loop runs at 20 Hz on the Pi 5 CPU over I2C',
        ],
      },
      whatsNext: {
        intro: 'There\'s a lot I still want to explore with this project.',
        bullets: [
          'Switch from keyboard to gamepad for smoother steering and real throttle input',
          'Collect recovery data to teach the model how to correct itself',
          'Custom model architecture for handling things like stop sign detection',
          'Reinforcement learning and sim-to-real transfer',
        ],
      },
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
      story: 'I wanted to learn the basics of robotics: object detection, PID control, motor control, and how to tie them all together in a real-time system. A camera that tracks your face felt like the perfect project to get hands-on with all of those at once.',
      howItWorks: {
        intro: 'The camera detects a face, calculates how far off-center it is, and adjusts two servo motors to keep it centered.',
        bullets: [
          'YOLOv11n-face runs on the Pi 5 at ~25-30 FPS for real-time detection',
          'Pixel offset is converted to angle error using the camera\'s calibrated field of view',
          'A PID controller written in C++ computes the correction for each axis (pan and tilt)',
          'Servo commands are sent over I2C to a PCA9685 PWM controller driving SG90 servos',
        ],
      },
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
      'Led development of 20+ Python automation tools for edge infrastructure across 8+ platforms',
      'Reduced deployment time by 90% using GitLab CI/CD for multi-stage Docker builds and OpenTofu-automated multi-cluster OpenShift deployments',
      'Solely owned and maintained two production platforms on OpenShift, including secrets management infrastructure and a Helm-deployed multi-service application with PostgreSQL, Redis, and Celery workers',
    ],
  },
]
