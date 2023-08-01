import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../../contexts/ProductsContext/ProductsContext";
import { ProductsContextType } from "../../contexts/ProductsContext/types";
import { CircularProgress } from "@mui/material";
import ProductItem from "../../components/common/ProductItem/ProductItem";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { product, getOneProduct } = useContext(
    productContext
  ) as ProductsContextType;

  useEffect(() => {
    // if(id){
    //     getOneProduct(+id)
    // }
    id && getOneProduct(+id);
  }, []);

  console.log(product);

  return (
    <div>{product ? <ProductItem item={product} /> : <CircularProgress />}</div>
  );
};

export default ProductDetailPage;
