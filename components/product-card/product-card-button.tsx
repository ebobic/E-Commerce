import { toast } from "sonner";

interface ProductHeaderProps {
  title: string;
}

export default function ProductCardButton({ title }: ProductHeaderProps) {
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop propagation to parent elements
    e.preventDefault(); // Prevent default behavior (like navigation)
    toast.success(`${title} added to cart.`);
  };

  return (
    <div
      className="absolute bottom-3 right-3 isolate"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <button
        type="button"
        className="flex items-center justify-center px-3 py-2 z-50 text-white bg-black rounded-4xl text-lg font-extralight hover:cursor-pointer"
        onClick={handleButtonClick}
      >
        <span className="text-xs item-center">&#128722;</span>
      </button>
    </div>
  );
}
