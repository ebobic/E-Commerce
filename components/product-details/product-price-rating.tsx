interface ProductPriceAndRatingProps {
  price: number;
  rating: number;
  reviewCount: number;
}

export default function ProductPriceAndRating({
  price,
  rating,
  reviewCount,
}: ProductPriceAndRatingProps) {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between items-center p-1">
      <span className="text-lg md:text-xl font-semibold">${price}</span>
      <div className="md:block w-px h-4 bg-black mx-2" />
      {/* Rating Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={
              i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
            }
          >
            ★
          </span>
        ))}
        <span className="text-xs md:text-sm font-normal ml-1">
          ({reviewCount} reviews)
        </span>
      </div>
    </div>
  );
}
