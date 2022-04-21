import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./components/Admin/Add/Add";
import Edit from "./components/Admin/Edit/Edit";
import List from "./components/Admin/List/List";
import MainLayout from "./layouts/MainLayout";
import Admin from "./pages/Admin";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProdDetail from "./pages/ProdDetail";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import OrderForm from "./pages/OrderForm";
import Payment from "./pages/Payment";
import Invoice from "./pages/Invoice";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/detail/:prodId" element={<ProdDetail />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orderform" element={<OrderForm />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/invoice" element={<Invoice />} />
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
