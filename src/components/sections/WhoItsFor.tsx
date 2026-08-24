import { Section } from '@/components/sections/Section'

const audiences = [
  'Barbers and hairdressers',
  'Beauty professionals',
  'Nail technicians',
  'Therapists',
  'Personal trainers',
  'Dog groomers',
  'Tattoo artists',
  'Cleaners',
  'Other small service businesses',
] as const

export function WhoItsFor() {
  return (
    <Section className="bg-white">
      <div className="grid items-start gap-[2rem] rounded-[20px] bg-meridian-surface p-[1.5rem] md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-[2.5rem] md:p-[2.25rem] lg:p-[2.75rem]">
        <div>
          <p className="text-sm font-medium tracking-tight text-meridian-deep">Who it’s for</p>
          <h2 className="mt-[0.75rem] text-[1.85rem] font-semibold tracking-tight text-meridian-ink sm:text-[2.25rem]">
            Made for people with actual businesses to run.
          </h2>
          <p className="mt-[1rem] max-w-[34rem] text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
            Merevo is for independent appointment- and service-based businesses that want a
            professional online presence—without assembling it themselves. Busy owners, not
            particularly technical, more interested in getting customers than learning new software.
          </p>
        </div>

        <ul className="grid gap-[0.65rem] sm:grid-cols-2">
          {audiences.map((item) => (
            <li
              key={item}
              className="rounded-[16px] bg-white px-[1rem] py-[0.75rem] text-sm font-medium tracking-tight text-meridian-ink"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
