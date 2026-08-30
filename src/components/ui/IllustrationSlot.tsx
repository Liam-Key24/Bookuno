import { cn, illustrationInk } from '@/lib/uiClasses'

type IllustrationTone = 'default' | 'ink'

type IllustrationSlotProps = {
  label: string
  brief: string
  className?: string
  tone?: IllustrationTone
}

const toneClasses: Record<IllustrationTone, string> = {
  default: 'text-white [&_p:last-child]:text-white/75',
  ink: illustrationInk,
}

export function IllustrationSlot({
  label,
  brief,
  className = '',
  tone = 'default',
}: IllustrationSlotProps) {
  return (
    <div
      className={cn(
        'flex aspect-square w-full max-w-md flex-col items-center justify-center gap-3 rounded-meridian bg-meridian-surface-strong px-6 text-center',
        toneClasses[tone],
        className,
      )}
      role="img"
      aria-label={label}
    >
      <p className="text-sm font-semibold tracking-tight">{label}</p>
      <p className="max-w-[16rem] text-xs leading-relaxed">{brief}</p>
    </div>
  )
}
