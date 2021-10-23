import { Paper } from "@material-ui/core";
import { Typography, Grid, Divider } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
const ProductTag = () => {
  const classes = useStyles();
  return (
    <Paper square elevation={3}className={classes.paper}>
      <Grid container className={classes.root}>
      <Grid item className={classes.center} xs={2}>
          <Typography variant="body1">Image</Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item className={classes.center} xs={3}>
          <Typography variant="body1">Name</Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={2} className={classes.center}>
          <Typography variant="body1">Unit Price</Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={2} className={classes.center}>
          <Typography variant="body1">Quantity</Typography>
        </Grid>
        <Divider classes={classes.test} orientation="vertical" flexItem />
        <Grid item xs className={classes.center}>
          <Typography variant="body1">Amount</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductTag;
