import React, { useContext, useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Grid, Box } from "@material-ui/core";
import useStyles from "./styles";
export default function Review({
  name,
  contact,
  address,
  check,
  setTotal,
  cart,
}) {
  const classes = useStyles();
  const [totalReview, setTotalReview] = useState(0);
  useEffect(() => {
    const total = cart.reduce((prev, item) => prev + item.qty * item.price, 0);
    setTotalReview(total);
    setTotal(total);
  }, [cart]);
  return (
    <React.Fragment>
      <Box>
        <Box className={classes.title1}>
          <Typography variant="h5" gutterBottom>
            Order summary
          </Typography>
        </Box>
        <Box className={classes.row}>
          <Typography variant="h6">Item</Typography>
          <Typography variant="h6">Amount</Typography>
        </Box>
        <List disablePadding>
          <Box className={classes.scroll}>
            {cart.map((product) => (
              <ListItem className={classes.listItem} key={product.name}>
                <ListItemText
                  primary={product.name}
                  secondary={`Quantity: ${product.qty}`}
                />
                <Typography variant="body2">
                  ${product.price * product.qty}
                </Typography>
              </ListItem>
            ))}
          </Box>
          <ListItem className={classes.listItem}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" className={classes.total}>
              ${totalReview}
            </Typography>
          </ListItem>
        </List>
      </Box>
    </React.Fragment>
  );
}
