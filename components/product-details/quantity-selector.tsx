import { useState } from "react";

export default function QuantitySelector() {
    const [quantity, setQuantity] = useState(1)  // State to manage the current quantity, defaulting to 1

    const handleDecrease = () => setQuantity(quantity - 1)
    const handleIncrease = () => setQuantity(quantity + 1)

    const decreaseDisabled = quantity <=1;  // min quantity
    const increaseDisabled = quantity >= 10;  // max quantity
    

    return (
      <div className="inline-flex items-center gap-1 border py-2 rounded-3xl w-1/5 border-gray-300 border-opacity-50">
        
        {/* Render a disabled or active "-" button depending on decreaseDisabled state */}
        {decreaseDisabled ? (
          <button
            className="h-full w-8 flex items-center justify-center pointer-events-none opacity-50"
            aria-label="Decrease quantity"
            onClick={handleDecrease}
          >
            -
          </button>
        ) : (
            <button
            className="h-full w-8 flex items-center justify-center hover:cursor-pointer"
            aria-label="Decrease quantity"
            onClick={handleDecrease}
          >
            -
          </button>
        )}
      
        {/* Display current quantity value */}
        <span>{quantity}</span>

        {/* Render a disabled or active "+" button depending on increaseDisabled state */}
        {increaseDisabled ? (
          <button
            className="h-full w-8 flex items-center justify-center pointer-events-none opacity-50"
            aria-label="Increase quantity"
            onClick={handleIncrease}
          >
          +
          </button>
        ) : (
          <button
            className="h-full w-8 flex items-center justify-center hover:cursor-pointer"
            aria-label="Increase quantity"
            onClick={handleIncrease}
          >
            +
          </button>
        )}

      </div>
    );
}
