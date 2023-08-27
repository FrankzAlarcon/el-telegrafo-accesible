import { type NewsLevel, type News } from '@/interfaces/news'

const baseUrl = 'http://localhost:3000'

export const getAllNews = async (): Promise<News[]> => {
  const response = await fetch(`${baseUrl}/api/news`)
  const data: News[] = await response.json()
  return data
}

export const getNewsBySlug = async (slug: string): Promise<News> => {
  const response = await fetch(`${baseUrl}/api/news/${slug}`)
  const data: News = await response.json()
  return data
}

export const getNewsByLevel = async (level: NewsLevel, withPopular = true, limit = 10): Promise<News[]> => {
  let url = `${baseUrl}/api/news/level/${level}?limit=${limit}`

  if (!withPopular) {
    url = `${url}&with_popular=false`
  }

  const response = await fetch(url)
  const data: News[] = await response.json()
  return data
}

export const getPoularNews = async (): Promise<News[]> => {
  const response = await fetch(`${baseUrl}/api/news/popular`)
  const data: News[] = await response.json()
  return data
}
