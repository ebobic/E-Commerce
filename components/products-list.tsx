import {
  fetchProductsByCategory,
  fetchProductsData,
  fetchSearchProducts,
} from "@/lib/data/product-data";
import ProductCard from "./product-card/product-card";
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

  // Check if there are no products to display
  const hasProducts = products.length > 0;

  return (
    <section className="flex flex-col relative bg-white items-center pt-10 rounded-md shadow-md">
      <Pagination currentPage={currentPage} totalPages={totalPages} />

      {hasProducts ? (
        <ul className="grid gap-x-10 gap-y-16 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-4 place-items-center">
          {products.map((product: Product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            No products found
          </h2>
          <p className="text-gray-500 text-center">
            {hasSearch || hasCategory
              ? "Try adjusting your search or filter criteria."
              : "There are no products available at the moment."}
          </p>
        </div>
      )}

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </section>
  );
}
