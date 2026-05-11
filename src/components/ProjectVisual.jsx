function ProjectVisual({ title, accent = 'cyan' }) {
  const gradients = {
    cyan: 'from-[#0d1522] via-[#0f1e34] to-[#06090f]',
    emerald: 'from-[#111513] via-[#16231e] to-[#06090f]',
    violet: 'from-[#120e1f] via-[#241332] to-[#06090f]',
    amber: 'from-[#16130d] via-[#2d1f12] to-[#06090f]',
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[18px] bg-gradient-to-br ${gradients[accent] ?? gradients.cyan}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_25%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_18%_84%,rgba(255,255,255,0.06),transparent_18%)]" />
      <div className="relative min-h-[420px] p-4 sm:min-h-[558px]">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </div>
        <div className="absolute inset-4 overflow-hidden rounded-[12px] border border-white/10">
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.03),transparent_28%),linear-gradient(305deg,rgba(255,255,255,0.02),transparent_24%)]" />
          <div className="absolute left-6 top-6 h-1.5 w-24 rounded-full bg-white/20" />
          <div className="absolute left-6 top-12 h-px w-[70%] bg-white/10" />
          <div className="absolute inset-x-6 top-16 flex items-end justify-between">
            <div className="space-y-2">
              <div className="h-7 w-44 rounded-full bg-white/12" />
              <div className="h-3 w-56 rounded-full bg-white/10" />
              <div className="h-3 w-48 rounded-full bg-white/10" />
            </div>
            <div className="h-10 w-10 rounded-full border border-white/15" />
          </div>

          <div className="absolute inset-x-6 bottom-6 grid grid-cols-3 gap-3">
            <div className="h-28 rounded-[14px] bg-[linear-gradient(160deg,rgba(56,189,248,0.25),rgba(255,255,255,0.04))]" />
            <div className="h-28 rounded-[14px] bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
            <div className="h-28 rounded-[14px] bg-[linear-gradient(160deg,rgba(236,72,153,0.18),rgba(255,255,255,0.03))]" />
          </div>

          <div className="absolute bottom-6 left-6 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs tracking-[0.24em] text-white/80">
            {title}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectVisual
