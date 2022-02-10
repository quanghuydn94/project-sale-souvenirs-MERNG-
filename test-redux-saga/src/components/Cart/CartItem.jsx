import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import React, { useState } from "react";
import "./CartItem.scss";

export const CartItem = ({ cartItem, deleteCartItem, onChangeQty }) => {
  const [input, setInput] = useState(cartItem.qty);
  const onChange = (e) => {
    setInput(e.target.value);
    onChangeQty(cartItem.id, e.target.value);
  };
  return (
    <Card className="card-item">
      <CardMedia image={cartItem.image} style={{ width: 300, height: 200 }} />
      <CardContent className="card-content">
        <Box component="div">
          <Typography variant="h6">{cartItem.title}</Typography>
          <Typography variant="body2">{cartItem.description}</Typography>
        </Box>
        <Box>
          <TextField
            type="number"
            InputProps={{
              inputProps: {
                max: 100,
                min: 1,
              },
            }}
            label="Quantity"
            variant="outlined"
            onChange={onChange}
            value={input}
            size="small"
          />
          <Typography variant="body2">
            Price: {cartItem.price * cartItem.qty} $
          </Typography>
          <IconButton onClick={() => deleteCartItem(cartItem.id)}>
            <DeleteOutline color="secondary" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};
