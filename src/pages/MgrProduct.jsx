import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import { useProducts } from "@/features/products/queries/useProducts";

export default function MgrProduct() {
  const { category: nowCategory } = useParams();
  const { products, isPending } = useProducts();

  // async function fetchProducts() {
  //   const res = await fetch("http://localhost:4000/api/products");
  //   if (!res.ok) throw new Error(`HTTP ${res.status}`);
  //   return res.json();
  // }
  // const {
  //   data: products,
  //   isLoading,
  //   // isError,
  //   // error,
  //   // refetch,
  // } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: fetchProducts,
  // });

  if (isPending) return <div>펜딩중 !</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">MgrProduct</h1>
      <div>
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead className="font-bold">title</TableHead>
            <TableHead>price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Sizes</TableHead>
          </TableHeader>
          <TableBody>
            {/* {filteredProducts?.map((p) => ( */}
            {products?.map((p) => (
              <TableRow>
                <TableCell>{p.id}</TableCell>
                <TableCell className="font-medium">{p.title}</TableCell>
                <TableCell>{p.price}</TableCell>
                <TableCell>{p.category}</TableCell>
                <TableCell className="text-right">
                  {p.sizes.join(",")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
