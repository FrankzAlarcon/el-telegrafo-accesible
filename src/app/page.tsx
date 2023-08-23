// import Image from 'next/image'

import SquareCard from '@/components/NewsCard/SquareCard'

export default function Home (): JSX.Element {
  return (
    <main className="">
      <SquareCard rounded level="Nacionales" timeReading="3 mins de lectura" title="Ecuador se une al Acuerdo para la exploración aeroespacial" />
    </main>
  )
}
