export type HeroImage = {
  id: string
  url: string
  alt: string
  mimeType: 'video/mp4' | 'image/jpeg' | 'image/png'
  width: number
  height: number
}

export type Page = {
  title: string
  slug: string
  publishedAt: string
  updatedAt: string
  heroImage: HeroImage
  metaDescription: string
  keywords: string
  body: {
    html: string
  }
}

export type Pages = {
  pages: Page[]
}
