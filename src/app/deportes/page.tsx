import React, { type FC } from 'react'
import { getNewsByLevel } from '@/services/news.service'
import GeneralNew from '@/components/NewsCard/GerneralNew'

export const dynamic = 'force-dynamic'

const SportsNewsPage: FC<any> = async () => {
  const sportsNews = await getNewsByLevel('Deportes')

  return (
    <div className='lg:flex lg:gap-8 pb-4 md:px-10 px-3'>
      <section>
      <h3 className='text-2xl text-primary font-bold py-4'>DEPORTES</h3>
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
