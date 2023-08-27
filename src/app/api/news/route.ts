import { type News, type NewsResponse } from '@/interfaces/news'
import { NextResponse } from 'next/server'
import { config, mapNewsAttributes } from '../config'

export async function GET (): Promise<NextResponse> {
  const response = await fetch(`${config.api.baseUrl}/spaces/${config.contentful.spaceId}/environments/${config.contentful.environment}/entries`, {
    headers: {
      Authorization: `Bearer ${config.contentful.deliveryToken}`
    }
  })
  const data: NewsResponse = await response.json()

  const news: News[] = mapNewsAttributes(data)
  return NextResponse.json(news)
}
