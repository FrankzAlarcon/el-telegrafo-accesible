'use client'
import { useMode } from '@/hooks/useMode'
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
  const { darkMode } = useMode()
  return (
    <Link href={href}>
      <article className={`pb-2 ${darkMode && small ? 'bg-card-color' : ''}`}>
        <Image
          src={image}
          alt={alt}
          width={200}
          height={200}
          className={`${rounded ? 'rounded-lg' : ''} w-full max-h-[450px]`}
        />
        <div className='px-2'>
          <h3 className={`${small ? 'text-base' : 'text-2xl'} font-bold`}>{title}</h3>
          <div className='pt-1'>
            <span className={darkMode ? 'text-primary' : 'text-red-tel'}>{level}</span> · <span className={`${darkMode ? 'text-white' : 'text-terciary'}`}>{timeReading}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default SquareCard
