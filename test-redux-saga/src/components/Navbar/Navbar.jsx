import {
  AppBar,
  Badge,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const router = useHistory();
  const cart = useSelector((state) => state.shop.cart);
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  const handleViewCart = () => {
    router.push("/cart");
  };
  return (
    <AppBar>
      <Toolbar>
        <Grid container spacing={3}>
          <Grid item xs={8} className="cart-bar">
            <Box className="nav-link">
              <NavLink
                to="/"
                className="link"
                activeClassName="active"
                exact={true}
              >
                <Typography component="h6">Home</Typography>
              </NavLink>
              <NavLink to="/products" className="link">
                <Typography component="h6">Shop</Typography>
              </NavLink>
              <NavLink to="/managed-products" className="link">
                <Typography component="h6">Management</Typography>
              </NavLink>
              <NavLink to="/register" className="link">
                <Typography>Register</Typography>
              </NavLink>
              <NavLink to="/login" className="link">
                <Typography>Login</Typography>
              </NavLink>
            </Box>
            <Typography>
              <IconButton aria-label="cart" onClick={handleViewCart}>
                <Badge
                  badgeContent={cartCount ? cartCount : 0}
                  color="secondary"
                >
                  <ShoppingCartOutlined />
                </Badge>
              </IconButton>
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
