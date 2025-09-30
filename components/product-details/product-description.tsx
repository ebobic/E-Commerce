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
    <>
      <div className="w-full h-px bg-gray-300 my-2 text-sm md:text-md text-neutral-800" />
      {/* Product Description */}
      <div className="h-auto ">
        <p className="h-auto line-clamp-4 md:line-clamp-none opacity-80 leading-relaxed">
          {description}
        </p>
        {/* Dotted List */}
        <ul className="list-disc list-inside opacity-80 pl-4 my-2 leading-relaxed">
          <li>Brand: {brand}</li>
          <li>Category: {category}</li>
        </ul>
      </div>
    </>
  );
}
