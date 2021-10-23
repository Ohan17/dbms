import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { TextField, InputAdornment } from "@material-ui/core";
import useStyles from "./styles"
const SearchBar = (props) => {
  const classes= useStyles();
  return (
    <React.Fragment>
      <TextField
        label="Search for items"
        size="medium"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(event) => props.searchChangeHandler(event.target.value)}
        size="small"
      />
    </React.Fragment>
  );
};

export default SearchBar;
