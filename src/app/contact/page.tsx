import { LeadForm } from '@/components/forms/LeadForm'
import { Button } from '@/components/ui/Button'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/motion/Reveal'
import { createPageMetadata } from '@/lib/metadata'
import { CONTACT_EMAIL, CONTACT_LABEL } from '@/lib/site'
import { contentShell, sectionBandPad, sectionBandPadLoose, splitGrid, tabletActionsCenter } from '@/lib/uiClasses'

export const metadata = createPageMetadata({
  title: 'Contact',
  description: 'Contact Merevo about the founding offer for independent service businesses.',
  path: '/contact',
})

const details = [
  {
    title: 'Email',
    body: CONTACT_EMAIL,
    note: CONTACT_LABEL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    title: 'Response',
    body: 'We aim to reply within 1–2 business days.',
  },
  {
    title: 'Based',
    body: 'Serving independent service businesses, remote-friendly.',
  },
] as const

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className={`flex min-h-[min(80vh,44rem)] w-full flex-col justify-center ${sectionBandPad}`}>
        <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-meridian px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#c5e4eb] via-meridian-soft to-meridian-mid/70"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-[20%] bg-[radial-gradient(ellipse_at_35%_15%,rgb(197_228_235_/_0.9),transparent_55%),radial-gradient(ellipse_at_75%_85%,rgb(72_159_181_/_0.35),transparent_50%)] blur-2xl"
          />

          <div className="relative z-10 grid items-center gap-10 max-lg:justify-items-center max-lg:text-center lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:justify-items-stretch lg:text-left lg:gap-12">
            <div className="max-lg:mx-auto max-lg:flex max-lg:max-w-[28rem] max-lg:flex-col max-lg:items-center">
              <h1 className="font-display text-[2rem] font-bold tracking-tight text-meridian-accent sm:text-[2.5rem]">
                Say hello
              </h1>
              <p className="mt-3 max-w-[28rem] text-base leading-relaxed text-meridian-ink/75">
                Reach out about getting started. We reply personally.
              </p>
              <IllustrationSlot
                label="Contact"
                brief="Calm desk scene with a soft envelope and a friendly wave."
                tone="ink"
                className="mt-8 aspect-[4/3] w-full max-w-[16rem] bg-white/45"
              />
              <Button href="#contact-form" className="mt-8 bg-white text-meridian-deep hover:bg-white/90">
                Send an enquiry
              </Button>
            </div>

            <ul className="grid w-full max-w-[28rem] gap-8 lg:max-w-none">
              {details.map((item) => (
                <li key={item.title}>
                  <h2 className="font-display text-lg font-bold tracking-tight text-meridian-ink md:text-xl">
                    {item.title}
                  </h2>
                  {'href' in item && item.href ? (
                    <a
                      href={item.href}
                      className="mt-1.5 inline-block text-sm text-meridian-deep underline-offset-2 hover:underline md:text-base"
                    >
                      {item.body}
                    </a>
                  ) : (
                    <p className="mt-1.5 text-sm leading-relaxed text-meridian-muted md:text-base">
                      {item.body}
                    </p>
                  )}
                  {'note' in item && item.note ? (
                    <p className="mt-1 text-xs text-meridian-muted">{item.note}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact-form" className={`w-full scroll-mt-24 bg-white ${sectionBandPadLoose}`}>
        <div className={`${contentShell} ${splitGrid} ${tabletActionsCenter} lg:items-start`}>
          <Reveal>
            <SectionHeading
              title="Get started with Merevo"
              lede="Share a little about your business and we’ll follow up personally."
              align="left"
              centerOnTablet
              className="max-w-none"
              titleClassName="max-w-[18rem] sm:max-w-[22rem] lg:max-w-[22rem]"
            />
          </Reveal>

          <Reveal delayMs={80} className="min-w-0 w-full max-lg:mx-auto max-lg:max-w-[28rem]">
            <LeadForm />
          </Reveal>
        </div>
      </section>
    </main>
  )
}
