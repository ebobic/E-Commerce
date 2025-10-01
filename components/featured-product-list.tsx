import { fetchProductsData } from "@/lib/data/product-data";
import ProductsGrid from "./products-grid";
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
    <section className="flex flex-col relative items-center max-w-7xl mx-auto py-8">
      <ProductsGrid products={products} variant="featured" />
    </section>
  );
}
