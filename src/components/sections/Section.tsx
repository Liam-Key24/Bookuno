import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={[
        'w-full px-4 py-20 md:px-5 md:py-28 lg:px-6 lg:py-32',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="mx-auto w-full max-w-[96rem]">{children}</div>
    </section>
  )
}
