import Image from "next/image";

export default function ProductCardButton() {
  return (
    <button
      type="button"
      className="flex items-center justify-center px-3 py-2 z-50 text-white bg-black rounded-4xl text-lg font-extralight cursor-pointer"
    >
      <Image
        src="/shoppingcart.svg"
        alt="Shopping Cart"
        width={12}
        height={12}
        className="filter brightness-0 invert"
      />
    </button>
  );
}

