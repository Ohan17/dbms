import React, { useContext, useState } from "react";
import { Grid, Box } from "@material-ui/core";
import Product from "./Product/Product";
import SearchBar from "../../components/SearchBar/SearchBar";
import Context, { products } from "../../store/ContextProvider";
import { useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import testApi from "../../api/testApi";
const Products = (props) => {
  const ctx = useContext(Context);
  const classes = useStyles();
  const [productsList, setProductsList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const searchChangeHandler = (value) => {
    setSearchValue(value);
  };
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
  const searchFunction = (value) => {
    // const newList = productList.filter((item) =>
    //   item.name
    //     .toLowerCase()
    //     .replace("-", "")
    //     .replace(" ", "")
    //     .includes(value.replace(" ", "").toLowerCase())
    // );
    // setProductList(newList);
  };
  useEffect(() => {
    const identifier = setTimeout(() => searchFunction(searchValue), 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [searchValue]);
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Box className={classes.bar}>
        <SearchBar searchChangeHandler={searchChangeHandler} />
      </Box>
      {ctx.loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Grid container justifyContent="center" spacing={4}>
          {productsList.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} component={<Button />} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};
export default Products;
