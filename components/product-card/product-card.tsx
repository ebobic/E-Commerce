import { Product } from "@/lib/interfaces/products";
import Link from "next/link";
import ProductCardImage from "./product-card-image";
import ProductCardDetails from "./product-card-details";

export default function ProductCard(product: Product) {
  const { id, title, price, images } = product;
  const imageUrl = images[0];

  return (
    <Link href={`/pages/products/${id}`} className="block">
      {/* Responsive card with constrained width */}
      <div className="w-full max-w-[270px] h-[240px] sm:h-[360px] bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col relative mx-auto">
        <ProductCardImage imageUrl={imageUrl} title={product.title} />
        <ProductCardDetails
          title={title}
          price={price}
        />
      </div>
    </Link>
  );
}


