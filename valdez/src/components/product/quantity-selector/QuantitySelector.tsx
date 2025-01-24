'use client';

import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { useState } from 'react';

interface Props {
    initialQuantity?: number; // Make initialQuantity optional
}

export const QuantitySelector = ({ initialQuantity = 0 }: Props) => { // Provide a default value
    const [quantity, setQuantity] = useState(initialQuantity);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        setQuantity(Math.max(0, quantity - 1)); // Prevent going below zero
    };

    return (
        <div className="quantity-selector"> {/* Use a more appropriate class name */}
            <button onClick={decrement} disabled={quantity === 0}> {/* Disable decrement at 0 */}
                <IoRemoveCircleOutline />
            </button>

            <span>{quantity}</span> {/* Display the current quantity */}

            <button onClick={increment}>
                <IoAddCircleOutline />
            </button>
        </div>
    );
};
