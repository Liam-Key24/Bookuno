import { ContactSection } from '../components/ContactSection'
import { DarkPageHero } from '../components/DarkPageHero'
import { HomeFaqSection } from '../components/HomeFaqSection'

export function EnquiriesPage() {
  return (
    <>
      <DarkPageHero
        number="04"
        titleTop="Ask anything,"
        titleBottom="then we guide you clearly"
        description="Send a quick message about your goals, timings, or package fit. You can also check the FAQs below before you enquire."
        caption="Direct contact · then FAQ below"
      />
      <ContactSection />
      <HomeFaqSection />
    </>
  )
}
