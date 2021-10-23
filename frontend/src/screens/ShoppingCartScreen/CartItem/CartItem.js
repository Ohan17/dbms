import React, { useState, useContext, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import { Card, Grid, Divider, IconButton, Paper } from "@material-ui/core";
import { Box } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Context from "../../../store/ContextProvider";
import Modal from "../../../components/ConfirmBox/Modal";
const CartItem = ({ item }) => {
  const ctx = useContext(Context);
  const classes = useStyles();
  const [amount, setAmount] = useState(item.price * item.qty);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleClose = () => {
    setIsOpenModal(false);
  };
  const handleYes = () => {
    ctx.addToCartHandler({
      id: item.id,
      name: item.name,
      qty: -1,
      image: item.image,
    });
    setIsOpenModal(false);
  };
  useEffect(() => {
    setAmount(item.price * item.qty);
  }, [item.qty, item.price]);
  const ArrowClickHandler = (arrowState) => {
    if (arrowState === "UP") {
      ctx.addToCartHandler({
        id: item.id,
        name: item.name,
        qty: 1,
        image: item.image,
      });
    } else if (arrowState === "DOWN" && item.qty > 1) {
      ctx.addToCartHandler({
        id: item.id,
        name: item.name,
        qty: -1,
        image: item.image,
      });
    } else {
      setIsOpenModal(true);
    }
  };
  return (
    <Paper
      square
      variant="outlined"
      elevation={3}
      className={classes.rootofroot}
    >
      <Modal
        text={`Do you want to remove ${item.name} from cart ?`}
        isOpen={isOpenModal}
        title="Delete from cart"
        handleClose={handleClose}
        handleYes={handleYes}
      ></Modal>
      <Grid container className={classes.root}>
        <Grid item className={classes.product} xs={2}>
          <img alt={item.name} className={classes.image} src={item.image} />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item className={classes.center} xs={3}>
          <Typography align="center" variant="body2">
            {item.name}
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={2} className={classes.center}>
          <Typography variant="body2">${item.price}</Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={2} className={classes.mid}>
          <IconButton
            onClick={() => {
              ArrowClickHandler("UP");
            }}
            disabled={ctx.checkIfProductAvailable(item.id, 1) ? false : true}
          >
            {" "}
            <KeyboardArrowUpIcon />{" "}
          </IconButton>
          <Typography variant="body2">{item.qty}</Typography>
          <IconButton
            onClick={() => {
              ArrowClickHandler("DOWN");
            }}
          >
            <KeyboardArrowDownIcon />{" "}
          </IconButton>
        </Grid>
        <Divider classes={classes.test} orientation="vertical" flexItem />
        <Grid item xs className={classes.center}>
          <Typography variant="body2">${amount}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CartItem;
