import { useProducts } from "@/features/products/queries/useProducts";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { cn } from "@/lib/utils";
// import { TurkishLira } from "lucide-react";
import useCart from "@/hooks/useCart";

export default function ProductDetail_bak() {
  const { id } = useParams();
  const { product, isPending } = useProducts({ id });
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const { addItem } = useCart();

  // const handleAddCart = () => {
  //   const cartKey = "shopping-cart";
  //   const str = localStorage.getItem(cartKey); //문자열
  //   const arr = str ? JSON.parse(str) : [];
  //   const data = [...arr, { id, selectedSize, count }];
  //   localStorage.setItem(cartKey, JSON.stringify(data));

  //   console.log("장바구니 데이터::", data);
  //   console.log("JSON ::", JSON.stringify(data));

  //   // const str = localStorage.getItem(cartKey); //문자열
  //   // const obj = JSON.parse(str);
  //   // console.log("obj", obj);
  // };

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

          <div>
            <div>size</div>
            <div className="flex flex-wrap gap-1">
              {product?.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={cn("border  border-black p-4", {
                    "bg-stone-400 text-white":
                      product?.disabledSizes?.includes(s),
                    "bg-purple-400": selectedSize === s,
                  })}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <button
              onClick={handleAddCart}
              className="border px-2 py-1 bg-primary text-white"
            >
              장바구니 넣기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
