import { useState, useEffect, useContext } from "react";

import "./searchBarProduct.css";

import { SearchProductContext } from "../context/searchProduct.context";
import { ToasterContext } from "../context/toaster.context";

export const SearchBarProduct = () => {
  const [searchedProduct, setSearchedProduct] = useState("");

  const { setProductResult, setStatusVerbose, setOnSearchUsed } =
    useContext(SearchProductContext);
  const { setToasterTrigger } = useContext(ToasterContext);
  let searchKeyword = "";
  let inputSearchValue = "";

  useEffect(() => {
    fetch(
      `https://world.openfoodfacts.org/api/v0/product/${searchedProduct}.json`
    )
      .then((response) => response.json())
      .then((resJson) => setProductResult(resJson.product));
    setInterval(() => {
      setStatusVerbose("done");
    }, 3000);
  }, [searchedProduct]);

  const onSearchHandler = (event) => {
    const searchValue = event.target.value.toLocaleLowerCase();
    searchKeyword = searchValue;

    inputSearchValue = searchValue;
    if (inputSearchValue === "") {
      setToasterTrigger(false);
    }
    // inputSearchValue === "" ? setOnSearchUsed(false) :
  };

  const submitHandler = () => {
    setSearchedProduct(searchKeyword);
    setStatusVerbose("loading");
    setOnSearchUsed(true);
    setToasterTrigger(false);
  };
  return (
    <div>
      <input type="search" onChange={onSearchHandler} />
      <button onClick={submitHandler}>Search </button>
    </div>
  );
};
