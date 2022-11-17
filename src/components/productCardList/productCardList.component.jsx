import { ProductCard } from "../productCard/productCard.component";

import "./productCardList.style.css";

export const ProductCardList = ({ products }) => {
  return (
    <div className="product-card-list-container">
      {products.map((e) => {
        return <ProductCard key={e.id} item={e} />;
      })}
    </div>
  );
};
