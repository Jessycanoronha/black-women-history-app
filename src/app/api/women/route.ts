import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get("page") || 1)
  const limit = Number(searchParams.get("limit") || 12)

  const res = await fetch("https://theblackwomanhistory.firebaseio.com/.json")
  const data = await res.json()

  const women = (data.content || []).sort((a: any, b: any) => {
    const aHasImage = a.image || a.thumbnail ? 1 : 0
    const bHasImage = b.image || b.thumbnail ? 1 : 0
    if (aHasImage !== bHasImage) return bHasImage - aHasImage
    return a.order - b.order
  })

  const expanded = Array(5)
    .fill(women)
    .flat()
    .map((w, i) => ({
      ...w,
      id: `${w.id}-${i}`,
      image:
        w.metadata?.image?.url || w?.image ||
        `https://ui-avatars.com/api/?name=${encodeURIComponent(
          w.title ?? "Woman"
        )}&background=6A1B9A&color=fff`,
    }))

  const start = (page - 1) * limit
  const end = start + limit
  const paginated = expanded.slice(start, end)

  return NextResponse.json({
    data: paginated,
    page,
    total: expanded.length,
    totalPages: Math.ceil(expanded.length / limit),
  })
}
