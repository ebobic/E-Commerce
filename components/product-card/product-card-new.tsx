import { Product } from "@/lib/interfaces/products";
import Link from "next/link";
import Image from "next/image";

export default function ProductCardNew(product: Product) {
  return (
    <Link href={`/pages/products/${product.id}`} className="block">
      <div className="w-[270px] h-[360px] bg-white rounded-lg border border-gray-200 overflow-hidden mx-auto flex flex-col relative">
        {/* Product Image */}
        <div className="relative w-full h-[220px] bg-blue-100">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>
        
        {/* Product Info */}
        <div className="p-4 flex flex-col flex-1">
          <div className="flex-1">
            <h4 className="font-bold text-sm text-gray-800 mb-0 line-clamp-2 text-center">
              {product.title}
            </h4>
          </div>
          <div className="flex items-center justify-between px-3 py-4">
            <span className="text-base font-bold text-blue-900">
              ${product.price}
            </span>
            <button
              type="button"
              className="flex items-center justify-center px-3 py-2 z-50 text-white bg-black rounded-4xl text-lg font-extralight cursor-pointer"
            >
              <Image
                src="/shoppingcart.svg"
                alt="Shopping Cart"
                width={12}
                height={12}
                className="filter brightness-0 invert"
              />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
