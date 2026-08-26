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
    <article className="flex h-full flex-col">
      <IllustrationSlot
        label={demo.name}
        brief={demo.illustrationBrief}
        className={`aspect-[16/11] max-w-none ${demo.accentClass} text-meridian-ink [&_p]:text-meridian-ink [&_p:last-child]:text-meridian-ink/65`}
      />

      <p className="mt-5 text-sm text-meridian-muted">Demo only · {demo.kind}</p>
      <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-meridian-ink">
        {demo.name}
      </h2>
      <p className="mt-2 text-sm font-medium tracking-tight text-meridian-ink/80">{demo.tagline}</p>
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
        <p className="text-xs text-meridian-muted">Not a live booking form.</p>
      </div>
    </article>
  )
}
