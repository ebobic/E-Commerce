
import FeaturedProductList from "./featured-product-list";


export default async function FeaturedProduct() {
  const limit = 10
  const skip = 0
  
    return (
      <section>
        <h2 className="pt-10 text-center text-4xl font-jersey font-medium mb-4">
        Featured Products
        </h2>
        <FeaturedProductList limit={limit} skip={skip} />
        </section>
    )
}