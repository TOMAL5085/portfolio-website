import { motion } from 'framer-motion'
import { FiArrowUpRight, FiDownload, FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProjectVisual from '../components/ProjectVisual'
import SectionHeading from '../components/SectionHeading'
import {
  contactCta,
  contactMethods,
  education,
  experience,
  profile,
  projects,
  quickStats,
  skillCategories,
  socialLinks,
} from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

function SectionShell({ children, id, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}

function HomePage() {
  const ContactIcon = contactCta.icon

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute right-[-10rem] top-80 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <Navbar />

      <main id="home" className="relative">
        <section className="mx-auto grid w-full max-w-7xl gap-12 px-4 pb-24 pt-10 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
              <FiMapPin className="text-cyan-200" />
              Available for research collaboration and tech roles
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
              {profile.subtitle}
            </p>
            <h1 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              {profile.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                <FiDownload />
                View Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Explore Projects
                <FiArrowUpRight />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {quickStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/25 hover:bg-slate-900"
                  >
                    <Icon className="text-base" />
                    {social.label}
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto flex w-full max-w-xl items-center justify-center"
          >
            <div className="absolute inset-6 rounded-[2.25rem] border border-cyan-400/15 bg-cyan-400/5 blur-2xl" />
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_35%)]" />
                <div className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Profile</p>
                    <p className="mt-1 text-sm font-medium text-white">Tomal Rahman</p>
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-100">
                    Ready to collaborate
                  </span>
                </div>

                <div className="relative mt-4 grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
                  <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-3">
                    <img
                      src={profile.photo}
                      alt="Portrait of Tomal Rahman"
                      className="h-[420px] w-full rounded-[1.25rem] object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
                        Focus Areas
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {['AI', 'Cybersecurity', 'Full Stack', 'Research', 'Kaggle'].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                        <p className="text-sm text-slate-400">Programming journey</p>
                        <p className="mt-2 text-lg font-semibold text-white">Built through doing</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          Learning by shipping projects, participating in ML competitions, and exploring
                          practical problem solving.
                        </p>
                      </div>
                      <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                        <p className="text-sm text-slate-400">Current direction</p>
                        <p className="mt-2 text-lg font-semibold text-white">AI and security</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          Aspiring to move toward research, advanced study, and collaborative technical roles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <SectionShell id="about">
          <SectionHeading
            eyebrow="About Me"
            title="A builder who likes practical software, thoughtful UI, and continuous learning."
            description="I started by getting comfortable with code and grew into someone who enjoys turning ideas into working products. My focus is on building useful software, experimenting with modern stacks, and improving through hands-on work."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 leading-8 text-slate-300 backdrop-blur">
              <p>
                I enjoy building real-world software and experimenting with different technologies and tech
                stacks. Most of my growth has come from shipping projects, refining them, and learning what
                makes a product feel clear, reliable, and enjoyable to use.
              </p>
              <p className="mt-4">
                Beyond web development, I actively participate in Kaggle competitions and keep exploring
                machine learning, deep learning, computer vision, audio processing, and cybersecurity ideas.
                That mix keeps my curiosity sharp and helps me see problems from multiple angles.
              </p>
              <p className="mt-4">
                Outside programming, I stay interested in research, new tools, and ideas that can push the
                boundary of what I can build next. I am especially motivated by opportunities that connect
                engineering, experimentation, and learning.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                'Real-world software',
                'AI experimentation',
                'Kaggle competitions',
                'Cybersecurity exploration',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-5 text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell id="skills">
          <SectionHeading
            eyebrow="Skills"
            title="A practical toolkit spanning frontend, backend, AI, and collaboration."
            description="The stack is organized around how I actually work: building interfaces, wiring systems, experimenting with models, and keeping the delivery flow tidy."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <h3 className="font-heading text-xl font-semibold text-white">{category.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{category.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="education">
          <SectionHeading
            eyebrow="Education"
            title="Academic background grounded in computer science and engineering."
            description="Formal study has helped me pair theory with practice while I continue to build and learn independently."
          />
          <div className="mt-10 grid gap-6">
            {education.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-base text-cyan-200">{item.subtitle}</p>
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-100">
                    {item.meta}
                  </span>
                </div>
                <p className="mt-4 max-w-3xl leading-7 text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="experience">
          <SectionHeading
            eyebrow="Experience"
            title="Ongoing project work and competition experience."
            description="No formal full-time role is listed here yet, so this section highlights the work already shaping my skills and direction."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {experience.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.28em] text-cyan-300/80">
                      {item.meta}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs text-slate-200">
                    Active
                  </span>
                </div>
                <p className="mt-4 leading-7 text-slate-300">{item.body}</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="projects">
          <SectionHeading
            eyebrow="Projects"
            title="Three featured builds with routed detail pages."
            description="The visuals here are deliberately clean placeholders for now, while the actual project links point to your live deployments and GitHub repositories."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.slug}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur"
              >
                <ProjectVisual title={project.title} accent={project.accent.join(' ')} />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
                    Featured Project
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
                  >
                    View More / Details
                    <FiArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="contact">
          <SectionHeading
            eyebrow="Contact"
            title="The easiest ways to reach me are email, phone, or a direct professional link."
            description="If you want to talk about research collaboration, internships, project work, or technical opportunities, this section makes it easy to get in touch."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="space-y-4">
                {contactMethods.map((item) => {
                  const Icon = item.icon

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 transition hover:border-cyan-400/25 hover:bg-slate-950"
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-200">
                          <Icon />
                        </span>
                        <div>
                          <p className="text-sm text-slate-400">{item.label}</p>
                          <p className="text-sm font-medium text-white">{item.value}</p>
                        </div>
                      </div>
                      <FiArrowUpRight className="text-slate-400" />
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(15,23,42,0.95),rgba(8,15,30,0.85))] p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
                Let&apos;s build something meaningful
              </p>
              <h3 className="mt-4 font-heading text-3xl font-semibold text-white">
                Ready for opportunities in AI, research, or product development.
              </h3>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                My focus is on contributing to thoughtful teams, learning from challenging work, and
                building software that solves real problems. If that sounds like your world, I&apos;d love to
                connect.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
                >
                  Email Me
                  <FiArrowUpRight />
                </a>
                <a
                  href={contactCta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <ContactIcon />
                  {contactCta.label}
                </a>
              </div>
            </div>
          </div>
        </SectionShell>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Copyright 2026 Tomal Rahman. Built with React, Tailwind CSS, Framer Motion, and React Router.</p>
          <p>Open to research collaboration and tech roles.</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

