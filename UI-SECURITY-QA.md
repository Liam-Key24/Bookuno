# UI, security & QA report

Completed: 2026-08-30. Branches: `codex/ui-audit` → `codex/ui-component-cleanup` → `codex/ui-responsive-accessibility` → `codex/security-metadata` → `codex/final-qa`.

## What changed

### Phase 1 — Audit
- Added `UI-AUDIT.md` documenting duplicated patterns, responsive/a11y gaps, and the lead-form business-type validation mismatch.
- Added `npm run typecheck` script.

### Phase 2 — Component structure
- **New primitives:** `SectionHeading`, `FormField`, `FormAlert`, shared `uiClasses.ts`, `IllustrationSlot` `tone` prop.
- **Shared data:** `leadBusinessTypes.ts` used by form and `/api/leads` (fixes rejected submissions when a business type was selected).
- **Refactors:** `PageCta`, `PageIntro`, `ContactCta`, `Faq`, `LeadForm`, `NewsletterSignupForm`, and several landing sections now compose shared primitives.

### Phase 3 — Tailwind cleanup
- Centralised band padding, content shell, split grids, section headings, and feature-card classes in `uiClasses.ts`.
- Documented 10px (`rounded-meridian`) vs 20px (`featureCard`) radius usage in `globals.css`.

### Phase 4 — Responsive
- Contact page: full-width panel with `max-w-3xl` instead of `md:w-2/3` (fixes cramped tablet layout).
- FAQ and contact sections use shared layout tokens for consistent breakpoints.
- Mobile nav: body scroll lock when menu open.

### Phase 5 — Accessibility
- Skip-to-content link targeting `#main-content`.
- Cookie notice: `aria-modal`, initial focus, improved button focus rings.
- FAQ accordion toggles closed on second click; consistent `focusRing` on nav menu button.
- Button minimum height 44px for touch targets.

### Phase 6 — Security
- Production security headers in `next.config.ts` (X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, HSTS).
- Lead API business-type validation aligned with form values.
- Supabase service role remains server-only; no new client secrets exposed.
- `npm audit --omit=dev`: **0 vulnerabilities** at time of verification.
- CSP intentionally **not** added — requires testing against Turnstile, Plausible, and fonts.

### Phase 7 — Metadata
- `createPageMetadata()` helper with canonical URLs, Open Graph, and Twitter cards.
- `robots.ts` and `sitemap.ts` for public routes.
- `noIndex` on `/thank-you`, `/newsletter/confirmed`, `/newsletter/unsubscribed`.
- `NEXT_PUBLIC_SITE_URL` drives canonical URLs (fallback: `https://merevo.studio`).

## What was tested

| Check | Result |
|-------|--------|
| `npm run lint` | Pass |
| `npm run typecheck` | Pass |
| `npm run build` | Pass (22 routes incl. robots/sitemap) |
| `npm audit --omit=dev` | 0 vulnerabilities |
| All static routes compile | Pass |
| API routes compile | Pass |
| Git diff review | No routes or copy removed |

## Known limitations

- **CSP** not configured — add only after allowlisting Turnstile, fonts, and optional Plausible.
- **Cookie dialog** has initial focus but no full focus trap (acceptable for a bottom banner).
- **Social links** in footer still point to generic platform URLs (pre-existing).
- **Open Graph images** not set — no dedicated OG asset in repo; add when brand image is available.
- **Favicon/app icons** not added — verify `public/` icons before launch if missing.
- **Manual browser QA** at 320/375/768/1024/1440px recommended before production deploy.
- **Live form/API testing** requires configured `.env.local` (Supabase, Turnstile, Resend, Upstash).

## Manual checks before deployment

1. Set `NEXT_PUBLIC_SITE_URL` to the production domain in Vercel/hosting env.
2. Submit lead form with each business type — confirm 200 response.
3. Confirm Turnstile widgets render with security headers enabled.
4. Verify `/robots.txt` and `/sitemap.xml` on staging.
5. Check thank-you and newsletter pages return `noindex` in HTML meta.
6. Keyboard-test: skip link → main content, nav menu, FAQ accordion, cookie banner.
7. Confirm Plausible loads only after analytics consent (if domain configured).

## Branch & commit reference

| Branch | Latest commit | Message |
|--------|---------------|---------|
| `codex/ui-audit` | `bd85eda` | docs: add Phase 1 UI audit and typecheck script |
| `codex/ui-component-cleanup` | `093d256` | refactor: extract shared UI primitives and form helpers |
| `codex/ui-responsive-accessibility` | `305d0ca` | fix: improve responsive layouts, touch targets, and accessibility |
| `codex/security-metadata` | `ebe5860` | feat: add security headers, SEO metadata, robots and sitemap |
| `codex/final-qa` | _(this commit)_ | docs: add UI security QA verification report |
