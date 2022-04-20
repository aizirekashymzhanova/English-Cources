import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./components/Admin/Add/Add";
import Edit from "./components/Admin/Edit/Edit";
import List from "./components/Admin/List/List";
import MainLayout from "./layouts/MainLayout";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Products from "./pages/Products";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<List />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default MyRoutes;
