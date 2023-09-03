import Title from '@/components/Title'
import Transcriptor from '@/components/Transcriptor'
import React, { type FC } from 'react'

const EcuadorTVPage: FC<any> = () => {
  return (
    <>
      <Title className='px-2'>Ecuador TV</Title>
      <div className='flex flex-col gap-2 lg:flex-row'>
        <iframe className=' p-2 w-full min-h-[200px] xs:min-h-[320px] sm:min-h-[420px] lg:h-[420px]' src="https://www.youtube.com/embed/oxJNXjwYyIA?start=81&cc_load_policy=1" title="Ecuador TV Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div className='p-2'>
          <Title className='px-2'>Transcripción</Title>
          <Transcriptor />
        </div>
      </div>
    </>
  )
}

export default EcuadorTVPage
