
import { fetchProductsByCategory } from "@/lib/data/product-data";
import { ProductsResponse } from "@/lib/interfaces/products";

import SearchBarProducts from "@/components/search-bar-products"
import FeaturedProductList from "@/components/featured-product-list"
import ProductsList from "@/components/products-list"
import CategoryList from "@/components/category-list"

export default async function Products({
  categoryQuery,
  searchParams
}: {
  categoryQuery: string
  searchParams: Promise<{ [key: string]: string }>
}) {

  // Fetch categories
  // const cat = "Beauty"
  const response = await fetchProductsByCategory(categoryQuery);
  // const results: ProductsResponse[] = response || [];

  // console.log(`Cat: ${cat}`)
  
  console.log(`categoryQuery: ${categoryQuery}`)
  console.log(`searchParams: ${searchParams}`)
  console.log(`Response: ${response.products}`)

  const { category, search } = await searchParams
  const limit = 60;
  const skip = 30;

  console.log(`Category: ${category}`)
  
  return (
    // Render categories
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
          {/* {(search && search !== "") ?<ProductsList searchQuery={search}/>: <FeaturedProductList limit={limit} skip={skip} />} */}
          {(search && search !== "") ?<ProductsList searchQuery={search}/>: <ProductsList searchQuery={category} />}
          {/* <ProductsList searchQuery={category} /> */}
      </div>
    </section>
  )
}
