import { Fragment, useContext } from "react";
import { GoogleIcon } from "../googleIcon/googleIcon.component";
import { SelectToCartContext } from "../context/selectToCart.context";
import { CartProduct } from "../cart-product/cart-product.component";

import "./navBar.style.css";

export const NavBar = () => {
  const { cardVariety, toggleOpenCart, setToggleOpenCart, cardVarietyCount } =
    useContext(SelectToCartContext);

  return (
    <Fragment>
      <div className="navbar-container">
        <div className="logo-container">
          <span className="logo-text">GrocerList</span>
        </div>
        <div className="tools-button-container">
          <div
            className="cart-btn-container"
            onClick={() => {
              setToggleOpenCart(!toggleOpenCart);
            }}
          >
            <div
              className={`cart-counter ${
                cardVarietyCount ? "showCounter" : ""
              }`}
            >
              {cardVarietyCount}
            </div>
            <GoogleIcon iconName={"shopping_cart"} />
          </div>
        </div>
      </div>
      <div
        className={`cart-container ${
          toggleOpenCart === true ? "showCart" : ""
        }`}
      >
        {cardVariety.map((e) => {
          return <CartProduct product={e} key={e.id} />;
        })}
      </div>
    </Fragment>
  );
};
