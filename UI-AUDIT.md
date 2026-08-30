# Merevo UI & component audit (Phase 1)

Audit date: 2026-08-30. Scope: marketing site (`src/`), Tailwind v4, existing Meridian design tokens.

## Summary

The codebase is already modular (section components, shared `Section`, `Button`, `PageIntro`). Main wins are consolidating repeated Tailwind strings, extracting small form/heading primitives, fixing a lead-form business-type validation mismatch, and improving metadata, security headers, and accessibility on interactive shells (nav, cookie banner, FAQ).

## Duplicated JSX & patterns

| Pattern | Occurrences | Notes |
|--------|-------------|-------|
| Section band padding (`px-4 py-16 sm:px-6 …`) | `Section`, `PageIntro`, `PageCta`, `ContactCta`, `contact/page`, `about/page` | Extract to shared constant |
| Content shell (`mx-auto w-full max-w-[72rem]`) | `Section`, many section grids | Shared `contentShell` |
| Split hero grid (`lg:grid-cols-[minmax…] lg:gap-16 xl:gap-20`) | `ContactCta`, `about`, `faq`, `FoundingOffer`, `FeatureShowcase` | Shared layout class |
| Section h2 typography (`text-[1.85rem] … sm:text-[2.4rem]`) | 12+ components | `SectionHeading` primitive |
| Feature/pillar cards (`rounded-[1.25rem] bg-white p-6 shadow-[…]`) | `about`, `HowItWorks`, `WhatMerevoDoes`, `CustomerMarketing`, `FoundingOffer` | `FeatureCard` or shared card classes |
| Illustration slot tone classes | Many pages | Shared modifier string on `IllustrationSlot` |
| Form alert/status boxes | `LeadForm`, `NewsletterSignupForm` | `FormAlert` |
| Underline form fields + labels | `LeadForm` only (two tones) | `FormField` helper |

## Oversized / complex components

- **`FoundingOffer.tsx`** — pricing hero + cards + comparison; candidate for data-driven sub-sections but functional as-is.
- **`LeadForm.tsx`** — form logic + styling; split styling into field primitives, keep submission logic here.
- **`Faq.tsx`** — resize-observer min-height logic is intentional; keep, add keyboard toggle improvement.

## Inconsistencies

- Border radius: theme token `--radius-meridian: 10px` (`rounded-meridian`) vs ad-hoc `rounded-[1.25rem]` (20px) on marketing cards — **preserve 20px on cards** (product language); document both tokens.
- `PageCta` duplicates `Section` padding instead of composing `Section`.
- `NewsletterSignupForm` uses a raw `<button>` instead of shared `Button`.
- `contact/page.tsx` uses custom hero shell instead of `PageIntro` (intentional gradient treatment — keep, align padding tokens).

## Unused / dead code

- No unused npm dependencies detected in `package.json` (all referenced).
- `/features` is a redirect only — no orphan UI.
- `InfoCard` used on whats-included; `DemoCard` on templates — both active.

## Security & data-flow notes (for later phases)

- **Bug:** `LeadForm` business-type values (`barber_hairdresser`, etc.) do not match API allow-list (`salon`, `barbershop`, …) — submissions with a selected type fail server validation.
- Supabase service role correctly server-only (`supabaseAdmin.ts`).
- No `robots.txt`, sitemap, or per-page Open Graph yet.
- `next.config.ts` has no security headers.
- Cookie dialog lacks `aria-modal` and initial focus management.

## Responsive risk areas

- Navbar mobile drawer: no body scroll lock; menu uses `hidden` attribute (good).
- Contact page gradient panel `md:w-2/3` may feel narrow on tablet — verify at 768px.
- Turnstile widget + submit row on small screens (`min-[400px]` breakpoint) — OK at 320px but tight.
- Footer newsletter + social: stacks well; legal row wraps.

## Accessibility gaps

- No skip-to-content link.
- Cookie notice: dialog without focus trap / `aria-modal`.
- Navbar hamburger: meets 40×40px; focus ring present on `Button`, less consistent on cookie/nav raw buttons.
- FAQ: accordion does not toggle closed on second click; `aria-expanded` present.
- Some pages lack explicit `<main>` landmark consistency (most have it).

## Recommended refactor order

1. Shared Tailwind class constants (`lib/uiClasses.ts`).
2. `SectionHeading`, `FormField`, `FormAlert`, card class helper.
3. Align `PageCta` / `ContactCta` padding with constants.
4. Fix business-type validation shared module.
5. Security headers + metadata + robots/sitemap.
6. A11y: skip link, cookie dialog, focus styles on raw buttons.

## Out of scope (preserve)

- Motion (`Reveal`, FAQ height animation).
- Copy, routes, integrations (Supabase, Resend, Turnstile, Plausible).
- Visual identity and colour palette.
