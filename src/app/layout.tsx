import { routes } from '@/helpers/routes'
import './globals.css'
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import Link from 'next/link'
import Header from '@/components/Header'

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
        <Header />
        <main>
          {children}
        </main>
        {/* Footer de la pagina principal */}
        <footer className='flex flex-col py-7 md:flex-row items-center md:pl-5 md:pr-10 justify-between bg-img-fondo-footer h-[600px] md:h-[250px] bg-cover bg-center bg-no-repeat '>
          <div>
            <Link href="/">
              <img src="/assets/imgs/logo2.png" alt="" className='h-[80px] lg:h-[100px] lg:w-[350px]' />
            </Link>
          </div>
          <div className='flex flex-col text-base text-center gap-2 text-white'>
            {
              routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                >
                  {route.title}
                </Link>
              ))
            }
          </div>
          <nav className='flex flex-col gap-4'>
            <div className='flex gap-6'>
              <a className='hover:scale-110 duration-200' href="https://www.facebook.com/diarioeltelegrafo/?locale=es_LA" target='_blank '><img src="/assets/svgs/facebook.svg" alt="icono de facebook" /></a>
              <a className='hover:scale-110 duration-200' href="https://www.instagram.com/el_telegrafo/" target='_blank '><img src="/assets/svgs/instagram.svg" alt="icno de instagram" /></a>
              <a className='hover:scale-110 duration-200' href="https://twitter.com/el_telegrafo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target='_blank '><img src="/assets/svgs/twitter.svg" alt="icono de twitter" /></a>
              <a className='hover:scale-110 duration-200' href="https://www.youtube.com/user/eltelegrafoec" target='_blank '><img src="/assets/svgs/youtube.svg" alt="icono de youtube" /></a>
            </div>
            <div className='flex flex-col gap-1 items-center'>
              <p className='text-sm'>SAM SALVADOR E6-49 Y ELOY ALFARO</p>
              <p className='text-sm'>QUITO - ECUADOR</p>
              <p className='text-sm'>info@comunica.ec</p>
            </div>
          </nav>
        </footer>
      </body>
    </html>
  )
}
