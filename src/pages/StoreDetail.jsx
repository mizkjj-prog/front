import { useState } from "react";
import { useParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useStoreById } from "@/features/stores/queries";

export default function StoreDetail() {
  const { id } = useParams();
  const { store, isPending } = useStoreById(id);
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const { addItem } = useCart();

  const handleAddCart = () => {
    if (!selectedSize) {
      alert("사이즈를 선택해주세요.");
      return null;
    }
    const newItem = {
      id,
      title: product?.title,
      price: product?.price,
      size: selectedSize,
      count,
    };
    addItem(newItem);
  };

  const handleMinus = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  if (isPending) return <div>로딩중</div>;

  return (
    <div>
      <div className="grid grid-cols-3 gap-8">
        {/* <div>상세페이지 {JSON.stringify(product)}</div> */}
        <div>
          <img src={product?.img} />
        </div>
        <div>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div className="flex">
            <button
              onClick={handleMinus}
              className={cn("bg-primary px-2 text-white", {
                "bg-stone-400": count <= 1,
              })}
            >
              -
            </button>
            <div className="w-[100px]  text-center">{count}</div>
            <button onClick={handlePlus} className="bg-primary px-2 text-white">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
