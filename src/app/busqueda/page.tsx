import SearchResult from '@/components/SearchResult'
import Searcher from '@/components/Searcher'
import React, { type FC } from 'react'

export const dynamic = 'force-dynamic'

const SearchPage: FC<any> = () => {
  return (
    <div className='min-h-[40vh] pt-8 md:min-h-[50vh]'>
      <Searcher />
      <SearchResult />
    </div>
  )
}

export default SearchPage
