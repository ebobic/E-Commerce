
import ProductDetailsCard from "@/components/product-details/details-card";

import { fetchProductById } from "@/lib/data/product-data";
import SimilarProducts from "@/components/similar-products";
import ReviewsSection from "@/components/reviews-section";
import ImageGallery from "@/components/image-gallery";

async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const productId = await params;
  //fetch Product Data
  const productData = await fetchProductById(productId.id);
  return (

    <>
        <section className="flex flex-col relative items-center p-6 rounded-md max-w-0xl mx-auto">
        <ImageGallery {...productData} />
        {<ProductDetailsCard product={productData} />}
        </section>
        <section className="w-full">
          <ReviewsSection reviews={productData.reviews} productTitle={productData.title} />
        </section>
        <SimilarProducts category={productData.category} id={productData.id}/>
    </>
  );
}

export default async function ProductById({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <main className="flex flex-col mb-10">
      <ProductDetails params={params} />
    </main>
  );
}
