import React, { useContext, useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Box,
  Paper,
  IconButton,
} from "@material-ui/core";
import "./Profile.scss";
import {
  ArrowDownwardOutlined,
  BusinessOutlined,
  Facebook,
  HomeOutlined,
  Instagram,
  PersonOutline,
} from "@material-ui/icons";
import IconSetting from "./IconSetting";
import { AuthContext } from "../../context/auth";

export const Profile = () => {
  const [checked, setChecked] = useState(false);
  const { user } = useContext(AuthContext);

  const handleCollapse = () => {
    setChecked(!checked);
  };
  return (
    <>
      <Paper elevation={10} style={{ width: 400, margin: "auto" }}>
        <Card className="box-card">
          <Box className="header-card">
            <IconSetting />
          </Box>
          <Box className="avatar-profile">
            <CardMedia
              image="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
              className="avatar"
            />
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body2">Web developer At TiPiCi</Typography>
            <Box>
              <Facebook />
              <Instagram />
            </Box>
          </Box>
          <Box className="about-card">
            <Typography className="text-button-collapse">
              {!checked ? "Learn more about my profile" : "Less"}
            </Typography>
            <IconButton
              size="small"
              variant="contained"
              onClick={handleCollapse}
              className={checked ? "expandOpen" : "expand"}
            >
              <ArrowDownwardOutlined />
            </IconButton>
            <Collapse in={checked} timeout={500} unmountOnExit>
              <CardContent className="about-content">
                <Typography variant="body2">
                  <PersonOutline style={{ color: "#9AD5F3" }} />
                  {user.email}
                </Typography>
                <Typography variant="body2">
                  <HomeOutlined style={{ color: "#FDCE85" }} />
                  Da Nang City
                </Typography>
                <Typography variant="body2">
                  <BusinessOutlined style={{ color: "#B12442" }} />
                  TiPiCi JSC
                </Typography>
              </CardContent>
            </Collapse>
          </Box>
        </Card>
      </Paper>
    </>
  );
};
