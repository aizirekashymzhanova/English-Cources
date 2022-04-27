import { Button, Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

let moment = require("moment");
let today = moment().format("MMMM Do YYYY, h:mm a");
const Invoice = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-anim">
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://www.seekpng.com/png/full/3-30770_record-total-participation-bhavani.png"
            alt=""
            width="100%"
          />
          <h3>Enjoy , the cource . You can start studying immediately!</h3>
          {today}
          <Button
            variant="contained"
            className="inv-btn"
            onClick={() => navigate("/")}
          >
            Get started!
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Invoice;
