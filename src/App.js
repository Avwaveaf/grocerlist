import { Routes, Route } from "react-router-dom";

import ProductExplore from "./routes/productExplore/productExplore.component";
import { NavBar } from "./components/navBar/navBar.component";
import { SignIn } from "./routes/sign-in/sign-in.component";
import { Fragment, useContext } from "react";
import { UserContext } from "./components/context/user.context";
import { Cart } from "./routes/cart/cart.component";
import { ProductInfo } from "./routes/product-info/product-info.component";
import { MyDiet } from "./routes/my-diet/my-diet.component";
import { HomePage } from "./routes/home-page/home-page.container";
function App() {
  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="sign-in" element={<SignIn />} />
        {currentUser === null ? (
          ""
        ) : (
          <Fragment>
            <Route path="products" element={<ProductExplore />} />
            <Route path="cart" element={<Cart />}>
              <Route path="product" element={<ProductInfo />} />
            </Route>
            <Route path="mydiet" element={<MyDiet />} />
          </Fragment>
        )}
      </Route>
    </Routes>
  );
}

export default App;
