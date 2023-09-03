'use client'
import { useDarkMode } from '@/hooks/useDarkMode'
import { createContext, type FC, type ReactNode, useMemo } from 'react'

export interface ModeContextProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export const ModeContext = createContext<ModeContextProps | null>(null)

interface ModeProviderProps {
  children: ReactNode
}

const ModeProvider: FC<ModeProviderProps> = ({ children }) => {
  const { darkMode, setDarkMode } = useDarkMode()

  const values = useMemo(() => ({
    darkMode,
    setDarkMode
  }), [darkMode, setDarkMode])

  return (
    <ModeContext.Provider value={values}>
      {children}
    </ModeContext.Provider>
  )
}

export default ModeProvider
