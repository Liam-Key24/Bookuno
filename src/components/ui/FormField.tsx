import type { ReactNode } from 'react'
import { cn } from '@/lib/uiClasses'

type FormFieldProps = {
  id: string
  label: string
  labelClassName?: string
  className?: string
  children: ReactNode
  hideLabel?: boolean
}

export function FormField({
  id,
  label,
  labelClassName = '',
  className = '',
  children,
  hideLabel = false,
}: FormFieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={cn(
          hideLabel ? 'sr-only' : 'mb-1 block text-sm font-medium tracking-tight text-meridian-ink',
          labelClassName,
        )}
      >
        {label}
      </label>
      {children}
    </div>
  )
}
