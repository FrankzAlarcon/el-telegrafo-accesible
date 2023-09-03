'use client'
import { useMode } from '@/hooks/useMode'
import { type NewsLevel } from '@/interfaces/news'
import Image from 'next/image'
import Link from 'next/link'
import React, { type FC } from 'react'

interface LinearCardProps {
  title: string
  level: NewsLevel
  timeReading: string
  description: string
  image: string
  alt: string
  href: string
  big?: boolean
}

const LinearCard: FC<LinearCardProps> = ({
  title,
  description,
  level,
  timeReading,
  image,
  alt,
  href,
  big = false
}) => {
  const { darkMode } = useMode()

  return (
    <Link href={href}>
      <article className={`rounded-md sm:flex sm:gap-4 sm:items-center shadow-md px-2 py-1 ${darkMode ? 'bg-card-color' : 'bg-white'}`}>
        <div>
          <Image
            src={image}
            alt={alt}
            width={140}
            height={130}
            className='mx-auto rounded-md w-auto h-auto max-w-[190px] max-h-[130px]'
          />
        </div>
        <div>
          <h3 className='font-bold'>{title}</h3>
          <div>
            <p className={`text-terciary font-light text-sm ${darkMode ? 'text-white' : ''}`}>{description}</p>
            <div className='pt-1'>
            <span className={`${darkMode ? 'text-primary' : 'text-red-tel'}`}>{level}</span> · <span className={`text-terciary ${darkMode ? 'text-white' : ''}`}>{timeReading}</span>
          </div>
        </div>
        </div>
      </article>
    </Link>
  )
}

export default LinearCard
