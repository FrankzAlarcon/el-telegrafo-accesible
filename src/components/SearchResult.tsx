'use client'
import { useMode } from '@/hooks/useMode'
import React from 'react'
import LinearCard from './NewsCard/LinearCard'

const SearchResult = (): JSX.Element => {
  const { searchResult } = useMode()
  return (
    <div className='md:w-3/4 md:mx-auto space-x-2 pb-4 md:pb-10'>
      {
        searchResult !== null &&
          (
            searchResult.length > 0
              ? (
                  searchResult.map((news) => (
                  <LinearCard
                    key={news.title}
                    title={news.title}
                    description={news.description}
                    alt={news.image.description}
                    image={news.image.url}
                    level={news.level}
                    timeReading={news.readingTime}
                    href={`/noticia/${news.slug}`}
                  />
                  ))
                )
              : (
                  <div className='flex justify-center items-center'>
                    <p className='text-2xl font-bold'>No se encontraron resultados</p>
                  </div>
                )
          )
          }
    </div>
  )
}

export default SearchResult
