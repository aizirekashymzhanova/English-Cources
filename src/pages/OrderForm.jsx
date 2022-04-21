import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import { notify } from "../components/Toastify/Toastify";
import { useCart } from "../contexts/CartContextProvider";

export default function App() {
  const navigate = useNavigate();
  const { getCartLength, cartLength, cart } = useCart();
  const [textValues, SetTextValues] = useState({
    name: "",
    lastName: "",
    phone: "",
    address: "",
  });

  const handleChange = (event) => {
    let per = { ...textValues, [event.target.name]: event.target.value };
    SetTextValues(per);
  };

  const handlePay = () => {
    if (
      !textValues.name ||
      !textValues.lastName ||
      !textValues.phone ||
      !textValues.address
    ) {
      notify("error", "Fill all the blanks!");
    } else {
      navigate("/payment");
    }
  };
  return (
    <div
      style={{
        paddingTop: "10px",
        paddingBottom: "10px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <>
        <TextField
          id="standard-basic"
          name="name"
          label="First  Name"
          variant="standard"
          value={textValues.name}
          onChange={handleChange}
        />
        <br />
        <TextField
          id="standard-basic"
          name="lastName"
          label="Last Name"
          variant="standard"
          value={textValues.lastName}
          onChange={handleChange}
        />
        <br />
        <TextField
          id="standard-basic"
          name="phone"
          label="Phone Number"
          variant="standard"
          value={textValues.phone}
          onChange={handleChange}
        />
        <br />
        <TextField
          id="standard-basic"
          name="address"
          label="Address"
          variant="standard"
          value={textValues.address}
          onChange={handleChange}
        />
        <br />
        <br />

        <div style={{ display: "flex" }}></div>
        <br />
        <Typography>Total items quantity: {cartLength}</Typography>
        <br />
        <Button
          variant="outlined"
          color="warning"
          className="payment-inp"
          onClick={handlePay}
        >
          PAY ${cart.totalPrice}
        </Button>
        <br />
      </>
    </div>
  );
}
