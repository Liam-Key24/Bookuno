import { Database, HardDrives, ShieldCheck, Wrench } from '@phosphor-icons/react/dist/ssr'
import { Section } from '@/components/sections/Section'

const points = [
  {
    icon: HardDrives,
    title: 'Hosting included',
    body: 'Your Merevo website is hosted for you—no shopping around for servers or wondering what went down overnight.',
  },
  {
    icon: Database,
    title: 'Secure data storage',
    body: 'The customer information you need to run the service is stored securely as part of the platform.',
  },
  {
    icon: Wrench,
    title: 'Maintenance and updates',
    body: 'Platform maintenance and updates stay on our side, so you are not patching things on a Sunday night.',
  },
  {
    icon: ShieldCheck,
    title: 'Merevo technical support',
    body: 'When something needs a tweak or a question answered, you get Merevo technical support—not a ticket black hole.',
  },
] as const

export function ManagedFoundation() {
  return (
    <Section className="bg-meridian-surface">
      <div className="max-w-[38rem]">
        <p className="text-sm font-medium tracking-tight text-meridian-deep">
          Behind the scenes
        </p>
        <h2 className="mt-[0.75rem] text-[1.85rem] font-semibold tracking-tight text-meridian-ink sm:text-[2.25rem]">
          We look after the behind-the-scenes bits too.
        </h2>
        <p className="mt-[1rem] text-base leading-relaxed text-meridian-muted sm:text-[1.05rem]">
          Your website hosting, essential data, platform maintenance and Merevo technical support
          are included—so you don’t have to spend your evening wondering what a plugin is.
        </p>
      </div>

      <ul className="mt-[2.5rem] grid gap-[1rem] sm:grid-cols-2">
        {points.map(({ icon: Icon, title, body }) => (
          <li key={title} className="rounded-[20px] bg-white p-[1.35rem] md:p-[1.5rem]">
            <Icon size={24} weight="duotone" className="text-meridian-mid" aria-hidden />
            <h3 className="mt-[1rem] text-base font-semibold tracking-tight text-meridian-ink">
              {title}
            </h3>
            <p className="mt-[0.45rem] text-sm leading-relaxed text-meridian-muted">{body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
