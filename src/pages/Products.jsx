import { Container } from "@mui/material";
import React from "react";
import Hero from "../components/Hero/Hero";
import ProdList from "../components/Products/ProdList/ProdList";

const Products = () => {
  return (
    <div>
      <Hero />
      <Container>
        <ProdList />
      </Container>
    </div>
  );
};

export default Products;
