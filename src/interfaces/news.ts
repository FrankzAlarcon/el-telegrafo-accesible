export type NewsLevel = 'Nacionales' | 'Internacionales' | 'Deportes'

export interface NewsWithDescription {
  title: string
  description: string
  level: NewsLevel
  readingTime: string
  image: string
}
