import React, { FC, createContext, useReducer } from "react";
import { IProduct } from "../models/products";

type ContextType = {
  counter: number;
  increment2: () => void;
};

export const hwContext = createContext<ContextType | null>(null);

type ProductsContextType = {
  children: React.ReactNode;
};

type stateType = {
  products: IProduct[];
  counter: number;
};

const initState: stateType = {
  products: [],
  counter: 0,
};

type productsAction = {
  type: "products";
  payload: IProduct[];
};

type actionCounter = {
  type: "counter";
  payload: number;
};

type AllActionsType = productsAction | actionCounter;

const reducer = (state: stateType, action: AllActionsType) => {
  switch (action.type) {
    case "counter":
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};

const HWcontext: FC<ProductsContextType> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increment2 = () => {
    dispatch({
      type: "counter",
      payload: state.counter + 1,
    });
  };

  const value = {
    counter: state.counter,
    increment2,
  };
  return <hwContext.Provider value={value}>{children}</hwContext.Provider>;
};

export default HWcontext;
