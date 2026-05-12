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
  'JavaScript',
  'Python',
  'C',
  'React',
  'Node.js',
  'Express.js',
  'PyTorch',
  'scikit-learn',
  'Pandas',
  'NumPy',
  'Librosa',
  'EfficientNet-B0',
  'MongoDB',
  'MySQL',
  'Git',
  'GitHub',
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
    title: 'Programming',
    items: ['JavaScript', 'Python', 'C'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'Express.js', 'PyTorch', 'scikit-learn'],
  },
  {
    title: 'Databases & Analysis',
    items: ['MongoDB', 'MySQL', 'Pandas', 'NumPy'],
  },
  {
    title: 'ML, Audio & Security',
    items: ['EfficientNet-B0', 'Librosa', 'Mel Spectrograms', 'Kali Linux', 'Cybersecurity Concepts'],
  },
]

export const aboutBullets = [
  'Building practical software with JavaScript, Python, React, Node.js, and Express.js',
  'Working with machine learning, computer vision, audio processing, and deep learning workflows',
  'Using MongoDB, MySQL, Git, GitHub, Figma, Kali Linux, and cybersecurity-focused tooling',
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
    href: 'https://github.com/TOMAL5085',
    body:
      'Creates real-world software solutions and projects using various technologies and tech stacks.',
  },
  {
    title: 'Kaggle Competitor',
    meta: 'Ongoing',
    href: 'https://www.kaggle.com/rezanurrahmantomal',
    body:
      'Participates in BirdCLEF+ 2026, Orbit Wars, and related competitions while improving modeling intuition and experimentation habits.',
  },
]

export const projects = [
  {
    slug: 'assignment-008',
    title: 'Tiles Gallery',
    liveUrl: 'https://assignment-008.vercel.app/',
    repoUrl: 'https://github.com/TOMAL5085/ASSIGNMENT-008',
    accent: 'cyan',
    description:
      'A curated tile showcase built with Next.js App Router, featuring Google & email authentication (Better Auth), searchable gallery with category filters, Swiper carousel, and profile management — backed by MongoDB. Deployed on Vercel.',
    stack: ['React', 'JavaScript', 'MongoDB', 'Next.js', 'Fullstack', 'Swiper', 'Tailwind CSS', 'Vercel', 'DaisyUI', 'Better Auth'],
    challenge:
      'Keeping the layout balanced across devices while making the page feel modern and easy to scan.',
    future:
      'Add stronger motion, richer project storytelling, and refined content blocks for a more complete case study.',
  },
  {
    slug: 'assignment-007',
    title: 'KeenKeeper',
    liveUrl: 'https://assignment-007-keenkeeper.netlify.app/',
    repoUrl: 'https://github.com/TOMAL5085/ASSIGNMENT-007',
    accent: 'emerald',
    description:
      'A responsive friendship tracker built with React 19, React Router, Recharts, and Tailwind CSS. Track friends, log interactions (Call/Text/Video), view live analytics, and never let a relationship go cold. Deployed on Netlify.',
    stack: ['React', 'JavaScript', 'SPA', 'React Router', 'Netlify', 'Recharts', 'Tailwind CSS', 'Vite', 'Lucide React', 'Friendship Tracker'],
    challenge:
      'Maintaining consistency between sections while keeping the interface lightweight and readable.',
    future:
      'Introduce more interactive states, subtle transitions, and deeper content hierarchy for extended browsing.',
  },
  {
    slug: 'assignment-006',
    title: 'DigiTools',
    liveUrl: 'https://assignment-006-digitools.netlify.app/',
    repoUrl: 'https://github.com/TOMAL5085/ASSIGNMENT-006',
    accent: 'violet',
    description:
      'A responsive digital tools marketplace landing page featuring a product catalog, real-time cart management, and toast notifications.',
    stack: ['JavaScript', 'ReactJS', 'Tailwind CSS', 'React Toastify', 'Vite', 'DaisyUI'],
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
    image: '/highlight-birdclef.png',
    href: 'https://www.kaggle.com/competitions/birdclef-2026',
    text: 'Competition work focused on audio and ecological classification ideas.',
  },
  {
    title: 'Orbit Wars',
    date: '2026',
    image: '/highlight-orbit-wars.png',
    href: 'https://www.kaggle.com/competitions/orbit-wars',
    text: 'Another practical ML challenge that sharpened experimentation habits.',
  },
  {
    title: 'Research Direction',
    date: 'Soon',
    image: '/highlight-coming-soon.svg',
    text: 'Coming soon',
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
    value: 'GitHub profile',
    href: 'https://github.com/TOMAL5085',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    value: 'LinkedIn profile',
    href: 'https://www.linkedin.com/in/tomal2006/',
    icon: FaLinkedin,
  },
]

export const contactCta = {
  label: 'View Resume',
  href: profile.resume,
  icon: FaArrowRight,
}

