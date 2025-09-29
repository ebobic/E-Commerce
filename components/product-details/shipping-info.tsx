import Image from "next/image";

interface ShippingInfoProps {
  shippingInformation: string;
}

export default function ShippingInfo({shippingInformation}: ShippingInfoProps) {
  return (
    <div className="text-sm md:text-md text-neutral-800 opacity-60 ">

      <div className="flex flex-row items-center gap-2 w-full pb-2">
        <div className="w-[20px] h-[20px] relative opacity-30">
          <Image
            src="/truck.svg"
            alt="Shipping Icon"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p>
          Free worldwide shipping on all orders over $100
        </p>
      </div>

      <div className="flex flex-row items-center gap-2 w-full ">
        <div className="w-[20px] h-[20px] relative opacity-30">
          <Image
            src="/return-box.svg"
            alt="Return Box Icon"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p>
          {shippingInformation}
        </p>
      </div>

    </div>
  );
}
