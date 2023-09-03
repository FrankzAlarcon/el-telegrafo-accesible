'use client'
import { useMode } from '@/hooks/useMode'
import React, { type FC } from 'react'

interface TitleProps {
  children: React.ReactNode
  className?: string
}

const Title: FC<TitleProps> = ({ children, className }) => {
  const { darkMode } = useMode()
  return (
    <h3 className={`text-2xl font-bold py-4 ${darkMode ? 'text-secondary' : 'text-primary'} ${className}`}>{children}</h3>
  )
}

export default Title
