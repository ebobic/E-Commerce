import { Product } from "@/lib/interfaces/products";
import ProductHeader from "./product-header";
import ProductPriceAndRating from "./product-price-rating";
import ProductDescription from "./product-description";
import ProductActions from "./product-actions";
import ShippingInfo from "./shipping-info";
import ImageGallery from "./image-gallery";

interface ProductDetailsCardProps {
  product: Product;
}

export default async function ProductDetailsCard({
  product,
}: ProductDetailsCardProps) {
  // const imageUrl = product.images[0] || product.thumbnail; // Fallback to thumbnail
  const reviewCount = product.reviews?.length || 0;

  return (
    <article className="flex flex-col lg:flex-row w-9/10 lg:5/10 max-w-[1200px] justify-center items-center md:items-start m-auto gap-8 py-2 sm:py-12">
        <ImageGallery images={product.images} title={product.title} />
        <div className="flex m-auto w-9/10 lg:w-1/2 max-w-[800px]">
          <div className="flex flex-col w-full h-full bg-white">
            <ProductHeader title={product.title} />
            <div className="flex flex-col gap-y-2  items-start">
              <ProductPriceAndRating
                price={product.price}
                rating={product.rating}
                reviewCount={reviewCount}
              />
              <ProductDescription
                description={product.description}
                stock={product.stock}
                brand={product.brand}
                category={product.category}
              />
              <ProductActions title={product.title} stock={product.stock}/>
              <ShippingInfo shippingInformation={product.shippingInformation}/>
            </div>
          </div>
        </div>
    </article>
  );
}
