"use client";

import { cn } from "../utils/twMerge";
import Image from "next/image";

type Product = {
  name: string;
  subname: string;
  iconPath: string;
  mainColor: string;
  subColor: string;
  subColor2?: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  const { mainColor, subColor, subColor2 } = product;

  return (
    <div
      className={cn(
        "w-full max-w-[600px] rounded-lg p-1 col-span-1 mx-auto",
        mainColor === "red"
          ? "bg-red"
          : mainColor === "blue"
          ? "bg-brightblue"
          : "bg-orange"
      )}
    >
      <div
        className={cn(
          "w-full h-full rounded-lg p-2 flex flex-col items-center justify-between bg-black"
        )}
      >
        <div className="w-full flex justify-between items-center">
          <Image
            src={product.iconPath}
            alt={product?.name}
            width={100}
            height={100}
          />
          <p>{product?.name}</p>
        </div>
        <button>View Product</button>
      </div>
    </div>
  );
};

export default ProductCard;
