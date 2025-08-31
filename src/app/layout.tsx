import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PersonalityIQ - Discover Your True Self',
  description: 'AI-powered personality assessment that unlocks deep insights about your personality and accelerates your personal growth journey.',
  keywords: 'personality test, personality assessment, self-improvement, personal growth, psychology, career insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <script 
          type="module" 
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
          async
        ></script>
      </head>
      <body className={`${inter.className} touch-manipulation safe-area-padding`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}