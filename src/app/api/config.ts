import { type News, type NewsResponse } from '@/interfaces/news'

export const config = {
  api: {
    baseUrl: 'https://cdn.contentful.com'
  },
  contentful: {
    spaceId: process.env.CONTENFUL_SPACE_ID,
    environment: process.env.CONTENFUL_ENVIRONMENT,
    deliveryToken: process.env.CONTENFUL_DELIVERY_TOKEN
  }
}

export const mapNewsAttributes = (data: NewsResponse): News[] => {
  if (data === null) return []
  return data.items.map((item) => {
    let asset: any = {
      fields: {
        file: {
          url: ''
        },
        description: ''
      }
    }

    const assetData = data.includes.Asset.find((asset) => asset.sys.id === item.fields.image.sys.id)

    if (assetData !== null || assetData !== undefined) {
      asset = assetData
    }

    return ({
      id: item.sys.id,
      title: item.fields.title,
      description: item.fields.description,
      level: item.fields.level,
      readingTime: item.fields.readingTime,
      image: {
        url: `https:${asset.fields.file.url}`,
        description: asset.fields.description
      },
      slug: item.fields.slug,
      publicationDate: item.fields.publicationDate,
      text: item.fields.text
    })
  })
}

export const mapNewsEntryAttributes = (data: NewsResponse): News => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  if (data === null) return {} as News
  return {
    title: data.items[0].fields.title,
    slug: data.items[0].fields.slug,
    description: data.items[0].fields.description,
    id: data.items[0].sys.id,
    level: data.items[0].fields.level,
    publicationDate: data.items[0].fields.publicationDate,
    readingTime: data.items[0].fields.readingTime,
    image: {
      url: `https:${data.includes.Asset[0].fields.file.url}`,
      description: data.includes.Asset[0].fields.description
    },
    text: data.items[0].fields.text
  }
}
