import React from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  MoreVertOutlined,
  PowerOffOutlined,
  PowerSettingsNewOutlined,
  TagFacesOutlined,
} from "@material-ui/icons";
import "./InforMenu.scss";

export const InforMenu = ({ username, logout }) => {
  const [anchor, setAnchor] = useState(null);
  const router = useHistory();

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };
  const viewProfileUser = () => {
    router.push("/profile-user");
  };
  return (
    <Box className="infor-menu">
      <Button
        aria-controls="infor-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar style={{ backgroundColor: "#FFC107" }}>
          <TagFacesOutlined />
        </Avatar>
        <MoreVertOutlined />
      </Button>

      <Menu
        style={{ top: 20, left: 50, width: 200 }}
        id="infor-menu"
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={viewProfileUser}
          style={{ color: "#2468a2", fontSize: 12 }}
        >
          Profile
        </MenuItem>
        <MenuItem onClick={logout} style={{ color: "crimson" }}>
          <PowerSettingsNewOutlined fontSize="small" />
        </MenuItem>
      </Menu>
    </Box>
  );
};
