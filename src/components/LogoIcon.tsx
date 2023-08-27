import Image from 'next/image'
import React, { type FC } from 'react'

interface LogoIconProps {
  href: string
  imageSrc: string
  imageAlt: string
  width?: number
  height?: number
  className?: string
  target?: string
}

const LogoIcon: FC<LogoIconProps> = ({
  href,
  imageAlt,
  imageSrc,
  className = '',
  target = '_blank',
  height = 30,
  width = 30
}) => {
  return (
    <a
      className={`hover:scale-110 duration-200 ${className}`}
      href={href}
      target={target}
    >
      <Image
        className='w-auto h-auto'
        src={imageSrc}
        alt={imageAlt}
        width={width}
        height={height}
      />
    </a>
  )
}

export default LogoIcon
