import Image from "next/image";

interface ProductCardImageProps {
  imageUrl: string;
  title: string;
}

export default function ProductCardImage({
  imageUrl,
  title,
}: ProductCardImageProps) {
  return (
    <div className="relative w-full h-1/2 scale-100 flex items-center justify-center mx-auto p-8 pb-2 -translate-y-4 transition-transform duration-300 group-hover:-translate-y-6 will-change-transform">
      <Image
        src={imageUrl}
        width={160}
        height={160}
        alt={title}
        className="w-full h-full object-cover scale-115 object-center drop-shadow-xl transition-all duration-300 group-hover:scale-150 group-hover:drop-shadow-2xl will-change-transform"
        priority
      />
    </div>
  );
}
