import React, { useContext } from "react";
import ProductsScreen from "./screens/ProductsScreen/Products";
import NavBar from "./components/NavBar/NavBar";
import Details from "./components/Details/Details";
import ShoppingCart from "./screens/ShoppingCartScreen/ShoppingCart";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SignUpScreen from "./screens/SignUpScreen/SignUpScreen";
import LogInScreen from "./screens/LogInScreen/LogInScreen";
import UserScreen from "./screens/UserScreen/UserScreen";
import Context from "./store/ContextProvider";
import CheckoutScreen from "./screens/CheckoutScreen/Checkout";
import styled from "styled-components";
import Test from "./Test";
import "@fontsource/roboto";
const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: "#eeeeee",
    minHeight: "100vh",
  },
}));
const App = () => {
  const classes = useStyles();
  const ctx = useContext(Context);
  return (
    <BrowserRouter>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <NavBar />
        <Route path="/" component={ProductsScreen} exact />
        <Route path="/cart" component={ShoppingCart} exact />
        <Route path="/product/:id" component={Details} exact />
        <Route path="/signup">
          {ctx.isLoggedIn ? <Redirect to="/user" /> : <SignUpScreen />}
        </Route>
        <Route path="/test" component={Test} exact />
        <Route path="/login">
          {ctx.isLoggedIn ? <Redirect to="/user" /> : <LogInScreen />}
        </Route>
        <Route exact path="/user">
          {ctx.isLoggedIn ? <UserScreen /> : <Redirect to="/login" />}
        </Route>
        <Route path="/checkout" component={CheckoutScreen} exact />
      </div>
    </BrowserRouter>
  );
};

export default App;
