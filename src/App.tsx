import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import ProductsContext from "./contexts/ProductsContext/ProductsContext";

function App() {
  return (
    <BrowserRouter>
      <ProductsContext>
        <AppRoutes />
      </ProductsContext>
    </BrowserRouter>
  );
}

export default App;
