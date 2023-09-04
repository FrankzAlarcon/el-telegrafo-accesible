'use client'
import { useState } from 'react'

interface UseDarkModeProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export const useDarkMode = (): UseDarkModeProps => {
  if (typeof window === 'undefined') return { darkMode: false, setDarkMode: () => {} }
  const [darkMode, setDarkMode] = useState(() => {
    const item = localStorage.getItem('darkMode')

    if (item === null) {
      localStorage.setItem('darkMode', 'false')
      return false
    }
    return JSON.parse(item)
  })

  const setDarkModeToLocalStorage = (value: boolean): void => {
    localStorage.setItem('darkMode', JSON.stringify(value))
    setDarkMode(value)
  }

  return {
    darkMode,
    setDarkMode: setDarkModeToLocalStorage
  }
}
