'use client'
import { icons } from '@/helpers/icons'
import { routes } from '@/helpers/routes'
import Link from 'next/link'
import React from 'react'
import LogoIcon from './LogoIcon'
import { usePathname } from 'next/navigation'

const Footer = (): JSX.Element => {
  const pathname = usePathname()
  return (
    <footer className='flex flex-col py-7 md:flex-row items-center md:pl-5 md:pr-10 justify-between bg-img-fondo-footer h-[600px] md:h-[250px] bg-cover bg-center bg-no-repeat '>
          <div>
            <Link href="/" aria-label='Regresar a la Portada principal'>
              <img src="/assets/imgs/logo2.png" alt="Logo el telégrafo" className='h-[80px] lg:h-[100px] lg:w-[350px]' />
            </Link>
          </div>
          <div className='flex flex-col text-base text-center gap-2 text-white'>
            {

              routes.map((route) => {
                if (pathname === route.path) {
                  return null
                }
                return (
                  <Link
                    key={route.path}
                    href={route.path}
                  >
                    {route.title}
                  </Link>
                )
              })
            }
          </div>
          <nav className='flex flex-col gap-4'>
            <div className='flex gap-6 justify-center items-center'>
              {
                icons.map((icon) => (
                  <LogoIcon
                    key={icon.href}
                    href={icon.href}
                    imageSrc={icon.imageSrc}
                    imageAlt={icon.imageAlt}
                    width={icon.width}
                    height={icon.height}
                  />
                ))
              }
            </div>
            <div className='flex flex-col gap-1 items-center'>
              <p className='text-sm'>SAM SALVADOR E6-49 Y ELOY ALFARO</p>
              <p className='text-sm'>QUITO - ECUADOR</p>
              <p className='text-sm'>info@comunica.ec</p>
            </div>
          </nav>
        </footer>
  )
}

export default Footer
