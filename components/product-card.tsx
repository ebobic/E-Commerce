import { fetchProductsData } from "@/lib/data/product-data";
import { Product, ProductsResponse } from "@/lib/interfaces/products";
import Image from "next/image";

/* async function getProductDetails() {
    const products = await fetchProductsData();
    return products
} */

export default async function ProductCard(product: Product) {
  /* console.log("product: ", product.images) */

  const imageUrl = product.images[0];

  return (
    <article
      className={`relative w-[350px] h-[480px] flex flex-col bg-gradient-to-br from-white to-blue-100 border-yellow-700 rounded-4xl font-verdana 
        transform-gpu transition-all duration-200 ease-out hover:[transform:translateY(-1px)_scale(1.03)_rotate(0deg)]
        shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)]
        before:absolute before:inset-0 before:rounded-xl before:bg-black/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:pointer-events-none
        after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-br after:from-white/10 after:to-transparent after:pointer-events-none`}
    >
      {/* Product Image */}
      <div className="relative w-full h-2/3 scale-100 flex items-center justify-center mx-auto p-8 pb-2 -translate-y-4 transition-transform duration-300 group-hover:-translate-y-6 will-change-transform">
        <Image
          src={imageUrl}
          width={160}
          height={160}
          alt=""
          className="w-full h-full object-cover drop-shadow-xl transition-all duration-300 group-hover:scale-150 group-hover:drop-shadow-2xl will-change-transform"
          priority
        />
      </div>
      {/* Product Details */}
      <div className="w-full h-1/3 rounded-b-4xl flex-1 bg-white p-6">
        <div >
        {/* Product Name */}
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-sm font-extrabold">{product.title}</h2>
          <span className="text-sm font-normal">${product.price}</span>
        </div>
        <h3 className="h-[48px] overflow-hidden text-xs line-clamp-3 p-1">{product.description}</h3>
      </div>
      {/* Buy Button */}
      <div className="w-full flex justify-end-safe rounded-b-2xl p-2 pb-1">
        <button
          type="button"
          className="px-3 py-0.5 z-50 text-white bg-black rounded-full text-lg font-extralight cursor-pointer"
        >
          <span className="text-xs">Buy</span>
        </button>
      </div>
      </div>
    </article>
  );
}
