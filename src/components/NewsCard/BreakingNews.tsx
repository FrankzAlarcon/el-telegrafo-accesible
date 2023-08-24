import Link from 'next/link'
import React, { type FC } from 'react'

interface BreakingNewsProps {
  title: string
  hour: string
  href: string
}

const BreakingNews: FC<BreakingNewsProps> = ({ hour, title, href }) => {
  return (
    <Link href={href}>
      <div className='flex gap-4 mb-4 pb-2 border-b-2 border-dashed items-center md:w-10/12 md:mx-auto lg:w-full'>
        <p className='text-2xl font-bold'>{hour}</p>
        <p className='hover:text-primary duration-300'>{title}</p>
      </div>
    </Link>
  )
}

export default BreakingNews
