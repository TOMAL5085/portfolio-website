import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaSquareXTwitter,
} from 'react-icons/fa6'
import { SiKaggle } from 'react-icons/si'

export const profile = {
  name: 'Tomal Rahman',
  title: 'Open to Research Collaboration & Tech Roles',
  subtitle: 'CSE @ East Delta University | Exploring Cutting-Edge Technologies',
  summary:
    'I build practical software, enjoy experimenting with modern tech stacks, and keep learning by working on real-world problems across AI, web development, and cybersecurity.',
  photo: '/profile.jpg',
  resume: '/resume.pdf',
  email: 'tomal5085@gmail.com',
  phone: '+8801886194285',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/TOMAL5085',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tomal2006/',
    icon: FaLinkedin,
  },
  {
    label: 'X',
    href: 'https://x.com/TOMAL2006',
    icon: FaSquareXTwitter,
  },
  {
    label: 'Kaggle',
    href: 'https://www.kaggle.com/rezanurrahmantomal',
    icon: SiKaggle,
  },
  {
    label: 'Email',
    href: 'mailto:tomal5085@gmail.com',
    icon: FaEnvelope,
  },
]

export const quickStats = [
  { value: '3+', label: 'Projects showcased' },
  { value: 'ML', label: 'Competition interest' },
  { value: 'AI + Sec', label: 'Core focus areas' },
]

export const skillCategories = [
  {
    title: 'Frontend',
    description: 'Responsive interfaces with modern interaction patterns.',
    items: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router v6'],
  },
  {
    title: 'Backend & Data',
    description: 'Practical building blocks for full-stack products and ML workflows.',
    items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Python'],
  },
  {
    title: 'AI / ML',
    description: 'Competition work and model exploration with data-driven tooling.',
    items: ['PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'Librosa', 'Computer Vision'],
  },
  {
    title: 'Tools & Security',
    description: 'Delivery, collaboration, and early security exploration.',
    items: ['Git', 'GitHub', 'Figma', 'Kali Linux', 'Cybersecurity Basics'],
  },
]

export const education = [
  {
    title: 'East Delta University',
    subtitle: 'Bachelor of Science in Computer Science & Engineering',
    meta: 'Expected graduation: April 2026',
    body:
      'Building a foundation in software engineering, AI exploration, and project-based problem solving while preparing for graduate study and research collaboration.',
  },
]

export const experience = [
  {
    title: 'Independent Developer',
    meta: 'Ongoing',
    body:
      'Creates real-world software solutions and assignment projects using modern React and deployment workflows.',
    points: [
      'Built multiple responsive web applications with clean UI structure.',
      'Experimented with practical implementation details across different tech stacks.',
    ],
  },
  {
    title: 'Kaggle Competitor',
    meta: 'Ongoing',
    body:
      'Participates in competitions such as BirdCLEF+ 2026 and Orbit Wars while improving ML intuition and experimentation habits.',
    points: [
      'Explored deep learning, computer vision, and audio preprocessing pipelines.',
      'Used competition work to improve modeling discipline and data analysis skills.',
    ],
  },
]

export const projects = [
  {
    slug: 'assignment-008',
    title: 'Assignment 008',
    liveUrl: 'https://assignment-008.vercel.app/',
    repoUrl: 'https://github.com/TOMAL5085/ASSIGNMENT-008',
    accent: ['from-cyan-400/30', 'via-sky-500/20', 'to-slate-950'],
    description:
      'A polished React build with a clean interface, responsive structure, and product-style presentation.',
    stack: ['React', 'Responsive UI', 'Deployment'],
    challenge:
      'Keeping the layout balanced across devices while making the page feel modern and easy to scan.',
    future:
      'Add stronger motion, richer project storytelling, and refined content blocks for a more complete case study.',
  },
  {
    slug: 'assignment-007',
    title: 'Assignment 007',
    liveUrl: 'https://assignment-007-keenkeeper.netlify.app/',
    repoUrl: 'https://github.com/TOMAL5085/ASSIGNMENT-007',
    accent: ['from-emerald-400/30', 'via-teal-500/20', 'to-slate-950'],
    description:
      'A responsive web project focused on structured content, clear call-to-action flow, and a tidy visual rhythm.',
    stack: ['React', 'Layout Systems', 'Netlify'],
    challenge:
      'Maintaining consistency between sections while keeping the interface lightweight and readable.',
    future:
      'Introduce more interactive states, subtle transitions, and deeper content hierarchy for extended browsing.',
  },
  {
    slug: 'assignment-006',
    title: 'Assignment 006',
    liveUrl: 'https://assignment-006-digitools.netlify.app/',
    repoUrl: 'https://github.com/TOMAL5085/ASSIGNMENT-006',
    accent: ['from-fuchsia-400/30', 'via-violet-500/20', 'to-slate-950'],
    description:
      'A clean assignment landing page with an organized content layout and a strong emphasis on visual clarity.',
    stack: ['React', 'CSS Styling', 'Deployment'],
    challenge:
      'Making the UI feel polished without overwhelming the visitor with too many competing elements.',
    future:
      'Expand the page with better micro-interactions, sharper case-study copy, and more expressive visuals.',
  },
]

export const projectHighlights = [
  'React-based builds',
  'Responsive layouts',
  'Cloud deployments',
  'Placeholder visuals for now',
]

export const contactMethods = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: FaEnvelope,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
    icon: FaPhone,
  },
  {
    label: 'GitHub',
    value: 'Source code',
    href: 'https://github.com/TOMAL5085',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    value: 'Professional profile',
    href: 'https://www.linkedin.com/in/tomal2006/',
    icon: FaLinkedin,
  },
]

export const contactCta = {
  label: 'View Resume',
  href: profile.resume,
  icon: FaArrowRight,
}
