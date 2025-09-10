import { fetchProductsData } from "@/lib/data/product-data";
import { Product, ProductsResponse } from "@/lib/interfaces/products";
import Image from "next/image";

/* async function getProductDetails() {
    const products = await fetchProductsData();
    return products
} */

export default async function ProductCard(product: Product) {
    /* console.log("product: ", product.images) */

    const imageUrl = product.images[0]

  return (
    <div className="product-card">
          <li className="w-full flex justify-center">
                  <div className="relative z-10 -translate-y-4 transition-transform duration-300 group-hover:-translate-y-6 will-change-transform">
            <Image
              src={imageUrl}
              width={180}
              height={180}
              alt={product.title}
              className="mx-auto h-auto drop-shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-2xl will-change-transform"
              priority
            />
          </div>
          </li>
    </div>
  );
}
