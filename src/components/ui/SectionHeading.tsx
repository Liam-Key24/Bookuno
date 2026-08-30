import type { ReactNode } from 'react'
import { cn, copyShellNarrow, sectionHeading } from '@/lib/uiClasses'

type SectionHeadingProps = {
  title: string
  lede?: string
  as?: 'h1' | 'h2'
  align?: 'center' | 'left'
  className?: string
  titleClassName?: string
  children?: ReactNode
}

export function SectionHeading({
  title,
  lede,
  as: Tag = 'h2',
  align = 'center',
  className = '',
  titleClassName = '',
  children,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={cn(align === 'center' && copyShellNarrow, alignClass, className)}>
      <Tag className={cn(sectionHeading, titleClassName)}>{title}</Tag>
      {lede ? (
        <p className="mt-3 text-base leading-relaxed text-meridian-muted">{lede}</p>
      ) : null}
      {children}
    </div>
  )
}
