import { fetchProductsData } from "@/lib/data/product-data";
import ProductCard from "./product-card/product-card";
import { Product } from "@/lib/interfaces/products";

interface FeaturedProductListProps {
  limit: number;
  skip: number;
  category?: string;
  number?: number;
  id?: number
}


export default async function FeaturedProductList({ limit, skip, category, number, id }: FeaturedProductListProps) {

  const response = await fetchProductsData(limit, skip);
  let products: Product[] = response.products || [];

  if (category) {
    products = products.filter(product => product.category === category)
    if (id !== undefined) {
      products = products.filter(product => product.id !== id);
    }
    products = products.slice(0, 4);
  }

  return (
    <section className="flex flex-col relative items-center pt-10">
      {/* Responsive grid: 2 cards mobile, 3 small, 4 medium, 5 large */}
      {/* CSS overrides force ProductCard to be responsive within grid */}
      <ul className="grid gap-x-4 gap-y-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-4 place-items-stretch [&>*]:!w-full [&>*]:!max-w-none [&>*]:!mx-0">
        {products.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
}
