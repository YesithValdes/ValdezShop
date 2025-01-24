
import { titleFont } from "@/app/config/fonts";
import { Product } from "@/interfaces";
import { ProductGridItem } from "./ProductGridItem";

interface Props {
    products: Product[];
  }



export const ProductGrid = ({products}: Props) => {
    return (
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <ProductGridItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      );
}