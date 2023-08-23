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
      className={`${pathname === href ? 'bg-hover' : 'hover:bg-hover duration-300 transition-colors'} py-2 px-4 text-lg`}
      href={href}
    >
      {children}
    </Link>
  )
}

export default NavLink
