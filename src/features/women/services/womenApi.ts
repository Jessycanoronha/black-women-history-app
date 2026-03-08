import { Woman } from "../types/woman"
import { WomenApiResponse } from "../types/womanApiResponse"

export async function getWomen(): Promise<Woman[]> {
  const res = await fetch(
    "https://theblackwomanhistory.firebaseio.com/.json",
    {
      next: { revalidate: 3600 },
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch women data")
  }

  const data: WomenApiResponse = await res.json()

  return data.content.sort((a, b) => a.order - b.order)
}
