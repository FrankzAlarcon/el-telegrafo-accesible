'use client'

import React, { type FC } from 'react'

interface ButtonProps {
  children: React.ReactNode
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button type='button'>
      {children}
    </button>
  )
}

export default Button
