interface ProductCardDescriptionProps {
  description: string;
}

export default function ProductCardDescription({
  description,
}: ProductCardDescriptionProps) {
  return (
    <h3 className="h-[72px] overflow-hidden text-xs line-clamp-4 p-2">
      {description}
    </h3>
  );
}
