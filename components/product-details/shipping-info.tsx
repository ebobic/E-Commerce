import Image from "next/image";

export default function ShippingInfo() {
  return (
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
  );
}
