'use client'
import { useMode } from '@/hooks/useMode'
import React, { type FC } from 'react'

interface TitleProps {
  children: React.ReactNode
  className?: string
  as?: string
}

const Title: FC<TitleProps> = ({ children, className, as = 'h3' }) => {
  const { darkMode } = useMode()

  switch (as) {
    case 'h1':
      return (
        <h1 className={`text-2xl font-bold py-4 ${darkMode ? 'text-secondary' : 'text-primary'} ${className}`}>{children}</h1>
      )
    case 'h2':
      return (
        <h2 className={`text-2xl font-bold py-4 ${darkMode ? 'text-secondary' : 'text-primary'} ${className}`}>{children}</h2>
      )
    case 'h3':
      return (
        <h3 className={`text-2xl font-bold py-4 ${darkMode ? 'text-secondary' : 'text-primary'} ${className}`}>{children}</h3>
      )
    case 'h4':
      return (
        <h4 className={`text-2xl font-bold py-4 ${darkMode ? 'text-secondary' : 'text-primary'} ${className}`}>{children}</h4>
      )
    default:
      return (
          <h3 className={`text-2xl font-bold py-4 ${darkMode ? 'text-secondary' : 'text-primary'} ${className}`}>{children}</h3>
      )
  }
}

export default Title
