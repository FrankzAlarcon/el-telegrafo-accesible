// import Image from 'next/image'

import BreakingNews from '@/components/NewsCard/BreakingNews'
import LinearCard from '@/components/NewsCard/LinearCard'
import SquareCard from '@/components/NewsCard/SquareCard'
import Title from '@/components/Title'
import { breakingNews } from '@/helpers/news'
import { getNewsByLevel, getPoularNews } from '@/services/news.service'

export const dynamic = 'force-dynamic'

export default async function Home (): Promise<JSX.Element> {
  const popularNews = await getPoularNews()
  const nationalNews = await getNewsByLevel('Nacionales', false, 4)
  const mainNewsIndex = popularNews.findIndex((news) => news.title === 'Ecuador se une al Acuerdo para la exploración aeroespacial')

  const mainNews = popularNews.splice(mainNewsIndex, 1)[0]

  return (
    <div className='p-2 py-2 lg:px-4'>
      <section className="lg:grid lg:grid-cols-5 lg:gap-2">
        <div className='lg:col-span-3'>
          <SquareCard
            rounded
            level={mainNews.level}
            timeReading={mainNews.readingTime}
            title={mainNews.title}
            image={mainNews.image.url}
            alt={mainNews.image.description}
            href={`/noticia/${mainNews.slug}`}
            h1
          />
        </div>
        <div className='lg:col-span-2 flex flex-col gap-y-2'>
          {
            popularNews.map((news) => (
              <LinearCard
                key={news.id}
                title={news.title}
                description={news.description}
                level={news.level}
                timeReading={news.readingTime}
                image={news.image.url}
                alt={news.image.description}
                href={`/noticia/${news.slug}`}
                h2
              />
            ))
          }
        </div>
      </section>
      <div className='lg:flex lg:gap-8 pb-4'>
        <section>
          <Title>Noticias Nacionales</Title>
          <div className='grid md:grid-cols-2 gap-y-4 md:gap-x-8'>
            {
              nationalNews.map((news) => (
                <SquareCard
                  key={news.title}
                  title={news.title}
                  level={news.level}
                  timeReading={news.readingTime}
                  image={news.image.url}
                  alt={news.image.description}
                  small
                  href={`/noticia/${news.slug}`}
                />
              ))
            }
          </div>
        </section>
        <section>
        <Title>Última hora</Title>
        <div>
          {
            breakingNews.map((news) => (
              <BreakingNews
                key={news.title}
                hour={news.hour}
                title={news.title}
                href={`/noticia/${news.slug}`}
              />
            ))
          }
        </div>
        </section>
      </div>
    </div>
  )
}
