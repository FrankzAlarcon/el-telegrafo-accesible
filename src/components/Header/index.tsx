'use client'

import React, { useState, type FC } from 'react'
import Button from '../Button'
import Image from 'next/image'
import NavBar from './NavBar'
import NavLink from './NavLink'
import { routes } from '@/helpers/routes'
import ReactSwitch from 'react-switch'
import Link from 'next/link'

const Header: FC<any> = () => {
  const [showNavBar, setShowNavBar] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  return (
    <header>
      <div className='flex flex-col p-2 md:py-2 md:p-5 gap-2 md:flex-row md:justify-between'>
        <div className='flex flex-col gap-8 md:flex-row md:justify-between items-center ' >
          <img src="/assets/imgs/logo.png" alt="El Telégrafo Logo" />
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
            <Button>
              <ReactSwitch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)} />
            </Button>
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
