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
    <article className="flex h-full flex-col rounded-[20px] bg-meridian-surface p-[1.25rem] md:p-[1.5rem]">
      <div className="relative">
        <span className="absolute top-[0.85rem] left-[0.85rem] z-10 rounded-full bg-white/95 px-[0.75rem] py-[0.3rem] text-[0.7rem] font-semibold tracking-tight text-meridian-deep uppercase">
          Demo only
        </span>
        <IllustrationSlot
          label={demo.name}
          brief={demo.illustrationBrief}
          className={`aspect-[16/11] max-w-none ${demo.accentClass}`}
        />
      </div>

      <p className="mt-[1rem] text-xs font-medium tracking-tight text-meridian-deep uppercase">
        {demo.kind}
      </p>
      <h3 className="mt-[0.35rem] text-xl font-semibold tracking-tight text-meridian-ink">
        {demo.name}
      </h3>
      <p className="mt-[0.35rem] text-sm font-medium tracking-tight text-meridian-ink/80">
        {demo.tagline}
      </p>
      <p className="mt-[0.55rem] flex-1 text-sm leading-relaxed text-meridian-muted">
        {demo.summary}
      </p>

      <div className="mt-[1.25rem] flex flex-wrap items-center gap-[0.65rem]">
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
