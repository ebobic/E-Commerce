import { fetchProductsData } from "@/lib/data/product-data";
import ProductCard from "./product-card";
import { Product } from "@/lib/interfaces/products";

export default async function FeaturedProductList() {
  const limit = 10
  const skip = 0

  const response = await fetchProductsData(limit, skip);
  const products: Product[] = response.products || [];

  return (
    <section className="flex flex-col relative bg-white items-center pt-10 rounded-md shadow-md">
      <ul className="grid gap-x-10 gap-y-16 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-4 place-items-center">

        {products.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ul>
        </section>
    
  );
}
