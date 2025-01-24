'use client';

import { Title } from "@/components/ui";
import Link from "next/link";
import { useState } from "react";
import { IoTrashOutline, IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"; // Import icons

const initialCartItems = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    image:
      "https://cuerosvelezco.vtexassets.com/arquivos/ids/278737-500-auto?v=638579527829600000&width=500&height=auto&aspect=true",
    quantity: 1,
  },
  {
    id: 2,
    name: "Product 2",
    price: 49.99,
    image:
      "https://cuerosvelezco.vtexassets.com/arquivos/ids/278737-500-auto?v=638579527829600000&width=500&height=auto&aspect=true",
    quantity: 2,
  },
  {
    id: 3,
    name: "Product 3",
    price: 29.99,
    image:
      "https://cuerosvelezco.vtexassets.com/arquivos/ids/278737-500-auto?v=638579527829600000&width=500&height=auto&aspect=true",
    quantity: 1,
  },
  {
    id: 4,
    name: "Product 4",
    price: 49.99,
    image:
      "https://cuerosvelezco.vtexassets.com/arquivos/ids/278737-500-auto?v=638579527829600000&width=500&height=auto&aspect=true",
    quantity: 2,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) } // Ensure quantity doesn't go below 1
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <Title title="Carrito" />

      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          {/* Shopping Cart Items */}
          {cartItems.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              onRemove={() => removeFromCart(product.id)}
              onUpdateQuantity={(delta: number) =>
                updateQuantity(product.id, delta)
              }
            />
          ))}

          {/* Total and Checkout */}
          <div className="d-flex justify-content-end align-items-center mt-4">
            <div>
              <h5>Total: ${totalPrice.toFixed(2)}</h5>
            </div>
            <Link href="/checkout/address">
                <button className="btn btn-success ms-3">Proceder al pago</button>
            </Link>
            
          </div>

          <Link href="/" className="btn btn-outline-primary mt-4 d-block">
            Continúa comprando
          </Link>
        </>
      )}
    </div>
  );
}

const CartItem: React.FC<{
  product: any;
  onRemove: () => void;
  onUpdateQuantity: (delta: number) => void;
}> = ({ product, onRemove, onUpdateQuantity }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0 align-items-center">
        <div className="col-4 col-md-2">
          {/* Smaller Image */}
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
            style={{ maxHeight: "100px", objectFit: "cover" }}
          />
        </div>
        <div className="col-8 col-md-7">
          {/* Product Details */}
          <div className="card-body">
            <h5 className="card-title text-truncate">{product.name}</h5>
            <p className="card-text text-muted mb-1">Precio: ${product.price.toFixed(2)}</p>
            <p className="card-text text-muted mb-0">
              Subtotal: ${(product.price * product.quantity).toFixed(2)}
            </p>
          </div>
        </div>
        <div className="col-md-3 d-flex flex-column flex-md-row justify-content-md-between align-items-center p-2">
          {/* Quantity Controls */}
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-secondary btn-sm me-2"
              onClick={() => onUpdateQuantity(-1)}
            >
              <IoRemoveCircleOutline />
            </button>
            <span className="fw-bold">{product.quantity}</span>
            <button
              className="btn btn-outline-secondary btn-sm ms-2"
              onClick={() => onUpdateQuantity(1)}
            >
              <IoAddCircleOutline />
            </button>
          </div>

          {/* Remove Button */}
          <button
            onClick={onRemove}
            className="btn btn-danger btn-sm mt-2 mt-md-0"
          >
            <IoTrashOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

const EmptyCart = () => (
  <div className="text-center">
    <p className="text-muted">Tu carrito está vacío.</p>
    <Link href="/" className="btn btn-primary">
      Continúa comprando
    </Link>
  </div>
);

