import { useQuery } from "@tanstack/react-query"
import { getWomen } from "../services/womenApi"

export function useWomen(page: number) {
  return useQuery({
    queryKey: ["women", page],
    queryFn: () => getWomen(page),
    placeholderData: (prev) => prev
  })
}
