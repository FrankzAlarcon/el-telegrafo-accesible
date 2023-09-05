import SearchResult from '@/components/SearchResult'
import Searcher from '@/components/Searcher'
import Title from '@/components/Title'
import React, { type FC } from 'react'

export const dynamic = 'force-dynamic'

const SearchPage: FC<any> = () => {
  return (
    <div className='min-h-[40vh] pt-8 md:min-h-[50vh]'>
      <Title as='h1' className='text-center uppercase'>Buscador</Title>
      <Searcher />
      <SearchResult />
    </div>
  )
}

export default SearchPage
