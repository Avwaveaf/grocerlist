import { Routes, Route } from "react-router-dom";

import ProductExplore from "./routes/productExplore/productExplore.component";
import { NavBar } from "./components/navBar/navBar.component";
import { SignIn } from "./routes/sign-in/sign-in.component";

const HomePage = () => {
  return <div style={{ marginTop: "400px" }}>this is home page</div>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="products" element={<ProductExplore />} />
      </Route>
    </Routes>
  );
}

export default App;
