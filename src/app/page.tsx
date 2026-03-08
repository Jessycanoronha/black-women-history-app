import { getWomen } from "@/features/women/services/womenApi"
import { Woman } from "@/features/women/types/woman"

export default async function Home() {
  const women: Woman[] = await getWomen()

  return (
    <main>
      <h1>Black Women in History</h1>

      {women.map((woman) => (
        <div key={woman.slug}>{woman.title}</div>
      ))}
    </main>
  )
}
