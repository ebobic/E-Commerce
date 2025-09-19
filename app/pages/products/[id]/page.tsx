import ProductDetailsCard from "@/components/product-details/details-card";
import { fetchProductById } from "@/lib/data/product-data";
import SimilarProducts from "@/components/similar-products";
import ReviewsSection from "@/components/reviews-section";
import NextBreadcrumb from "@/components/breadcrumb";
import { Toaster } from 'sonner';

export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const productId = await params;
  //fetch Product Data
  const productData = await fetchProductById(productId.id);

  return (

    <>
      <NextBreadcrumb
        homeElement={'Home'}
        activeClasses='text-blue-900!'
        containerClasses='flex py-5'
        listClasses='hover:underline mx-2'
        capitalizeLinks
      />


      {<ProductDetailsCard product={productData} />}
      <ReviewsSection reviews={productData.reviews} productTitle={productData.title} />
      <SimilarProducts category={productData.category} id={productData.id}/>
      <Toaster richColors position="bottom-center" />
    </>
  );
}
