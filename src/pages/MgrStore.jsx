import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function MgrStore() {
  //   const { category: nowCategory } = useParams();
  const {
    data: stores,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["stores"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/api/stores");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
    staleTime: 60_000,
    refetchOnWindowFocus: true, //false이면 안바꾸고, staleTime 상태일때만 적용
  });

  if (isLoading) return <div>로딩중 !~~~~~</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">MgrStore</h1>
      <div onClick={refetch}>데이터 갱신하기</div>
      <div>
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead className="font-bold">name</TableHead>
            <TableHead>주소</TableHead>
            <TableHead>전화번호</TableHead>
            <TableHead className="text-right">lat</TableHead>
            <TableHead className="text-right">lng</TableHead>
          </TableHeader>
          <TableBody>
            {/* {filteredProducts?.map((p) => ( */}
            {stores?.map((p) => (
              <TableRow>
                <TableCell>{p.id}</TableCell>
                <TableCell className="font-medium">{p.name}</TableCell>
                <TableCell>{p.addr}</TableCell>
                <TableCell>{p.tel}</TableCell>
                <TableCell className="text-right">{p.lat}</TableCell>
                <TableCell className="text-right">{p.lng}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
