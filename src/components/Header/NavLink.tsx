'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type FC, type ReactNode } from 'react'

interface NavLinkProps {
  href: string
  children: ReactNode
}

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname()
  return (
    <Link
      className={`
      ${pathname === href ? 'bg-hover text-black' : 'hover:bg-hover hover:text-black duration-300 transition-colors'}
      py-2 md:px-4 lg:px-8 text-lg w-full md:w-auto text-center`}
      href={href}
    >
      {children}
    </Link>
  )
}

export default NavLink
