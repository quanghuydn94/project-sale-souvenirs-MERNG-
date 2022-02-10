import {
  Box,
  Button,
  CardMedia,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { AddBox, InfoOutlined, LocalAtmOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  addToCart,
  loadCurrentItem,
} from "../../redux/Shopping/shopping-actions";
import "./Product.scss";

export const Product = () => {
  const dispatch = useDispatch();
  const router = useHistory();
  const products = useSelector((state) => state.shop);
  const [qty, setQty] = useState(1);
  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };
  const handleViewDetail = (id) => {
    router.push(`/products/${id}`);
    dispatch(loadCurrentItem(id));
  };
  return (
    <Box className="container-box">
      {products &&
        products.graphqlData.map((product, index) => (
          <Paper key={index} elevation={10} className="product">
            <Box className="content-product">
              <Typography variant="h6">{product.name}</Typography>
              <Typography>{product.title}</Typography>
              <Typography style={{ display: "flex", alignItems: "center" }}>
                <LocalAtmOutlined />
                {product.price}
              </Typography>
              <Box>
                <IconButton
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product.id)}
                >
                  <AddBox />
                </IconButton>
                <IconButton
                  className="view-detail-product"
                  size="small"
                  onClick={() => handleViewDetail(product.id)}
                >
                  <InfoOutlined />
                </IconButton>
              </Box>
            </Box>
            <CardMedia image={product.image} className="image-product" />
          </Paper>
        ))}
    </Box>
  );
};
