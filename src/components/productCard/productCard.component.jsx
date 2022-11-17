import { SelectToCartContext } from "../context/selectToCart.context";

import "./productCard.style.css";
import { useContext, useState } from "react";

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

  const {
    selectTriggered,

    setToggleOpenCart,
    setCardSelectedVariety,
    deleteCardDataFromSelectVariety,
  } = useContext(SelectToCartContext);

  const cardSelectHandler = (isChecked) => {
    setToggleOpenCart(false);
    if (selectTriggered && isChecked) {
      setCardSelectedVariety(item);
      console.log(isChecked);
      console.log(selectTriggered);
    }
    if (selectTriggered && isChecked === false) {
      deleteCardDataFromSelectVariety(item);
    }
  };

  return (
    <div className="card-container">
      <div
        className={`checkbox-container ${selectTriggered ? "showSelect" : ""}`}
      >
        <input
          type="checkbox"
          name=""
          value={item}
          id="checkBox"
          onChange={(event) => cardSelectHandler(event.target.checked)}
        />
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
