import { ModeContext, type ModeContextProps } from '@/context/ModeProvider'
import { useContext } from 'react'

export const useMode = (): ModeContextProps => {
  return useContext(ModeContext) as ModeContextProps
}
