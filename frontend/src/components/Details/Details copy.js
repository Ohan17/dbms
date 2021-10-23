import { Box, Button, Container } from "@material-ui/core";
import { Grid, Paper, Card, Typography, Divider } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import React, { useState } from "react";
import { useContext } from "react";
import { products } from "../../store/ContextProvider";
import Context from "../../store/ContextProvider";
import Rating from "../Rating/Rating";
import useStyles from "./styles";
const Details = (props) => {
  const ctx = useContext(Context);
  const classes = useStyles();
  const id = parseInt(props.match.params.id);
  const { name, description, price, img, quantity, rate } = products.find(
    (item) => item.id === id
  );
  const [qty, setQty] = useState(1);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setQty(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container >
        <Grid item xs={12} sm={6} lg={4}>
          <Paper square  variant="outlined">
            <img className={classes.img} src={img} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={5}>
          <Paper className={classes.description} square  variant="outlined">
            <Box className={classes.box}>
              <Box>
                <Typography variant="h6" color="inherit">
                  {name}
                </Typography>
                <Divider />
                <Typography
                  style={{ paddingTop: 10 }}
                  variant="body1"
                  color="textSecondary"
                >
                  {description}
                </Typography>{" "}
              </Box>
              <Box>
                <Box className={classes.rating}>
                  <Box className={classes.boxrating}>
                    <Typography
                      variant="subtitle1"
                      color="inherit"
                      gutterBottom
                    >
                      Rating :
                    </Typography>
                    <Rating rate={rate} />
                  </Box>
                  <Typography variant="h6" color="inherit">
                    ${price}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card className={classes.pricebox}>
            <Box className={classes.firstline}>
              <Typography variant="body1" color="inherit">
                Warehouse: {quantity}
              </Typography>
              {quantity > 0 ? (
                <Typography className={classes.instock} variant="body1">
                  In Stock
                </Typography>
              ) : (
                <Typography variant="h6" className={classes.outstock}>
                  Not Available
                </Typography>
              )}
            </Box>
            <Box className={classes.line}>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={qty}
                onChange={handleChange}
                className={classes.select}
                defaultValue={1}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
              <Button
                className={classes.button}
                variant="contained"
                onClick={() => {
                  ctx.addToCartHandler({
                    id: id,
                    name: name,
                    qty: qty,
                    img: img,
                    price: price,
                  });
                }}
                disabled={ctx.checkIfProductAvailable(id, qty) ? false : true}
                variant="contained"
                color="primary"
              >
                Add to Cart
              </Button>
              <Button variant="contained" color="secondary">
                Wish List
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Details;
