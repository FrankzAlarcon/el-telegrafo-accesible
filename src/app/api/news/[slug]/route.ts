import { NextResponse } from 'next/server'
import { config, mapNewsEntryAttributes } from '../../config'
import { type WithSlugParam } from '@/interfaces/api'
import { type News, type NewsResponse } from '@/interfaces/news'

export async function GET (request: Request, { params }: WithSlugParam): Promise<NextResponse> {
  const { slug } = params

  const response = await fetch(`${config.api.baseUrl}/spaces/${config.contentful.spaceId}/environments/${config.contentful.environment}/entries?content_type=news&fields.slug=${slug}`, {
    headers: {
      Authorization: `Bearer ${config.contentful.deliveryToken}`
    },
    cache: 'no-cache'
  })

  const data: NewsResponse = await response.json()

  const news: News = mapNewsEntryAttributes(data)

  return NextResponse.json(news)
}
