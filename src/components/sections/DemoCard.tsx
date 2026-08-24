'use client'

import { ArrowUpRight } from '@phosphor-icons/react'
import { Button } from '@/components/ui/Button'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { trackEvent } from '@/lib/analytics'
import type { demoTemplates } from '@/components/sections/demoTemplatesData'

type Demo = (typeof demoTemplates)[number]

type DemoCardProps = {
  demo: Demo
}

export function DemoCard({ demo }: DemoCardProps) {
  return (
    <article className="flex h-full flex-col rounded-meridian bg-meridian-surface p-5 md:p-7">
      <div className="relative">
        <span className="absolute top-3 left-3 z-10 rounded-full bg-white/95 px-3 py-1 text-[0.7rem] font-semibold tracking-tight text-meridian-deep uppercase">
          Demo only
        </span>
        <IllustrationSlot
          label={demo.name}
          brief={demo.illustrationBrief}
          className={`aspect-[16/11] max-w-none ${demo.accentClass}`}
        />
      </div>

      <p className="mt-5 text-xs font-medium tracking-[0.14em] text-meridian-deep uppercase">
        {demo.kind}
      </p>
      <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-meridian-ink">
        {demo.name}
      </h3>
      <p className="mt-2 text-sm font-medium tracking-tight text-meridian-ink/80">
        {demo.tagline}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-meridian-muted">{demo.summary}</p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button
          href="/#contact"
          size="sm"
          variant="accent"
          onClick={() =>
            trackEvent('cta_click', { location: 'demo_card', demo: demo.id, label: demo.ctaLabel })
          }
        >
          {demo.ctaLabel}
          <ArrowUpRight size={14} weight="bold" />
        </Button>
        <p className="text-xs text-meridian-muted">Marketing demo — not a live booking form.</p>
      </div>
    </article>
  )
}
