import { type NewsLevel } from "@/interfaces/news"
import Link from "next/link"
import React, { type FC } from 'react'
import Image from 'next/image'
interface GeneralNewProps {
  title: string
  alt : string
  image : string
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
  return (
    <Link href={href}>
      <article className="h-[420px] px-2 border-b-2 ">
        <Image
          src={image}
          alt={alt}
          width={200}
          height={200}
          className="w-full max-h[450px] mb-2"
        />
        <div className="flex flex-col justify-between h-[150px]">
          <h3 className="text-2x1 font-bold" >{title}</h3>
          <p className="text-base text-gray-600">{description}</p>
          <span className="text-base text-gray-950">{date}</span>
        </div>
      </article>
    </Link>
  )
}
export default GeneralNew