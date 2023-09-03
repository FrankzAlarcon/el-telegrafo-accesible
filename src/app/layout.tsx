import './globals.css'
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ModeProvider from '@/context/ModeProvider'

const oswald = Oswald({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'El Telégrafo - Noticias de Ecuador y del mundo',
  description: 'El Telégrafo - Noticias de Ecuador y del mundo ',
  keywords: 'el telegrafo, diario el telegrafo, el telegrafo, eltelegrafo, noticias de ecuador, ecuador, politica, economia, deportes, futbol, opinion, news, newspaper, digital, cultura, justicia, sociedad, barcelona sc, emelec, record policial, iess jubilacion'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="es">
      <body className={`${oswald.className} bg-white min-h-screen`}>
        <ModeProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </ModeProvider>
      </body>
    </html>
  )
}
