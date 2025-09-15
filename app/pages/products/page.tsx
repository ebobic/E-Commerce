import SearchBarProducts from "@/components/search-bar-products"
import FeaturedProductList from "@/components/featured-product-list"
import ProductsList from "@/components/products-list"

export default async function Products({
  searchParams,
}: {
//   searchParams: Promise<{ [key: string]: string | undefined }>
  searchParams: Promise<{ [key: string]: string }>
}) {

  const { query } = await searchParams

    return (
        <div>
            <SearchBarProducts />
            {/* <ProductsList searchQuery={query} /> */}
            {(query && query !== "") ?<ProductsList searchQuery={query}/>: <FeaturedProductList />}
        </div>
    )
}
