'use client'
import { useDarkMode } from '@/hooks/useDarkMode'
import { type News } from '@/interfaces/news'
import { createContext, type FC, type ReactNode, useMemo, useState } from 'react'

export interface ModeContextProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
  searchResult: News[] | null
  setSearchResult: (searchResult: News[]) => void
}

export const ModeContext = createContext<ModeContextProps | null>(null)

interface ModeProviderProps {
  children: ReactNode
}

const ModeProvider: FC<ModeProviderProps> = ({ children }) => {
  const { darkMode, setDarkMode } = useDarkMode()
  const [searchResult, setSearchResult] = useState<News[] | null>(null)

  const values = useMemo(() => ({
    darkMode,
    setDarkMode,
    searchResult,
    setSearchResult
  }), [darkMode, setDarkMode, searchResult, setSearchResult])

  return (
    <ModeContext.Provider value={values}>
      {children}
    </ModeContext.Provider>
  )
}

export default ModeProvider
