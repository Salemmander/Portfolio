export const profile = {
  name: 'Salem Nassar',
  headline: 'Software engineer working toward robotics and autonomy.',
  meta: ['Austin, Texas', 'Software Engineer at Verizon', 'M.S. CS at Georgia Tech'],
  links: [
    { label: 'Resume', href: '/Salem-Nassar-Resume.pdf' },
    { label: 'GitHub', href: 'https://github.com/Salemmander' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/salemnassar/' },
    { label: 'Email', href: 'mailto:Salem.Nassar1@outlook.com' },
  ],
}

export const projects = [
  {
    title: 'Autonomous RC Car',
    slug: 'autonomous-rc-car',
    summary: 'Drives itself with one camera and a neural network.',
    stat: { value: '3.6 ms', label: 'inference' },
    description: 'A small car that drives itself with one camera and a neural network. I collected the driving data, trained NVIDIA\'s PilotNet in PyTorch, and wrote the C++ runtime that runs it on a Raspberry Pi 5.',
    facts: ['10K+ frames of my own driving', '3.6 ms inference on the Pi 5 CPU', 'Drives the track in both directions'],
    tags: ['PyTorch', 'C++', 'ONNX Runtime', 'OpenCV', 'Raspberry Pi 5'],
    github: 'https://github.com/Salemmander/autonomous-rc-car',
    demo: 'https://youtu.be/KV0Y-V7XpoU',
    media: { type: 'video', src: '/autonomous_rc_car_demo.mp4' },
    details: {
      story: 'The first time I sat in a self-driving car, I needed to understand the technology. This is the same core idea, just small enough to crash into a wall without consequences.',
      howItWorks: {
        intro: 'The car learns by imitation. I drove laps around the track, and PilotNet learned to predict my steering and throttle from each camera frame.',
        bullets: [
          'Recorded 10,000+ camera frames paired with my steering and throttle',
          'NVIDIA PilotNet: 5 conv layers into fully connected layers, outputting steering and throttle',
          'Frames are 160x120, top 30% cropped, and converted to YCbCr per the PilotNet paper',
          'C++ runtime: a camera thread captures frames with OpenCV while the control loop runs the model with ONNX Runtime',
          'Inference takes 3.6 ms, and the loop runs at 25 Hz, the camera\'s frame rate',
        ],
      },
    },
  },
  {
    title: 'Reinforcement Learning Racing Agent',
    slug: 'deepracer-rl-agent',
    summary: 'Learned to race from two cameras and a LiDAR scan.',
    stat: { value: '15/15', label: 'time trials' },
    description: 'An agent that learned to race a simulated AWS DeepRacer car using only two cameras and a LiDAR scan. Built for Georgia Tech\'s Reinforcement Learning course.',
    facts: ['PPO written in PyTorch', 'Camera and LiDAR fusion', '15/15 official time-trial runs'],
    tags: ['PyTorch', 'PPO', 'Sensor Fusion', 'Gymnasium'],
    note: 'Course project, so the code is private.',
    media: {
      type: 'video',
      src: '/deepracer_time_trial.mp4',
      caption: 'The agent\'s view from its left and right cameras during a time trial.',
      pixelated: true,
    },
    details: {
      howItWorks: {
        intro: 'The agent never gets its position or heading. It has to drive from what its sensors show.',
        bullets: [
          'Observations: two grayscale camera images and a 64-ray LiDAR scan',
          'A shared 2D CNN reads both cameras, a 1D CNN reads the LiDAR, and their features are fused for the actor and critic',
          'PPO with continuous steering and throttle, trained across 4 simulators in parallel',
          'I picked the checkpoint that stayed reliable across all three test tracks. It completed all 15 official time-trial runs.',
        ],
      },
    },
  },
  {
    title: 'Object Tracking Camera',
    slug: 'object-tracking-camera',
    summary: 'Follows your face around the room with two servos.',
    stat: { value: '25-30 FPS', label: 'on a Pi 5' },
    description: 'A camera that follows your face around the room. YOLOv11 finds you, and a PID controller in C++ keeps you centered with two servos.',
    facts: ['YOLOv11 face detection at 25-30 FPS on a Pi 5', 'PID control in C++ for pan and tilt'],
    tags: ['Python', 'C++', 'OpenCV', 'YOLOv11', 'PID Control'],
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

export const experience = [
  {
    title: 'Software Engineer',
    company: 'Verizon',
    period: '2024 – Present',
    bullets: [
      'Built 20+ Python automation tools for edge infrastructure across 8+ vendor platforms',
      'Cut deployment time 90% with GitLab CI/CD and OpenTofu-automated OpenShift deployments',
      'Solely own two production platforms on OpenShift, including secrets management with HashiCorp Vault',
    ],
  },
]

export const education = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'M.S. Computer Science, Machine Learning',
    period: '2025 – 2027',
    detail: 'GPA 4.0. Computer Vision, AI Techniques for Robotics, Reinforcement Learning, Deep Learning.',
  },
  {
    school: 'University of Texas at Dallas',
    degree: 'B.S. Computer Science',
    period: '2020 – 2024',
  },
]
