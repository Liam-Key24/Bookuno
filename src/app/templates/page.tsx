import { createPageMetadata } from '@/lib/metadata'
import { DemoTemplates } from '@/components/sections/DemoTemplates'
import { PageCta } from '@/components/sections/PageCta'

export const metadata = createPageMetadata({
  title: 'Templates',
  description:
    'Polished Merevo website templates for independent service businesses — pick a look, send your details, and we’ll bring it together.',
  path: '/templates',
})

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
