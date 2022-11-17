import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
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
          <Link className="navigate-button" to="/">
            <div
              style={{ display: "flex", position: "fixed", top: "10px" }}
              className="logo"
            >
              <div
                style={{
                  fontSize: "50px",
                  fontWeight: "medium",
                  position: "fixed",
                  top: "2px",
                  fontFamily: "pacifico",
                }}
              >
                L
              </div>
              <div
                style={{
                  fontSize: "20px",
                  position: "fixed",
                  top: "27px",
                  left: "60px",
                }}
              >
                ist
              </div>
              <div
                style={{
                  position: "fixed",
                  fontSize: "20px",
                  top: "14px",
                  left: "47px",
                  fontFamily: "pacifico",
                }}
                className="grocer-text"
              >
                Grocer
              </div>
              <div
                style={{
                  fontSize: "20px",
                  position: "fixed",
                  top: "25px",
                  left: "82px",
                }}
                className="blinking-underscore"
              >
                _
              </div>
            </div>
          </Link>
        </div>
        <div className="tools-button-container">
          <Link className="navigate-button" to="/">
            Home
          </Link>

          <Link className="navigate-button" to="/products">
            Products
          </Link>
          <Link className="navigate-button" to="/sign-in">
            Sign-in
          </Link>

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
      <Outlet />
    </Fragment>
  );
};
