import { ProductGrid, Title } from "@/components/ui";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string; // Este es el parámetro dinámico de la ruta
  };
}

const products = initialData.products;

export default async function ProductPage({ params }: Props) {
  const { id } = await params; // Recuperar el parámetro dinámico "id" desde los props

  // Si el id es "kids", mostramos la página 404 (ya está implementado con `notFound`)
  if (id === "kids") {
    notFound();
  }

  // Filtrar productos por categoría si aplica
  const filteredProducts = products.filter((product) => product.genero === id);

  return (
    <>
      {/* Título de la categoría */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h1
            className="display-4 mb-3 fw-bold text-primary"
            style={{ textTransform: "capitalize" }}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)} {/* Capitalizamos la categoría */}
          </h1>
          <p className="lead text-muted">
            Descubre todos los productos disponibles en esta categoría
          </p>
        </div>
      </section>

      {/* Producto Grid */}
      <section className="py-5">
        <div className="container">
          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </>
  );
}
