/** Shared Tailwind class groups for the Merevo marketing UI. */

export function cn(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(' ')
}

/** Standard section horizontal + vertical band padding. */
export const sectionBandPad =
  'px-4 py-16 sm:px-6 md:px-8 md:py-24 lg:px-10 lg:py-28'

/** Contact-style band with slightly taller vertical rhythm. */
export const sectionBandPadLoose =
  'px-4 py-20 sm:px-6 md:px-8 md:py-28 lg:px-10 lg:py-32'

/** Centred content column used inside sections. */
export const contentShell = 'mx-auto w-full min-w-0 max-w-[72rem]'

/** Narrow centred copy block for intros and CTAs. */
export const copyShellNarrow = 'mx-auto max-w-[36rem]'

/** Two-column split used on hero-adjacent sections. */
export const splitGrid =
  'grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20'

export const splitGridReverse =
  'grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20'

/** Default section h2 typography. */
export const sectionHeading =
  'font-display text-[1.85rem] font-bold tracking-tight text-meridian-ink sm:text-[2.4rem]'

/** Page hero h1 typography (centred intros). */
export const pageTitle =
  'font-display text-[2.15rem] font-bold leading-[1.05] tracking-tight text-meridian-ink sm:text-[2.6rem] lg:text-[3.1rem]'

/** Vertical feature-card list — matches Sound familiar sizing on mobile. */
export const stackedFeatureList =
  'mx-auto flex w-full min-w-0 max-w-full flex-col gap-6 lg:mx-0 lg:max-w-none lg:gap-7'

/** Illustration + card stack on landing feature sections. */
export const featureSectionLayout =
  'mt-12 grid w-full min-w-0 grid-cols-1 items-stretch gap-12 md:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-16'

/** Marketing feature / pillar card shell (20px radius language). */
export const featureCard =
  'box-border w-full max-w-full rounded-[1.25rem] bg-white p-6 shadow-[0_10px_28px_rgb(22_105_122_/_0.12)] md:p-7'

export const featureCardSurface =
  'rounded-[1.25rem] bg-meridian-surface p-6 shadow-[0_10px_28px_rgb(22_105_122_/_0.1)] md:p-8'

/** Ink-toned illustration placeholder modifiers. */
export const illustrationInk =
  'text-meridian-ink [&_p]:text-meridian-ink [&_p:last-child]:text-meridian-ink/65'

/** Focus ring for interactive controls that are not Button. */
export const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-meridian-mid/40 focus-visible:ring-offset-2'
