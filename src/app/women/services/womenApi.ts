import { Woman } from "../types/woman"

export interface WomenResponse {
  data: Woman[]
  page: number
  total: number
  totalPages: number
}

const BFF_BASE_URL = process.env.NEXT_PUBLIC_BFF_URL || "http://localhost:3000"

export async function getWomen(page = 1, limit = 12): Promise<WomenResponse> {
  const url = `${BFF_BASE_URL}/api/women?page=${page}&limit=${limit}`

  const res = await fetch(url)
  if (!res.ok) {
    const errData = await res.json().catch(() => null)
    throw new Error(errData?.error || "Failed to fetch women data from BFF")
  }
  return res.json()
}

const CONTENT_BASE_URL =
  typeof window !== "undefined"
    ? process.env.NEXT_PUBLIC_CONTENT_URL
    : process.env.NEXT_PUBLIC_CONTENT_URL || ""

export async function getWomanDetail(order: number): Promise<Woman> {
  const res = await fetch(
    `${CONTENT_BASE_URL}/content/${order}.json`
  );

  if (!res.ok) {
    const errData = await res.json().catch(() => null)
    throw new Error(errData?.error || "Failed to fetch woman detail")
  }

  return res.json()
}
