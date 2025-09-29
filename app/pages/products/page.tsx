import SearchBarProducts from "@/components/search-bar-products"
import FeaturedProductList from "@/components/featured-product-list"
import ProductsList from "@/components/products-list"
import ProductCategoryList from "@/components/product-category-list";
import CategoryList from "@/components/category-list"
import CategoryListMenu from "@/components/category-list-menu";
import { fetchProductsData, fetchSearchProducts } from "@/lib/data/product-data"
import Pagination from "@/components/pagination";
import NextBreadcrumb from "@/components/breadcrumb";
import { useState } from "react";

function menu() {
  "use client"
  const [menuOpen, setMenuOpen] = useState(false);
  return menu
}

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
      <CategoryListMenu setMenuOpen={menu}/>
      <div className="px-6 py-1 hidden md:block">
        <aside className="p-4 border text-sm md:w-full">
            <h3 className="pb-4 font-semibold">Categories</h3>
            <ul className="pb-2">
              <CategoryList />
            </ul>
        </aside>
      </div>

      <div className="w-9/10">
      <NextBreadcrumb
          homeElement={'Home'}
          activeClasses='text-blue-900!'
          containerClasses='flex py-5'
          listClasses='hover:underline mx-2'
          capitalizeLinks
        />
          <SearchBarProducts />
          {(category && category !== "") ?<ProductCategoryList searchQuery={category}/>: (search && search !== "") ?<ProductsList searchQuery={search}/>: <FeaturedProductList limit={pageLimit} skip={skip}/>}
          <Pagination currentPage={currentPage} totalPages={totalPages}/>
      </div>
    </section>
  )

}