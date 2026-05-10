import { motion } from 'framer-motion'
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi'
import { Link, Navigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProjectVisual from '../components/ProjectVisual'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data'

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:-translate-x-0.5 hover:bg-white/10"
        >
          <FiArrowLeft />
          Back to Projects
        </Link>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
              Project Detail
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                Visit Live Project
                <FiArrowUpRight />
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                GitHub Client Repo
                <FiArrowUpRight />
              </a>
            </div>
          </div>

          <ProjectVisual title={project.title} accent={project.accent.join(' ')} />
        </motion.section>

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <SectionHeading
              eyebrow="Overview"
              title="What this project is about"
              description={project.description}
            />
            <div className="mt-8 space-y-6 text-slate-300">
              <div>
                <h3 className="text-lg font-semibold text-white">Brief description</h3>
                <p className="mt-2 leading-7">
                  This detail page uses a traditional case-study style layout so visitors can understand the
                  project from a more complete perspective. The real app is linked above, while this page
                  summarizes the key talking points and sets the structure for future refinement.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Challenges faced</h3>
                <p className="mt-2 leading-7">{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Potential improvements</h3>
                <p className="mt-2 leading-7">{project.future}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="font-heading text-2xl font-semibold text-white">Main Technology Stack</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(15,23,42,0.95),rgba(8,15,30,0.85))] p-6">
              <h3 className="font-heading text-2xl font-semibold text-white">Quick Links</h3>
              <div className="mt-5 space-y-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200 transition hover:bg-white/10"
                >
                  Live Project Link
                  <FiArrowUpRight className="text-slate-400" />
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200 transition hover:bg-white/10"
                >
                  GitHub Repository
                  <FiArrowUpRight className="text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProjectDetailPage
