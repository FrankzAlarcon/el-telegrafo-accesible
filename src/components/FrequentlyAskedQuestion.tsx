'use client'
import React, { type FC, useState } from 'react'
import { useMode } from '@/hooks/useMode'
interface FrequentlyAskedQuestionProps {
  question: string
  answer: string
}

const FrequentlyAskedQuestion: FC<FrequentlyAskedQuestionProps> = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  const toggleAnswer = (): void => {
    setShowAnswer(!showAnswer)
  }

  const { darkMode } = useMode()

  return (
    <div className="py-4 px-6 flex flex-col w-full">
      <button
        type='button'
        className="cursor-pointer flex justify-between items-center font-bold  "
        onClick={toggleAnswer}
      >
        <p className="text-xl">{question}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transform ${showAnswer ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 ease-in-out`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            role='button'
            aria-label='Mostrar-Ocultar Respuesta'
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
      </button>
      {showAnswer && (
        <p className={`mt-2 text-base text-gray-800 ${darkMode ? 'text-white' : ''}`}>{answer}</p>
      )}
    </div>
  )
}

export default FrequentlyAskedQuestion
