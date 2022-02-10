import {
  Badge,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { HighlightOff } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./LoginForm.scss";
export const LoginForm = ({
  loginUser,
  onChangeInput,
  onSubmit,
  errors,
  closeError,
}) => {
  return (
    <>
      <Paper elevation={10} className="login-form">
        <form onSubmit={onSubmit}>
          <Typography gutterBottom variant="h5" color="secondary">
            Login
          </Typography>
          {errors.general != null ? (
            <Box className="error-color">
              <Typography variant="body2">
                {errors.general}
                <sup onClick={closeError}>&#128473;</sup>
              </Typography>
            </Box>
          ) : null}
          <TextField
            className="margin-bottom"
            type="text"
            label="Email"
            name="email"
            value={loginUser.email}
            onChange={onChangeInput}
            error={errors.email ? true : false}
            helperText={errors.email}
            fullWidth
            size="small"
          />
          <TextField
            className="margin-bottom"
            type="password"
            label="Password"
            name="password"
            value={loginUser.password}
            onChange={onChangeInput}
            error={errors.password ? true : false}
            helperText={errors.password}
            fullWidth
            size="small"
          />
          <FormControlLabel control={<Checkbox />} label="Remember" />
          <Button
            className="margin-bottom"
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Login
          </Button>
          <Typography variant="body2">
            You don't have account
            <Link to="/register"> Click here to register</Link>
          </Typography>
        </form>
      </Paper>
    </>
  );
};
