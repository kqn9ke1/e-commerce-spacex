import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import ProductsContext from "./contexts/ProductsContext/ProductsContext";
import AuthContext from "./contexts/AuthContext/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import Toastify from "./components/common/Toastify/Toastify";

function App() {
  return (
    <BrowserRouter>
      <ProductsContext>
        <AuthContext>
          <Toastify />
          <AppRoutes />
        </AuthContext>
      </ProductsContext>
    </BrowserRouter>
  );
}

export default App;
