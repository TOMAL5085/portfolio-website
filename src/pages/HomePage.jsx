import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiArrowRight,
  FiArrowUpRight,
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
  const [formState, setFormState] = useState('idle')

  async function handleContactSubmit(event) {
    event.preventDefault()
    setFormState('sending')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      form.reset()
      setFormState('success')
    } catch {
      setFormState('error')
    }
  }

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
              <p className="max-w-[760px] text-[clamp(2.1rem,2.95vw,2.9rem)] leading-[1.1] tracking-[-0.04em] text-[#111928]">
                I enjoy building
                <br />
                real-world software
                <br />
                and experimenting
                <br />
                with different
                <br />
                technologies and
                <br />
                tech stacks.
                <br />
                Actively participate
                <br />
                in machine learning
                <br />
                competitions on
                <br />
                Kaggle and
                <br />
                continuously learn
                <br />
                by doing.
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
          <SectionHeading eyebrow="Research & ML" title="BirdCLEF+ 2026 audio classification case study." />

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-6">
              <div className="rounded-[22px] border border-black/10 bg-white p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
                <p className="text-[0.76rem] tracking-[0.28em] text-[#6b7280] uppercase">
                  Kaggle Competition Participant: BirdCLEF+ 2026 (2026)
                </p>
                <h3 className="mt-4 text-[1.9rem] leading-[1.05] tracking-[-0.05em] text-black sm:text-[2.3rem]">
                  Bird Sound Classification Challenge
                </h3>
                <p className="mt-5 text-[1rem] leading-8 text-[#111928]/82">
                  Built an end-to-end audio classification pipeline to identify 234 bird species from
                  soundscape recordings.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    'Python',
                    'PyTorch',
                    'timm',
                    'EfficientNet-B0',
                    'Librosa',
                    'OpenCV',
                    'NumPy',
                    'Pandas',
                    'Matplotlib',
                    'Seaborn',
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/10 bg-[#f7f7f7] px-3 py-1 text-[0.8rem] text-[#111928]/82"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/TOMAL5085/BirdCLEF-2026"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 border-b border-black pb-1 text-[1rem] text-black transition hover:border-[#6b7280] hover:text-[#6b7280]"
                >
                  View BirdCLEF+ 2026 repository
                  <FiArrowUpRight />
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[22px] border border-black/10 bg-[#101826] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                <p className="text-[0.76rem] tracking-[0.28em] text-white/58 uppercase">Pipeline Highlights</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[
                    [
                      'Audio Pipeline',
                      'Converted raw audio to Mel Spectrograms with 128 bands and a 32kHz sample rate.',
                    ],
                    [
                      'Modeling',
                      'Fed spectrograms into an EfficientNet-B0 model using timm with ImageNet pretrained weights.',
                    ],
                    [
                      'Generalisation',
                      'Implemented a custom PyTorch Dataset and DataLoader with random gain adjustment and Gaussian noise augmentation.',
                    ],
                    [
                      'Inference',
                      'Loaded trained weights, ran sliding-window chunk predictions over soundscape files, and generated final submissions with sigmoid thresholds.',
                    ],
                  ].map(([title, body]) => (
                    <div key={title} className="rounded-[18px] border border-white/10 bg-white/6 p-4">
                      <p className="text-[0.95rem] text-white">{title}</p>
                      <p className="mt-2 text-[0.86rem] leading-6 text-white/72">{body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[20px] border border-black/10 bg-white p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
                  <p className="text-[0.76rem] tracking-[0.24em] text-[#6b7280] uppercase">EDA</p>
                  <p className="mt-3 text-[0.95rem] leading-7 text-[#111928]/82">
                    Performed class imbalance analysis across 234 species, filtered by audio quality rating,
                    and integrated data from iNaturalist and soundscape recordings.
                  </p>
                </div>
                <div className="rounded-[20px] border border-black/10 bg-white p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
                  <p className="text-[0.76rem] tracking-[0.24em] text-[#6b7280] uppercase">What I Built</p>
                  <p className="mt-3 text-[0.95rem] leading-7 text-[#111928]/82">
                    A full training and inference workflow for bird sound recognition, from preprocessing and
                    augmentation to model predictions and competition-ready output files.
                  </p>
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
                  <div className="py-4">
                    <p className="text-[1.1rem] text-black">
                      0{index + 1} {bullet}
                    </p>
                  </div>
                  <div className="h-px bg-black/15" />
                </div>
              ))}
              <div className="mt-6 overflow-hidden rounded-[5px] border border-black/10 bg-white px-5 py-4">
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[0.95rem] text-[#111928]/75">
                  {skillTicker.map((item, index) => (
                    <span key={item} className="whitespace-nowrap">
                      {item}
                      {index < skillTicker.length - 1 ? ' ·' : ''}
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
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[5px] border border-black/10 bg-white px-6 py-6 transition hover:border-black/20 hover:shadow-[0_10px_30px_rgba(17,25,40,0.06)]"
              >
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
              </a>
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

            <div className="rounded-[999px] border border-black/10 bg-white px-8 py-6 text-center">
              <div className="mx-auto max-w-2xl">
                <p className="text-[1.1rem] leading-8 text-black">
                  "Passionate about AI, cybersecurity, and building real-world products through hands-on
                  learning."
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#6b7280]">
                  Rezanur Rahman Tomal
                </p>
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

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="grid gap-5"
              onSubmit={handleContactSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="subject" value="Portfolio contact form submission" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="first-name"
                  autoComplete="given-name"
                  required
                  className="h-11 border-2 border-[#4e4e4e] bg-transparent px-3 text-[1rem] text-black outline-none placeholder:text-[#9f9f9f]"
                  placeholder="First Name"
                  aria-label="First Name"
                />
                <input
                  name="last-name"
                  autoComplete="family-name"
                  className="h-11 border-2 border-[#4e4e4e] bg-transparent px-3 text-[1rem] text-black outline-none placeholder:text-[#9f9f9f]"
                  placeholder="Last Name"
                  aria-label="Last Name"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="inquiry-type"
                  className="h-11 border-2 border-[#4e4e4e] bg-transparent px-3 text-[1rem] text-black outline-none placeholder:text-[#9f9f9f]"
                  placeholder="Inquiry Type"
                  aria-label="Inquiry Type"
                />
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="h-11 border-2 border-[#4e4e4e] bg-transparent px-3 text-[1rem] text-black outline-none placeholder:text-[#9f9f9f]"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />
              </div>

              <textarea
                name="message"
                required
                className="min-h-[140px] border-2 border-[#4e4e4e] bg-transparent px-3 py-3 text-[1rem] text-black outline-none placeholder:text-[#9f9f9f]"
                placeholder="Message"
                aria-label="Message"
              />

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="border-2 border-[#4e4e4e] px-7 py-2 text-[1rem] text-black transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {formState === 'sending' ? 'Sending...' : 'Send'}
                </button>
              </div>

              {formState === 'success' ? (
                <p className="text-sm text-[#0f766e]">
                  Message sent successfully. I&apos;ll get it in Netlify submissions after deployment.
                </p>
              ) : null}

              {formState === 'error' ? (
                <p className="text-sm text-[#b91c1c]">
                  Something went wrong while sending. You can try again or email me directly.
                </p>
              ) : null}
            </form>
          </div>
        </ShellSection>

        <ShellSection id="updates">
          <SectionHeading eyebrow="Recent Highlights" title="Work, competition, and research signals." />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {blogCards.map((card) => {
              const isStaticCard = card.title === 'Research Direction'
              const Wrapper = isStaticCard ? 'div' : 'a'

              return (
                <Wrapper
                  key={card.title}
                  {...(!isStaticCard
                    ? {
                        href: card.href,
                        target: '_blank',
                        rel: 'noreferrer',
                      }
                    : {})}
                  className={`block border-t border-black/15 pt-4 ${!isStaticCard ? 'transition hover:opacity-90' : ''}`}
                >
                  {isStaticCard ? (
                    <div className="mb-4 flex h-[194px] items-center justify-center overflow-hidden rounded-[5px] border border-black/8 bg-[#49515f]">
                      <p className="text-[1.4rem] tracking-[0.08em] text-white">Coming soon</p>
                    </div>
                  ) : (
                    <div className="mb-4 h-[194px] overflow-hidden rounded-[5px] border border-black/8 bg-white">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <p className="text-[1.25rem] text-black">{card.title}</p>
                  <div className="mt-1 text-sm text-[#6b7280]">
                    <span>{card.date}</span>
                  </div>
                  <p className="mt-3 max-w-sm text-[0.96rem] leading-7 text-[#111928]/80">{card.text}</p>
                </Wrapper>
              )
            })}
          </div>
        </ShellSection>

        <section className="mx-auto w-full max-w-[1284px] px-4 pb-8 sm:px-6 lg:px-0">
          <div className="border-t border-black/15 pt-6">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <p className="text-[1.35rem] text-black">Join the Newsletter!</p>
              <p className="max-w-2xl text-[1rem] leading-7 text-[#111928]/75">
                A lightweight way to stay in touch about projects, research updates, and future tech work.
              </p>
              <div className="flex w-full max-w-xl items-center justify-center border-2 border-[#4e4e4e] px-6 py-3 text-[1rem] text-[#6b7280]">
                Coming soon
              </div>
              <p className="text-sm text-[#6b7280]">We'll never share your details.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/15 bg-[#f5f5f5]">
        <div className="mx-auto max-w-[1284px] px-4 py-10 sm:px-6 lg:px-3 [&>p:first-child]:hidden">
          <p>© 2026 Rezanur Rahman Tomal. Open to research collaboration & tech roles.</p>
          <div className="flex flex-col gap-6 rounded-[24px] border border-black/10 bg-white/70 px-6 py-6 backdrop-blur-sm sm:px-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-1">
              <p className="text-[0.78rem] uppercase tracking-[0.24em] text-[#6b7280]">Closing Note</p>
              <p className="text-[1rem] leading-7 text-[#111928]/86">
                {'\u00A9'} 2026 Rezanur Rahman Tomal. Open to research collaboration & tech roles.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 pr-1">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[1rem] text-[#111928] transition hover:-translate-y-0.5 hover:border-black/20 hover:text-black"
                >
                  <Icon />
                </a>
              )
            })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
