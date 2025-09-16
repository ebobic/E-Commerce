import { Product } from "@/lib/interfaces/products";
import Image from "next/image";

export default async function ProductDetailsCard(product: Product) {
  const imageUrl = product.images[0];
  return (
    <article className="relative w-[80%] h-full bg-white">
      <div className="relative w-full flex justify-between items-center mx-auto p-8">
        {/* Product Image */}
        <div className="relative w-full h-full p-1 ">
          <Image
            src={imageUrl}
            width={140}
            height={140}
            alt=""
            className="w-full h-[full] object-cover scale-100 object-center "
            priority
          />
        </div>
        <div className="">
          {/* Product Name */}
          <div className="flex flex-col w-full h-full bg-white p-8">
            <div className="flex justify-between items-start  p-1">
              <h4 className="text-lg font-bold overflow-hidden text-ellipsis whitespace-nowrap">
                {product.title}
              </h4>
              <div className="w-[20px] h-[20px] relative opacity-30">
                {/* Heart Icon */}
                <Image
                  src="/heart.svg"
                  alt="User Icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-4 items-start  p-1">
              <div className="flex justify-between items-center p-1">
                <span className="text-lg font-normal">${product.price}</span>
                <div className="w-px h-4 bg-black mx-2" />
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < product.rating ? "text-gray-400" : "text-yellow-400"
                      }
                    >
                      ★
                    </span>
                  ))}
                  <span className="text-xs font-normal">
                    ({product.reviews.length} reviews)
                  </span>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full h-px bg-gray-300 my-2" />
                {/* Product Description */}
                <div className="h-[200px] overflow-hidden text-xs line-clamp-4 p-2 ">
                  <h3 className="h-[72px] overflow-hidden text-xs line-clamp-4 opacity-70 mb-2 leading-relaxed">
                    {product.description}
                  </h3>
                  {/* Dotted List */}
                  <ul className="list-disc list-inside text-xs text-gray-500 mb-2 pl-4 leading-relaxed">
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Consectetur adipiscing elit.</li>
                    <li>Sed do eiusmod tempor.</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col w-full items-start gap-y-2 p-1">
                <div className="flex flex-row items-center gap-2 w-full mb-2">
                  <div className="inline-flex items-center gap-2 border p-2 rounded-4xl w-2/5 h-10 border-gray-300 border-opacity-50">
                    <button className="h-full px-2 bg-white rounded-xl">
                      -
                    </button>
                    <input
                      type="number"
                      min={1}
                      defaultValue={1}
                      className="w-full h-full text-center rounded"
                    />
                    <button className="h-full px-2 bg-white rounded-xl">
                      +
                    </button>
                  </div>
                  <button className="bg-black text-center text-sm text-white py-2 p-2 rounded-4xl w-4/5 h-10">
                    Add to Cart
                  </button>
                </div>
                <button className="bg-white text-center text-sm text-black border border-black py-2 p-2 rounded-4xl w-full mt-2">
                  Buy now
                </button>
              </div>
              <div>
                <div className="flex flex-row items-center gap-2 w-full mb-2 p-1">
                  <div className="w-[20px] h-[20px] relative opacity-30">
                    <Image
                      src="/truck.svg"
                      alt="User Icon"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-[10px] opacity-60">
                    Free worldwide shipping on all orders over $100
                  </span>
                </div>
                <div className="flex flex-row items-center gap-2 w-full mb-2 p-1">
                  <div className="w-[20px] h-[20px] relative opacity-30">
                    <Image
                      src="/return-box.svg"
                      alt="User Icon"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <span className="text-[10px] opacity-60">
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
