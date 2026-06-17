import { Link, NavLink, useNavigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import { GhostButton, PrimaryButton } from './Button'

const navLinkCls = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'font-semibold text-ink' : 'text-ink-muted transition hover:text-ink'

export function Layout({ children }: { children: ReactNode }) {
  const navigate = useNavigate()

  return (
    <div className="relative overflow-x-hidden">
      {/*
        Static decorative background. Was previously three infinite framer-motion
        blobs + three radial gradients — each animation forced continuous paint
        of large `blur-3xl` surfaces. Static gradients composite once and cost
        ~0 per frame.
      */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_100%_70%_at_50%_-15%,rgb(251_191_36/0.28),transparent),radial-gradient(ellipse_70%_45%_at_95%_5%,rgb(244_114_182/0.14),transparent),radial-gradient(ellipse_55%_40%_at_0%_100%,rgb(249_115_22/0.1),transparent),radial-gradient(ellipse_30%_30%_at_10%_40%,rgb(251_146_60/0.18),transparent_70%),radial-gradient(ellipse_30%_30%_at_90%_70%,rgb(244_114_182/0.14),transparent_70%)]"
        aria-hidden
      />

      <header className="sticky top-0 z-50 border-b border-champagne-200/60 bg-champagne-50/95">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
          <Link
            to="/"
            className="font-display text-lg font-semibold tracking-[-0.02em] text-ink transition-transform hover:scale-[1.03] sm:text-2xl"
          >
            Bookuno
          </Link>

          <nav
            className="hidden flex-1 justify-center gap-5 font-sans text-sm font-medium sm:flex sm:gap-6"
            aria-label="Main"
          >
            <NavLink to="/packages" className={navLinkCls}>
              Packages
            </NavLink>
            <NavLink to="/work" className={navLinkCls}>
              Work
            </NavLink>
            <NavLink to="/compare" className={navLinkCls}>
              Compare
            </NavLink>
            <NavLink to="/enquiries" className={navLinkCls}>
              Enquiries
            </NavLink>
            <a href="/enquiries#faq" className="text-ink-muted transition hover:text-ink">
              FAQ
            </a>
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <GhostButton
              type="button"
              className="hidden px-4 py-2 text-xs sm:inline-flex sm:px-5 sm:py-2.5 sm:text-sm"
              onClick={() => navigate('/enquiries')}
            >
              Enquiries
            </GhostButton>
            <PrimaryButton
              className="px-3.5 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm"
              onClick={() => navigate('/#pricing')}
            >
              Start
            </PrimaryButton>
          </div>
        </div>

        <nav
          className="mx-auto flex max-w-6xl items-center gap-4 overflow-x-auto px-4 pb-3 font-sans text-xs font-medium text-ink-muted scrollbar-hide sm:hidden"
          aria-label="Mobile"
        >
          <NavLink to="/packages" className={navLinkCls}>
            Packages
          </NavLink>
          <NavLink to="/work" className={navLinkCls}>
            Work
          </NavLink>
          <NavLink to="/compare" className={navLinkCls}>
            Compare
          </NavLink>
          <NavLink to="/enquiries" className={navLinkCls}>
            Enquiries
          </NavLink>
          <a href="/enquiries#faq" className="whitespace-nowrap transition hover:text-ink">
            FAQ
          </a>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/5 bg-wine-deep py-12 text-center font-sans text-sm text-white/55">
        <p className="font-display text-lg font-semibold tracking-[-0.02em] text-champagne-50 sm:text-xl">
          Bookuno
        </p>
        <p className="mt-2 text-white/50">Sites &amp; bookings — we host &amp; maintain.</p>
        <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-sm">
          <Link to="/packages" className="text-white/70 hover:text-white">
            Packages
          </Link>
          <span className="text-white/25">·</span>
          <Link to="/work" className="text-white/70 hover:text-white">
            Work
          </Link>
          <span className="text-white/25">·</span>
          <Link to="/compare" className="text-white/70 hover:text-white">
            Compare
          </Link>
          <span className="text-white/25">·</span>
          <Link to="/enquiries" className="text-white/70 hover:text-white">
            Enquiries
          </Link>
        </p>
        <p className="mt-6 text-xs text-white/35">© {new Date().getFullYear()} Bookuno</p>
      </footer>
    </div>
  )
}
