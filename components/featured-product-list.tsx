import { fetchProductsData } from "@/lib/data/product-data";
import ProductCard from "./product-card";
import { Product } from "@/lib/interfaces/products";

export default async function FeaturedProductList() {
  const response = await fetchProductsData();
  const products: Product[] = response.products || [];

  return (
    <section className="flex flex-col bg-white items-center p-10 rounded-md shadow-md">

      <h2 className="text-center text-4xl font-jersey font-medium mb-4">
          Featured Products
        </h2>
      <ul className="grid gap-x-8 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 p-4 place-items-center">
        {products.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ul>
        </section>
    
  );
}
