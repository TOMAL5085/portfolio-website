function ProjectVisual({ title, accent = 'from-cyan-400/30 via-sky-500/20 to-slate-950' }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${accent}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.18),transparent_35%)]" />
      <div className="relative flex min-h-[240px] flex-col p-5">
        <div className="mb-5 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-300/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
        </div>
        <div className="grid flex-1 gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur">
            <div className="h-3 w-24 rounded-full bg-cyan-300/80" />
            <div className="mt-4 h-8 w-3/4 rounded-2xl bg-white/10" />
            <div className="mt-3 h-3 w-full rounded-full bg-white/10" />
            <div className="mt-2 h-3 w-5/6 rounded-full bg-white/10" />
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="h-2 w-16 rounded-full bg-cyan-300/70" />
                <div className="mt-3 h-8 rounded-xl bg-cyan-400/15" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="h-2 w-16 rounded-full bg-fuchsia-300/70" />
                <div className="mt-3 h-8 rounded-xl bg-fuchsia-400/15" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-300/80">
                {title}
              </div>
              <div className="mt-3 space-y-3">
                <div className="h-3 w-full rounded-full bg-white/10" />
                <div className="h-3 w-4/5 rounded-full bg-white/10" />
                <div className="h-3 w-2/3 rounded-full bg-white/10" />
              </div>
            </div>
            <div className="flex-1 rounded-3xl border border-white/10 bg-slate-950/65 p-4 backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-slate-300/80">
                  Live Preview
                </span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">
                  Placeholder
                </span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-300/25 to-transparent" />
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-sky-300/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectVisual
