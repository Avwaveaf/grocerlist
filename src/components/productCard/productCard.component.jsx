import { SelectToCartContext } from "../context/selectToCart.context";

import "./productCard.style.css";
import { useContext } from "react";

export const ProductCard = ({ item }) => {
  const {
    product_name,

    product_name_in,
    product_name_id,
    product_name_en = "product name",
    brands,
    code,
    ecoscore_grade,
    manufacturing_places,
    image_url = "https://via.placeholder.com/200/000000/FFFFFF/?text=Product Image",
  } = item;

  const { setToggleOpenCart, setCardSelectedVariety } =
    useContext(SelectToCartContext);

  const cardSelectHandler = () => {
    setToggleOpenCart(false);
    setCardSelectedVariety(item);
  };

  return (
    <div onClick={cardSelectHandler} className="card-container">
      <div className="add-text-container ">
        <span className="add-to-cart-text">add to cart</span>
      </div>
      <div>
        <div className="img-container">
          <img src={image_url} loading="lazy" alt="" />
        </div>
        <div className="card-content">
          <p className="product-title">
            {product_name
              ? product_name
              : product_name_in
              ? product_name_in
              : product_name_en
              ? product_name_en
              : product_name_id
              ? product_name_id
              : ""}
          </p>
        </div>
      </div>

      <div className="product-description">
        <div className="ecoscore-grade">
          {ecoscore_grade !== "unknown" && ecoscore_grade !== "not-applicable"
            ? ecoscore_grade.toUpperCase()
            : "-"}
        </div>
        <div className="product-brands-label">
          <p className="brands-name">{brands}</p>
        </div>
        <div className="product-barcode-label">
          <p className="product-barcode">{code}</p>
        </div>
        <div className="product-barcode-label">
          <p className="manufacturing-place">{manufacturing_places}</p>
        </div>
      </div>
    </div>
  );
};
