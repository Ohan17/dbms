import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import Context from "../../store/ContextProvider";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import SimpleMenu from "../SimpleMenu/SimpleMenu";
import { useHistory } from "react-router-dom";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
const NavBar = (props) => {
  const classes = useStyles();
  const ctx = useContext(Context);
  const history = useHistory();
  const data = [
    {
      name: "Profile",
      handler: () => {
        history.push("/user");
      },
    },
    { name: "Logout", handler: ctx.logoutHandler },
  ];
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="default">
        <Toolbar className={classes.toolbar} variant="dense">
          <Typography
            component={Link}
            to={"/"}
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            e-commerce
          </Typography>
          <div className={classes.grow} />
          {!ctx.isAdmin ? (
            <IconButton component={Link} to="/cart">
              <Badge
                badgeContent={ctx.cart.length}
                color="secondary"
              >
                <ShoppingCart fontSize="large" />
              </Badge>
            </IconButton>
          ) : (
            <Typography>Admin</Typography>
          )}
          {!ctx.isLoggedIn ? (
            <IconButton component={Link} to="/login/user">
              <Badge color="secondary">
                <PermIdentityOutlinedIcon fontSize="large" />
              </Badge>
            </IconButton>
          ) : !ctx.isAdmin ? (
            <SimpleMenu data={data}>
              <Badge color="secondary">
                <PermIdentityOutlinedIcon fontSize="large" />
              </Badge>
            </SimpleMenu>
          ) : (
            <SimpleMenu data={data}>
              <Badge color="secondary">
                <SupervisorAccountIcon fontSize="large" />
              </Badge>
            </SimpleMenu>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
