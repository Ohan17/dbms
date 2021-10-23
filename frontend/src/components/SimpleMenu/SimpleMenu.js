import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import { Box } from "@material-ui/core";
import useStyles from "./styles"
export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box className={classes.root}>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
      >
        {props.children}
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      >
        {props.data.map((item) => (
          <MenuItem
            onClick={() => {
              handleClose();
              item.handler();
            }}
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
