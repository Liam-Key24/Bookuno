import { Section } from '@/components/sections/Section'

const problems = [
  {
    title: 'The site never gets finished',
    body: 'You’re booking clients, answering messages, and running the floor. The website stays half-done or out of date.',
  },
  {
    title: 'Enquiries slip through',
    body: 'DMs, missed calls, and messy inbox threads make it hard to know who wants a cut, a table, or a follow-up.',
  },
  {
    title: 'Tech shouldn’t be another job',
    body: 'Hosting, updates, and little fixes steal evenings you should spend on the business — or off the clock.',
  },
] as const

const benefits = [
  {
    title: 'A site that looks open for business',
    body: 'Polished pages that match your brand and make it easy for new clients to trust you online.',
  },
  {
    title: 'Requests handled cleanly',
    body: 'Booking and enquiry flows that capture the right details so you can approve and confirm without chaos.',
  },
  {
    title: 'Someone in your corner',
    body: 'Hosting, updates, and human support stay with Meridian — so you can stay with your clients.',
  },
] as const

export function ProblemBenefit() {
  return (
    <Section id="about" className="bg-white">
      <div className="max-w-[40rem]">
        <p className="text-sm font-medium tracking-tight text-meridian-deep">
          For independent salons, barbers & restaurants
        </p>
        <h2 className="mt-[0.75rem] text-[1.85rem] font-semibold tracking-tight text-meridian-ink sm:text-[2.25rem]">
          Busy owners don’t need another tool to babysit.
        </h2>
        <p className="mt-[1rem] text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
          Meridian is for people who already run a great local business — and want the
          website to pull its weight without turning into a second job.
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
            What changes with Meridian
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
