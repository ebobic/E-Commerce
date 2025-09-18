interface ProductCardHeaderProps {
  title: string;
  price: number;
}

export default function ProductCardHeader({
  title,
  price,
}: ProductCardHeaderProps) {
  return (
    <div className="flex justify-between gap-x-4 items-center p-1">
      <h4 className="text-xs font-extrabold overflow-hidden text-ellipsis whitespace-nowrap">
        {title}
      </h4>
      <span className="text-xs font-normal">${price}</span>
    </div>
  );
}
