import Image from "next/image";

interface ProductCardImageProps {
  imageUrl: string;
  title: string;
}

export default function ProductCardImage({
  imageUrl,
  title,
}: ProductCardImageProps) {
  // Responsive image: smaller on mobile (140px), full size on desktop (220px)
  return (
    <div className="relative w-full h-[140px] sm:h-[220px] bg-blue-100">
      <Image
        src={imageUrl}
        alt={""}
        fill
        loading="eager"
        className="object-contain"
      />
    </div>
  );
}

