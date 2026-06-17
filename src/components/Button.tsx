import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  children: ReactNode
  className?: string
}

const baseCls =
  'inline-flex items-center justify-center rounded-full font-sans text-sm font-medium tracking-wide transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-out will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-champagne-50 active:scale-[0.97] motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100'

const primaryCls =
  'bg-gradient-to-r from-cherry via-tangerine to-rose px-7 py-3.5 text-white shadow-[0_10px_40px_-4px_rgb(239_68_68/0.45)] ring-1 ring-white/20 hover:-translate-y-0.5 hover:scale-[1.04] focus-visible:ring-sun/70'

const ghostCls =
  'border border-champagne-200/80 bg-white/90 px-7 py-3.5 text-ink shadow-sm hover:-translate-y-0.5 hover:scale-[1.03] hover:border-mango/50 hover:bg-white focus-visible:ring-rose/40'

export function PrimaryButton({
  children,
  className = '',
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={`${baseCls} ${primaryCls} ${className}`} {...rest}>
      {children}
    </button>
  )
}

export function GhostButton({
  children,
  className = '',
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={`${baseCls} ${ghostCls} ${className}`} {...rest}>
      {children}
    </button>
  )
}
