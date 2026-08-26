import type { Metadata } from 'next'
import { DemoTemplates } from '@/components/sections/DemoTemplates'
import { PageCta } from '@/components/sections/PageCta'

export const metadata: Metadata = {
  title: 'Templates',
  description:
    'Polished Merevo website templates for independent service businesses — pick a look, send your details, and we’ll bring it together.',
}

export default function TemplatesPage() {
  return (
    <main className="bg-white">
      <DemoTemplates showPageLink={false} />
      <PageCta
        title="Want a site in this lane?"
        body="Get in touch and we’ll help turn a Merevo template into your branded online home."
      />
    </main>
  )
}
