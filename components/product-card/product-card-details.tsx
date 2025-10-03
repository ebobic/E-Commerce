'use client';
import ProductCardHeader from "./product-card-header";
import ProductCardButton from "./product-card-button";

interface ProductCardDetailsProps {
  title: string;
  price: number;
}

export default function ProductCardDetails({
  title,
  price,
}: ProductCardDetailsProps) {
  return (
    <div className="p-4 flex flex-col flex-1">
      <ProductCardHeader title={title} price={price} />
      
      <div className="flex items-center justify-between px-3 py-4">
        <span className="text-base font-bold text-blue-900">
          ${price}
        </span>
        <ProductCardButton title={title} />
      </div>
    </div>
  );
}