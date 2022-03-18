import { Box, Grid, ListItem, Paper, Typography } from "@material-ui/core";
import { PaymentOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";
import { CartItem } from "./CartItem";

export const Cart = ({ deleteCartItem, onChangeQty }) => {
  const [cart, setCart] = useState([]);
  const [avoidReading, setAvoidReading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (!cart.length && !avoidReading) {
      const jsonCarts = localStorage.getItem("carts");
      const localCarts = JSON.parse(jsonCarts);
      setCart(localCarts);
    }
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [
    cart,
    avoidReading,
    cart,
    totalPrice,
    totalItems,
    setTotalPrice,
    setTotalItems,
  ]);

  // useEffect(() => {
  //   let items = 0;
  //   let price = 0;

  //   cart.forEach((item) => {
  //     items += item.qty;
  //     price += item.qty * item.price;
  //   });

  //   setTotalItems(items);
  //   setTotalPrice(price);
  // }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const checkout = () => {};
  return (
    <Box className="cart-container">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          {cart &&
            cart.map((item, index) => (
              <div key={index}>
                <CartItem
                  cartItem={item}
                  deleteCartItem={deleteCartItem}
                  onChangeQty={onChangeQty}
                />
              </div>
            ))}
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={10}>
            <Typography variant="h5">Cart Summary</Typography>
            {cart &&
              cart.map((item) => (
                <ListItem key={item.id}>
                  {item.title}-{item.price * item.qty}$
                </ListItem>
              ))}
            <Typography variant="h6">
              Total: <Typography component="span">({totalItems}) </Typography>
              {totalPrice}$
            </Typography>
            <Link to="" onClick={checkout}>
              <Typography variant="body1">
                Proceed To Checkout <PaymentOutlined />
              </Typography>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
