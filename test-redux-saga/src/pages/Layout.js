import { Grid } from "@material-ui/core";
import { LeftBar } from "../components/ManagedProducts/LeftBar/LeftBar";
import React from "react";

export const Layout = ({ children }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <LeftBar />
      </Grid>
      <Grid item xs={8}>
        {children}
      </Grid>
    </Grid>
  );
};
