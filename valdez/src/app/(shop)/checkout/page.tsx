
'use client';

import { Title } from "@/components/ui";
import Link from "next/link";
import { useState } from "react";

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
];

export default function Checkout() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const totalPrice = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <Title title="Resumen de tu Pedido" />

      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          {/* Receipt Summary */}
          <div className="card shadow-sm p-4">
            <h5 className="mb-4">Detalles del Pedido</h5>

            {cartItems.map((product) => (
              <ReceiptItem key={product.id} product={product} />
            ))}

            {/* Total */}
            <div className="d-flex justify-content-between align-items-center mt-4 border-top pt-3">
              <h6 className="mb-0">Total:</h6>
              <h5 className="mb-0">${totalPrice.toFixed(2)}</h5>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="d-flex justify-content-end mt-4">
            <button className="btn btn-success">Realizar Pedido</button>
          </div>

          <Link href="/" className="btn btn-outline-primary mt-4 d-block">
            Volver a la tienda
          </Link>
        </>
      )}
    </div>
  );
}

const ReceiptItem: React.FC<{ product: any }> = ({ product }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="d-flex align-items-center">
        <img
          src={product.image}
          alt={product.name}
          className="rounded me-3"
          style={{ width: "60px", height: "60px", objectFit: "cover" }}
        />
        <div>
          <h6 className="mb-0">{product.name}</h6>
          <p className="text-muted mb-0">
            {product.quantity} x ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
      <h6 className="mb-0">
        ${(product.price * product.quantity).toFixed(2)}
      </h6>
    </div>
  );
};

const EmptyCart = () => (
  <div className="text-center">
    <p className="text-muted">Tu carrito está vacío.</p>
    <Link href="/" className="btn btn-primary">
      Volver a la tienda
    </Link>
  </div>
);