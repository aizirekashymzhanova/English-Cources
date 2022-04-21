import React, { useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";

import { useProductContext } from "../contexts/ProductContextProvider";
import MySkeleton from "../components/Skeleton/MySkeleton";
import AddCom from "../components/Com/AddCom";
import ListEditCom from "../components/Com/List-EditCom";
import { useComContext } from "../contexts/ComContextProvider";

const ProdDetail = () => {
  const { prodId } = useParams();
  const { getOneProduct, oneProd } = useProductContext();
  const { getOneCom, oneCom, getCom } = useComContext();

  useEffect(() => {
    getOneProduct(prodId);
  }, []);
  useEffect(() => {
    getCom(prodId);
  }, []);

  return (
    <>
      <Container
        sx={{
          padding: "20px",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          // bgcolor: "#FFEFBA",
        }}
      >
        {oneProd ? (
          <>
            <div className="oneProd-detail">
              <img width="100%" src={oneProd.img} alt="" />
              <div>
                <h2>{oneProd.title}</h2>
                <Typography m="10px" align="center">
                  {oneProd.description}
                </Typography>
                <Typography m="5px"> ${oneProd.price}</Typography>
                <Link to="/products" className="mobile-link">
                  <Button variant="outlined" color="warning">
                    Check other cources
                  </Button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <MySkeleton />
        )}
      </Container>
      <Box>
        <ListEditCom />
        <AddCom />
      </Box>
    </>
  );
};

export default ProdDetail;
