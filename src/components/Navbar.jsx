import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, profile } from '../data'

function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isDetailPage = location.pathname.startsWith('/projects/')
  const base = isDetailPage ? '/' : ''

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f5f5]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1284px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8 xl:px-10">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 overflow-hidden rounded-full border border-black/15 bg-white">
            <img
              src="/tr-logo.jpg"
              alt="TR logo"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-sm font-medium tracking-[0.18em] text-black uppercase">
              {profile.name}
            </span>
            <span className="text-xs text-[#6b7280]">{profile.subtitle}</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`${base}${link.href}`}
              className="text-[15px] text-black transition hover:text-[#6b7280]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black/15 px-4 py-2 text-sm text-black transition hover:border-black hover:bg-black hover:text-white"
          >
            Resume
          </a>
          <a
            href={`${base}#contact`}
            className="rounded-full border border-black/15 px-4 py-2 text-sm text-black transition hover:border-black hover:bg-black hover:text-white"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-black md:hidden"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      <div className={`border-t border-black/10 md:hidden ${open ? 'block' : 'hidden'}`}>
        <div className="mx-auto flex max-w-[1284px] flex-col gap-2 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`${base}${link.href}`}
              onClick={() => setOpen(false)}
              className="rounded-xl border border-black/10 bg-white px-4 py-3 text-black"
            >
              {link.label}
            </a>
          ))}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-black/15 px-4 py-3 text-center text-sm text-black"
            >
              Resume
            </a>
            <a
              href={`${base}#contact`}
              onClick={() => setOpen(false)}
              className="rounded-xl border border-black/15 px-4 py-3 text-center text-sm text-black"
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
