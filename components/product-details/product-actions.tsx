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
    
    <div className="flex flex-col w-full items-start p-1">
      
      { noStock ? (
        <button
          className="bg-blue-800 text-center text-sm md:text-base text-white py-2 p-2 rounded-3xl w-full h-10 bg-blue-900 rounded-[50px] text-white font-bold hover:bg-blue-800 transition-colors cursor-pointer"
          onClick={() => toast.success(`You will be notified when ${title} is back in stock.`)}
        >
          Notify Me
        </button>
      ) : (
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full mb-2">
          <QuantitySelector />
          <button
            className="bg-black text-center text-sm md:text-base text-white py-2 p-2 rounded-3xl w-full sm:w-4/5 h-10 hover:bg-gray-800 transition-colors cursor-pointer"
            onClick={() => toast.success(`${title} added to cart.`)}
          >
            Add to Cart
          </button>
        </div>
      )}
        
      {!noStock && (
        <button className="bg-white text-center text-sm md:text-base text-black border border-black py-2 p-2 rounded-3xl w-full mt-2 hover:bg-gray-100 transition-colors cursor-pointer">
          Buy now
      </button>
      )}
      
    </div>
  );
}
