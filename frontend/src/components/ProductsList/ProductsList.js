import { Button, Table, TableContainer } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { products } from "../../../store/ContextProvider";
import ProductLine from "../../ProductLine/WarehouseProduct";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 10,
    maxHeight: "90vh",
  },
});

const ProductsList = () => {
  const classes = useStyles();
  const [productsList, setProductsList] = useState([]);
  //phai fetch product o cho nay hoac import tu ctx
  useEffect(() => {
    setProductsList(products);
  }, [products]);
  return (
    <TableContainer className={classes.root}>
      {products.map((product) => (
        <ProductLine product={product} />
      ))}
      <Button>Add new product</Button>
    </TableContainer>
  );
};

export default ProductsList;
