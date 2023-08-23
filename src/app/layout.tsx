import { routes } from '@/helpers/routes'
import './globals.css'
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import NavLink from '@/components/NavLink'

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
        <nav className='w-full flex flex-col'>
          <div className='py-2 p-5 flex flex-row justify-between items-center' >
            <img src="/assets/imgs/logo.png" alt="El Telégrafo" />
            <div className='flex gap-14'>
              {/* Colocar iconos de busqueda y componete de modo oscuro */}
              <img src="/assets/imgs/ico-buscar.png" alt="El Telégrafo" />
              <img src="/assets/imgs/ico-usuario.png" alt="El Telégrafo" />
            </div>
          </div>
          <div className=' bg-primary  px-[88px] w-full h-[50px] flex '>
          {
            routes.map((route) => (
              <NavLink
                key={route.path}
                href={route.path}
              >
                {route.title}
              </NavLink>
            ))
          }
          </div>
        </nav>
        <div>
          {children}
        </div>
        <footer>
          <div className=''></div>
          <div></div>
          <div></div>
        </footer>
      </body>
    </html>
  )
}
