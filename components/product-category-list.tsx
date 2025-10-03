import { fetchProductsByCategory } from "@/lib/data/product-data";
import ProductsGrid from "./products-grid";
import { Product } from "@/lib/interfaces/products";

export default async function ProductCategoryList({searchQuery}: {searchQuery: string}) {

  const response = await fetchProductsByCategory(searchQuery);
  const products: Product[] = response.products || [];

  return (
    <section className="flex flex-col relative bg-white items-center pt-10 rounded-md shadow-md">
      <ProductsGrid 
        products={products} 
        variant="products"
        emptyMessage="No products found in this category"
        emptyDescription="Try browsing other categories or adjusting your filters."
      />
    </section>
  );
}
