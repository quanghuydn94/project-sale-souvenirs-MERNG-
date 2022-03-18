import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Details.scss";

export const Details = () => {
  const product = useSelector((state) => state.shop.currentItem);
  return (
    <Paper elevation={10} className="container-details">
      {product && (
        <Box component="div" className="content-details">
          <img src={product.image} alt="" width={400} heigh={300} />
          <Box component="div">
            <Typography variant="h5">{product.title}</Typography>
            <Typography variant="body2">
              {product.title} {product.description}
            </Typography>
            <Typography variant="body2">{product.price} $</Typography>
          </Box>
          <Link to="/products">
            <Typography variant="h6">Continue shopping</Typography>
          </Link>
        </Box>
      )}
    </Paper>
  );
};
