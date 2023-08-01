import React, { useContext, useEffect } from "react";
import { Pagination as MuiPagination } from "@mui/material";
import { productContext } from "../../../contexts/ProductsContext/ProductsContext";
import { ProductsContextType } from "../../../contexts/ProductsContext/types";
import { useSearchParams } from "react-router-dom";
import { LIMIT } from "../../../utils/consts";

const Pagination = () => {
  const { page, setPage, pageTotalCount } = useContext(
    productContext
  ) as ProductsContextType;

  const [searchParams, setSearchParams] = useSearchParams();
  //!   console.log(...searchParams); //можно так развернуть

  useEffect(() => {
    setSearchParams({
      _page: page.toString(),
      _limit: LIMIT.toString(),
    });
  }, [page]);
  return (
    <MuiPagination
      count={pageTotalCount}
      page={page}
      color="primary"
      onChange={(_, value) => setPage(value)}
    />
  );
};

export default Pagination;
