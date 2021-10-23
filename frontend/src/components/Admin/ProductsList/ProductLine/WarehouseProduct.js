import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  TextField,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Card, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Modal from "../../../ConfirmBox/Modal";
import useStyles from "./styles";
import testApi from "../../../../api/testApi";
const WarehouseProduct = (props) => {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false);
  const [modal, setModal] = useState(false);
  const handleOpen = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };
  const product = props.product;
  const deleteProduct = async () => {
    try {
      const response = await testApi.deleteProduct(product.id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    props.reloadHanlder();
  };
  return (
    <Paper square className={classes.root}>
      <Modal
        title="Delete this product"
        text={`Do you want to delete ${product.name} forever ?`}
        isOpen={modal}
        handleYes={deleteProduct}
        handleClose={handleClose}
      />
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={2} className={classes.product}>
          <img src={product.image} alt={product.name} className={classes.img} />
        </Grid>
        <Grid item xs={4} className={classes.cl}>
          <Typography align="center" variant="body1">
            {product.name}
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.cl}>
          <TextField
            label="Unit Price"
            defaultValue={`$${product.price}`}
            disabled={!editMode}
          />
        </Grid>
        <Grid item xs={2} className={classes.cl}>
          <TextField
            label="Quantity"
            defaultValue={product.quantity}
            disabled={!editMode}
          />
        </Grid>
        <Grid item xs={2} className={classes.cl}>
          <Box className={classes.button_box}>
            {!editMode ? (
              <Button
                variant="contained"
                onClick={() => {
                  setEditMode(true);
                }}
                className={classes.button}
              >
                Edit
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={() => {
                  setEditMode(false);
                }}
                className={classes.button}
              >
                Save
              </Button>
            )}
            {editMode ? (
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={handleOpen}
              >
                <DeleteForeverIcon />
              </Button>
            ) : null}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default WarehouseProduct;
