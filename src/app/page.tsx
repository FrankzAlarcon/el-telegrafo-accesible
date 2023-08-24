// import Image from 'next/image'

import BreakingNews from '@/components/NewsCard/BreakingNews'
import LinearCard from '@/components/NewsCard/LinearCard'
import SquareCard from '@/components/NewsCard/SquareCard'
import { breakingNews, newsWithDescription, newsWithoutDescription } from '@/helpers/news'

export default function Home (): JSX.Element {
  return (
    <div className='p-2 py-2 lg:px-4'>
      <section className="lg:grid lg:grid-cols-5">
        <div className='lg:col-span-3'>
          <SquareCard
            rounded
            level="Nacionales"
            timeReading="3 mins de lectura"
            title="Ecuador se une al Acuerdo para la exploración aeroespacial"
            image="/assets/imgs/noticia_destacada.jpg"
            alt={'Noticia: Ecuador se une al Acuerdo para la exploración aeroespacial'}
            href="/noticia"
          />
        </div>
        <div className='lg:col-span-2'>
          {
            newsWithDescription.map((news) => (
              <LinearCard
                key={news.title}
                title={news.title}
                description={news.description}
                level={news.level}
                timeReading={news.readingTime}
                image={news.image}
                alt={`Noticia: ${news.title}`}
                href="/noticia"
              />
            ))
          }
        </div>
      </section>
      <div className='lg:flex lg:gap-8 pb-4'>
        <section>
          <h3 className='text-2xl text-primary font-bold py-4'>Noticias Nacionales</h3>
          <div className='md:grid md:grid-cols-2'>
            {
              newsWithoutDescription.map((news) => (
                <SquareCard
                  key={news.title}
                  title={news.title}
                  level={news.level}
                  timeReading={news.readingTime}
                  image={news.image}
                  alt={`Noticia: ${news.title}`}
                  small
                  href="/noticia"
                />
              ))
            }
          </div>
        </section>
        <section>
        <h3 className='text-2xl text-primary font-bold py-4'>Última hora</h3>
        <div>
          {
            breakingNews.map((news) => (
              <BreakingNews
                key={news.title}
                hour={news.hour}
                title={news.title}
                href="/noticia"
              />
            ))
          }
        </div>
        </section>
      </div>
    </div>
  )
}
