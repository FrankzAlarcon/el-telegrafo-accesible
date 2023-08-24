// import Image from 'next/image'

import LinearCard from '@/components/NewsCard/LinearCard'
import SquareCard from '@/components/NewsCard/SquareCard'
import { newsWithDescription } from '@/helpers/news'

export default function Home (): JSX.Element {
  return (
    <div className="p-2 py-4 lg:px-4 lg:grid lg:grid-cols-5">
      <div className='lg:col-span-3'>
        <SquareCard rounded level="Nacionales" timeReading="3 mins de lectura" title="Ecuador se une al Acuerdo para la exploración aeroespacial" />
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
            />
          ))
        }
      </div>
    </div>
  )
}
