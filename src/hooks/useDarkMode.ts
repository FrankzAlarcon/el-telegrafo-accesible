'use client'
import { useState } from 'react'

interface UseDarkModeProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export const useDarkMode = (): UseDarkModeProps => {
  const [darkMode, setDarkMode] = useState(() => {
    const item = window.localStorage.getItem('darkMode')

    if (item === null) {
      window.localStorage.setItem('darkMode', 'false')
      return false
    }
    return JSON.parse(item)
  })

  const setDarkModeToLocalStorage = (value: boolean): void => {
    window.localStorage.setItem('darkMode', JSON.stringify(value))
    setDarkMode(value)
  }

  return {
    darkMode,
    setDarkMode: setDarkModeToLocalStorage
  }
}
