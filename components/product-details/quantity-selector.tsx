import { useState } from "react";

export default function QuantitySelector() {
    const [quantity, setQuantity] = useState(1)

    const handleDecrease = () => setQuantity(quantity - 1)
    const handleIncrease = () => setQuantity(quantity + 1)

    const decreaseDisabled = quantity <=1;
    const increaseDisabled = quantity >= 10;
    

    return (
      <div className="inline-flex items-center gap-1 border p-2 rounded-3xl w-full sm:w-1/5 h-10 border-gray-300 border-opacity-50 mb-2 sm:mb-0">
        
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
      
        
        <span>{quantity}</span>


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
