"use client";

import { cn } from "../utils/twMerge";
import Image from "next/image";
import juggernaut from "../../../public/juggernaut.png";

type Product = {
  name: string;
  subname: string;
  iconPath: string;
  mainColor: string;
  subColor: string;
  subColor2?: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className={cn("w-full max-w-[600px] rounded-lg p-1 ")}>
      <div
        className={cn(
          "w-full h-full rounded-lg p-2 flex flex-col items-center justify-between"
        )}
      >
        <div className="w-full flex justify-between items-center">
          <Image src={juggernaut} alt={product?.name} />
          <p>{product?.name}</p>
        </div>
        <button>View Product</button>
      </div>
    </div>
  );
};

export default ProductCard;
