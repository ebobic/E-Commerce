import { fetchProductsData } from "@/lib/data/product-data";
import ProductCard from "./product-card/product-card";
import { Product } from "@/lib/interfaces/products";

interface FeaturedProductListProps {
  limit: number;
  skip: number;
}

export default async function FeaturedProductList({
  limit,
  skip,
}: FeaturedProductListProps) {
  const response = await fetchProductsData(limit, skip);
  const products: Product[] = response.products || [];

  return (
    <section className="flex flex-col relative items-center pt-10 rounded-md shadow-md">
      <ul className="grid gap-x-10 gap-y-16 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-4 place-items-center">
        {products.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
}
