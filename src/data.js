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
  name: 'Rezanur Rahman Tomal',
  title: 'Open to Research Collaboration & Tech Roles',
  subtitle: 'CSE @ East Delta University',
  heroLine:
    "I'm Rezanur Rahman Tomal, a CSE student & builder based in Bangladesh. Available for research collaborations & tech roles.",
  summary:
    'I build practical software, enjoy experimenting with modern tech stacks, and keep learning by working on real-world problems across AI, web development, and cybersecurity.',
  photo: '/profile.jpg',
  resume: '/resume.pdf',
  email: 'tomal5085@gmail.com',
  phone: '+8801886194285',
}

export const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Other', href: '#updates' },
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
]

export const skillTicker = [
  'React',
  'Node.js',
  'Express.js',
  'Python',
  'PyTorch',
  'scikit-learn',
  'MongoDB',
  'MySQL',
  'Git',
  'Figma',
  'Kali Linux',
  'Cybersecurity',
]

export const quickStats = [
  { value: '3+', label: 'Projects featured' },
  { value: 'AI', label: 'Research direction' },
  { value: 'BD', label: 'Based in Bangladesh' },
]

export const skills = [
  {
    title: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router v6'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Python'],
  },
  {
    title: 'AI / ML',
    items: ['PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'Librosa', 'EfficientNet-B0'],
  },
  {
    title: 'Tools & Security',
    items: ['Git', 'GitHub', 'Figma', 'Kali Linux', 'Cybersecurity Basics'],
  },
]

export const aboutBullets = [
  'Building real-world software and iterating quickly',
  'Exploring AI, machine learning, and computer vision',
  'Learning cybersecurity fundamentals and tooling',
]

export const education = [
  {
    title: 'East Delta University',
    subtitle: 'Bachelor of Science in Computer Science & Engineering',
    meta: 'April 2026',
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
  },
  {
    title: 'Kaggle Competitor',
    meta: 'Ongoing',
    body:
      'Participates in BirdCLEF+ 2026, Orbit Wars, and related competitions while improving modeling intuition and experimentation habits.',
  },
]

export const projects = [
  {
    slug: 'assignment-008',
    title: 'Assignment 008',
    liveUrl: 'https://assignment-008.vercel.app/',
    repoUrl: 'https://github.com/TOMAL5085/ASSIGNMENT-008',
    accent: 'cyan',
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
    accent: 'emerald',
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
    accent: 'violet',
    description:
      'A clean assignment landing page with an organized content layout and a strong emphasis on visual clarity.',
    stack: ['React', 'CSS Styling', 'Deployment'],
    challenge:
      'Making the UI feel polished without overwhelming the visitor with too many competing elements.',
    future:
      'Expand the page with better micro-interactions, sharper case-study copy, and more expressive visuals.',
  },
]

export const highlights = [
  {
    title: 'AI & Cybersecurity',
    text: 'Passionate about artificial intelligence, research collaboration, and security concepts.',
  },
  {
    title: 'ML Competitions',
    text: 'Actively participating in Kaggle competitions while learning by doing.',
  },
  {
    title: 'Research Goals',
    text: 'Aiming for Erasmus Mundus opportunities and future publication work.',
  },
]

export const blogCards = [
  {
    title: 'BirdCLEF+ 2026',
    date: '2026',
    text: 'Competition work focused on audio and ecological classification ideas.',
  },
  {
    title: 'Orbit Wars',
    date: '2026',
    text: 'Another practical ML challenge that sharpened experimentation habits.',
  },
  {
    title: 'Research Direction',
    date: 'Now',
    text: 'Exploring paper ideas, AI topics, and long-term scholarship goals.',
  },
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

