import React from "react";

import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";

const MainLayout = () => {
  return (
    <div
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
