import LogoIcon from '@/components/LogoIcon'
import RichText from '@/components/RichText'
import { shareIcons } from '@/helpers/icons'
import { getNewsBySlug } from '@/services/news.service'
import Image from 'next/image'
import React, { type FC } from 'react'

interface NewsEntryPageProps {
  params: {
    slug: string
  }
}

const NewsEntryPage: FC<NewsEntryPageProps> = async ({ params }) => {
  const { slug } = params

  const news = await getNewsBySlug(slug)

  return (
    <div className='p-2'>
      <h1 className='text-2xl font-bold'>{news.title}</h1>
      <div>
        <Image src={news.image.url} width={320} height={320} alt={news.image.description}/>
        <p className='text-secondary text-lg'>{news.publicationDate}</p>
      </div>
      <div className='py-4'>
        <RichText content={news.text} />
      </div>
      <div className='flex gap-3 items-center'>
        <p className='text-secondary text-lg'>Comparte:</p>
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
  )
}

export default NewsEntryPage
