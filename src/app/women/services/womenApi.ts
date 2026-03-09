import { Woman } from "../types/woman"

export interface WomenResponse {
  data: Woman[]
  page: number
  total: number
  totalPages: number
}

const BFF_BASE_URL = process.env.NEXT_PUBLIC_BFF_URL
if (!BFF_BASE_URL) throw new Error("NEXT_PUBLIC_BFF_URL is not defined")

const CONTENT_BASE_URL = process.env.NEXT_PUBLIC_CONTENT_URL
if (!CONTENT_BASE_URL) throw new Error("NEXT_PUBLIC_CONTENT_URL is not defined")


/*
@TODO Try to connect with BFF and deploy
export async function getWomen(page = 1, limit = 12): Promise<WomenResponse> {
 const url = `${BFF_BASE_URL}/api/women?page=${page}&limit=${limit}`

 const res = await fetch(url)
 if (!res.ok) {
   const errData = await res.json().catch(() => null)
   throw new Error(errData?.error || "Failed to fetch women data from BFF")
 }
 return res.json()
 */

export async function getWomen(page = 1, limit = 12) {
  const res = await fetch(`${CONTENT_BASE_URL}/.json`);
  if (!res.ok) throw new Error("Failed to fetch women data");

  const dataRaw = await res.json();

  const data: Woman[] = dataRaw ? Object.values(dataRaw.content) : [];

  const start = (page - 1) * limit;
  const paginated = data.slice(start, start + limit);

  return {
    data: paginated,
    page,
    total: data.length,
    totalPages: Math.ceil(data.length / limit),
  };
}

export async function getWomanDetail(order: number): Promise<Woman> {
  const url = `${CONTENT_BASE_URL}/content/${order}.json`

  const res = await fetch(url)
  if (!res.ok) {
    const errData = await res.json().catch(() => null)
    throw new Error(errData?.error || "Failed to fetch woman detail")
  }

  return res.json()
}
