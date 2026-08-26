import type { Metadata } from 'next'
import {
  CalendarCheck,
  CreditCard,
  Globe,
  Headset,
  Monitor,
  PaintBrush,
  SealCheck,
  Storefront,
  HardDrives,
  Wrench,
  ChatCircleDots,
  Heart,
  Sparkle,
  ShieldCheck,
} from '@phosphor-icons/react/dist/ssr'
import { Faq } from '@/components/sections/Faq'
import { FeatureShowcase } from '@/components/sections/FeatureShowcase'
import { PageCta } from '@/components/sections/PageCta'
import { PageIntro } from '@/components/sections/PageIntro'

export const metadata: Metadata = {
  title: 'What’s included',
  description:
    'What Merevo manages for service businesses: website, bookings, Stripe payments, customer marketing, hosting and support.',
}

const features = [
  {
    title: 'Your website',
    lede: 'A polished online front door with your name on it—not a marketplace stall.',
    reverse: false,
    snapshotClass: 'bg-meridian-soft/55',
    illustrationLabel: 'Website snapshot',
    illustrationBrief: 'Shop-front browser frame with brand colours and a clear Book now moment.',
    points: [
      {
        icon: PaintBrush,
        title: 'Your branding',
        body: 'Template personalised with your logo, colours, services and photos.',
        iconClass: 'text-meridian-accent',
      },
      {
        icon: Globe,
        title: 'Your domain',
        body: 'One standard domain for year one, preferably a .co.uk—or we help with yours.',
        iconClass: 'text-meridian-deep',
      },
      {
        icon: Monitor,
        title: 'Ready to look the part',
        body: 'Polished layout that feels premium without you building from scratch.',
        iconClass: 'text-meridian-mid',
      },
    ],
  },
  {
    title: 'Booking requests',
    lede: 'Customers book on your site. The diary stays with your business.',
    reverse: true,
    snapshotClass: 'bg-[#ffe8c8]',
    illustrationLabel: 'Bookings snapshot',
    illustrationBrief: 'Calm calendar and request list waiting neatly by the door.',
    points: [
      {
        icon: CalendarCheck,
        title: 'On your site',
        body: 'Bookings land on your domain—not a third-party marketplace profile.',
        iconClass: 'text-meridian-accent',
      },
      {
        icon: Storefront,
        title: 'Less inbox chaos',
        body: 'Fewer DMs, texts and missed calls scattered like confetti.',
        iconClass: 'text-meridian-deep',
      },
      {
        icon: SealCheck,
        title: 'Clear next steps',
        body: 'Requests arrive in one place so you can confirm and get on with the work.',
        iconClass: 'text-meridian-mid',
      },
    ],
  },
  {
    title: 'Payments',
    lede: 'Stripe connected for deposits or full payments—fees sit separately.',
    reverse: false,
    snapshotClass: 'bg-meridian-mid/25',
    illustrationLabel: 'Payments snapshot',
    illustrationBrief: 'Soft Stripe-style card and tick resting on a calm checkout tray.',
    points: [
      {
        icon: CreditCard,
        title: 'Stripe connected',
        body: 'We help plug in Stripe so you can take deposits or full payments.',
        iconClass: 'text-meridian-deep',
      },
      {
        icon: SealCheck,
        title: 'Fees kept clear',
        body: 'Stripe processing fees apply separately—not wrapped into your Merevo fee.',
        iconClass: 'text-meridian-accent',
      },
      {
        icon: ShieldCheck,
        title: 'Looked after setup',
        body: 'Connection and launch help included so you’re not left guessing.',
        iconClass: 'text-meridian-mid',
      },
    ],
  },
  {
    title: 'Customer marketing',
    lede: 'Friendly follow-ups without becoming an email expert.',
    reverse: true,
    snapshotClass: 'bg-[#d4eef3]',
    illustrationLabel: 'Marketing snapshot',
    illustrationBrief: 'Soft envelope and warm reminder note beside a calm desk lamp.',
    points: [
      {
        icon: Heart,
        title: 'Keep in touch',
        body: 'Stay on your customers’ radar without learning email software.',
        iconClass: 'text-meridian-accent',
      },
      {
        icon: Sparkle,
        title: 'Encourage them back',
        body: 'Friendly nudges when it helps. Less typing for you.',
        iconClass: 'text-meridian-mid',
      },
      {
        icon: ChatCircleDots,
        title: 'Less inbox admin',
        body: 'Communication stays with your business, not scattered across apps.',
        iconClass: 'text-meridian-deep',
      },
    ],
  },
  {
    title: 'Hosting & support',
    lede: 'The behind-the-scenes bits, quietly handled.',
    reverse: false,
    snapshotClass: 'bg-meridian-surface-strong',
    illustrationLabel: 'Hosting snapshot',
    illustrationBrief: 'Quiet lock, shield and toolkit resting on a soft server shelf.',
    points: [
      {
        icon: HardDrives,
        title: 'Hosting & security',
        body: 'Kept online, protected and looked after. No server shopping.',
        iconClass: 'text-meridian-deep',
      },
      {
        icon: Wrench,
        title: 'Updates & maintenance',
        body: 'We do the fiddling, fixing and button pressing.',
        iconClass: 'text-meridian-accent',
      },
      {
        icon: Headset,
        title: 'Human support',
        body: 'A real person in your corner when you need one.',
        iconClass: 'text-meridian-mid',
      },
    ],
  },
] as const

export default function WhatsIncludedPage() {
  return (
    <main className="bg-white">
      <PageIntro
        title="Everything useful. Nothing to babysit."
        lede="Website, bookings, payments and marketing—looked after for you. Scroll to see what’s under the roof."
        illustrationLabel="What’s included"
        illustrationBrief="Friendly diagram of website, bookings, payments, marketing and support under one roof."
      />

      {features.map((feature, index) => (
        <div
          key={feature.title}
          className={index % 2 === 0 ? 'bg-white' : 'bg-meridian-surface'}
        >
          <FeatureShowcase
            title={feature.title}
            lede={feature.lede}
            points={feature.points}
            illustrationLabel={feature.illustrationLabel}
            illustrationBrief={feature.illustrationBrief}
            snapshotClass={feature.snapshotClass}
            reverse={feature.reverse}
          />
        </div>
      ))}

      <Faq />

      <PageCta
        title="Want this for your business?"
        body="Tell us a little about what you do and we’ll walk you through the founding offer."
      />
    </main>
  )
}
