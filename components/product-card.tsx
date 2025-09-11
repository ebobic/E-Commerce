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
      className={`relative w-[350px] h-[520px] flex flex-col bg-gradient-to-br from-white to-blue-100 border-yellow-700 rounded-2xl font-verdana 
        transform-gpu transition-all duration-200 ease-out hover:[transform:translateY(-1px)_scale(1.03)_rotate(0deg)]
        shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)]
        before:absolute before:inset-0 before:rounded-xl before:bg-black/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:pointer-events-none
        after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-br after:from-white/10 after:to-transparent after:pointer-events-none`}
    >
      {/* Product Image */}
      <div className="relative z-10 h-100 p-8 -translate-y-4 transition-transform duration-300 group-hover:-translate-y-6 will-change-transform">
        <Image
          src={imageUrl}
          width={180}
          height={180}
          alt=""
          className="w-full h-full object-cover drop-shadow-xl transition-all duration-300 group-hover:scale-150 group-hover:drop-shadow-2xl will-change-transform"
          priority
        />
      </div>
      {/* Product Details */}
      <div className="bg-white w-full h-70 p-8">
        {/* Product Name */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-extrabold">{product.title}</h2>
          <span className="text-sm font-bold">${product.price}</span>
        </div>
        <h3>{product.description}</h3>
      </div>
      {/* Buy Button */}
      <div className="flex justify-end bg-white rounded-b-2xl p-8">
        <button
          type="button"
          className="justify-end-safe px-3 py-1.5 z-50 text-white bg-black rounded-full text-lg font-extralight cursor-pointer"
        >
          Buy
        </button>
      </div>
    </article>
  );
}
