import { Button, Container, FormControl, Grid, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import LiveSearch from "../components/LiveSearch/LiveSearch";
import ProdHero from "../components/ProdHero/ProdHero";
import ProdList from "../components/Products/ProdList/ProdList";
import Subscription from "../components/Subscription/Subscription";

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
       <LiveSearch />
      </div> */}
      <ProdHero />

      <div>
        <ProdList />
      </div>

      <div className="submit-form">
        <div className="form-left">
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Subscription />
            <span
              style={{
                color: "rgb(15, 156, 244)",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Subscribe Us to receive news!
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="https://oktereza.ru/images/phone.gif"
              alt=""
              width="30%"
            />
          </div>
          <h4>Fill the form , we will contact you within 3 hours.</h4>
        </div>
        <div className="form-right">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <FormControl>
              <TextField id="outlined-basic" label="Name*" variant="outlined" />
              <br />
              <TextField
                id="outlined-basic"
                label="Number*"
                variant="outlined"
              />
              <br />
              <TextField
                id="outlined-basic"
                label="Email*"
                variant="outlined"
              />
              <br />
            </FormControl>
            <Button variant="contained" onClick={() => navigate("/")}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
