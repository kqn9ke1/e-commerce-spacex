import React from "react";
import ProductList from "../../components/productList/ProductList";
import Pagination from "../../components/common/Pagination/Pagination";
import { Box } from "@mui/material";

const CatalogPage = () => {
  return (
    <div>
      <ProductList />

      <Box sx={{ maxWidth: "max-content", margin: "30px auto" }}>
        <Pagination />
      </Box>
    </div>
  );
};

export default CatalogPage;
