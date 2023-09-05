import { getNewsByLevel } from '@/services/news.service'
import React, { type FC } from 'react'
import GeneralNew from '@/components/NewsCard/GerneralNew'
import Title from '@/components/Title'

export const dynamic = 'force-dynamic'

const NationalNewsPage: FC<any> = async () => {
  const nationalNews = await getNewsByLevel('Nacionales')
  return (
    <div className='lg:flex lg:gap-8 pb-4 md:px-10 px-3 '>
      <section>
      <Title as='h1'>NACIONALES</Title>
      <div className='grid md:grid-cols-3 gap-y-5 grid-cols-1'>
        {nationalNews.map((news) => (
          <GeneralNew
            key={news.id}
            title={news.title}
            alt={news.image.description}
            date={news.publicationDate}
            image={news.image.url}
            href={`/noticia/${news.slug}`}
            description={news.description}
          />
        ))
        }
      </div>
      </section>
    </div>
  )
}

export default NationalNewsPage
