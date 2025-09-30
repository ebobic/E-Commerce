"use client"

import { toast } from "sonner";
import QuantitySelector from "./quantity-selector";

interface ProductHeaderProps {
  title: string;
  stock: number;
}

export default function ProductActions({ title, stock }: ProductHeaderProps) {
  const noStock = stock === 0;

  return (
    
    <div className="flex flex-col w-full items-start my-2">
      
      { noStock ? (
        <button
          className="text-center text-sm md:text-base text-white py-2 rounded-3xl w-full bg-blue-900 font-bold hover:bg-blue-800 transition-colors cursor-pointer"
          onClick={() => toast.success(`You will be notified when ${title} is back in stock.`)}
        >
          Notify Me
        </button>
      ) : (
        <div className="flex items-center gap-2 w-full">
          <QuantitySelector />
          <button
            className="bg-black text-center text-sm md:text-base text-white py-2 rounded-3xl w-4/5 hover:bg-gray-800 transition-colors cursor-pointer"
            onClick={() => toast.success(`${title} added to cart.`)}
          >
            Add to Cart
          </button>
        </div>
      )}
        
      {!noStock && (
        <button className="bg-white text-center text-sm md:text-base text-black border border-black py-2 rounded-3xl w-full mt-2 hover:bg-gray-100 transition-colors cursor-pointer">
          Buy now
        </button>
      )}
      
    </div>
  );
}
