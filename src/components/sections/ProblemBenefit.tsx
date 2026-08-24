import { Section } from '@/components/sections/Section'
import { SectionCaption } from '@/components/sections/SectionCaption'
import { Reveal } from '@/components/motion/Reveal'

const cards = [
  {
    title: 'Too many tools',
    caption: 'WEBSITES, BOOKINGS, PAYMENTS, EMAIL — ALL SEPARATE',
  },
  {
    title: 'Another dashboard?',
    caption: 'NO THANKS. YOU HAVE A BUSINESS TO RUN',
  },
  {
    title: 'Tech after hours',
    caption: 'PLUGINS AND PATCHES STEAL YOUR EVENINGS',
  },
] as const

const wins = [
  {
    title: 'One friendly home',
    caption: 'YOUR SITE, BOOKINGS, PAYMENTS AND MARKETING TOGETHER',
  },
  {
    title: 'We do the clicking',
    caption: 'YOU SEND THE DETAILS. MEREVO SETS IT UP',
  },
  {
    title: 'Someone in your corner',
    caption: 'HOSTING, MAINTENANCE AND SUPPORT STAY WITH US',
  },
] as const

export function ProblemBenefit() {
  return (
    <Section id="about" className="bg-white">
      <Reveal className="max-w-[42rem]">
        <SectionCaption>Another dashboard? No thanks.</SectionCaption>
        <h2 className="mt-5 font-display text-[2rem] font-bold tracking-tight text-meridian-ink sm:text-[2.75rem]">
          You didn’t start a business to manage five bits of software.
        </h2>
        <p className="mt-4 max-w-[34rem] text-base leading-relaxed text-meridian-muted">
          Merevo puts the useful parts together and helps manage them for you.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {cards.map((item, index) => (
          <Reveal key={item.title} delayMs={index * 80}>
            <article className="flex h-full min-h-[14rem] flex-col justify-end rounded-meridian bg-meridian-surface p-8 md:min-h-[18rem] md:p-10">
              <h3 className="font-display text-2xl font-bold tracking-tight text-meridian-ink md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-3 text-xs font-medium tracking-[0.14em] text-meridian-muted uppercase">
                {item.caption}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {wins.map((item, index) => (
          <Reveal key={item.title} delayMs={index * 80}>
            <article className="flex h-full min-h-[14rem] flex-col justify-end rounded-meridian bg-meridian-deep p-8 text-white md:min-h-[18rem] md:p-10">
              <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-3 text-xs font-medium tracking-[0.14em] text-white/70 uppercase">
                {item.caption}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
