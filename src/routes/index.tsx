import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import BaseLayout from "../layouts/BaseLayout/BaseLayout";
import AddProductPage from "../pages/AddProductPage/AddProductPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import EditProductPage from "../pages/EditProductPage/EditProductPage";
import AuthPage from "../pages/AuthPage/AuthPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/details/:id" element={<ProductDetailPage />} />
        <Route path="/edit/:id" element={<EditProductPage />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default AppRoutes;
