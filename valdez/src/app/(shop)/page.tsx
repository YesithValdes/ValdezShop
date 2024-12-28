import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import '../../../style/page.css'

export default function Home() {
  return (
    <>
      <main>
        <section className="featured-images">
          <div className="container">
            <h2>Imágenes Destacadas</h2>
            <div className="row">
              {/* Imagen 1 desde URL externa */}
              <div className="col-lg-4 col-md-6">
                <div className="image-card">
                  <Image 
                    src="https://cuerosvelezco.vtexassets.com/arquivos/ids/280487/1037816-04-01-Bolso-manos-libres-de-cuero.jpg?v=638592622939270000" 
                    alt="Imagen Destacada 1" 
                    width={500} 
                    height={300} 
                    className="img-fluid" 
                  />
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
      <footer>
        <div className="container">
          <h3>Contacta con nosotros</h3>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebook.png" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.png" alt="Instagram" className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.png" alt="Twitter" className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.png" alt="LinkedIn" className="social-icon" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
