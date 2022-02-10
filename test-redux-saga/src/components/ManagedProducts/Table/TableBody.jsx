import React, { useState, useRef } from "react";
import {
  CardMedia,
  Fade,
  IconButton,
  Modal,
  TableCell,
  TextField,
  Typography,
  Backdrop,
  Button,
} from "@material-ui/core";
import {
  DeleteForeverOutlined,
  EditOutlined,
  FindInPageOutlined,
} from "@material-ui/icons";
import "./TableBody.scss";
import { useDispatch } from "react-redux";
import { loadCurrentItem } from "../../../redux/Shopping/shopping-actions";
import { useHistory } from "react-router-dom";

export const TableBodyProducts = ({
  product,
  deleteProduct,
  changeEditFormData,
  handleClose,
  handleOpen,
  open,
  editForm,
  update,
}) => {
  const dispatch = useDispatch();
  const router = useHistory();
  const inputText = useRef();
  const viewDetail = (id) => {
    router.push(`/products/${id}`);
    dispatch(loadCurrentItem(id));
  };
  return (
    <>
      <TableCell size="small">{product.name}</TableCell>
      <TableCell size="small">
        <CardMedia image={product.image} style={{ width: 100, height: 50 }} />{" "}
      </TableCell>
      <TableCell size="small">{product.price}$</TableCell>
      <TableCell size="small">
        <IconButton
          className="view-button"
          onClick={() => viewDetail(product.id)}
        >
          <FindInPageOutlined />
        </IconButton>
        <IconButton
          className="edit-button"
          onClick={(event) => handleOpen(event, product)}
        >
          <EditOutlined />
        </IconButton>
        <IconButton
          className="delete-button"
          onClick={() => deleteProduct(product)}
        >
          <DeleteForeverOutlined />
        </IconButton>
      </TableCell>
      <Modal
        className="modal-edit"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <form onSubmit={update}>
            <Typography gutterBottom>Change Infor</Typography>
            <TextField
              ref={inputText}
              className="input-edit"
              label="Name"
              name="name"
              value={editForm.name}
              onChange={changeEditFormData}
              variant="outlined"
              fullWidth
              size="small"
            />
            <TextField
              ref={inputText}
              className="input-edit"
              label="Description"
              name="description"
              value={editForm.description}
              onChange={changeEditFormData}
              variant="outlined"
              fullWidth
              size="small"
            />
            <TextField
              ref={inputText}
              className="input-edit"
              type="file"
              name="image"
              // value={editForm.image}
              // onChange={changeEditFormData}
              variant="outlined"
              fullWidth
              size="small"
            />
            <TextField
              ref={inputText}
              className="input-edit"
              label="Price"
              name="price"
              value={editForm.price}
              onChange={changeEditFormData}
              variant="outlined"
              fullWidth
              size="small"
            />
            <TextField
              ref={inputText}
              className="input-edit"
              label="Title"
              name="title"
              value={editForm.title}
              onChange={changeEditFormData}
              variant="outlined"
              fullWidth
              size="small"
            />
            <Button
              variant="contained"
              size="small"
              color="secondary"
              type="submit"
            >
              Save
            </Button>
          </form>
        </Fade>
      </Modal>
    </>
  );
};
