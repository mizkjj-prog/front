import { useParams } from "react-router-dom";
// import { products } from "@/data/productData";
import ProductCard from "@/features/products/components/ProductCard";
import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";

// function ProductCard({ product }) {
//   const { title, price, category } = product;
//   return (
//     <div>
//       <div>{title}</div>
//       <div>{price}</div>
//       <div>{category}</div>
//     </div>
//   );
// }

export default function ProductList_bak() {
  const { category: nowCategory } = useParams();

  async function fetchProducts() {
    const res = await fetch("http://localhost:4000/api/products");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }
  const {
    data: products,
    isPending,
    // isError,
    // error,
    // refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isPending) return <div>팬딩중 !~~~~~</div>;

  let filteredProducts = nowCategory
    ? products.filter((p) => p.category === nowCategory)
    : products;

  if (nowCategory === "new") {
    filteredProducts = products.filter((p) => p.isNew);
  }
  if (nowCategory === "best") {
    filteredProducts = products.filter((p) => p.isBest);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">ProductList</h1>
      <div>상품카테고리 : {nowCategory?.toUpperCase()}</div>
      <div>
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
          // <ProductCard product={p} />
        ))}
        {filteredProducts?.length === 0 && <div>상품 없음</div>}
      </div>
    </div>
  );
}
