import ProductDetailsCard from "@/components/details-card";
import { fetchProductById } from "@/lib/data/product-data";
import SimilarProducts from "@/components/similar-products";
import ReviewsSection from "@/components/reviews-section";
import NextBreadcrumb from "@/components/breadcrumb";

async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const productId = await params;
  //fetch Product Data
  const productData = await fetchProductById(productId.id);
  return (
    <>
    <NextBreadcrumb
          homeElement={'Home'}
          separator={`>`}
          activeClasses='text-blue-900'
          containerClasses='flex py-5'
          listClasses='hover:underline mx-2'
          capitalizeLinks
        />
        <section className="flex flex-col relative items-center p-6 rounded-md max-w-0xl mx-auto">
        {<ProductDetailsCard {...productData} />}
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
