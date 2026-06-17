/**
 * Hero dashboard preview. Pure CSS — no framer-motion.
 * Bars animate via `scaleX` (composited) instead of `width` (triggers layout).
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[min(100%,700px)] hero-enter">
      <div
        className="pointer-events-none absolute -inset-8 rounded-[40px] opacity-85 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at 24% 18%, rgb(251 191 36 / 0.30), transparent 52%), radial-gradient(ellipse at 72% 80%, rgb(244 114 182 / 0.24), transparent 50%), radial-gradient(ellipse at 48% 48%, rgb(249 115 22 / 0.12), transparent 58%)',
        }}
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-3xl border border-champagne-200/80 bg-white/95 shadow-soft">
        <div className="flex items-center gap-2 border-b border-champagne-200/60 px-5 py-3.5">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-cherry/90" />
            <span className="size-2.5 rounded-full bg-mango/90" />
            <span className="size-2.5 rounded-full bg-sun/90" />
          </div>
          <span className="ml-2 font-sans text-[10px] font-semibold uppercase tracking-[0.13em] text-ink-muted">
            Bookuno dashboard preview
          </span>
        </div>
        <div className="grid gap-5 p-5 sm:grid-cols-[1.1fr_0.9fr] sm:p-6">
          <div className="space-y-4">
            <div className="rounded-2xl border border-champagne-200/70 bg-white p-4">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-ink-muted">
                Today
              </p>
              <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
                24 bookings
              </p>
              <div className="mt-4 space-y-2">
                {[78, 60, 42].map((w, idx) => (
                  <div
                    key={idx}
                    className="h-1.5 overflow-hidden rounded-full bg-black/[0.06]"
                  >
                    <div
                      className="hero-bar h-full rounded-full bg-gradient-to-r from-cherry via-tangerine to-rose"
                      style={{
                        width: `${w}%`,
                        animationDelay: `${0.25 + idx * 0.12}s`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-champagne-200/70 bg-petal/25 p-3">
                <p className="font-sans text-[10px] text-ink-muted">Enquiries</p>
                <p className="mt-1 font-display text-lg font-semibold text-ink">13</p>
              </div>
              <div className="rounded-xl border border-champagne-200/70 bg-champagne-50/90 p-3">
                <p className="font-sans text-[10px] text-ink-muted">Reply rate</p>
                <p className="mt-1 font-display text-lg font-semibold text-ink">98%</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-champagne-200/70 bg-white p-4">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-ink-muted">
              Website
            </p>
            <div className="mt-3 space-y-3">
              <div className="h-2 w-2/3 rounded-full bg-black/[0.08]" />
              <div className="grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] rounded-lg bg-gradient-to-br from-petal/45 to-champagne-50 ring-1 ring-mango/15"
                  />
                ))}
              </div>
              <div className="h-9 rounded-xl bg-gradient-to-r from-cherry via-tangerine to-rose shadow-lg shadow-cherry/20" />
              <div className="h-2 w-1/2 rounded-full bg-black/[0.08]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
