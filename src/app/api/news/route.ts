import { type News, type NewsResponse } from '@/interfaces/news'
import { NextResponse } from 'next/server'
import { config, mapNewsAttributes } from '../config'

export const dynamic = 'force-dynamic'

export async function GET (): Promise<NextResponse> {
  const url = `${config.api.baseUrl}/spaces/${config.contentful.spaceId}/environments/${config.contentful.environment}/entries`
  let news: News[] = []
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${config.contentful.deliveryToken}`
      },
      cache: 'no-store'
    })
    const data: NewsResponse = await response.json()

    news = mapNewsAttributes(data)
    return NextResponse.json(news)
  } catch (error) {
    console.log(error)
    return NextResponse.json(news)
  }
}
