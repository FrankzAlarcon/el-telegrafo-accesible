import React, { type FC } from 'react'
import { getNewsByLevel } from '@/services/news.service'
import GeneralNew from '@/components/NewsCard/GerneralNew'
import Title from '@/components/Title'

export const dynamic = 'force-dynamic'

const SportsNewsPage: FC<any> = async () => {
  const sportsNews = await getNewsByLevel('Deportes')

  return (
    <div className='lg:flex lg:gap-8 pb-4 md:px-10 px-3'>
      <section>
      <Title as='h1'>DEPORTES</Title>
      <div className='grid md:grid-cols-3 gap-y-5 grid-cols-1'>
        {sportsNews.map((news) => (
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

export default SportsNewsPage
