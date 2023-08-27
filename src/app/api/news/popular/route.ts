import { NextResponse } from 'next/server'
import { config, mapNewsAttributes } from '../../config'
import { type News, type NewsResponse } from '@/interfaces/news'

export async function GET (): Promise<NextResponse> {
  const response = await fetch(`${config.api.baseUrl}/spaces/${config.contentful.spaceId}/environments/${config.contentful.environment}/entries?content_type=news&fields.isPopular=true&limit=5`, {
    headers: {
      Authorization: `Bearer ${config.contentful.deliveryToken}`
    }
  })

  const data: NewsResponse = await response.json()

  const news: News[] = mapNewsAttributes(data)

  return NextResponse.json(news)
}
