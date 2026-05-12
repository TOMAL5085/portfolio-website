import { motion } from 'framer-motion'
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi'
import { Link, Navigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProjectVisual from '../components/ProjectVisual'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data'

const projectImageSets = {
  'Tiles Gallery': [
    { src: '/project-screens/desktop/tiles-gallery.png', alt: 'Tiles Gallery desktop preview', className: 'h-[623px] w-full object-cover object-top' },
    { src: '/project-screens/tiles-gallery.png', alt: 'Tiles Gallery mobile preview', className: 'h-[300px] w-full object-cover object-top' },
    { src: '/project-screens/desktop/tiles-gallery.png', alt: 'Tiles Gallery category section', className: 'h-[300px] w-full object-cover object-[center_72%]' },
    { src: '/project-screens/tiles-gallery.png', alt: 'Tiles Gallery lower mobile section', className: 'h-[300px] w-full object-cover object-bottom' },
  ],
  KeenKeeper: [
    { src: '/project-screens/desktop/keenkeeper.png', alt: 'KeenKeeper desktop preview', className: 'h-[623px] w-full object-cover object-top' },
    { src: '/project-screens/keenkeeper.png', alt: 'KeenKeeper mobile preview', className: 'h-[300px] w-full object-cover object-top' },
    { src: '/project-screens/desktop/keenkeeper.png', alt: 'KeenKeeper friends section', className: 'h-[300px] w-full object-cover object-[center_70%]' },
    { src: '/project-screens/keenkeeper.png', alt: 'KeenKeeper lower mobile section', className: 'h-[300px] w-full object-cover object-bottom' },
  ],
  DigiTools: [
    { src: '/project-screens/desktop/digitools.png', alt: 'DigiTools desktop preview', className: 'h-[623px] w-full object-cover object-top' },
    { src: '/project-screens/digitools.png', alt: 'DigiTools mobile preview', className: 'h-[300px] w-full object-cover object-top' },
    { src: '/project-screens/desktop/digitools.png', alt: 'DigiTools product catalog section', className: 'h-[300px] w-full object-cover object-[center_74%]' },
    { src: '/project-screens/digitools.png', alt: 'DigiTools lower mobile section', className: 'h-[300px] w-full object-cover object-bottom' },
  ],
}

const projectCardScreens = {
  'Tiles Gallery': '/project-screens/desktop/tiles-gallery.png',
  KeenKeeper: '/project-screens/desktop/keenkeeper.png',
  DigiTools: '/project-screens/desktop/digitools.png',
}

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to="/" replace />
  }

  const moreProjects = projects.filter((item) => item.slug !== project.slug)
  const gallery = projectImageSets[project.title]

  return (
    <div className="bg-[#f5f5f5] text-black">
      <Navbar />

      <main className="mx-auto flex w-full max-w-[1480px] flex-col gap-24 pb-20">
        <section className="mx-auto w-full max-w-[1320px] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16 xl:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="space-y-8"
          >
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm text-black transition hover:text-[#6b7280]"
            >
              <FiArrowLeft />
              Back to Work
            </Link>

            <ProjectVisual title={project.title} variant="detail" />

            <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-14">
              <div>
                <p className="text-[2.3rem] leading-[1.05] text-black sm:text-[3rem] lg:text-[3.6rem]">
                  {project.title}
                </p>
              </div>
              <div className="space-y-5">
                <p className="text-[1rem] leading-8 text-[#111928]/80">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/15 bg-white px-3 py-1 text-xs text-black"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-b border-black pb-1 text-[1rem] text-black transition hover:border-[#6b7280] hover:text-[#6b7280]"
                  >
                    Visit Live Project
                    <FiArrowUpRight />
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-b border-black pb-1 text-[1rem] text-black transition hover:border-[#6b7280] hover:text-[#6b7280]"
                  >
                    GitHub Repository
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <SectionHeading eyebrow="Images" title="Project imagery and supporting screens." />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[5px] bg-white p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
              <img
                src={gallery[0].src}
                alt={gallery[0].alt}
                className={`${gallery[0].className} rounded-[5px]`}
              />
            </div>
            <div className="grid gap-6">
              <div className="rounded-[5px] bg-white p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
                <img
                  src={gallery[1].src}
                  alt={gallery[1].alt}
                  className={`${gallery[1].className} rounded-[5px]`}
                />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-[5px] bg-white p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
                  <img
                    src={gallery[2].src}
                    alt={gallery[2].alt}
                    className={`${gallery[2].className} rounded-[5px]`}
                  />
                </div>
                <div className="rounded-[5px] bg-white p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
                  <img
                    src={gallery[3].src}
                    alt={gallery[3].alt}
                    className={`${gallery[3].className} rounded-[5px]`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <SectionHeading eyebrow="Details" title="What this project solves, and what could improve next." />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.38fr_0.62fr]">
            <div className="space-y-4">
              <div className="border-t border-black/15 pt-4">
                <p className="text-[1.1rem] text-black">Main tech stack</p>
                <p className="mt-2 text-[0.96rem] leading-7 text-[#111928]/80">
                  {project.stack.join(' · ')}
                </p>
              </div>
              <div className="border-t border-black/15 pt-4">
                <p className="text-[1.1rem] text-black">Live link</p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-[0.96rem] text-[#111928]/80 transition hover:text-black"
                >
                  {project.liveUrl}
                  <FiArrowUpRight />
                </a>
              </div>
            </div>

            <div className="space-y-6 text-[1rem] leading-8 text-[#111928]/85">
              <div className="border-t border-black/15 pt-4">
                <p className="text-[1.1rem] text-black">Brief description</p>
                <p className="mt-3">{project.description}</p>
              </div>
              <div className="border-t border-black/15 pt-4">
                <p className="text-[1.1rem] text-black">Challenges faced</p>
                <p className="mt-3">{project.challenge}</p>
              </div>
              <div className="border-t border-black/15 pt-4">
                <p className="text-[1.1rem] text-black">Potential improvements</p>
                <p className="mt-3">{project.future}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <SectionHeading eyebrow="More Projects" title="Other work you can explore." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {moreProjects.map((item, index) => (
              <article key={item.slug}>
                <Link to={`/projects/${item.slug}`} className="group block space-y-3">
                  <div className="overflow-hidden rounded-[12px] border border-black/10 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.03)]">
                    <img
                      src={projectCardScreens[item.title]}
                      alt={`${item.title} preview`}
                      className="h-[194px] w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <p className="text-[1.1rem] text-black">
                    {String(index + 1).padStart(2, '0')} {item.title}
                  </p>
                  <div className="text-sm text-[#6b7280]">{item.stack.join(' · ')}</div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <footer className="border-t border-black/15 bg-[#f5f5f5]">
          <div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-4 py-8 text-sm text-[#6b7280] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 xl:px-10">
            <p>© 2026 Rezanur Rahman Tomal. Open to research collaboration & tech roles.</p>
            <p>Built with React, Tailwind CSS, Framer Motion, and React Router.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default ProjectDetailPage
