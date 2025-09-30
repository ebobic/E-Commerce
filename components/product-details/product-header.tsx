import Image from "next/image";

interface ProductHeaderProps {
  title: string;
}

export default function ProductHeader({ title }: ProductHeaderProps) {
  return (
    <div className="flex justify-between items-start ">
      <h1 className="font-bold text-2xl lg:text-3xl text-neutral-800 text-ellipsis whitespace-wrap ">
        {title}
      </h1>
      <div className="top-2 left-0 w-[20px] h-[20px] relative opacity-50 hover:opacity-70 transition-opacity cursor-pointer ml-6">
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
