export type Woman = {
  id: string
  title: string
  description: string
  slug: string
  order: number
  metadata?: {
    birth?: string
    death?: string
    nationality?: string
    image?: {
      url: string
    }
  }
}

