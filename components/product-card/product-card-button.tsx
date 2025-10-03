import Image from "next/image";
import { toast } from "sonner";

interface ProductCardButtonProps {
  title: string;
}

export default function ProductCardButton({ title }: ProductCardButtonProps) {
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop propagation to parent elements
    e.preventDefault(); // Prevent default behavior (like navigation)
    toast.success(`${title} added to cart.`);
  };

  return (
    <button
      type="button"
      className="flex items-center justify-center px-3 py-2 text-white bg-black rounded-4xl text-lg font-extralight hover:cursor-pointer"
      onClick={handleButtonClick}
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