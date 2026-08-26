import { redirect } from 'next/navigation'

/** Old /features URL → What’s included */
export default function FeaturesRedirectPage() {
  redirect('/whats-included')
}
