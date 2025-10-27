import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

function filterOptions({ data = [], category = "all", filteredSizes = [] }) {
  let products = data;
  if (filteredSizes.length > 0) {
    products = products.filter((p) =>
      p.sizes.some((size) => filteredSizes.includes(size))
    );
  }
  if (category === "all") return products;
  if (category === "new") return products.filter((p) => p.isNew);
  if (category === "best") return products.filter((p) => p.isBest);
  return products.filter((p) => p.category === category);
}

export function useProducts_bak(option = {}) {
  const { id, category, filteredSizes } = option || {};

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/api/products");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
  });

  const products = useMemo(() => {
    if (!data) return [];
    // return filterByCategory(data, category || "all");
    return filterOptions({ data, category, filteredSizes });
  }, [data, category, filteredSizes]);

  const product = useMemo(() => {
    if (!id || !data) return null;
    // return data.find((p) => String(p.id) === String(id)) ?? null;
    return data.find((p) => String(p.id) === String(id));
  }, [data, id]);
  // const product = id ? products?.find((p) => String(p.id) === String(id)) : {};

  return { products, product, isPending, isError, error, refetch };
}
