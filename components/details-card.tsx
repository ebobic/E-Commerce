import { Product } from "@/lib/interfaces/products";
import Image from "next/image";
export default async function ProductDetailsCard({
  id,
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images,
  reviews = [],
}: Product) {
  const imageUrl = images[0];
  return (
    <article className="relative w-full md:w-[80%] h-full bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative w-full flex flex-col md:flex-row justify-between items-center mx-auto p-4 md:p-8">
        {/* Product Image */}
        <figure className="relative w-full md:w-1/3 h-auto p-1 md:p-4 flex justify-center">
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
        <div className="w-full md:w-2/3">
          {/* Product Name */}
          <div className="flex flex-col w-full h-full bg-white p-4 md:p-8">
            <div className="flex justify-between items-start p-1">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold overflow-hidden text-ellipsis whitespace-nowrap max-w-[calc(100%-30px)]">
                {title}
              </h2>
              <div className="w-[20px] h-[20px] relative opacity-30 hover:opacity-70 transition-opacity cursor-pointer">
                {/* Heart Icon */}
                <Image
                  src="/heart.svg"
                  alt="Add to favorites"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2 md:gap-y-4 items-start p-1">
              <div className="flex flex-wrap md:flex-nowrap justify-between items-center p-1">
                <span className="text-lg md:text-xl font-semibold">
                  ${price}
                </span>
                <div className="hidden md:block w-px h-4 bg-black mx-2" />
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < Math.round(rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    >
                      ★
                    </span>
                  ))}
                  <span className="text-xs md:text-sm font-normal ml-1">
                    ({reviews.length} reviews)
                  </span>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full h-px bg-gray-300 my-2" />
                {/* Product Description */}
                <div className="h-auto overflow-hidden p-2">
                  <p className="h-auto overflow-hidden text-xs md:text-sm line-clamp-4 md:line-clamp-none opacity-70 mb-2 leading-relaxed">
                    {description}
                  </p>
                  {/* Dotted List */}
                  <ul className="list-disc list-inside text-xs md:text-sm text-gray-500 mb-2 pl-4 leading-relaxed">
                    <li>In stock: {stock} units available</li>
                    <li>Brand: {brand}</li>
                    <li>Category: {category}</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col w-full items-start gap-y-2 p-1">
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full mb-2">
                  <div className="inline-flex items-center gap-1 border p-2 rounded-3xl w-full sm:w-1/5 h-10 border-gray-300 border-opacity-50 mb-2 sm:mb-0">
                    <button
                      className="h-full w-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min={1}
                      defaultValue={1}
                      className="w-full h-full text-center rounded focus:outline-none"
                      aria-label="Product quantity"
                    />
                    <button
                      className="h-full w-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button className="bg-black text-center text-sm md:text-base text-white py-2 p-2 rounded-3xl w-full sm:w-4/5 h-10 hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
                <button className="bg-white text-center text-sm md:text-base text-black border border-black py-2 p-2 rounded-3xl w-full mt-2 hover:bg-gray-100 transition-colors">
                  Buy now
                </button>
              </div>
              <div className="mt-2 md:mt-1">
                <div className="flex flex-row items-center gap-2 w-full mb-2 p-1 hover:bg-gray-50 rounded-md transition-colors">
                  <div className="w-[20px] h-[20px] relative opacity-30">
                    <Image
                      src="/truck.svg"
                      alt="Shipping Icon"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-[10px] md:text-xs opacity-60">
                    Free worldwide shipping on all orders over $100
                  </span>
                </div>
                <div className="flex flex-row items-center gap-2 w-full mb-2 p-1 hover:bg-gray-50 rounded-md transition-colors">
                  <div className="w-[20px] h-[20px] relative opacity-30">
                    <Image
                      src="/return-box.svg"
                      alt="Return Box Icon"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-[10px] md:text-xs opacity-60">
                    Delivers in: 3-7 Working Days Shipping & Return
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
