const projectScreens = {
  'Tiles Gallery': '/project-screens/tiles-gallery.png',
  KeenKeeper: '/project-screens/keenkeeper.png',
  DigiTools: '/project-screens/digitools.png',
}

const projectScreensDesktop = {
  'Tiles Gallery': '/project-screens/desktop/tiles-gallery.png',
  KeenKeeper: '/project-screens/desktop/keenkeeper.png',
  DigiTools: '/project-screens/desktop/digitools.png',
}

function ProjectVisual({ title, variant = 'card' }) {
  const src = projectScreens[title]

  if (!src) {
    return (
      <div className="relative overflow-hidden rounded-[18px] bg-gradient-to-br from-[#0d1522] via-[#0f1e34] to-[#06090f] shadow-[0_18px_60px_rgba(15,23,42,0.25)]">
        <div className={variant === 'detail' ? 'relative min-h-[720px] sm:min-h-[800px]' : 'relative min-h-[420px] sm:min-h-[558px]'} />
      </div>
    )
  }

  if (variant === 'detail') {
    const desktopSrc = projectScreensDesktop[title] ?? src

    return (
      <div className="overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.16)]">
        <img
          src={desktopSrc}
          alt={`${title} desktop screenshot`}
          className="block h-auto w-full"
        />
      </div>
    )
  }

  return (
    <div className="group relative overflow-hidden rounded-[18px] border border-black/10 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),transparent_28%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <img
        src={src}
        alt={`${title} screenshot`}
        className="h-full min-h-[420px] w-full object-cover object-top sm:min-h-[558px]"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(17,24,39,0.16))]" />
      <div className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs tracking-[0.24em] text-black/80 uppercase shadow-sm backdrop-blur-sm">
        {title}
      </div>
    </div>
  )
}

export default ProjectVisual
