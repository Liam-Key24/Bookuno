import type { ReactNode } from 'react'

type LegalLayoutProps = {
  title: string
  updated: string
  children: ReactNode
}

export function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  return (
    <main className="bg-white">
      <section className="w-full px-[1.5rem] py-[3rem] md:px-[2.5rem] md:py-[4rem] lg:px-[3rem]">
        <div className="w-full rounded-[20px] bg-meridian-surface px-[1.5rem] py-[2.25rem] md:px-[2.5rem] md:py-[3rem] lg:px-[3rem]">
          <p className="text-sm font-medium tracking-tight text-meridian-deep">Legal</p>
          <h1 className="mt-[0.5rem] text-[2rem] font-semibold tracking-tight text-meridian-ink sm:text-[2.5rem]">
            {title}
          </h1>
          <p className="mt-[0.5rem] text-sm text-meridian-muted">Last updated {updated}</p>
          <div className="prose-meridian mt-[2rem] max-w-[46rem] space-y-[1.25rem] text-sm leading-relaxed text-meridian-muted sm:text-base">
            {children}
          </div>
        </div>
      </section>
    </main>
  )
}
