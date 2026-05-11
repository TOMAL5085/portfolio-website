function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex w-full flex-col gap-5 ${alignClass}`}>
      <div className="flex w-full items-center gap-4">
        <p className="shrink-0 text-[15px] tracking-[0.02em] text-black">{eyebrow}</p>
        <div className="h-px w-full bg-black/25" />
      </div>
      <h2 className="max-w-4xl text-[2.2rem] leading-[1.05] text-black sm:text-[2.8rem] lg:text-[3.6rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-[1rem] leading-8 text-[#111928]/80 sm:text-[1.05rem]">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
