import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { GoogleIcon } from "../googleIcon/googleIcon.component";
import { SelectToCartContext } from "../context/selectToCart.context";
import { CartProduct } from "../cart-product/cart-product.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navBar.style.css";
import { UserContext } from "../context/user.context";

export const NavBar = () => {
  const { cardVariety, toggleOpenCart, setToggleOpenCart, cardVarietyCount } =
    useContext(SelectToCartContext);
  const { currentUser } = useContext(UserContext);
  const logOutHandler = async () => {
    await signOutUser();
  };
  console.log(cardVariety);
  return (
    <Fragment>
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/">
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
                  color: "red",
                }}
              >
                L
              </div>
              <div
                style={{
                  fontSize: "20px",
                  position: "fixed",
                  top: "27px",
                  left: "90px",
                  color: "black",
                }}
              >
                ist
              </div>
              <div
                style={{
                  position: "fixed",
                  fontSize: "20px",
                  top: "14px",
                  left: "75px",
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
                  left: "113px",
                  color: "black",
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
            <span>Home</span>
          </Link>

          {currentUser === null ? (
            <Link className="navigate-button" to="/sign-in">
              <span>Sign-in</span>
            </Link>
          ) : (
            <Fragment>
              <Link className="navigate-button" to="/products">
                <span>Products</span>
              </Link>
              <Link className="navigate-button" to="/">
                <span onClick={logOutHandler}>Logout</span>
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
            </Fragment>
          )}
        </div>
      </div>
      <div
        className={`cart-container ${
          toggleOpenCart === true ? "showCart" : ""
        }`}
      >
        <div className="cart-dropdown-header">
          <div className="cart-dropdown-title-container">
            <span>{`Your Diet List (${cardVarietyCount})`}</span>
          </div>
          <div
            onClick={() => {
              setToggleOpenCart(!toggleOpenCart);
            }}
            className="cart-dropdown-title-container"
          >
            <Link
              style={{ marginRight: "0px" }}
              className="navigate-button"
              to="cart"
            >
              <span>SEE ALL</span>
            </Link>
          </div>
        </div>
        {cardVariety.map((e) => {
          return <CartProduct product={e} key={e._id} />;
        })}
      </div>
      <Outlet />
    </Fragment>
  );
};
