import type { ReactNode } from 'react'
import { cn } from '@/lib/uiClasses'

type FormAlertTone = 'default' | 'onGradient'
type FormAlertVariant = 'error' | 'status' | 'success'

type FormAlertProps = {
  variant: FormAlertVariant
  tone?: FormAlertTone
  children: ReactNode
  className?: string
}

const classesByVariant: Record<
  FormAlertVariant,
  Record<FormAlertTone, string>
> = {
  error: {
    default: 'rounded-meridian bg-meridian-accent/15 px-4 py-3 text-sm text-meridian-ink',
    onGradient: 'rounded-meridian bg-meridian-accent/25 px-4 py-3 text-sm text-white',
  },
  status: {
    default:
      'rounded-meridian bg-meridian-surface px-4 py-3 text-sm leading-relaxed text-meridian-ink',
    onGradient:
      'rounded-meridian bg-white/20 px-4 py-3 text-sm leading-relaxed text-white',
  },
  success: {
    default:
      'rounded-meridian bg-meridian-deep/10 px-[0.85rem] py-[0.65rem] text-xs leading-relaxed text-meridian-ink',
    onGradient:
      'rounded-meridian bg-white/20 px-[0.85rem] py-[0.65rem] text-xs leading-relaxed text-white',
  },
}

export function FormAlert({
  variant,
  tone = 'default',
  children,
  className = '',
}: FormAlertProps) {
  const role = variant === 'error' ? 'alert' : 'status'

  return (
    <p role={role} className={cn(classesByVariant[variant][tone], className)}>
      {children}
    </p>
  )
}
