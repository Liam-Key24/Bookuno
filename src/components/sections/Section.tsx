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
        'w-full px-[1.5rem] py-[3.5rem] md:px-[2.5rem] md:py-[4.5rem] lg:px-[3rem]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="mx-auto w-full max-w-[70rem]">{children}</div>
    </section>
  )
}
