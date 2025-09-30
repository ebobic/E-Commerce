import SearchBarProducts from "@/components/search-bar-products"
import FeaturedProductList from "@/components/featured-product-list"
import ProductsList from "@/components/products-list"
import ProductCategoryList from "@/components/product-category-list";
import CategoryList from "@/components/categories/category-list"
import { fetchProductsData, fetchSearchProducts } from "@/lib/data/product-data"
import Pagination from "@/components/pagination";
import NextBreadcrumb from "@/components/breadcrumb";

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
      <div className="w-full">
      <NextBreadcrumb
          homeElement={'Home'}
          activeClasses='text-blue-900!'
          containerClasses='flex py-5'
          listClasses='hover:underline mx-2'
          capitalizeLinks
        />
        <div className="flex">
            <CategoryList />
            <SearchBarProducts />
        </div>
          {(category && category !== "") ?<ProductCategoryList searchQuery={category}/>: (search && search !== "") ?<ProductsList searchQuery={search}/>: <FeaturedProductList limit={pageLimit} skip={skip}/>}
          <Pagination currentPage={currentPage} totalPages={totalPages}/>
      </div>
    </section>
  )

}