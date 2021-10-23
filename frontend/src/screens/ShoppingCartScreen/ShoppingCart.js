import React, { useEffect, useState, useContext } from "react";
import List from "@material-ui/core/List";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import { Box, Typography, Grid, Container } from "@material-ui/core";
import Process from "./Process/Process";
import ProductTag from "./ProductTag/ProductTag";
import Context from "../../store/ContextProvider";
import { Link } from "react-router-dom";
const ShoppingCart = () => {
  const classes = useStyles();
  const [cart, setCart] = useState([]);
  const ctx = useContext(Context);
  useEffect(() => {
    setCart(ctx.cart);
  }, [ctx.cart]);
  return (
    <Container>
      <Grid container className={classes.rootofroot}>
        <Grid item lg={9} md={12}>
          {cart.length > 0 ? (
            <Box className={classes.paper}>
              <ProductTag />
              <List className={classes.root}>
                {cart.map((item) => {
                  return <CartItem item={item} />;
                })}
              </List>
            </Box>
          ) : (
            <Box className={classes.container}>
              <Typography
                component={Link}
                to="/"
                variant="body1"
                color="secondary"
              >
                Cart is emty, click here to continue shopping
              </Typography>
            </Box>
          )}
        </Grid>
        <Grid item item lg={3} md={12}>
          <Process
            total={ctx.cart.reduce(
              (prev, item) => prev + item.qty * item.price,
              0
            )}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShoppingCart;
