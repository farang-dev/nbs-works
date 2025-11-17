import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Nobius',
    default: 'Nobius - We design systems that move.',
  },
  description:
    '構造と実装で、企業の成長を動かす。Nobiusは、診断・構築・成長の3プロセスで、役に立つデジタル体験を設計します。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="bg-background text-primary-text">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}