import { config, mapNewsAttributes } from '@/app/api/config'
import { type WithLevelParam } from '@/interfaces/api'
import { type News, type NewsResponse } from '@/interfaces/news'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET (request: Request, { params }: WithLevelParam): Promise<NextResponse> {
  const { level } = params
  // get the limit query param
  const { searchParams } = new URL(request.url)
  const limit = searchParams.get('limit') ?? '10'
  const withPopular = searchParams.get('with_popular') ?? 'true'

  let url = `${config.api.baseUrl}/spaces/${config.contentful.spaceId}/environments/${config.contentful.environment}/entries?content_type=news&fields.level=${level}&limit=${limit}`
  if (withPopular === 'false') {
    url = `${url}&fields.isPopular=false`
  }
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
