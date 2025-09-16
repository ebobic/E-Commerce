import { fetchProductsData } from "@/lib/data/product-data";
import ProductCard from "./product-card";
import { Product } from "@/lib/interfaces/products";

interface FeaturedProductListProps {
  limit: number;
  skip: number;
  category?: string;
  number?: number;
}

export default async function FeaturedProductList({ limit, skip, category, number }: FeaturedProductListProps) {

  const response = await fetchProductsData(limit, skip);
  let products: Product[] = response.products || [];

  if (category) {
    products = products.filter(product => product.category === category)
    products = products.slice(0, 4);
  }

  return (
    <section className="flex flex-col relative items-center pt-10">
      <ul className="grid gap-x-10 gap-y-16 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-4 place-items-center">
        {products.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
}
