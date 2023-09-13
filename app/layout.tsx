import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopNav from './layouts/topNav/topNav'
import LeftNav from './layouts/leftNav/leftNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify - Web Player',
  description: 'Spotify Web Player: Music for everyone',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" dir='ltr'>
      <body className={inter.className}>
        <div className="h-full w-full relative isolate z-0">
          <div className="w-full h-full min-h-full relative p-2 bg-black grid-container">
            <TopNav />
            <LeftNav />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
