import React, { FC, createContext, useReducer, useState } from "react";
import { IInitState, ProductsContextType, TProductAction } from "./types";
import axios from "axios";
import { IProduct, ProductCreate } from "../../models/products";
import { API, LIMIT } from "../../utils/consts";
import { useSearchParams } from "react-router-dom";

export const productContext = createContext<ProductsContextType | null>(null);

type IProductContext = {
  children: React.ReactNode;
};

const initState: IInitState = {
  products: [],
  product: null,
  pageTotalCount: 1,
};

const reducer = (state: IInitState, action: TProductAction) => {
  switch (action.type) {
    case "products":
      return { ...state, products: action.payload };
    case "product":
      return { ...state, product: action.payload };

    case "pageTotalCount":
      return { ...state, pageTotalCount: action.payload };
    default:
      return state;
  }
};

const ProductsContext: FC<IProductContext> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [state, dispatch] = useReducer(reducer, initState);

  const [page, setPage] = useState<number>(
    +(searchParams.get("_page") as string) || 1
  );

  const getProducts = async () => {
    console.log(window.location);

    const { data, headers } = await axios.get<IProduct[]>(
      `${API}${window.location.search}`
    );

    const count = Math.ceil(headers["x-total-count"] / LIMIT);

    dispatch({
      type: "pageTotalCount",
      payload: count,
    });

    dispatch({
      type: "products",
      payload: data,
    });
  };

  // detail start
  const getOneProduct = async (id: number) => {
    const { data } = await axios.get(`${API}/${id}`);

    dispatch({
      type: "product",
      payload: data,
    });
  };

  const addProduct = async (newProduct: ProductCreate) => {
    await axios.post(API, newProduct);
  };
  const deleteProduct = async (id: number) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  const editProduct = async (newData: IProduct) => {
    await axios.put(`${API}/${newData.id}`, newData);
  };

  const value = {
    products: state.products,
    product: state.product,
    page,
    pageTotalCount: state.pageTotalCount,
    getProducts,
    addProduct,
    deleteProduct,
    getOneProduct,
    editProduct,
    setPage,
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductsContext;
