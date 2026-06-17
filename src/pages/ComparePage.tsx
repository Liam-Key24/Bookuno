import { DarkPageHero } from '../components/DarkPageHero'
import { ProblemComparisonSection } from '../components/ProblemComparisonSection'

export function ComparePage() {
  return (
    <>
      <DarkPageHero
        number="03"
        titleTop="Site + bookings,"
        titleBottom="without the patchwork"
        description="What you get, who owns the work, and where gaps tend to show up — pick a stack that fits your team instead of duct-taping six tools together."
        caption="Same criteria · every row below"
      />
      <ProblemComparisonSection embedded />
    </>
  )
}
