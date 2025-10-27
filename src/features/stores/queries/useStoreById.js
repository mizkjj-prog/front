import { useQuery } from "@tanstack/react-query";

export function useStoreById(id, { initialStore } = {}) {
  const { data, ...rest } = useQuery({
    queryKey: ["store", id],
    queryFn: async ({ signal }) => {
      const res = await fetch(`http://localhost:4000/api/stores/${id}`, {
        signal,
      });
      console.log("res", res);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
    placeholderData: initialStore,
    staleTime: 30_000,
    retry: false, // 잘못된 id일 때 재시도 불필요
  });

  return {
    product: data ?? null,
    ...rest, // isPending, isError, error, refetch 등
  };
}
