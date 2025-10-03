import Image from "next/image";

interface ProductImageProps {
  imageUrl: string;
  title: string;
}

export default function ProductImage({ imageUrl, title }: ProductImageProps) {
  return (
    <figure className="relative w-full h-auto md:h-[400px] p-1 md:p-4 flex justify-center">
      <div className="relative w-full max-w-[300px] aspect-square">
        <Image
          src={imageUrl}
          fill
          alt={title}
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </figure>
  );
}
