import Title from '@/components/Title'
import Transcriptor from '@/components/Transcriptor'
import React, { type FC } from 'react'

export const dynamic = 'force-dynamic'

const EcuadorTVPage: FC<any> = () => {
  return (
    <>
      <Title as='h1' className='px-2'>Ecuador TV</Title>
      <div className='flex flex-col gap-2 lg:flex-row'>
        <iframe
          lang='es-419'
          className=' p-2 w-full min-h-[200px] xs:min-h-[320px] sm:min-h-[420px] lg:h-[420px]'
          src="https://www.youtube.com/embed/oxJNXjwYyIA?start=81&cc_load_policy=1&cc_lang_pref=es&hl=es"
          title="Ecuador TV Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          aria-label='Video de Ecuador TV'
        ></iframe>
        <div className='p-2'>
          <Title as='h2' className='px-2'>Transcripción</Title>
          <Transcriptor />
        </div>
      </div>
    </>
  )
}

export default EcuadorTVPage
