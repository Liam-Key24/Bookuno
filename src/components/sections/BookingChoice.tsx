import { ArrowsLeftRight, LinkSimple, Path } from '@phosphor-icons/react/dist/ssr'
import { TrackedLink } from '@/components/analytics/TrackedLink'
import { Section } from '@/components/sections/Section'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

const choices = [
  {
    icon: LinkSimple,
    title: 'Keep your booking system',
    body: 'Already on Fresha, Treatwell, OpenTable, Calendly, or similar? We’ll link out cleanly so clients book where you already work.',
  },
  {
    icon: Path,
    title: 'Use Meridian booking requests',
    body: 'Prefer a simple request flow on your site? Customers send a request; you approve; they get a confirmation email.',
  },
  {
    icon: ArrowsLeftRight,
    title: 'Use both',
    body: 'Offer your existing book button and Meridian requests side by side — useful when some services or tables need a human check first.',
  },
] as const

const providerLinks = [
  { label: 'Fresha', href: 'https://www.fresha.com' },
  { label: 'Treatwell', href: 'https://www.treatwell.co.uk' },
  { label: 'OpenTable', href: 'https://www.opentable.com' },
  { label: 'Calendly', href: 'https://calendly.com' },
] as const

export function BookingChoice() {
  return (
    <Section id="booking" className="bg-white">
      <div className="grid items-start gap-[2rem] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-[2.5rem]">
        <div>
          <p className="text-sm font-medium tracking-tight text-meridian-deep">
            Booking your way
          </p>
          <h2 className="mt-[0.75rem] max-w-[28rem] text-[1.85rem] font-semibold tracking-tight text-meridian-ink sm:text-[2.25rem]">
            You choose how bookings happen.
          </h2>
          <p className="mt-[1rem] max-w-[34rem] text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
            Meridian doesn’t force a new platform on you. Keep what works, add request handling,
            or blend both — your call.
          </p>

          <ul className="mt-[2rem] space-y-[1rem]">
            {choices.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="rounded-[20px] bg-meridian-surface p-[1.25rem] md:p-[1.4rem]"
              >
                <div className="flex items-start gap-[0.85rem]">
                  <Icon
                    size={22}
                    weight="duotone"
                    className="mt-[0.1rem] shrink-0 text-meridian-mid"
                    aria-hidden
                  />
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-meridian-ink">
                      {title}
                    </h3>
                    <p className="mt-[0.35rem] text-sm leading-relaxed text-meridian-muted">
                      {body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-[1.5rem]">
            <p className="text-xs font-medium tracking-tight text-meridian-muted">
              Example tools we can link out to
            </p>
            <ul className="mt-[0.65rem] flex flex-wrap gap-[0.5rem]">
              {providerLinks.map((provider) => (
                <li key={provider.href}>
                  <TrackedLink
                    href={provider.href}
                    external
                    event="external_booking_click"
                    eventProps={{ provider: provider.label }}
                    className="inline-flex rounded-full bg-meridian-surface px-[0.85rem] py-[0.4rem] text-xs font-medium tracking-tight text-meridian-ink transition-colors hover:bg-meridian-surface-strong"
                  >
                    {provider.label}
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end lg:pt-[3.5rem]">
          <IllustrationSlot
            label="Booking choice"
            brief="Three soft paths leaving one shop door — existing book link, Meridian request, and both together — in teal and accent orange."
            className="w-full max-w-[22rem] bg-[#9aa7b0] md:max-w-[26rem]"
          />
        </div>
      </div>
    </Section>
  )
}
