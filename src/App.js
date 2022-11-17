import { useContext, useEffect, Fragment } from "react";
import "./App.css";
import { SnacksContext } from "./components/context/snacksList";
import { SearchProductContext } from "./components/context/searchProduct.context";

import { ProductCardList } from "./components/productCardList/productCardList.component";
import { NavBar } from "./components/navBar/navBar.component";
import { ProductCard } from "./components/productCard/productCard.component";
import { Loader } from "./components/loader/loader.component";
import { SideBar } from "./components/sideBar/sideBar.component";
import { Toaster } from "./components/toaster/toaster.component";
import { ToasterContext } from "./components/context/toaster.context";
import { SelectToCart } from "./components/selectToCart/selectToCart.component";
import { Pagination } from "./components/pagination/pagination.component";

function App() {
  const {
    snack,
    setSnack,
    // beverages,
    // setBeverages,
    pageCount,
    setPageCount,
    currPage,
    setCurrPage,
  } = useContext(SnacksContext);
  const { productResult, statusVerbose, setStatusVerbose, onSearchUsed } =
    useContext(SearchProductContext);
  const { toasterTrigger, setToasterTrigger } = useContext(ToasterContext);

  useEffect(() => setStatusVerbose("loading"), []);

  useEffect(() => {
    fetch(`https://id.openfoodfacts.org/${currPage}/.json`)
      .then((response) => response.json())
      .then((resJson) => {
        setSnack(resJson.products);
        setPageCount(Math.floor(Number(resJson.count) / 24));
        setCurrPage(resJson.page);
        setStatusVerbose("done");
      });

    // setInterval(() => {
    //   setStatusVerbose("done");
    // }, 3000);
  }, [currPage]);

  // useEffect(() => {
  //   fetch("https://id.openfoodfacts.org/kategori/en:beverages/.json")
  //     .then((response) => response.json())
  //     .then((resJson) => setBeverages(resJson.products));
  //   setInterval(() => {
  //     setStatusVerbose("done");
  //   }, 3000);
  // }, []);

  const toastTriggerLogic = (onSearchUsed, productResult) => {
    return onSearchUsed && productResult === undefined
      ? setToasterTrigger(true)
      : "";
  };

  useEffect(() => {
    toastTriggerLogic(onSearchUsed, productResult);
  }, [onSearchUsed, productResult]);

  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <div className="content-container">
        <div className="content">
          <SelectToCart slide={snack} />
          <Loader status={statusVerbose} />
          {productResult && onSearchUsed ? (
            <ProductCard item={productResult} />
          ) : toasterTrigger ? (
            <Fragment>
              <Toaster name="Product" />
              <ProductCardList products={snack} />
            </Fragment>
          ) : (
            <ProductCardList products={snack} />
          )}
          <Pagination pageCount={pageCount} currentPage={currPage} />
        </div>
      </div>
    </div>
  );
}

export default App;
