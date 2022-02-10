import {
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import "./RegisterForm.scss";

export const RegisterForm = ({ newUser, onChangeInput, onSubmit }) => {
  return (
    <>
      <Paper elevation={10} className="form-register">
        <form onSubmit={onSubmit}>
          <Typography variant="h5" gutterBottom color="primary">
            Sign up
          </Typography>
          <TextField
            className="margin-bottom"
            label="Name"
            type="text"
            name="name"
            value={newUser.name}
            onChange={onChangeInput}
            variant="outlined"
            size="small"
            fullWidth
            required
          />
          <TextField
            className="margin-bottom"
            label="Email"
            type="text"
            name="email"
            value={newUser.email}
            onChange={onChangeInput}
            fullWidth
            size="small"
            variant="outlined"
            required
          />
          <TextField
            className="margin-bottom"
            type="password"
            label="Password"
            name="password"
            value={newUser.password}
            onChange={onChangeInput}
            variant="outlined"
            size="small"
            fullWidth
            required
          />
          <TextField
            className="margin-bottom"
            type="password"
            label="Confirm password"
            name="confirmPassword"
            value={newUser.confirmPassword}
            onChange={onChangeInput}
            variant="outlined"
            size="small"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Accepts terms and conditions "
          />
          <Button
            className="margin-bottom"
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
          >
            Sign up
          </Button>
          <Typography variant="body2">Do you have account yet?</Typography>
          <Link to="/login">Click here to login </Link>
        </form>
      </Paper>
    </>
  );
};
