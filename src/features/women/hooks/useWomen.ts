import { useQuery } from "@tanstack/react-query"
import { getWomen } from "../services/womenApi"

export function useWomen() {
  return useQuery({
    queryKey: ["women"],
    queryFn: getWomen,
  })
}
