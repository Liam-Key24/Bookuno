import type { ReactNode } from 'react'

type LegalLayoutProps = {
  title: string
  updated: string
  children: ReactNode
}

export function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  return (
    <main className="bg-white">
      <section className="w-full px-4 py-16 md:px-5 md:py-24 lg:px-6">
        <div className="mx-auto w-full max-w-[96rem] rounded-meridian bg-meridian-surface px-5 py-10 md:px-8 md:py-12 lg:px-10">
          <p className="caption-quirk">// Legal //</p>
          <h1 className="mt-5 font-display text-[2.2rem] font-bold tracking-tight text-meridian-ink sm:text-[2.75rem]">
            {title}
          </h1>
          <p className="mt-2 text-sm text-meridian-muted">Last updated {updated}</p>
          <div className="prose-meridian mt-8 max-w-[46rem] space-y-5 text-sm leading-relaxed text-meridian-muted sm:text-base">
            {children}
          </div>
        </div>
      </section>
    </main>
  )
}
