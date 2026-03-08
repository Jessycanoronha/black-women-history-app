import { Woman } from "../types/woman"

export interface WomenResponse {
  data: Woman[]
  page: number
  total: number
  totalPages: number
}

export async function getWomen(page = 1): Promise<WomenResponse> {
  const res = await fetch(`/api/women?page=${page}&limit=12`)

  if (!res.ok) {
    throw new Error("Failed to fetch women data")
  }

  return res.json()
}
