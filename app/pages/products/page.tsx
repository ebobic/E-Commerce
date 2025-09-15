import SearchBarProducts from "@/components/search-bar-products"
import FeaturedProductList from "@/components/featured-product-list"
import ProductsList from "@/components/products-list"
import CategoryList from "@/components/category-list"

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {

  const { search } = await searchParams
  const limit = 60;
  const skip = 30;

  return (
    <section className="flex justify-around">
      <div className="px-6 w-2/10">
        <CategoryList />
      </div>
      <div className="w-9/10">
          <SearchBarProducts />
          {(search && search !== "") ?<ProductsList searchQuery={search}/>: <FeaturedProductList limit={limit} skip={skip} />}
      </div>
    </section>
  )
}
