import { NextResponse } from 'next/server'
import { config, mapNewsEntryAttributes } from '../../config'
import { type WithSlugParam } from '@/interfaces/api'
import { type NewsResponse } from '@/interfaces/news'

export async function GET (request: Request, { params }: WithSlugParam): Promise<NextResponse> {
  const { slug } = params
  let news: any = {}
  try {
    const response = await fetch(`${config.api.baseUrl}/spaces/${config.contentful.spaceId}/environments/${config.contentful.environment}/entries?content_type=news&fields.slug=${slug}`, {
      headers: {
        Authorization: `Bearer ${config.contentful.deliveryToken}`
      },
      cache: 'no-store'
    })

    const data: NewsResponse = await response.json()

    news = mapNewsEntryAttributes(data)

    return NextResponse.json(news)
  } catch (error) {
    console.log(error)
    return NextResponse.json(news)
  }
}
