import { Section } from '@/components/sections/Section'

const problems = [
  {
    title: 'Too many separate tools',
    body: 'Websites, booking tools, payment add-ons, hosting, email platforms—it can all get a bit much.',
  },
  {
    title: 'Another dashboard? No thanks.',
    body: 'You didn’t start your business to manage five different bits of software every evening.',
  },
  {
    title: 'Tech that steals your night',
    body: 'Plugins, patches and little fixes steal time you should spend with customers—or off the clock.',
  },
] as const

const benefits = [
  {
    title: 'One friendly home online',
    body: 'Your website, bookings, payments and customer marketing sit together under your brand.',
  },
  {
    title: 'Less fiddling. More bookings.',
    body: 'You send the details. Merevo does the clicking—setup, launch and the technical upkeep.',
  },
  {
    title: 'Someone in your corner',
    body: 'Hosting, maintenance and Merevo technical support stay with us, so you can stay with your customers.',
  },
] as const

export function ProblemBenefit() {
  return (
    <Section id="about" className="bg-white">
      <div className="max-w-[40rem]">
        <p className="text-sm font-medium tracking-tight text-meridian-deep">
          For independent service businesses
        </p>
        <h2 className="mt-[0.75rem] text-[1.85rem] font-semibold tracking-tight text-meridian-ink sm:text-[2.25rem]">
          You didn’t start your business to manage five different bits of software.
        </h2>
        <p className="mt-[1rem] text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
          Merevo puts the useful parts together—website, bookings, payments and customer
          marketing—and helps manage them for you. You run the business. We’ll handle the website
          bits.
        </p>
      </div>

      <div className="mt-[2.5rem] grid gap-[1.25rem] md:grid-cols-2">
        <div className="rounded-[20px] bg-meridian-surface p-[1.5rem] md:p-[1.75rem]">
          <h3 className="text-sm font-semibold tracking-tight text-meridian-ink">
            The usual headache
          </h3>
          <ul className="mt-[1.25rem] space-y-[1.25rem]">
            {problems.map((item) => (
              <li key={item.title}>
                <p className="font-medium tracking-tight text-meridian-ink">{item.title}</p>
                <p className="mt-[0.35rem] text-sm leading-relaxed text-meridian-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[20px] bg-meridian-deep p-[1.5rem] text-white md:p-[1.75rem]">
          <h3 className="text-sm font-semibold tracking-tight text-meridian-soft">
            What changes with Merevo
          </h3>
          <ul className="mt-[1.25rem] space-y-[1.25rem]">
            {benefits.map((item) => (
              <li key={item.title}>
                <p className="font-medium tracking-tight text-white">{item.title}</p>
                <p className="mt-[0.35rem] text-sm leading-relaxed text-white/75">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
