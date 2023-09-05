import LogoIcon from '@/components/LogoIcon'
import RichText from '@/components/RichText'
import Title from '@/components/Title'
// import Tweet from '@/components/Tweet'
import { shareIcons } from '@/helpers/icons'
import { getNewsByLevel, getNewsBySlug } from '@/services/news.service'
import Image from 'next/image'
import Link from 'next/link'
import React, { type FC } from 'react'

export const dynamic = 'force-dynamic'

interface NewsEntryPageProps {
  params: {
    slug: string
  }
}

const NewsEntryPage: FC<NewsEntryPageProps> = async ({ params }) => {
  const { slug } = params

  const news = await getNewsBySlug(slug)
  const { level } = news
  const relatedlNews = await getNewsByLevel(level, false, 4)
  return (
    <div className='p-2'>
      <h1 className='text-2xl font-bold py-4 lg:px-8'>{news.title}</h1>
      <div className='lg:grid lg:grid-cols-6 lg:gap-6'>
        <div className='lg:col-span-4'>
          <div className=''>
            <div className='lg:max-w-2xl lg:mx-auto'>
              <Image src={news.image.url} width={320} height={320} className='w-full' alt={news.image.description}/>
              <p className='text-yellow-700 text-lg pt-2 lg:pt-4'>{news.publicationDate}</p>
            </div>
            <div className='py-4 lg:px-8'>
              <RichText content={news.text} />
            </div>
          </div>
          <div className='flex gap-3 items-center border-b pb-2 lg:px-8'>
            <p className='text-yellow-700 text-lg'>Comparte:</p>
            <div className='flex gap-2 items-center'>
              {
                shareIcons.map((icon) => (
                  <LogoIcon
                    key={icon.href}
                    href={icon.href}
                    imageSrc={icon.imageSrc}
                    imageAlt={icon.imageAlt}
                  />
                ))
              }
            </div>
          </div>
        </div>
        <div className='lg:col-span-2'>
          <div className='py-4 border-b lg:pt-0'>
            <Title as='h2' className='lg:pt-0'>Noticias Relacionadas</Title>
            <div>
              {
                relatedlNews.map((news) => (
                  <Link key={news.id} href={`/noticia/${news.slug}`}>
                    <div className='flex gap-2 items-start'>
                      <Image src="/assets/svgs/list-item-circle.svg" alt='Viñeta de item de lista' width={12} height={12} className='pt-2'/>
                      <div className='pb-2'>
                        <p className='text-lg font-bold'>{news.title}</p>
                        <p className='font-light'>{news.description}</p>
                      </div>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
          {/* <div className='py-4 border-b'>
            <Title as='h2'>Redes Sociales</Title>
            <Tweet />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default NewsEntryPage
