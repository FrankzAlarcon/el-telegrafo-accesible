'use client'

import React, { useState, type FC, useEffect } from 'react'
import Image from 'next/image'
import NavBar from './NavBar'
import NavLink from './NavLink'
import { routes } from '@/helpers/routes'
import ReactSwitch from 'react-switch'
import Link from 'next/link'
import { useMode } from '@/hooks/useMode'

const MoonIcon = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-[2px] mt-[2px] w-6 h-6">
      <path className='stroke-white' strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  )
}

const SunIcon = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 pt-[2px] w-6 h-6">
      <path className='stroke-white' strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  )
}

const Header: FC<any> = () => {
  const [showNavBar, setShowNavBar] = useState(false)
  const { darkMode, setDarkMode } = useMode()

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <header className={`${darkMode ? 'dark' : ''}`}>
      <div className='flex flex-col p-2 md:py-2 md:p-5 gap-2 md:flex-row md:justify-between'>
        <div className='flex flex-col gap-8 md:flex-row md:justify-between items-center ' >
          <Link href="/">
            <img src={`/assets/imgs/${darkMode ? 'logo2.png' : 'logo.png'}`} alt="El Telégrafo Logo" />
          </Link>
        </div>
        <div className='flex justify-between px-2'>
          {
            showNavBar && (
                <button className='md:hidden' type='button' onClick={() => setShowNavBar(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                    <path className='stroke-secondary' strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
            )
          }
          {
            !showNavBar && (
              <button className='md:hidden' type='button' onClick={() => setShowNavBar(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                  <path className='stroke-secondary' strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            )
          }
          <div className='flex gap-4 items-center'>
            <Link href="/busqueda">
              <Image
                src="/assets/svgs/search-icon.svg"
                alt="Buscar Noticias"
                className='w-9 h-9'
                width={36}
                height={36}
              />
            </Link>

            <label htmlFor="modo-claro-oscuro">
              <ReactSwitch
                id='modo-claro-oscuro'
                aria-label='Modo Claro/Oscuro'
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                offColor='#faba00'
                onColor='#374151'
                checkedIcon={<SunIcon />}
                uncheckedIcon={<MoonIcon />}
              />
            </label>
          </div>
        </div>
      </div>
      <NavBar showNavBar={showNavBar}>
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
      </NavBar>
    </header>
  )
}

export default Header
