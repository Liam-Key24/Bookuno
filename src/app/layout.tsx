import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { PlausibleLoader } from '@/components/analytics/PlausibleLoader'
import { CookieNotice } from '@/components/layout/CookieNotice'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Meridian',
  description:
    'Managed websites for independent salons, barbers, and restaurants — hosting, updates, enquiry handling, and human support.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <CookieNotice />
        <PlausibleLoader />
      </body>
    </html>
  )
}
