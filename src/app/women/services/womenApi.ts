import { Woman } from "../types/woman"

export interface WomenResponse {
  data: Woman[]
  page: number
  total: number
  totalPages: number
}

export async function getWomen(page = 1): Promise<WomenResponse> {
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
const res = await fetch(`${baseUrl}/api/women?page=${page}&limit=12`)
  if (!res.ok) {
    throw new Error("Failed to fetch women data")
  }

  return res.json()
}

export async function getWomanDetail(order: number): Promise<Woman> {
  const res = await fetch(
    `https://theblackwomanhistory.firebaseio.com/content/${order}.json`
  );

  if (!res.ok) {
    let errorMessage = "Failed to fetch woman detail";
    try {
      const errData = await res.json();
      errorMessage = errData?.error || errorMessage;
    } catch { }
    throw new Error(errorMessage);
  }

  const data: Woman = await res.json();
  return data;
}
