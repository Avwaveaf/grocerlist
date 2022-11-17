import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SnacksContextProvider } from "./components/context/snacksList";
import { SearchProductContextProvider } from "./components/context/searchProduct.context";
import { ToasterContextProvider } from "./components/context/toaster.context";
import { SelectToCartContextProvider } from "./components/context/selectToCart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SelectToCartContextProvider>
        <SnacksContextProvider>
          <SearchProductContextProvider>
            <ToasterContextProvider>
              <App />
            </ToasterContextProvider>
          </SearchProductContextProvider>
        </SnacksContextProvider>
      </SelectToCartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
