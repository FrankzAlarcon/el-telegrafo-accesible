import Image from 'next/image'
import React from 'react'

const Searcher = (): JSX.Element => {
  return (
    <div className='py-4 flex px-2 justify-center gap-2'>
      <label
        htmlFor="searcher"
        className='border-2 rounded-md flex items-center gap-2 px-2 w-full md:w-72 lg:w-1/2'
      >
        <Image
          src="/assets/svgs/search.svg"
          alt="Buscar Noticias"
          className='w-9 h-9 fill-primary'
          width={36}
          height={36}
        />
        <input
          type="text"
          id="searcher"
          placeholder="Ingresa una título de una noticia"
          className='bg-transparent py-2 px-1 focus:outline-none active:outline-none outline:none w-full'
        />
      </label>
      <button
        type='button'
        className='bg-primary hover:bg-hover duration-300 text-white rounded-md px-4 py-2 uppercase'
      >Buscar</button>
    </div>
  )
}

export default Searcher
