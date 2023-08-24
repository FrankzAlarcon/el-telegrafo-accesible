import { type NewsLevel } from '@/interfaces/news'
import Image from 'next/image'
import Link from 'next/link'
import React, { type FC } from 'react'

interface SquareCardProps {
  title: string
  level: NewsLevel
  timeReading: string
  rounded?: boolean
  small?: boolean
  image: string
  alt: string
  href: string
}

const SquareCard: FC<SquareCardProps> = ({
  title,
  level,
  timeReading,
  rounded = false,
  small = false,
  alt,
  image,
  href
}) => {
  return (
    <Link href={href}>
      <article className='p-2'>
        <Image
          src={image}
          alt={alt}
          width={200}
          height={200}
          className={`${rounded ? 'rounded-lg' : ''} w-full max-h-[450px]`}
        />
        <div>
          <h3 className={`${small ? 'text-base' : 'text-2xl'} font-bold`}>{title}</h3>
          <div className='pt-1'>
            <span className='text-red-tel'>{level}</span> · <span className='text-terciary'>{timeReading}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default SquareCard
