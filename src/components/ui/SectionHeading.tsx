import type { ReactNode } from 'react'
import { cn, copyShellNarrow, sectionHeading } from '@/lib/uiClasses'

type SectionHeadingProps = {
  title: string
  lede?: string
  as?: 'h1' | 'h2'
  align?: 'center' | 'left'
  /** When align is left, centre the block below lg (tablet). */
  centerOnTablet?: boolean
  className?: string
  titleClassName?: string
  children?: ReactNode
}

export function SectionHeading({
  title,
  lede,
  as: Tag = 'h2',
  align = 'center',
  centerOnTablet = false,
  className = '',
  titleClassName = '',
  children,
}: SectionHeadingProps) {
  const alignClass =
    align === 'center'
      ? 'text-center'
      : centerOnTablet
        ? 'max-lg:mx-auto max-lg:max-w-[34rem] max-lg:text-center lg:text-left'
        : 'text-left'

  return (
    <div
      className={cn(
        align === 'center' && copyShellNarrow,
        centerOnTablet && 'lg:mx-0 lg:max-w-none',
        alignClass,
        className,
      )}
    >
      <Tag className={cn(sectionHeading, titleClassName)}>{title}</Tag>
      {lede ? (
        <p className="mt-3 text-base leading-relaxed text-meridian-muted">{lede}</p>
      ) : null}
      {children}
    </div>
  )
}
