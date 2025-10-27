import { Card } from "@/components/ui/card";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function ProductCard({ product }) {
  const {
    id,
    category,
    title,
    price,
    img,
    rating,
    sizes,
    disabledSizes,
    isNew,
    isBest,
  } = product;
  return (
    <Link to={`/products/detail/${id}`}>
      <div
        className={cn("bg-stone-100 group border p-4 rounded-lg shadow", {
          "bg-pink-200": category === "women",
          "bg-blue-200": category === "men",
          "bg-green-200": category === "kids",
        })}
      >
        <div className="flex flex-col space-y-1">
          <div>{id}</div>
          <div className="flex justify-center">
            <img src={img} className="w-[140px] h-[140px]" />
          </div>
          <div>{category}</div>
          <div className="font-bold text-lg">{title}</div>
          <div>{price}</div>
          <div>{rating}</div>
          <div className="flex space-x-2 text-xs">
            {isNew && (
              <div className="bg-red-500 px-1 rounded text-white">NEW</div>
            )}
            {isBest && (
              <div className="bg-primary px-1 rounded text-white">BEST</div>
            )}
          </div>

          <div className="hidden group-hover:block">
            <div className="flex flex-wrap gap-1">
              {sizes.map((s) => (
                <div
                  key={s}
                  className={
                    disabledSizes?.includes(s)
                      ? "line-through text-red-400"
                      : ""
                  }
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
