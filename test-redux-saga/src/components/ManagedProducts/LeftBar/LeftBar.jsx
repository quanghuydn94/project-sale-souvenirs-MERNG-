import { Box, MenuList, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import "./LeftBar.scss";

export const LeftBar = () => {
  return (
    <Box className="left-bar">
      <MenuList>
        <Link to="/managed-products">
          <MenuItem>Management</MenuItem>
        </Link>
        <Link to="/managed-products/add-product">
          <MenuItem>Add Product</MenuItem>
        </Link>
      </MenuList>
    </Box>
  );
};
