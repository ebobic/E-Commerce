import ProductDetailsCard from "@/components/details-card";
import ProductCard from "@/components/product-card";
import { fetchProductById } from "@/lib/data/product-data";

async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const productId = await params;
  //fetch Product Data
  const productData = await fetchProductById(productId.id);
  return (
    <section className="flex flex-col relative items-center p-6 rounded-md shadow-md max-w-0xl mx-auto">
      {<ProductDetailsCard {...productData} />}
    </section>
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
