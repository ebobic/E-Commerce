export default function ProductCardButton() {
  return (
    <div className="absolute bottom-3 right-3">
      <button
        type="button"
        className="flex items-center justify-center px-3 py-2 z-50 text-white bg-black rounded-4xl text-lg font-extralight cursor-pointer"
      >
        <span className="text-xs item-center">&#128722;</span>
      </button>
    </div>
  );
}
