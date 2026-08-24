import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import localFont from 'next/font/local'
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

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/satoshi/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Merevo — Your website, bookings, payments and customer marketing',
    template: '%s | Merevo',
  },
  description:
    'Merevo is a managed website, booking, payments and customer-growth platform for service businesses. Set up and looked after for you — £50 a month.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${plusJakarta.variable} ${satoshi.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <CookieNotice />
        <PlausibleLoader />
      </body>
    </html>
  )
}
