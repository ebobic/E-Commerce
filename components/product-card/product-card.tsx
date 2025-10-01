import { Product } from "@/lib/interfaces/products";
import Link from "next/link";
import ProductCardImage from "./product-card-image";
import ProductCardDetails from "./product-card-details";

interface ProductCardProps extends Product {
  noMargin?: boolean;
}

export default function ProductCard(product: ProductCardProps) {
  const { id, title, price, images, noMargin = false } = product;
  const imageUrl = images[0];

  return (
    <Link href={`/pages/products/${id}`} className="block">
      {/* Responsive: smaller on mobile (240px), full size on desktop (360px) */}
      <div className={`w-full max-w-[270px] h-[240px] sm:h-[360px] bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col relative ${noMargin ? 'mx-0' : 'mx-auto'}`}>
        <ProductCardImage imageUrl={imageUrl} title={product.title} />
        <ProductCardDetails
          title={title}
          price={price}
        />
      </div>
    </Link>
  );
}


