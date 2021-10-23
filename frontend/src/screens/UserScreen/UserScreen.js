import { Container, Typography, Card, Grid } from "@material-ui/core";
import React, { useState, useContext } from "react";
import useStyles from "./styles";
import UserInfoMenu from "./UserInfoMenu/UserInfoMenu";
import Context from "../../store/ContextProvider";
import User from "./UserInfoMenu/User/User";
import Admin from "./UserInfoMenu/Admin/Admin";
const listMenuUser = [
  { id: 1, name: "Profile" },
  { id: 2, name: "Order" },
  { id: 4, name: "Wish list" },
  { id: 5, name: "Address book" },
];
const listMenuAdmin = [
  { id: 1, name: "Profile" },
  { id: 2, name: "User list" },
  { id: 3, name: "Product list" },
];
const UserScreen = () => {
  const classes = useStyles();
  const [menuView, setMenuView] = useState(1);
  const ctx = useContext(Context);
  const changeMenuHandler = (choice) => {
    setMenuView(choice);
  };

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={5}>
        <Grid item xs={3}>
          {!ctx.isAdmin ? (
            <UserInfoMenu
              listMenu={listMenuUser}
              changeMenuHandler={changeMenuHandler}
            />
          ) : (
            <UserInfoMenu
              listMenu={listMenuAdmin}
              changeMenuHandler={changeMenuHandler}
            />
          )}
        </Grid>
        <Grid item xs={9}>
          {!ctx.isAdmin ? (
            <User menuView={menuView} />
          ) : (
            <Admin menuView={menuView} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserScreen;
