import { Database, HardDrives, ShieldCheck, Wrench } from '@phosphor-icons/react/dist/ssr'
import { Section } from '@/components/sections/Section'
import { InfoCard } from '@/components/sections/InfoCard'
import { Reveal } from '@/components/motion/Reveal'

const points = [
  {
    icon: HardDrives,
    title: 'Hosting',
    caption: 'INCLUDED — NO SERVER SHOPPING',
  },
  {
    icon: Database,
    title: 'Secure storage',
    caption: 'THE DATA YOU NEED TO RUN THE SERVICE',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    caption: 'UPDATES WITHOUT SUNDAY-NIGHT PATCHING',
  },
  {
    icon: ShieldCheck,
    title: 'Support',
    caption: 'MEREVO HELP — NOT A TICKET BLACK HOLE',
  },
] as const

export function ManagedFoundation() {
  return (
    <Section className="bg-meridian-deep">
      <Reveal className="max-w-[40rem]">
        <h2 className="font-display text-[1.85rem] font-bold tracking-tight text-white sm:text-[2.4rem]">
          We look after the behind-the-scenes bits too.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-white/75">
          So you don’t spend the evening wondering what a plugin is.
        </p>
      </Reveal>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {points.map((item, index) => (
          <Reveal key={item.title} delayMs={index * 60} as="li">
            <InfoCard icon={item.icon} title={item.title} caption={item.caption} tone="white" />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
