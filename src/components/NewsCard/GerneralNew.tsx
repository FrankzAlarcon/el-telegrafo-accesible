'use client'
import Link from 'next/link'
import React, { type FC } from 'react'
import Image from 'next/image'
import { useMode } from '@/hooks/useMode'
interface GeneralNewProps {
  title: string
  alt: string
  image: string
  href: string
  date: string
  description: string
}

const GeneralNew: FC<GeneralNewProps> = ({
  title,
  alt,
  image,
  href,
  date,
  description
}) => {
  const { darkMode } = useMode()
  return (
    <Link href={href}>
      <article className="px-2 border-b-2 ">
        <Image
          src={image}
          alt={alt}
          width={200}
          height={200}
          className="w-full max-h[450px] mb-2"
        />
        <div className="flex flex-col pb-2 md:pb-4 gap-2 md:justify-between md:min-h-[150px] lg:h-[200px]">
          <h3 className="text-2x1 font-bold" >{title}</h3>
          <p className={`text-base text-gray-600 ${darkMode ? 'text-white' : ''}`}>{description}</p>
          <span className={`text-base text-gray-950 ${darkMode ? 'text-secondary' : ''}`}>{date}</span>
        </div>
      </article>
    </Link>
  )
}
export default GeneralNew
