'use client'
import { useMode } from '@/hooks/useMode'
import { getNewsBySearch } from '@/services/news.service'
import Image from 'next/image'
import React, { useState } from 'react'

const Searcher = (): JSX.Element => {
  const { darkMode, setSearchResult } = useMode()
  const [input, setInput] = useState<string>('')

  const handleSearchNews = async (): Promise<void> => {
    const res = await getNewsBySearch(input)
    setSearchResult(res)
  }

  return (
    <div className='py-4 flex px-2 justify-center gap-2'>
      <label
        htmlFor="searcher"
        className='border-2 rounded-md flex items-center gap-2 px-2 w-full md:w-72 lg:w-1/2'
      >
        <Image
          src={`/assets/svgs/${darkMode ? 'search-icon' : 'search'}.svg`}
          alt="Buscar Noticias"
          className='w-9 h-9'
          width={36}
          height={36}
        />
        <input
          type="text"
          id="searcher"
          // placeholder="Ingresa una título de una noticia"
          className={`bg-transparent py-2 px-1 focus:outline-none active:outline-none outline:none w-full ${darkMode ? 'placeholder:text-white' : ''}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete='off'
          name='searcher'
          role='search'
        />
      </label>
      <button
        type='button'
        onClick={handleSearchNews}
        className={`${darkMode ? 'bg-secondary hover:bg-yellow-400' : 'bg-primary hover:bg-hover'} duration-300 text-white rounded-md px-4 py-2 uppercase`}
      >Buscar</button>
    </div>
  )
}

export default Searcher
