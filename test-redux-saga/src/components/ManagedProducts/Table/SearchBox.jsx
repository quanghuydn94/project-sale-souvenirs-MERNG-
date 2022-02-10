import { Paper, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import "./SearchBox.scss";

export const SearchBox = ({ searchTerm, handleSearch }) => {
  return (
    <div>
      <Paper className="search-box">
        <Search color="secondary" />
        <TextField
          label="Search"
          placeholder="Search here"
          variant="outlined"
          value={searchTerm}
          onChange={(event) => handleSearch(event.target.value)}
          size="small"
        />
      </Paper>
    </div>
  );
};
