import React, { useContext, useEffect } from "react";
import { productContext } from "../../contexts/ProductsContext/ProductsContext";
import { ProductsContextType } from "../../contexts/ProductsContext/types";
import Grid from "@mui/material/Grid/Grid";
import ProductItem from "../common/ProductItem/ProductItem";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const { products, getProducts } = useContext(
    productContext
  ) as ProductsContextType;

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  console.log(products);

  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        {products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
