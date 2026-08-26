import type { ReactNode } from 'react'
import Link from 'next/link'

export type LegalNavItem = {
  id: string
  label: string
}

type LegalLayoutProps = {
  title: string
  updated: string
  nav: readonly LegalNavItem[]
  children: ReactNode
}

/** Simple legal page shell: sticky side TOC + black body text. */
export function LegalLayout({ title, updated, nav, children }: LegalLayoutProps) {
  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-[90rem] px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[minmax(0,16rem)_minmax(0,48rem)] xl:gap-20">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold tracking-[0.14em] text-black/45 uppercase">
              On this page
            </p>
            <nav aria-label="Page sections" className="mt-4">
              <ul className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-2 lg:mx-0 lg:flex-col lg:gap-2.5 lg:overflow-visible lg:border-l lg:border-black/10 lg:px-0 lg:pb-0 lg:pl-4">
                {nav.map((item) => (
                  <li key={item.id} className="shrink-0 lg:shrink">
                    <Link
                      href={`#${item.id}`}
                      className="block rounded-meridian bg-meridian-surface px-3 py-2 text-sm leading-snug text-black/70 transition-colors hover:text-black lg:bg-transparent lg:px-0 lg:py-0"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="min-w-0">
            <h1 className="font-display text-[2rem] font-bold tracking-tight text-black sm:text-[2.5rem]">
              {title}
            </h1>
            <p className="mt-2 text-sm text-black/55">Last updated: {updated}</p>
            <div className="mt-10 space-y-12">{children}</div>
          </article>
        </div>
      </div>
    </main>
  )
}

type LegalSectionProps = {
  id: string
  title: string
  children: ReactNode
}

/** Numbered legal section with anchor target for the side menu. */
export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-display text-xl font-bold tracking-tight text-black md:text-2xl">
        {title}
      </h2>
      <div
        className={[
          'mt-4 space-y-4 text-sm leading-relaxed text-black md:text-base',
          '[&_a]:font-medium [&_a]:text-black [&_a]:underline [&_a]:underline-offset-2',
          '[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5',
          '[&_strong]:font-semibold',
        ].join(' ')}
      >
        {children}
      </div>
    </section>
  )
}
