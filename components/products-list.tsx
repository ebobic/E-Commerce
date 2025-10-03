import {
  fetchProductsByCategory,
  fetchProductsData,
  fetchSearchProducts,
} from "@/lib/data/product-data";
import ProductsGrid from "./products-grid";
import { Product } from "@/lib/interfaces/products";
import Pagination from "./pagination";

export default async function ProductsList({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { limit, page, category, search } = await searchParams;
  const currentPage = Number(page) || 1;
  const pageLimit = Number(limit) || 15;
  const skip = (currentPage - 1) * pageLimit;

  let sourceProducts: Product[] = [];
  let totalCount = 0;

  const hasSearch = !!(search && search.trim() !== "");
  const hasCategory = !!(category && category.trim() !== "");

  if (hasSearch) {
    const response = await fetchSearchProducts(search!);
    let products = response.products || [];
    if (hasCategory) {
      products = products.filter((p) => p.category === category);
    }
    sourceProducts = products;
    totalCount = products.length;
  } else if (hasCategory) {
    const response = await fetchProductsByCategory(category!);
    sourceProducts = response.products || [];
    totalCount = response.total ?? sourceProducts.length;
  } else {
    const response = await fetchProductsData(pageLimit, skip);
    sourceProducts = response.products || [];
    totalCount = response.total;
  }

  // Pagination if needed
  const needsClientPaging = hasSearch || hasCategory;
  const products: Product[] = needsClientPaging
    ? sourceProducts.slice(skip, skip + pageLimit)
    : sourceProducts;

  const totalPages = Math.ceil((totalCount || 0) / pageLimit);

  // Determine empty state message
  const emptyDescription = hasSearch || hasCategory
    ? "Try adjusting your search or filter criteria."
    : "There are no products available at the moment.";

  return (
    <section className="flex flex-col relative bg-white items-center pt-10 rounded-md shadow-md max-w-[1280px] mx-auto">

      <ProductsGrid
        products={products}
        variant="products"
        emptyMessage="No products found"
        emptyDescription={emptyDescription}
      />

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </section>
  );
}