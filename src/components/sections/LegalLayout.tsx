import type { ReactNode } from 'react'

type LegalLayoutProps = {
  title: string
  updated: string
  children: ReactNode
}

export function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  return (
    <main className="bg-white">
      <section className="w-full">
        <div className="m-2 w-auto rounded-meridian bg-meridian-surface px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-14">
          <h1 className="font-display text-[2rem] font-bold tracking-tight text-meridian-ink sm:text-[2.5rem]">
            {title}
          </h1>
          <p className="mt-2 text-sm text-meridian-muted">Last updated {updated}</p>
          <div className="prose-meridian mt-6 max-w-[46rem] space-y-4 text-sm leading-relaxed text-meridian-muted sm:text-base">
            {children}
          </div>
        </div>
      </section>
    </main>
  )
}
