import { type NewsLevel, type News } from '@/interfaces/news'

const baseUrl = process.env.API_URL

export const getAllNews = async (): Promise<News[]> => {
  const response = await fetch(`${baseUrl}/api/news`, { cache: 'no-store' })
  const data: News[] = await response.json()
  return data
}

export const getNewsBySearch = async (search: string): Promise<News[]> => {
  const response = await getAllNews()

  const data: News[] = response.filter((news) => {
    return news.title.toLowerCase().includes(search.toLowerCase())
  })

  return data
}

export const getNewsBySlug = async (slug: string): Promise<News> => {
  const response = await fetch(`${baseUrl}/api/news/${slug}`, { cache: 'no-store' })
  const data: News = await response.json()
  return data
}

export const getNewsByLevel = async (level: NewsLevel, withPopular = true, limit = 10): Promise<News[]> => {
  let url = `${baseUrl}/api/news/level/${level}?limit=${limit}`

  if (!withPopular) {
    url = `${url}&with_popular=false`
  }

  const response = await fetch(url, { cache: 'no-store' })
  const data: News[] = await response.json()
  return data
}

export const getPoularNews = async (): Promise<News[]> => {
  const response = await fetch(`${baseUrl}/api/news/popular`, { cache: 'no-store' })
  const data: News[] = await response.json()
  return data
}
