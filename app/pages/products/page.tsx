import FeaturedProductList from "@/components/featured-product-list"

export default function Products() {
    return (
        <div>
            <FeaturedProductList limit={30} skip={0} />
        </div>
    )
}