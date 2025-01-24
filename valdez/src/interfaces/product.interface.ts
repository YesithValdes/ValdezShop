export interface Product {
    id: string; // Identificador único
    nombre: string; // Nombre del artículo
    descripcion: string; // Breve descripción del artículo
    precio: number; // Precio del artículo
    precioDescuento?: number; // Precio con descuento (opcional)
    categoria: string; // Categoría del artículo
    disponibilidad: string; // Estado del stock (e.g., "En stock", "Agotado")
    tags?: string[]; // Etiquetas o palabras clave (opcional)
    materiales: string; // Materiales utilizados en el producto
    dimensiones?: string; // Dimensiones (opcional)
    peso?: string; // Peso del artículo (opcional)
    colores?: string[]; // Lista de colores disponibles (opcional)
    imagenPrincipal: string; // URL de la imagen principal del producto
    galeriaImagenes?: string[]; // URLs de imágenes adicionales (opcional)
    stock: number; // Cantidad en inventario
    valoracion?: number; // Valoración promedio (opcional)
    numOpiniones?: number; // Número de opiniones (opcional)
    paisOrigen: string; // País de origen del producto
    costoEnvio?: number; // Costo estimado de envío (opcional)
    garantia?: string; // Información de la garantía (opcional)
    opcionesPersonalizacion?: string[]; // Opciones para personalizar (e.g., grabado) (opcional)
    genero: string; // Género del producto (e.g., "hombre", "mujer")
  }
  