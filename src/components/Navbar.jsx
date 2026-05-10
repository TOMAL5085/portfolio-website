import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, profile } from '../data'

function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isDetailPage = location.pathname.startsWith('/projects/')

  const linkBase = isDetailPage ? '/' : ''

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex items-center gap-3 text-left"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-bold text-cyan-200 shadow-[0_0_0_1px_rgba(34,211,238,0.08)] transition group-hover:-translate-y-0.5">
            TR
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.2em] text-white uppercase">
              Tomal Rahman
            </span>
            <span className="text-xs text-slate-400">{profile.title}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`${linkBase}${link.href}`}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={profile.resume}
            className="inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-400/15"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <a
            href={`${linkBase}#contact`}
            className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      <div
        className={`border-t border-white/10 px-4 pb-4 lg:hidden ${open ? 'block' : 'hidden'}`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`${linkBase}${link.href}`}
              onClick={() => setOpen(false)}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-3 text-center text-sm font-medium text-cyan-100"
            >
              Resume
            </a>
            <a
              href={`${linkBase}#contact`}
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
