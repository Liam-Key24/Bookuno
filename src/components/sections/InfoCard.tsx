import type { ComponentType, SVGProps } from 'react'
import type { ReactNode } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
}

type InfoCardProps = {
  icon: ComponentType<IconProps>
  title: string
  caption: string
  tone?: 'surface' | 'white' | 'deep'
  children?: ReactNode
  className?: string
}

const toneClasses = {
  surface: 'bg-meridian-surface text-meridian-ink',
  white: 'bg-white text-meridian-ink',
  deep: 'bg-meridian-deep text-white',
} as const

const iconToneClasses = {
  surface: 'text-meridian-mid',
  white: 'text-meridian-mid',
  deep: 'text-meridian-soft',
} as const

const captionToneClasses = {
  surface: 'text-meridian-muted',
  white: 'text-meridian-muted',
  deep: 'text-white/70',
} as const

export function InfoCard({
  icon: Icon,
  title,
  caption,
  tone = 'surface',
  children,
  className = '',
}: InfoCardProps) {
  return (
    <article
      className={[
        'flex h-full min-h-[10.5rem] flex-col justify-between rounded-meridian p-5 md:min-h-[12rem] md:p-6',
        toneClasses[tone],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Icon size={28} weight="duotone" className={iconToneClasses[tone]} aria-hidden />
      <div className="mt-6">
        <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">{title}</h3>
        <p
          className={[
            'mt-2 text-xs font-medium tracking-[0.12em] uppercase',
            captionToneClasses[tone],
          ].join(' ')}
        >
          {caption}
        </p>
        {children}
      </div>
    </article>
  )
}
