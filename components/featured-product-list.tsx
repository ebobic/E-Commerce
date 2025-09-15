import { fetchProductsData } from "@/lib/data/product-data";
import ProductCard from "./product-card";
import { Product } from "@/lib/interfaces/products";

export default async function FeaturedProductList() {
  const response = await fetchProductsData();
  const products: Product[] = response.products || [];

  return (
    <section className="flex flex-col relative bg-white items-center rounded-md shadow-md">
      <ul className="grid gap-x-10 gap-y-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 place-items-center">
        {products.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ul>
        </section>
    
  );
}
