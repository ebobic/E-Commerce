import SearchBarProducts from "@/components/search-bar-products"
import FeaturedProductList from "@/components/featured-product-list"
import ProductsList from "@/components/products-list"

export default async function Products({
  searchParams,
}: {
searchParams: Promise<{ [key: string]: string | undefined }>
}) {

  const { search } = await searchParams

    return (
        <div>
            <SearchBarProducts />
            {(search && search !== "") ?<ProductsList searchQuery={search}/>: <FeaturedProductList />}
        </div>
    )
}
