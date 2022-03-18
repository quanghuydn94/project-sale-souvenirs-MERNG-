import React, { useState } from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@material-ui/core";
import { SettingsApplicationsOutlined } from "@material-ui/icons";

export default function IconSetting() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        style={{ color: "white" }}
        aria-controls="icon-setting"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <SettingsApplicationsOutlined />
      </IconButton>
      <Menu
        style={{ top: 30, left: 14, padding: 0 }}
        id="icon-setting"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          style={{
            fontSize: 15,
            background: "#ff6745",
            padding: 5,
            color: "white",
          }}
        >
          Change password
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          style={{
            fontSize: 15,
            background: "#ff6745",
            padding: 5,
            color: "white",
          }}
        >
          Edit
        </MenuItem>
      </Menu>
    </>
  );
}
