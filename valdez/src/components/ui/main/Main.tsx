import Image from "next/image";
import Link from "next/link";

export const Main = () => {
  return (
    <main>
      <section className="featured-images">
        <div className="container">
          <h2>Imágenes Destacadas</h2>
          <div className="row">
            {/* Imagen 1 desde URL externa */}
            <div className="col-lg-4 col-md-6">
              <div className="image-card">
                  <Link
                    href="/product/1"
                  >
                  <Image 
                    src="https://cuerosvelezco.vtexassets.com/arquivos/ids/280487/1037816-04-01-Bolso-manos-libres-de-cuero.jpg?v=638592622939270000" 
                    alt="Imagen Destacada 1" 
                    width={500} 
                    height={300} 
                    className="img-fluid" 
                    />
                  </Link>

                <p>Descripción de la imagen 1</p>
              </div>
            </div>

            {/* Imagen 2 desde URL externa */}
            <div className="col-lg-4 col-md-6">
              <div className="image-card">
                <Image 
                  src="https://cuerosvelezco.vtexassets.com/arquivos/ids/280487/1037816-04-01-Bolso-manos-libres-de-cuero.jpg?v=638592622939270000"  
                  alt="Imagen Destacada 2" 
                  width={500} 
                  height={300} 
                  className="img-fluid" 
                />
                <p>Descripción de la imagen 2</p>
              </div>
            </div>

            {/* Imagen 3 desde URL externa */}
            <div className="col-lg-4 col-md-6">
              <div className="image-card">
                <Image 
                  src="https://cuerosvelezco.vtexassets.com/arquivos/ids/280487/1037816-04-01-Bolso-manos-libres-de-cuero.jpg?v=638592622939270000" 
                  alt="Imagen Destacada 3" 
                  width={500} 
                  height={300} 
                  className="img-fluid" 
                />
                <p>Descripción de la imagen 3</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
