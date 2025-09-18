interface ProductDescriptionProps {
  description: string;
  stock: number;
  brand: string;
  category: string;
}

export default function ProductDescription({
  description,
  brand,
  category,
}: ProductDescriptionProps) {
  return (
    <div className="w-full">
      <div className="w-full h-px bg-gray-300 my-2" />
      {/* Product Description */}
      <div className="h-auto overflow-hidden p-2">
        <p className="h-auto overflow-hidden text-xs md:text-sm line-clamp-4 md:line-clamp-none opacity-70 mb-2 leading-relaxed">
          {description}
        </p>
        {/* Dotted List */}
        <ul className="list-disc list-inside text-xs md:text-sm text-gray-500 mb-2 pl-4 leading-relaxed">
          <li>Brand: {brand}</li>
          <li>Category: {category}</li>
        </ul>
      </div>
    </div>
  );
}
