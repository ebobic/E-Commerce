import { fetchProductsData } from "@/lib/data/product-data";
import { Product, ProductsResponse } from "@/lib/interfaces/products";
import Image from "next/image";
import Link from "next/link";

export default async function ProductCard(product: Product) {
  const imageUrl = product.images[0];

  return (
    <Link href={`/pages/products/${product.id}`} className="">
      <article
        className={`relative w-[210px] h-[350px] flex flex-col bg-gradient-to-br from-white to-blue-100 border-yellow-700 rounded-4xl font-verdana 
        transform-gpu transition-all duration-200 ease-out hover:[transform:translateY(-1px)_scale(1.03)_rotate(0deg)]
        shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)]
        before:absolute before:inset-0 before:rounded-xl before:bg-black/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:pointer-events-none
        after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-br after:from-white/10 after:to-transparent after:pointer-events-none`}
      >
        {/* Product Image */}
        <div className="relative w-full h-1/2 scale-100 flex items-center justify-center mx-auto p-8 pb-2 -translate-y-4 transition-transform duration-300 group-hover:-translate-y-6 will-change-transform">
          <Image
            src={imageUrl}
            width={160}
            height={160}
            alt=""
            className="w-full h-full object-cover scale-115 object-center drop-shadow-xl transition-all duration-300 group-hover:scale-150 group-hover:drop-shadow-2xl will-change-transform"
            priority
          />
        </div>
        {/* Product Details */}
        <div className="w-full h-1/3 rounded-b-4xl flex-1 bg-white p-4">
          <div>
            {/* Product Name */}
            <div className="flex justify-between gap-x-4 items-center p-1">
              <h4 className="text-xs font-extrabold overflow-hidden text-ellipsis whitespace-nowrap">
                {product.title}
              </h4>
              <span className="text-xs font-normal">${product.price}</span>
            </div>
            <h3 className="h-[72px] overflow-hidden text-xs line-clamp-4 p-2">
              {product.description}
            </h3>
          </div>
          {/* Buy Button */}
          <div className="absolute bottom-3 right-3">
            <button
              type="button"
              className="flex items-center justify-center px-3 py-2 z-50 text-white bg-black rounded-4xl text-lg font-extralight cursor-pointer"
            >
              <span className="text-xs item-center">&#128722;</span>
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
}
