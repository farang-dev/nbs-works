export interface Post {
  _id: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  author: {
    name: string
    slug: string
  }
  tags: {
    title: string
    slug: string
  }[]
  mainImage: SanityImage
  body: any // This will be Portable Text
}

export interface SanityImage {
  asset: {
    _ref: string
    _type: 'reference'
  }
}
