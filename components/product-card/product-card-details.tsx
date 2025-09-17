import ProductCardHeader from "./product-card-header";
import ProductCardDescription from "./product-card-description";
import ProductCardButton from "./product-card-button";

interface ProductCardDetailsProps {
  title: string;
  price: number;
  description: string;
}

export default function ProductCardDetails({
  title,
  price,
  description,
}: ProductCardDetailsProps) {
  return (
    <div className="w-full h-1/3 rounded-b-4xl flex-1 bg-white p-4">
      <div>
        {/* Product Name and Price */}
        <ProductCardHeader title={title} price={price} />

        {/* Product Description */}
        <ProductCardDescription description={description} />
      </div>

      {/* Buy Button */}
      <ProductCardButton />
    </div>
  );
}
