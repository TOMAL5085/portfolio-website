import { motion } from 'framer-motion'
import {
  FiArrowRight,
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiMapPin,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProjectVisual from '../components/ProjectVisual'
import SectionHeading from '../components/SectionHeading'
import {
  aboutBullets,
  blogCards,
  contactCta,
  contactMethods,
  education,
  experience,
  highlights,
  profile,
  projects,
  skills,
  skillTicker,
  socialLinks,
} from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

function ShellSection({ id, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`mx-auto w-full max-w-[1160px] px-4 py-[4rem] sm:px-6 lg:px-0 ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}

function CirclePlus() {
  return (
    <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-black/15">
      <FiArrowRight className="rotate-45 text-[18px] text-black" />
    </div>
  )
}

function HomePage() {
  const ContactIcon = contactCta.icon

  return (
    <div className="bg-[#f5f5f5] text-black">
      <Navbar />

      <main className="mx-auto flex w-full max-w-[1320px] flex-col gap-[5rem] overflow-hidden pb-20">
        <section className="mx-auto flex min-h-[calc(100vh-110px)] w-full max-w-[1160px] flex-col gap-10 px-4 pt-8 sm:px-6 lg:px-0 lg:pt-7">
          <div className="flex items-center gap-2 text-sm text-[#6b7280]">
            <FiMapPin />
            Bangladesh, Open to Research Collaboration & Tech Roles.
          </div>

          <div className="relative min-h-[580px] lg:min-h-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-[670px] pt-14 lg:pt-[3.75rem]"
            >
              <p className="max-w-[670px] text-[clamp(2.7rem,3.8vw,3.5rem)] leading-[0.95] tracking-[-0.055em] text-[#111928]">
                I&apos;m Rezanur
                <br />
                Rahman Tomal, a
                <br />
                CSE student &amp;
                <br />
                builder based in
                <br />
                Bangladesh.
                <br />
                Available for
                <br />
                research
                <br />
                collaborations &amp;
                <br />
                tech roles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65 }}
              className="relative mt-10 w-full max-w-[470px] lg:absolute lg:right-[54px] lg:top-[-28px] lg:mt-0 lg:w-[470px]"
            >
              <div className="relative h-[630px] w-full overflow-hidden bg-[#efefef]">
                <img
                  src={profile.photo}
                  alt="Rezanur Rahman Tomal portrait"
                  className="absolute inset-0 h-full w-full object-contain object-top"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <ShellSection id="projects">
          <SectionHeading eyebrow="Projects" title="Featured work" />

          <div className="mt-10 grid gap-4 lg:grid-cols-[repeat(3,370px)_1fr]">
            {projects.map((project, index) => (
              <div key={project.slug} className="flex flex-col gap-3">
                <p className="text-[1.1rem] text-black">
                  {String(index + 1).padStart(2, '0')} {project.title}
                </p>
                <Link to={`/projects/${project.slug}`} className="group block">
                  <ProjectVisual title={project.title} accent={project.accent} />
                </Link>
              </div>
            ))}
            <div className="flex items-center justify-center self-end pb-14">
              <CirclePlus />
            </div>
          </div>
        </ShellSection>

        <ShellSection id="research">
          <SectionHeading eyebrow="Research & ML" title="Content creation, exploration, and learning by doing." />

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="max-w-[560px]">
              <p className="text-[1rem] leading-8 text-[#111928]/85">
                I enjoy building real-world software and experimenting with different technologies and tech
                stacks. I also actively participate in Kaggle competitions and keep learning through machine
                learning practice, audio processing, computer vision, and cybersecurity exploration.
              </p>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 border-b border-black pb-1 text-[1rem] text-black transition hover:border-[#6b7280] hover:text-[#6b7280]"
              >
                Get in contact about research or collaborations
                <FiArrowUpRight />
              </a>
            </div>

            <div className="overflow-hidden rounded-[5px] border border-black/10 bg-white p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
              <div className="grid gap-3 lg:grid-cols-[0.98fr_1.02fr]">
                <div className="relative min-h-[336px] overflow-hidden rounded-[5px] bg-[#111928] p-5 text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.14),transparent_26%),radial-gradient(circle_at_20%_85%,rgba(255,255,255,0.08),transparent_18%)]" />
                  <img
                    src={profile.photo}
                    alt="Rezanur Rahman Tomal portrait"
                    className="absolute right-0 top-0 h-full w-[58%] object-cover object-center opacity-90"
                  />
                  <div className="relative z-10 max-w-[42%]">
                    <p className="text-[0.8rem] uppercase tracking-[0.25em] text-white/70">
                      Focus Areas
                    </p>
                    <p className="mt-4 text-[1.15rem] leading-8">
                      AI
                      <br />
                      Cybersecurity
                      <br />
                      Research
                      <br />
                      Full Stack
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between rounded-[5px] border border-black/10 bg-[#f5f5f5] p-4">
                  {skills.map((skill, index) => (
                    <div key={skill.title} className="flex-1">
                      <div className="flex items-center justify-between gap-4 py-3">
                        <p className="text-[1.05rem] text-black">0{index + 1}. {skill.title}</p>
                        <FiArrowRight className="-rotate-45 text-black/70" />
                      </div>
                      <div className="h-px bg-black/10" />
                      <p className="mt-3 text-[0.92rem] leading-7 text-[#111928]/75">
                        {skill.items.join(' • ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ShellSection>

        <ShellSection id="about">
          <SectionHeading eyebrow="About Me" title="Who I am and what I enjoy working on." />

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="max-w-[540px] text-[1rem] leading-8 text-[#111928]/85">
              <p>
                I&apos;m a product-minded builder who likes practical software, thoughtful interfaces, and
                steady learning. My journey has been shaped by shipping projects, testing ideas, and staying
                curious about how technology can be applied in useful ways.
              </p>
              <p className="mt-5">
                Outside programming, I enjoy exploring research topics, watching how systems work under the
                hood, and keeping up with AI and cybersecurity. I also like the feeling of learning by doing
                instead of only reading about it.
              </p>
            </div>

            <div className="space-y-0">
              {aboutBullets.map((bullet, index) => (
                <div key={bullet}>
                  <div className="flex items-center justify-between gap-4 py-4">
                    <p className="text-[1.1rem] text-black">
                      0{index + 1} {bullet}
                    </p>
                    <FiArrowRight className="-rotate-45 text-black/70" />
                  </div>
                  <div className="h-px bg-black/15" />
                </div>
              ))}
              <div className="mt-6 overflow-hidden rounded-[5px] border border-black/10 bg-white px-5 py-4">
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[0.95rem] text-[#111928]/75">
                  {skillTicker.map((item, index) => (
                    <span key={item} className="whitespace-nowrap">
                      {item}
                      {index < skillTicker.length - 1 ? ' •' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ShellSection>

        <ShellSection id="education">
          <SectionHeading eyebrow="Education" title="Academic background and current study." />

          <div className="mt-10 grid gap-6">
            {education.map((item) => (
              <div
                key={item.title}
                className="rounded-[5px] border border-black/10 bg-white px-6 py-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-[1.2rem] text-black">{item.title}</p>
                    <p className="mt-1 text-[1rem] text-[#111928]/75">{item.subtitle}</p>
                  </div>
                  <span className="text-sm uppercase tracking-[0.25em] text-[#6b7280]">
                    {item.meta}
                  </span>
                </div>
                <p className="mt-4 max-w-4xl text-[1rem] leading-8 text-[#111928]/80">{item.body}</p>
              </div>
            ))}
          </div>
        </ShellSection>

        <ShellSection id="experience">
          <SectionHeading eyebrow="Experience" title="Independent work and competitive ML practice." />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {experience.map((item) => (
              <div key={item.title} className="rounded-[5px] border border-black/10 bg-white px-6 py-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[1.2rem] text-black">{item.title}</p>
                    <p className="mt-1 text-sm uppercase tracking-[0.25em] text-[#6b7280]">
                      {item.meta}
                    </p>
                  </div>
                  <FiArrowRight className="-rotate-45 text-black/60" />
                </div>
                <p className="mt-4 text-[1rem] leading-8 text-[#111928]/80">{item.body}</p>
              </div>
            ))}
          </div>
        </ShellSection>

        <ShellSection id="goals">
          <SectionHeading eyebrow="What I&apos;m Building" title="A focused path toward AI, research, and tech roles." />

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-[1rem] leading-8 text-[#111928]/85">
                I am passionate about artificial intelligence and cybersecurity, and I&apos;m aiming to grow
                into research-oriented opportunities. I want to contribute to meaningful software, publish
                research, and keep pushing into more advanced technical work.
              </p>
            </div>

            <div className="rounded-[999px] border border-black/10 bg-white px-5 py-5">
              <div className="flex items-center justify-between gap-4 px-2">
                <button
                  type="button"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white"
                >
                  <FiChevronLeft />
                </button>
                <div className="max-w-2xl text-center">
                  <p className="text-[1.1rem] leading-8 text-black">
                    “Passionate about AI, cybersecurity, and building real-world products through hands-on
                    learning.”
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#6b7280]">
                    Rezanur Rahman Tomal
                  </p>
                </div>
                <button
                  type="button"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="border-t border-black/15 pt-4">
                <p className="text-[1.15rem] text-black">{item.title}</p>
                <p className="mt-3 max-w-sm text-[0.96rem] leading-7 text-[#111928]/80">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </ShellSection>

        <ShellSection id="contact">
          <SectionHeading eyebrow="Say Hello" title="Looking to start a new project or collaboration?" />

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-5 text-[1rem] leading-8 text-[#111928]/85">
              <p>
                Send me an email if you want to talk about research collaboration, freelance work,
                internship opportunities, or a technical project. I&apos;ll do my best to reply quickly.
              </p>
              <p>
                If contact forms are not your thing, reach me directly at{' '}
                <a className="border-b border-black text-black" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                .
              </p>

              <a
                href={contactCta.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-b border-black pb-1 text-[1rem] text-black transition hover:border-[#6b7280] hover:text-[#6b7280]"
              >
                <ContactIcon />
                {contactCta.label}
              </a>

              <div className="space-y-3 pt-4">
                {contactMethods.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="flex items-center gap-3 text-black transition hover:text-[#6b7280]"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15">
                        <Icon />
                      </span>
                      <span>{item.value}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            <form className="grid gap-5" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="h-11 border-2 border-[#4e4e4e] bg-transparent px-3 text-[1rem] text-black outline-none placeholder:text-[#9f9f9f]"
                  placeholder="First Name"
                  aria-label="First Name"
                />
                <input
                  className="h-11 border-2 border-[#4e4e4e] bg-transparent px-3 text-[1rem] text-black outline-none placeholder:text-[#9f9f9f]"
                  placeholder="Last Name"
                  aria-label="Last Name"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="h-11 border-2 border-[#4e4e4e] bg-transparent px-3 text-[1rem] text-black outline-none placeholder:text-[#9f9f9f]"
                  placeholder="Inquiry Type"
                  aria-label="Inquiry Type"
                />
                <input
                  className="h-11 border-2 border-[#4e4e4e] bg-transparent px-3 text-[1rem] text-black outline-none placeholder:text-[#9f9f9f]"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />
              </div>

              <textarea
                className="min-h-[140px] border-2 border-[#4e4e4e] bg-transparent px-3 py-3 text-[1rem] text-black outline-none placeholder:text-[#9f9f9f]"
                placeholder="Message"
                aria-label="Message"
              />

              <div className="flex items-center gap-4">
                <button className="border-2 border-[#4e4e4e] px-7 py-2 text-[1rem] text-black transition hover:bg-black hover:text-white">
                  Send
                </button>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[1rem] text-[#6b7280] underline underline-offset-4"
                >
                  Email instead
                </a>
              </div>
            </form>
          </div>
        </ShellSection>

        <ShellSection id="updates">
          <SectionHeading eyebrow="Recent Highlights" title="Work, competition, and research signals." />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {blogCards.map((card, index) => (
              <div key={card.title} className="border-t border-black/15 pt-4">
                <div className="mb-4 h-[194px] rounded-[5px] bg-[linear-gradient(160deg,rgba(17,24,39,0.92),rgba(17,24,39,0.68))]" />
                <p className="text-[1.25rem] text-black">{card.title}</p>
                <div className="mt-1 flex items-center justify-between text-sm text-[#6b7280]">
                  <span>{card.date}</span>
                  <span>0{index + 1}</span>
                </div>
                <p className="mt-3 max-w-sm text-[0.96rem] leading-7 text-[#111928]/80">{card.text}</p>
              </div>
            ))}
          </div>
        </ShellSection>

        <section className="mx-auto w-full max-w-[1284px] px-4 pb-8 sm:px-6 lg:px-0">
          <div className="border-t border-black/15 pt-6">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <p className="text-[1.35rem] text-black">Join the Newsletter!</p>
              <p className="max-w-2xl text-[1rem] leading-7 text-[#111928]/75">
                A lightweight way to stay in touch about projects, research updates, and future tech work.
              </p>
              <div className="flex w-full max-w-xl gap-2">
                <input
                  className="h-11 flex-1 border-2 border-[#4e4e4e] bg-transparent px-3 text-[1rem] text-black outline-none placeholder:text-[#9f9f9f]"
                  placeholder="name@example.com"
                  aria-label="Email address for newsletter"
                />
                <button className="h-11 w-16 bg-[#4e4e4e] text-white">→</button>
              </div>
              <p className="text-sm text-[#6b7280]">We’ll never share your details.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/15 bg-[#f5f5f5]">
        <div className="mx-auto flex max-w-[1284px] flex-col gap-6 px-4 py-8 text-sm text-[#6b7280] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-0">
          <p>© 2026 Rezanur Rahman Tomal. Open to research collaboration & tech roles.</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-black transition hover:text-[#6b7280]"
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
