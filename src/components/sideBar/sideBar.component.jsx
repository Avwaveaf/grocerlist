import { useState } from "react";
import "./sideBar.style.css";

import { GoogleIcon } from "../googleIcon/googleIcon.component";
import { SearchBarProduct } from "../searchBarProduct/searchBarProduct.component";

export const SideBar = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsShown(!isShown)}
        className="sideBar-toggle-button"
      >
        {isShown ? (
          <GoogleIcon
            iconName="arrow_back_ios"
            stylingClassName="ios-back-arrow"
          />
        ) : (
          <GoogleIcon iconName="menu" />
        )}
      </div>
      <div className={`sideBar-container ${isShown ? "show" : ""}`}>
        <SearchBarProduct />
        <h1>categories</h1>
        <p>food</p>
        <p>beverage</p>
      </div>
    </>
  );
};
