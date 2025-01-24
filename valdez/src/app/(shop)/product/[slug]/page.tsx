import { ProductGrid, QuantitySelector, Title } from "@/components/ui";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

const products = initialData.products;

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = initialData.products.find((product) => product.id === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mt-5"> {/* Bootstrap container for responsiveness */}
      <div className="row">
        <div className="col-md-6"> {/* Image column */}
          <img
            src={product.imagenPrincipal} // Replace with product.image
            alt={product.nombre}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6"> {/* Details column */}
          <h1 className="display-5">{product.nombre}</h1> {/* Larger title */}
          <p className="lead">${product.precio}</p> {/* Price with styling */}
          <p className="mt-3">{product.descripcion}</p>


          {/* Quantity Selector */}
          <div className="mt-3">
          <QuantitySelector initialQuantity={1} />
          </div>


          <button className="btn btn-primary mt-3">Agregar al carrito</button>
        </div>
      </div>

      {/* Related Products (Optional) */}
      {/* <div className="mt-5">
        <h2>Productos Relacionados</h2>
        <ProductGrid products={relatedProducts} />
      </div> */}


    </div>
  );
}
