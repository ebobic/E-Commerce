export default function QuantitySelector() {
  return (
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
  );
}
