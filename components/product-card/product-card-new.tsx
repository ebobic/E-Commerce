import { Product } from "@/lib/interfaces/products";
import Link from "next/link";
import Image from "next/image";

export default function ProductCardNew(product: Product) {
  return (
    <Link href={`/pages/products/${product.id}`} className="block">
      <div className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[360px] xl:max-w-[360px] h-[180px] sm:h-[220px] md:h-[280px] lg:h-[400px] xl:h-[480px] bg-white rounded-xl border border-gray-200 overflow-hidden mx-auto flex flex-col">
        {/* Product Image */}
        <div className="relative w-full h-[80px] sm:h-[100px] md:h-[120px] lg:h-[180px] xl:h-[220px]">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>
        
        {/* Product Info */}
        <div className="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 flex flex-col flex-1">
          <div className="flex-1">
            <h3 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 mb-1 sm:mb-2 md:mb-3 line-clamp-2">
              {product.title}
            </h3>
            <p className="text-xs text-gray-600 line-clamp-2 mb-1 sm:mb-2 md:mb-3">
              {product.description}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-900">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
