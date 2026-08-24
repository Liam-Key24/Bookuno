import { Section } from '@/components/sections/Section'
import { SectionCaption } from '@/components/sections/SectionCaption'
import { Reveal } from '@/components/motion/Reveal'

const points = [
  {
    title: 'Hosting',
    caption: 'INCLUDED — NO SERVER SHOPPING',
  },
  {
    title: 'Secure storage',
    caption: 'THE DATA YOU NEED TO RUN THE SERVICE',
  },
  {
    title: 'Maintenance',
    caption: 'UPDATES WITHOUT SUNDAY-NIGHT PATCHING',
  },
  {
    title: 'Support',
    caption: 'MEREVO HELP — NOT A TICKET BLACK HOLE',
  },
] as const

export function ManagedFoundation() {
  return (
    <Section className="bg-meridian-surface">
      <Reveal className="max-w-[40rem]">
        <SectionCaption>Behind the scenes</SectionCaption>
        <h2 className="mt-5 font-display text-[2rem] font-bold tracking-tight text-meridian-ink sm:text-[2.75rem]">
          We look after the behind-the-scenes bits too.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-meridian-muted">
          So you don’t spend the evening wondering what a plugin is.
        </p>
      </Reveal>

      <ul className="mt-14 grid gap-4 sm:grid-cols-2">
        {points.map((item, index) => (
          <Reveal key={item.title} delayMs={index * 70} as="li">
            <article className="flex h-full min-h-[12rem] flex-col justify-end rounded-meridian bg-white p-8 md:min-h-[14rem] md:p-10">
              <h3 className="font-display text-2xl font-bold tracking-tight text-meridian-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-xs font-medium tracking-[0.14em] text-meridian-muted uppercase">
                {item.caption}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
