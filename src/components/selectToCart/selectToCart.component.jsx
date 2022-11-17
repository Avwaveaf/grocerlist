import { useContext } from "react";
import { GoogleIcon } from "../googleIcon/googleIcon.component";
import { SelectToCartContext } from "../context/selectToCart.context";
import "./selectToCart.style.css";

export const SelectToCart = () => {
  const { selectTriggered, setSelectTriggered } =
    useContext(SelectToCartContext);
  const selectButtonHandler = () => {
    setSelectTriggered(!selectTriggered);
  };

  return (
    <div className="switch-btn-container" onClick={() => selectButtonHandler()}>
      {selectTriggered ? (
        <GoogleIcon
          iconName={"toggle_on"}
          stylingClassName={"select-to-cart"}
        />
      ) : (
        <GoogleIcon
          iconName={"toggle_off"}
          stylingClassName={"select-to-cart"}
        />
      )}
    </div>
  );
};
