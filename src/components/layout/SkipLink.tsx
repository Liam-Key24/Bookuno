/** Visually hidden until focused — skip navigation link. */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="absolute -top-full left-4 z-[100] rounded-meridian bg-white px-4 py-2.5 text-sm font-medium text-meridian-ink shadow-[0_8px_24px_rgb(15_23_32_/_0.12)] outline-none transition-[top] duration-150 focus:top-4 focus:ring-2 focus:ring-meridian-mid/40 focus:ring-offset-2"
    >
      Skip to main content
    </a>
  )
}
