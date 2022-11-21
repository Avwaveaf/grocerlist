import { useContext } from "react";
import { addCollectionAndDoc } from "../../utils/firebase/firebase.utils";
import { SelectToCartContext } from "../../components/context/selectToCart.context";
import { CartProduct } from "../../components/cart-product/cart-product.component";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./cart.style.css";
import { UserContext } from "../../components/context/user.context";
export const Cart = () => {
  const { currentUser } = useContext(UserContext);
  const {
    cardVariety,
    setCardVariety,
    cardVarietyCount,
    deleteCardDataFromSelectVariety,
  } = useContext(SelectToCartContext);
  const removeBtnHandler = (item) => {
    deleteCardDataFromSelectVariety(item);
  };
  const checkOutHandler = () => {
    // const dietList = { cardVariety };
    addCollectionAndDoc(cardVariety, currentUser);

    setCardVariety([]);
  };

  return (
    <div className="cartPage-container">
      <div className="cartPage-product-list-container">
        {cardVarietyCount ? (
          <div className="cartPage-product">
            {cardVariety.map((e) => {
              return (
                <div key={e._id}>
                  <Link className="cartPage-product-link" to="product">
                    <CartProduct product={e} />
                  </Link>
                  <button
                    onClick={() => {
                      removeBtnHandler(e);
                    }}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
            <button onClick={checkOutHandler}>Checkout</button>
          </div>
        ) : (
          <div className="item-list-unavailable">
            No product to be shown add some in Products Page
          </div>
        )}
      </div>

      <div className="product-page-container">{<Outlet />}</div>
    </div>
  );
};
