import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
const UserInfoMenu = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <MenuList>
        {props.listMenu.map((item) => (
          <React.Fragment>
            {" "}
            <MenuItem
              className={classes.item}
              onClick={() => {
                props.changeMenuHandler(item.id);
              }}
            >
              <Typography variant="body1">{item.name}</Typography>
            </MenuItem>
            <Divider />
          </React.Fragment>
        ))}
      </MenuList>
    </Box>
  );
};

export default UserInfoMenu;
