import { type NewsLevel } from '@/interfaces/news'
import Image from 'next/image'
import React, { type FC } from 'react'

interface LinearCardProps {
  title: string
  level: NewsLevel
  timeReading: string
  description: string
  image: string
  alt: string
}

const LinearCard: FC<LinearCardProps> = ({
  title,
  description,
  level,
  timeReading,
  image,
  alt
}) => {
  return (
    <div className='p-2 sm:flex sm:gap-4 sm:items-center'>
      <div>
        <Image
          src={image}
          alt={alt}
          width={140}
          height={130}
          className='mx-auto rounded-md max-w-[190px] max-h-[130px]'
        />
      </div>
      <div>
        <h3 className='font-bold'>{title}</h3>
        <p className='text-terciary font-light text-sm'>{description}</p>
        <div className='pt-1'>
        <span className='text-red-tel'>{level}</span> · <span className='text-terciary'>{timeReading}</span>
      </div>
      </div>
    </div>
  )
}

export default LinearCard
