'use client';

import { Product } from "@/interfaces";
import Image from "next/image";
import { useState } from "react";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  // Estado para manejar la imagen mostrada
  const [displayImage, setDisplayImage] = useState(product.imagenPrincipal);

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex align-items-stretch">
      <div className="card h-100 shadow-sm border-light rounded-3 overflow-hidden">
        {/* Imagen del producto con eventos para cambiar la imagen */}
        <Image
          src={displayImage}
          alt={product.nombre}
          width={500}
          height={500}
          className="card-img-top img-fluid rounded-top"
          style={{ objectFit: "cover" }}
          onMouseEnter={() =>
            setDisplayImage(
              product.galeriaImagenes && product.galeriaImagenes.length > 0
                ? product.galeriaImagenes[0] // Primera imagen de la galería
                : product.imagenPrincipal
            )
          }
          onMouseLeave={() => setDisplayImage(product.imagenPrincipal)}
        />

        {/* Contenido del producto */}
        <div className="card-body d-flex flex-column p-3">
          {/* Nombre del producto */}
          <h5 className="card-title text-truncate mb-3" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
            {product.nombre}
          </h5>

          {/* Precio */}
          <div className="mb-3">
            {product.precioDescuento ? (
              <div className="d-flex align-items-center">
                <span className="text-danger fw-bold me-2" style={{ fontSize: '1.2rem' }}>
                  ${product.precioDescuento.toFixed(2)}
                </span>
                <span className="text-muted text-decoration-line-through" style={{ fontSize: '1rem' }}>
                  ${product.precio.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="fw-bold" style={{ fontSize: '1.2rem' }}>${product.precio.toFixed(2)}</span>
            )}
          </div>

          {/* Botón de acción */}
          <div className="mt-auto">
            <button className="btn btn-primary w-100 rounded-pill shadow-sm transition-all hover-shadow">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


