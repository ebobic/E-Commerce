import FeaturedProductList from "./featured-product-list";


export default async function FeaturedProduct() {
  const limit = 10
  const skip = 0
  
    return (
      <section>
        {/* Responsive heading: smaller on mobile (text-xl), full size on desktop (text-4xl) */}
        <h2 className="pt-10 text-center text-xl sm:text-4xl font-jersey font-medium mb-2">
        Featured Products
        </h2>
        <FeaturedProductList limit={limit} skip={skip} />
        </section>
    )
}