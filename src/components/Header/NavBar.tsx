'use client'

import { type FC } from 'react'

interface NavBarProps {
  children: React.ReactNode
  showNavBar: boolean
}

const NavBar: FC<NavBarProps> = ({ showNavBar, children }) => {
  return (
    <>
      {
        showNavBar && (
          <nav className='w-full animate-[navbarAnimation_0.4s] md:hidden'>
            <div className=' bg-primary flex-col w-full flex '>
              {children}
            </div>
          </nav>
        )
      }
      <nav className='bg-primary mx-auto w-full hide md:block'>
        <div className='md:flex md:items-center md:justify-center '>
          {children}
        </div>
      </nav>
    </>
  )
}

export default NavBar
