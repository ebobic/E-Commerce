import Image from "next/image";

interface ProductHeaderProps {
  title: string;
}

export default function ProductHeader({ title }: ProductHeaderProps) {
  return (
    <div className="flex justify-between items-start p-1">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold overflow-hidden text-ellipsis whitespace-nowrap max-w-[calc(100%-30px)]">
        {title}
      </h2>
      <div className="w-[20px] h-[20px] relative opacity-30 hover:opacity-70 transition-opacity cursor-pointer">
        <Image
          src="/heart.svg"
          alt="Add to favorites"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
