import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

import { useCart } from "../../../contexts/CartContextProvider";

import { useFavorite } from "../../../contexts/FavContextProvider";
import { notify } from "../../Toastify/Toastify";
import { useLikeContext } from "../../../contexts/LikeContextProvider";
import { useAuth } from "../../../contexts/AuthContextProvider";

export default function OneProduct({ item }) {
  const { addDelToCart, isProdInCart } = useCart();
  const { addDelToFav, isProdInFav } = useFavorite();
  const [inCart, setInCart] = useState(isProdInCart(item.id));
  const [inFav, setInFav] = useState(isProdInFav(item.id));
  const { currentUser } = useAuth();

  const { addLike, delLike, getLike, likes, allLikes } = useLikeContext();
  const isLikedF = () =>
    likes.some((like) => {
      return like.prodId === item.id;
    });
  const [disabled, setDisabled] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(isLikedF());

  React.useEffect(() => {
    getLike();
  }, []);
  React.useEffect(() => {
    setIsLiked(isLikedF());
  }, [likes]);

  const handleSubmitLike = () => {
    let forDelId = likes.find((prod) => prod.prodId === item.id);
    // console.log(forDelId);
    let obj = {
      user: currentUser.user,
      prodId: item.id,
    };
    // console.log(obj);
    let checkProdIsLiked = likes.some((elem) => {
      return obj.prodId === elem.prodId;
    });
    if (checkProdIsLiked && forDelId) {
      delLike(forDelId.id);
    } else {
      addLike(obj);
    }
  };
  let oneProdLikes = allLikes.filter((elem) => {
    return elem.prodId === item.id;
  });

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ maxWidth: 345, height4: 500, backgroundColor: "#f7f7f7" }}
        className="one-card"
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            className="card-title"
          >
            {item.title}
          </Typography>

          <IconButton
            color="inherit"
            onClick={() => {
              setDisabled(true);
              handleSubmitLike();
            }}
          >
            {isLiked ? (
              <FavoriteIcon sx={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
            {oneProdLikes.length}
          </IconButton>
        </div>

        <CardContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" color="green">
              ${item.price}
            </Typography>
            <Typography variant="body1">For: {item.type}</Typography>
          </div>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image="https://logopond.com/logos/aba9157a48d224a8f7d7ca4f751dd8f1.png"
          alt={item.title}
        />
        <CardActions>
          {currentUser.user === null ? (
            <IconButton
              onClick={() => {
                notify(
                  "error",
                  "Dear Customer, please sign IN/UP to purchase."
                );
              }}
              color="inherit"
            >
              <ShoppingCartIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                addDelToCart(item);
                setInCart(isProdInCart(item.id));
              }}
              color={inCart ? "warning" : "inherit"}
            >
              <ShoppingCartIcon />
            </IconButton>
          )}

          {currentUser.user === null ? (
            <IconButton
              onClick={() => {
                notify(
                  "error",
                  "Dear Customer, please sign IN/UP to save favorites."
                );
              }}
              color="inherit"
            >
              <BookmarkAddIcon />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              onClick={() => {
                addDelToFav(item);
                setInFav(isProdInFav(item.id));
              }}
            >
              {inFav ? <BookmarkRemoveIcon /> : <BookmarkAddIcon />}
            </IconButton>
          )}

          <Button component={Link} to={`detail/${item.id}`} size="small">
            more...
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
