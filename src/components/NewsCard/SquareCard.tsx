import { type NewsLevel } from '@/interfaces/news'
import Image from 'next/image'
import React, { type FC } from 'react'

interface SquareCardProps {
  title: string
  level: NewsLevel
  timeReading: string
  rounded?: boolean
}

const SquareCard: FC<SquareCardProps> = ({
  title,
  level,
  timeReading,
  rounded = false
}) => {
  return (
    <div className='p-2'>
      <Image
        src="/assets/imgs/noticia_destacada.jpg"
        alt='Noticia Destacada'
        width={200}
        height={200}
        className={`${rounded ? 'rounded-lg' : ''} w-full`}
      />
      <div>
        <h3 className='text-2xl font-bold'>{title}</h3>
        <div className='pt-1'>
          <span className='text-red-tel'>{level}</span> · <span className='text-terciary'>{timeReading}</span>
        </div>
      </div>
    </div>
  )
}

export default SquareCard
