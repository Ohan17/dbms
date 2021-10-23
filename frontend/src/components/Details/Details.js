import {
  Box,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  TextField,
} from "@material-ui/core";
import { Grid, Paper, Card, Typography, Divider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { products } from "../../store/ContextProvider";
import Context from "../../store/ContextProvider";
import useStyles from "./styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import logo from "./img/3486926.png";
import refund from "./img/refund.png";
import official from "./img/official.png";
import re from "./img/retrun.png";
import like from "./img/like.png";
import web from "./img/web.png";
import Rating from "@material-ui/lab/Rating";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ImageSlide from "./ImageSlide/ImageSlide";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import testApi from "../../api/testApi";
const Details = (props) => {
  const ctx = useContext(Context);
  const classes = useStyles();
  const id = parseInt(props.match.params.id);
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    quantity: "",
  });
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await testApi.getAllProducts();
        setProductList(response);
        setProduct(response.find((item) => item.id === id));
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);
  const [qty, setQty] = useState(1);
  const handleChange = (event) => {
    setQty(event.target.value);
  };

  const inputHandler = (event) => {
    {
      isNaN(event.target.value)
        ? alert("Please enter a number")
        : setQty(event.target.value);
    }
  };
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 4;
  const maxPage = Math.ceil(products.length / productsPerPage);
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="row">
          <Typography variant="body1" color="textSecondary">
            Homepage
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <NavigateNextIcon />
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Products
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <NavigateNextIcon />
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {product.name}
          </Typography>
        </Box>
        <Paper square variant="outlined" className={classes.paper}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={8}
              lg={5}
              style={{ borderRight: "1px solid #e6e6ea", padding: 10 }}
            >
              <img className={classes.img} src={product.image} alt="img" />
            </Grid>
            <Grid item xs={12} md={8} lg={7} className={classes.grid}>
              <Box className={classes.line}>
                <Typography variant="body2" gutterBottom>
                  Brand:{" "}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  style={{ marginLeft: 5 }}
                  gutterBottom
                >
                  {" "}
                  Amazon
                </Typography>
              </Box>

              <Typography variant="h6"> {product.name}</Typography>
              <Rating
                name="read-only"
                value={5}
                readOnly
                style={{ marginBottom: 10 }}
              />
              <Grid container spacing={1}>
                <Grid item xs={8}>
                  <Box className={classes.price}>
                    <Typography variant="h4" color="secondary">
                      {product.price} $
                    </Typography>
                    <Box className={classes.line} style={{ height: 30 }}>
                      <img src={logo} className={classes.logo} alt="img" />
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ paddingTop: 10, paddingLeft: 10 }}
                        color="primary"
                      >
                        Freeship
                      </Typography>
                    </Box>
                    <Box className={classes.line} style={{ height: 30 }}>
                      <img src={refund} className={classes.logo} alt="img" />
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ paddingTop: 10, paddingLeft: 10 }}
                        color="primary"
                      >
                        Refund policy
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={classes.description}>
                    <Typography variant="body2" color="textSecondary">
                      {product.description}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box style={{ border: "1px solid #e6e6ea" }}>
                    <Box className={classes.line} p={1}>
                      <img
                        src={web}
                        style={{
                          borderRadius: "50%",
                          width: 45,
                          marginRight: 10,
                        }}
                        alt="img"
                      />
                      <Box>
                        <Typography gutterBottom>
                          <b>Taka trading</b>
                        </Typography>
                        <img src={official} style={{ width: 60 }} alt="img" />
                      </Box>
                    </Box>
                    <Box
                      className={classes.line}
                      mt={1}
                      style={{ borderTop: "1px solid #e6e6ea", padding: 10 }}
                    >
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        style={{ width: "50%" }}
                      >
                        <img src={re} style={{ width: 30 }} alt="img" />
                        <Typography align="center" variant="body2">
                          100% money-back guarantee
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        style={{ width: "50%" }}
                      >
                        <img src={like} style={{ width: 30 }} alt="img" />
                        <Typography align="center" variant="body2">
                          Check before receiving{" "}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      mt={1}
                      style={{ borderTop: "1px solid #e6e6ea", padding: 10 }}
                      display="flex"
                      flexDirection="column"
                    >
                      <Box
                        className={classes.line}
                        justifyContent="space-between"
                      >
                        {ctx.checkIfProductAvailable(id, qty) ? (
                          <Typography
                            className={classes.instock}
                            variant="body1"
                          >
                            In Stock
                          </Typography>
                        ) : (
                          <Typography
                            variant="body1"
                            className={classes.outstock}
                          >
                            Not Available
                          </Typography>
                        )}
                        <Box className={classes.line}>
                          <Button
                            className={classes.qbutton}
                            color="primary"
                            variant="outlined"
                            onClick={() => setQty(qty + 1)}
                          >
                            +
                          </Button>
                          <input
                            className={classes.input}
                            value={qty}
                            onChange={inputHandler}
                          />
                          <Button
                            size="small"
                            variant="outlined"
                            color="primary"
                            className={classes.qbutton}
                            onClick={() => setQty(qty - 1)}
                            disabled={qty > 1 ? false : true}
                          >
                            -
                          </Button>
                        </Box>
                      </Box>
                      <Button
                        style={{
                          width: "100%",
                          marginTop: 20,
                        }}
                        disableElevation
                        variant="contained"
                        endIcon={<AddShoppingCartIcon />}
                        color="secondary"
                        onClick={() => {
                          ctx.addToCartHandler({
                            id: id,
                            name: product.name,
                            qty: product.quantity,
                            image: product.image,
                            price: product.price,
                          });
                        }}
                        disabled={
                          ctx.checkIfProductAvailable(id, qty) ? false : true
                        }
                      >
                        Add to cart
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            className={classes.slider}
          >
            <IconButton
              size="small"
              className={classes.ibutton}
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage - 1 < 0 ? true : false}
            >
              <ChevronLeftIcon fontSize="large" />
            </IconButton>
            {productList
              .slice(
                currentPage * productsPerPage,
                currentPage * productsPerPage + productsPerPage
              )
              .map((product) => (
                <ImageSlide product={product} />
              ))}
            <IconButton
              size="small"
              className={classes.ibutton}
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage + 1 < maxPage ? false : true}
            >
              <ChevronRightIcon fontSize="large" />
            </IconButton>
          </Box>
        </Paper>
      </Container>
    </Container>
  );
};

export default Details;
