export interface WomanMetadata {
  image?: { url?: string }
  birthdate?: string
  deathdate?: string
  country?: string
  credits?: string
}

export interface Woman {
  id: string
  order: number
  slug: string
  title: string
  description: string
  metadata?: WomanMetadata
}

