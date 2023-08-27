export type NewsLevel = 'Nacionales' | 'Internacionales' | 'Deportes'

export interface NewsWithDescription {
  title: string
  description: string
  level: NewsLevel
  readingTime: string
  image: string
}

export type NewsWithoutDescription = Omit<NewsWithDescription, 'description'>

export interface BreakingNews {
  title: string
  hour: string
}

interface NewsItem {
  sys: {
    id: string
  }
  fields: {
    title: string
    description: string
    level: NewsLevel
    readingTime: string
    image: {
      sys: {
        id: string
      }
    }
    slug: string
    publicationDate: string
    text: {
      content: {
        content: Array<{
          value: string
        }>
      }
    }
  }
}

export interface NewsResponse {
  sys: {
    type: string
  }
  total: number
  skip: number
  limit: number
  items: NewsItem[]
  includes: {
    Asset: Array<{
      sys: {
        id: string
      }
      fields: {
        title: string
        description: string
        file: {
          url: string
          fileName: string
        }
      }
    }>
  }
}

export interface News {
  id: string
  title: string
  description: string
  level: NewsLevel
  readingTime: string
  image: {
    url: string
    description: string
  }
  slug: string
  publicationDate: string
  text: unknown
}
