import {
  Button,
  IconButton,
  Paper,
  Table,
  TableContainer,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ProductLine from "./ProductLine/WarehouseProduct";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import testApi from "../../../api/testApi";
import AddProductModal from "./AddProductModal/AddProductModal";
const useStyles = makeStyles({
  root: {
    padding: 5,
    maxHeight: "79vh",
  },
  paper: {
    margin: 5,
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const ProductsList = () => {
  const classes = useStyles();
  const [productsList, setProductsList] = useState([]);
  const [reload, setReload] = useState(false);
  const [addModal, setAddModal] = useState(false);
  //phai fetch product o cho nay hoac import tu ctx
  const fetchProducts = async () => {
    try {
      const response = await testApi.getAllProducts();
      setProductsList(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  const reloadHanlder = () => {
    setReload(true);
  };
  useEffect(() => {
    if (reload) {
      fetchProducts();
      setReload(false);
    }
  }, [reload, fetchProducts]);
  const handleClose = (fc) => {
    setAddModal(false);
    fc();
  };
  const handleOpen = () => {
    setAddModal(true);
  };
  return (
    <React.Fragment>
      <AddProductModal open={addModal} handleClose={handleClose} />
      <Paper square variant="outlined" className={classes.paper}>
        <IconButton onClick={handleOpen}>
          <AddIcon />
        </IconButton>
        <Typography variant="body1" color="textSecondary">
          Add new product
        </Typography>
      </Paper>
      <TableContainer className={classes.root}>
        {productsList.map((product) => (
          <ProductLine product={product} reloadHanlder={reloadHanlder} />
        ))}
      </TableContainer>
    </React.Fragment>
  );
};

export default ProductsList;
