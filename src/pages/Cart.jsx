import React, { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
} from "@mui/material";
import { Button } from "@mui/material";
import { useCart } from "../contexts/CartContextProvider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Cart = () => {
  const { cart, getCart, changeProductCount, deleteProdInCart, getCartLength } =
    useCart();
  const navigate = useNavigate();

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <Container maxWidth="lg">
        <h1> MY CART</h1>
        {cart?.products.length > 0 ? (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                    {/* <TableCell sx={{ fontWeight: "bold" }} align="center">
                      Type
                    </TableCell> */}
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Image
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Price
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      SubPrice
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Count
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Delete
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.products.map((elem) => (
                    <TableRow
                      key={elem.item.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {elem.item.title}
                      </TableCell>
                      {/* <TableCell align="center">{elem.item.type}</TableCell> */}
                      <TableCell align="right">
                        <img
                          width="40px"
                          src={elem.item.img}
                          alt={elem.item.title}
                        />
                      </TableCell>
                      <TableCell align="right">{elem.item.price}</TableCell>
                      <TableCell align="right">{elem.subPrice}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() =>
                            changeProductCount(elem.count + 1, elem.item.id)
                          }
                        >
                          <ArrowDropUpIcon />
                        </IconButton>
                        {elem.count}
                        <IconButton
                          onClick={() => {
                            +elem.count > 0
                              ? changeProductCount(elem.count - 1, elem.item.id)
                              : deleteProdInCart(elem.item.id);
                          }}
                        >
                          <ArrowDropDownIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() => deleteProdInCart(elem.item.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Button
              variant="contained"
              onClick={() => navigate("/orderform")}
              sx={{ margin: "20px auto" }}
            >
              BUY NOW FOR ${cart.totalPrice}
            </Button>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <img
              width="60%"
              src="https://naukariemployment.com/assets/images/emptycart.png"
              alt=""
            />
            <br />
            <Button
              component={Link}
              variant="contained"
              to="/products"
              sx={{ margin: "20px" }}
            >
              Start Shopping
            </Button>
          </div>
        )}

        <h2>My cources</h2>
        <div style={{ display: "none" }}>
          {cart?.products.length > 0 ? (
            cart.products.map((elem) => (
              <div>
                <Accordion key={elem.item.id}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{elem.item.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{elem.item.descr}</Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))
          ) : (
            <h3>You don't have any active cources ,yet!</h3>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Cart;
