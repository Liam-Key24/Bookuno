type IllustrationSlotProps = {
  label: string
  brief: string
  className?: string
}

export function IllustrationSlot({
  label,
  brief,
  className = '',
}: IllustrationSlotProps) {
  return (
    <div
      className={[
        'flex aspect-square w-full max-w-md flex-col items-center justify-center gap-3 rounded-meridian bg-meridian-surface-strong px-6 text-center',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role="img"
      aria-label={label}
    >
      <p className="text-sm font-semibold tracking-tight text-white">
        {label}
      </p>
      <p className="max-w-[16rem] text-xs leading-relaxed text-white/75">
        {brief}
      </p>
    </div>
  )
}
