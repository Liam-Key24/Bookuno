import { CalendarBlank } from '@phosphor-icons/react/dist/ssr'

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="flex flex-col items-center text-center">
        <CalendarBlank size={36} weight="regular" className="text-neutral-900" />
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900">
          Meridian
        </h1>
        <p className="mt-2 max-w-sm text-base text-neutral-500">
          Marketing site scaffold — Next.js, Tailwind, Phosphor.
        </p>
      </div>
    </main>
  )
}
