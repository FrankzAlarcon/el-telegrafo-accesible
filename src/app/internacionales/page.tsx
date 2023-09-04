import { getNewsByLevel } from '@/services/news.service'
import React, { type FC } from 'react'
import GeneralNew from '@/components/NewsCard/GerneralNew'

const InternacionalesNewsPage: FC<any> = async () => {
  const internationalNews = await getNewsByLevel('Internacionales')

  return (
    <div className='lg:flex lg:gap-8 pb-4 md:px-10 px-3'>
      <section>
      <h3 className='text-2xl text-primary font-bold py-4'>INTERNACIONALES</h3>
      <div className='grid md:grid-cols-3 gap-y-5 grid-cols-1'>
        {internationalNews.map((news) => (
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

export default InternacionalesNewsPage
