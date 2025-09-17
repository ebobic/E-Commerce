import SearchBarProducts from "@/components/search-bar-products"
import FeaturedProductList from "@/components/featured-product-list"
import ProductsList from "@/components/products-list"
import ProductCategoryList from "@/components/product-category-list";
import CategoryList from "@/components/category-list"
import { fetchProductsData, fetchSearchProducts } from "@/lib/data/product-data"
import Pagination from "@/components/pagination";


export default async function Products({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {

  const { limit, page, category, search } = await searchParams
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
    <section className="flex justify-around">
      <div className="px-6 w-2/10">
        <aside className="p-4 border">
            <h3 className="pb-4 font-semibold">| Categories</h3>
            <ul className="pb-2">
              <CategoryList />
            </ul>
        </aside>
      </div>

      <div className="w-9/10">
          <SearchBarProducts />
          {(category && category !== "") ?<ProductCategoryList searchQuery={category}/>: (search && search !== "") ?<ProductsList searchQuery={search}/>: <FeaturedProductList limit={pageLimit} skip={skip}/>}
          <Pagination currentPage={currentPage} totalPages={totalPages}/>
      </div>
    </section>
  )

}