import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kanaya.net',
  description: 'Kanaya.net',
  generator: 'ZTrenggono',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
