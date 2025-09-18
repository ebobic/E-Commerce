import { Product } from "@/lib/interfaces/products";
import ProductImage from "./product-image";
import ProductHeader from "./product-header";
import ProductPriceAndRating from "./product-price-rating";
import ProductDescription from "./product-description";
import ProductActions from "./product-actions";
import ShippingInfo from "./shipping-info";
import ImageGallery from "../image-gallery";

interface ProductDetailsCardProps {
  product: Product;
}

export default async function ProductDetailsCard({
  product,
}: ProductDetailsCardProps) {
  const imageUrl = product.images[0] || product.thumbnail; // Fallback to thumbnail
  const reviewCount = product.reviews?.length || 0;

  return (
    <article className="relative w-full md:w-[85%] h-full bg-white rounded-lg overflow-hidden">
      <div className="relative w-full flex flex-col md:flex-row justify-between items-center p-4 md:p-6">
        <ImageGallery images={product.images} title={product.title} />
        <div className="w-full md:w-full">
          <div className="flex flex-col w-full h-full bg-white p-4">
            <ProductHeader title={product.title} />
            <div className="flex flex-col gap-y-2 md:gap-y-4 items-start p-1">
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
              <ProductActions title={product.title} />
              <ShippingInfo />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
