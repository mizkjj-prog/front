import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useStores } from "@/features/stores/queries/useStores";
import PageNav from "@/components/common/PageNav";
import { Link } from "react-router-dom";

export default function StoreCard({ store }) {
  const { id, name, add1, add2, tel, lat, lng } = store;
  // const [page, setPage] = useState(1);
  // const { stores, isPending, total, totalPages } = useStores({
  //   page,
  // });

  // if (isPending) return <div>로딩중</div>;

  return (
    <Link
      to={`/stores/detail/${id}`}
      className="block border border-black p-4 hover:bg-purple-200"
    >
      <div>{name}</div>
      <div>
        {add1} / {add2}
      </div>
      <div>TEL {tel}</div>
      <div>
        loc {lat} / {lng}
      </div>
    </Link>
  );

  // return (
  //   <div>
  //     <h1 className="text-2xl font-bold">StoreList</h1>
  //     {/* <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 mb-8"> */}
  //     <div className="grid grid-cols-1 ">
  //       <div className="lg:sticky lg:top-[60px] h-fit pb-4">
  //         <div>total: {total}</div>
  //         <div>totalPages: {totalPages}</div>
  //       </div>
  //       <div className="col-span-3">
  //         {!total && (
  //           <div className="py-40 text-center">해당하는 상점이 없습니다.</div>
  //         )}

  //         {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
  //         {/* <div>
  //           {stores.map((p) => (
  //             <div>
  //               {p.id}
  //               {p.name}
  //               {p.add1}
  //               {p.tel}
  //               {p.result_y}
  //               {p.result_x}
  //             </div>
  //           ))}
  //         </div> */}

  //         <Table>
  //           <TableHeader>
  //             <TableHead>ID</TableHead>
  //             <TableHead className="font-bold">name</TableHead>
  //             <TableHead>주소</TableHead>
  //             <TableHead>전화번호</TableHead>
  //             <TableHead className="text-right">lat</TableHead>
  //             <TableHead className="text-right">lng</TableHead>
  //           </TableHeader>
  //           <TableBody>
  //             {/* {filteredProducts?.map((p) => ( */}
  //             {stores?.map((p) => (
  //               <TableRow>
  //                 <TableCell>{p.id}</TableCell>
  //                 <TableCell className="font-medium">{p.name}</TableCell>
  //                 <TableCell>{p.add1}</TableCell>
  //                 <TableCell>{p.tel}</TableCell>
  //                 <TableCell className="text-right">{p.result_y}</TableCell>
  //                 <TableCell className="text-right">{p.result_x}</TableCell>
  //               </TableRow>
  //             ))}
  //           </TableBody>
  //         </Table>

  //         {/* <div className="mx-auto w-fit"> */}
  //         <div>
  //           <PageNav
  //             page={page} // 현재 페이지
  //             totalPages={totalPages} // 전체 페이지 수
  //             onChange={(next) => {
  //               setPage(next); // 상태 갱신 → useQuery 등으로 리패치
  //             }}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
