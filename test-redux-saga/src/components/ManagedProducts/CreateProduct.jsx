import { Box, Button, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import "./CreateProduct.scss";
import SnackbarNoti from "../Snackbar/Snackbar";
const SnackbarType = {
  success: "success",
  fail: "fail",
};

export const CreateProduct = ({
  onChangeInput,
  newProduct,
  onAddProduct,
  snackRef,
}) => {
  return (
    <Box component="div" className="create-product">
      <form onSubmit={onAddProduct}>
        <Paper elevation={10}>
          <Typography gutterBottom variant="h5">
            New Product
          </Typography>
          <TextField
            variant="outlined"
            className="input-create"
            name="name"
            label="Name"
            onChange={onChangeInput}
            value={newProduct.name}
            fullWidth
            required
          />
          <TextField
            variant="outlined"
            className="input-create"
            name="title"
            label="Title"
            onChange={onChangeInput}
            value={newProduct.title}
            fullWidth
            required
          />
          <TextField
            variant="outlined"
            className="input-create"
            name="description"
            label="Description"
            onChange={onChangeInput}
            value={newProduct.description}
            fullWidth
            required
          />
          <TextField
            variant="outlined"
            className="input-create"
            name="image"
            label="Address image"
            onChange={onChangeInput}
            value={newProduct.image}
            fullWidth
            required
          />
          <TextField
            variant="outlined"
            className="input-create"
            name="price"
            label="Price"
            onChange={onChangeInput}
            value={newProduct.price}
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            size="small"
            color="secondary"
          >
            Create
          </Button>
        </Paper>
      </form>
      <SnackbarNoti
        ref={snackRef}
        message="Task Completed"
        type={SnackbarType.success}
      />
    </Box>
  );
};
