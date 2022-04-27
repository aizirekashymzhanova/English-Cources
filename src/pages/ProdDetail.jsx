import React, { useEffect, useState } from "react";

import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Rating,
} from "@mui/material";

import { useProductContext } from "../contexts/ProductContextProvider";
import MySkeleton from "../components/Skeleton/MySkeleton";
import AddCom from "../components/Com/AddCom";
import ListEditCom from "../components/Com/List-EditCom";
import { useComContext } from "../contexts/ComContextProvider";

const ProdDetail = () => {
  const { prodId } = useParams();
  const { getOneProduct, oneProd, getProducts, products } = useProductContext();
  const { getCom } = useComContext();
  const [rec, setRec] = useState([]);
  const [value, setValue] = React.useState(4);
  const navigate = useNavigate();
  useEffect(() => {
    getOneProduct(prodId);
  }, []);
  useEffect(() => {
    getCom(prodId);
  }, []);
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    recomendation();
  }, [products]);

  async function recomendation() {
    let newArr = await products.filter((item) => {
      //console.log(item);
      return item.type === oneProd.type;
    });
    setRec(newArr);
  }

  return (
    <div className="detail">
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
                <Typography m="10px" align="left" variant="h5">
                  {oneProd.description}
                </Typography>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Typography m="5px" variant="h4">
                    ${oneProd.price}
                  </Typography>
                  <Rating
                    sx={{ marginRight: "10px" }}
                    name="simple-controlled"
                    size="small"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <MySkeleton />
        )}

        <h3>Recommendations</h3>
        <div className="recs-card">
          {rec && rec.length > 0
            ? rec.map((product) => (
                <Card
                  sx={{
                    maxWidth: 245,
                    marginRight: "5px",
                    marginBottom: "10px",
                  }}
                  key={product.id}
                  onClick={() => navigate("/products")}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={product.imgS}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div">
                        Type: {product.type}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))
            : " "}
        </div>
      </Container>
      <Box>
        <ListEditCom />
        <AddCom />
      </Box>
    </div>
  );
};

export default ProdDetail;
