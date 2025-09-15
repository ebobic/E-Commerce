import FeaturedProductList from "@/components/featured-product-list"

export default function Products() {
    const limit = 60;
    const skip = 30;
    return (
        <div>
            <FeaturedProductList limit={limit} skip={skip} />
        </div>
    )
}