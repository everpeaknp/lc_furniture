import { Cinzel } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import './theme.css'
import { Header } from '@/components/mega-menu-header'
import { WoodenStreetFooter } from '@/components/WoodenStreetFooter'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Furtinuer — Furniture for the way you live',
  description: 'Thoughtfully designed furniture, crafted to bring warmth and character to every corner of your home.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} antialiased`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <WoodenStreetFooter />
      </body>
    </html>
  )
}
