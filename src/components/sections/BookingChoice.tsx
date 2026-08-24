import { Buildings, Globe, SealCheck } from '@phosphor-icons/react/dist/ssr'
import { Section } from '@/components/sections/Section'
import { IllustrationSlot } from '@/components/ui/IllustrationSlot'

const points = [
  {
    icon: Buildings,
    title: 'Your branding, front and centre',
    body: 'Customers land on your site—your name, your look, your services—not a shared marketplace profile.',
  },
  {
    icon: Globe,
    title: 'Your own online home',
    body: 'Bookings happen through your website and domain, so the relationship stays with your business.',
  },
  {
    icon: SealCheck,
    title: 'Made for your business—without building from scratch',
    body: 'Pick a polished Merevo template, send your business bits, and we bring it all together.',
  },
] as const

export function BookingChoice() {
  return (
    <Section id="booking" className="bg-white">
      <div className="grid items-start gap-[2rem] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-[2.5rem]">
        <div>
          <p className="text-sm font-medium tracking-tight text-meridian-deep">
            Your own branded home
          </p>
          <h2 className="mt-[0.75rem] max-w-[30rem] text-[1.85rem] font-semibold tracking-tight text-meridian-ink sm:text-[2.25rem]">
            Send customers to your business—not somebody else’s marketplace.
          </h2>
          <p className="mt-[1rem] max-w-[34rem] text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
            Merevo gives each business its own branded website and customer experience. Your
            branding, your services and your bookings, all in one proper online home.
          </p>

          <ul className="mt-[2rem] space-y-[1rem]">
            {points.map(({ icon: Icon, title, body }) => (
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
        </div>

        <div className="flex justify-center lg:justify-end lg:pt-[3.5rem]">
          <IllustrationSlot
            label="Your own website"
            brief="A friendly shop window with the business name on the door and a clear Book now moment — teal and accent orange, calm and premium."
            className="w-full max-w-[22rem] bg-[#9aa7b0] md:max-w-[26rem]"
          />
        </div>
      </div>
    </Section>
  )
}
