import SearchBarProducts from "@/components/search-bar-products"
import FeaturedProductList from "@/components/featured-product-list"
import ProductsList from "@/components/products-list"
import { fetchProductsData, fetchSearchProducts } from "@/lib/data/product-data"
import Pagination from "@/components/pagination";

export default async function Products({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
  }) {

  const { limit, page, search } = await searchParams
  const currentPage = Number(page) || 1;
  const pageLimit = Number(limit) || 30;
  const skip = (currentPage - 1) * pageLimit;

  let totalCount = 0;

  if (search && search !== "") {
    const response = await fetchSearchProducts(search);
    totalCount = response.total;
  } else {
    const response = await fetchProductsData(pageLimit, skip);
    totalCount = response.total;
  }

  const totalPages = Math.ceil(totalCount / pageLimit);

  return (
      <>
          <div>
              <SearchBarProducts />
              {(search && search !== "") ?<ProductsList searchQuery={search}/>: <FeaturedProductList limit={pageLimit} skip={skip} />}
          </div>


          <Pagination currentPage={currentPage} totalPages={totalPages}/>
      </>
  )
}