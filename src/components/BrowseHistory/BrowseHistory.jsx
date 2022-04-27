import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const BrowseHistory = () => {
  const navigate = useNavigate();
  let his = JSON.parse(localStorage.getItem("history"));
  return (
    <div className="recs-card">
      {his?.products.length > 0 ? (
        his.products.map((elem) => (
          <Card
            sx={{
              maxWidth: 245,
              marginRight: "5px",
              marginBottom: "10px",
            }}
            key={elem.item.id}
            onClick={() => navigate("/products")}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={elem.item.imgS}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {elem.item.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      ) : (
        <h2> is empty</h2>
      )}
    </div>
  );
};

export default BrowseHistory;
