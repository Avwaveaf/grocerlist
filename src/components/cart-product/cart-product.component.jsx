import { useContext } from "react";
import { SelectToCartContext } from "../context/selectToCart.context";
import "./cart-product.style.css";

export const CartProduct = ({ product }) => {
  const { deleteCardDataFromSelectVariety } = useContext(SelectToCartContext);
  const {
    product_name,
    product_name_en,
    product_name_id,
    product_name_in,
    ecoscore_grade,
    image_url = "https://via.placeholder.com/100/000000/FFFFFF/?text=Product Image",
  } = product;

  return (
    <div className="cart-product-container">
      <div className="cart-product-img-container">
        <img src={image_url} alt={product_name_en} />
      </div>
      <div className="cart-product-description">
        <div className="cart-product-barcode">{product._id}</div>
        <div className="cart-product-title">
          {product_name
            ? product_name
            : product_name_in
            ? product_name_in
            : product_name_en
            ? product_name_en
            : product_name_id
            ? product_name_id
            : ""}
        </div>
      </div>
      <div className="cart-product-grade">
        <span>Nutriscore : &nbsp;</span>
        {ecoscore_grade !== "unknown" && ecoscore_grade !== "not-applicable"
          ? ecoscore_grade
          : "-"}
      </div>
    </div>
  );
};
