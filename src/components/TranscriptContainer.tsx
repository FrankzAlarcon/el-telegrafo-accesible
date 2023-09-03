'use client'
import { useMode } from '@/hooks/useMode'
import { type FC, type ReactNode } from 'react'

interface TranscriptTextProps {
  children: ReactNode
}

const TranscriptContainer: FC<TranscriptTextProps> = ({ children }) => {
  const { darkMode } = useMode()
  return (
    <div className={`p-2  max-h-[420px] overflow-scroll ${darkMode ? 'bg-transparent' : 'bg-gray-200'}`}>{children}</div>
  )
}

export default TranscriptContainer
