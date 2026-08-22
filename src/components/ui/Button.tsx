import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type ButtonVariant = 'soft' | 'accent'
type ButtonSize = 'md' | 'sm'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  onClick?: ComponentPropsWithoutRef<'button'>['onClick']
} & Omit<ComponentPropsWithoutRef<'button'>, 'children' | 'className' | 'onClick'>

const variantClasses: Record<ButtonVariant, string> = {
  soft: 'bg-meridian-surface text-meridian-ink hover:bg-meridian-surface-strong',
  accent: 'bg-meridian-accent text-meridian-ink hover:brightness-105',
}

const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-5 py-2.5 text-sm',
  sm: 'px-4 py-2 text-sm',
}

export function Button({
  children,
  href,
  variant = 'soft',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
  ...props
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-[20px] font-medium tracking-tight transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-meridian-mid/40 focus-visible:ring-offset-2',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as ComponentPropsWithoutRef<'a'>['onClick']}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
