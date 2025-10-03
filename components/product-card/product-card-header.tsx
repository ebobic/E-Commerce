interface ProductCardHeaderProps {
  title: string;
  price: number;
}

export default function ProductCardHeader({
  title,
  price,
}: ProductCardHeaderProps) {
  return (
    <div className="flex-1">
      <h3 className="font-bold text-sm text-gray-800 mb-1 line-clamp-2 text-center">
        {title}
      </h3>
    </div>
  );
}

