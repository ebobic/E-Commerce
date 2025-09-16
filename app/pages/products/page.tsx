
import { fetchAllCategories } from "@/lib/data/product-data";
import { Category } from "@/lib/interfaces/products";

import SearchBarProducts from "@/components/search-bar-products"
import FeaturedProductList from "@/components/featured-product-list"
import ProductsList from "@/components/products-list"
import CategoryList from "@/components/category-list"

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {

  // Fetch categories
  const response = await fetchAllCategories();
  const results: Category[] = response || [];

  const { search, category } = await searchParams
  const limit = 60;
  const skip = 30;

  // const {category } = await searchParams

  return (
    // Render categories
    <section className="flex justify-around">
      <div className="px-6 w-2/10">
        <aside className="p-4 border">
            <h3 className="pb-4 font-semibold">| Categories</h3>
            <ul className="pb-2">
              <CategoryList />
              {/*               
              {results.map((category, index) => (
                  <li key={index}><Link href="#">{category.name}</Link></li>
              ))}
              */}

            </ul>
        </aside>
      </div>

{/* 
      <div className="px-6 w-2/10">
        <CategoryList />
      </div>
*/}


      <div className="w-9/10">
          <SearchBarProducts />
          {(search && search !== "") ?<ProductsList searchQuery={category, search}/>: <FeaturedProductList limit={limit} skip={skip} />}
      </div>
    </section>
  )
}
