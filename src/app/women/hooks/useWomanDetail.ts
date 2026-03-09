import { useQuery } from "@tanstack/react-query";
import { getWomanDetail } from "../services/womenApi";

export function useWomanDetail(id?: string) {
  const query = useQuery({
    queryKey: ["woman", id],
    queryFn: () => getWomanDetail(Number(id)),
    enabled: !!id,
  });

  return query;
}
