import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useFavorite } from "../contexts/FavContextProvider";

const Favorite = () => {
  const { fav, getFav, deleteProdInFav } = useFavorite();

  useEffect(() => {
    getFav();
  }, []);
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>My Favorites</h1>
      <Grid container spacing={2}>
        {fav?.products.length > 0 ? (
          fav.products.map((elem) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={elem.item.id}>
              <Container>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: "350px",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={elem.item.img}
                    alt={elem.item.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="body1"
                      color="black"
                      component="div"
                      sx={{ fontWeight: "bold" }}
                    >
                      {elem.item.title}
                    </Typography>
                    <br />
                    <Button
                      style={{ fontSize: "15px" }}
                      onClick={() => deleteProdInFav(elem.item.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      style={{ fontSize: "15px" }}
                      component={Link}
                      to={`/products/detail/${elem.item.id}`}
                    >
                      more...
                    </Button>
                  </CardContent>
                </Card>
              </Container>
            </Grid>
          ))
        ) : (
          <>
            <Grid item xs={12} sm={12} md={12}>
              <h2>You don't have any favorite product yet!</h2>
              <br />
              <img
                width="60%"
                src="https://media0.giphy.com/media/3ohhwsjzpejaSWoTkI/200.gif"
                alt=""
              />
              <br />
              <Button
                component={Link}
                variant="outlined"
                color="inherit"
                to="/products"
                sx={{ margin: "10px" }}
              >
                Start Shopping
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default Favorite;
