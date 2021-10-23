import React, { useState } from "react";
import SimpleModal from "../../../SimpleModal/SimpleModal";
import testApi from "../../../../api/testApi";
import { makeStyles } from "@material-ui/core/styles";
import ImageUploading from "react-images-uploading";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  img: {
    width: 100,
    height: 100,
  },
  container: {
    maxWidth: 600,
    padding: 5,
  },
  box: {
    borderRadius: 4,
    backgroundColor: "#f9f4f4",
    padding: 10,
  },
}));
const AddProductModal = (props) => {
  const classes = useStyles();
  const [myImg, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    quantity: 0,
    description: "",
  });
  const onChange = (img) => {
    setImage(img[0].data_url);
  };
  const clearComponent = () => {
    setImage("");
    setMessage("");
    setProduct({
      name: "",
      price: 0,
      quantity: 0,
      description: "",
    });
  };
  const createProduct = async () => {
    try {
      const response = await testApi.createProduct({
        name: product.name,
        price: product.price,
        image: myImg,
        quantity: product.quantity,
        description: product.description,
      });
      setMessage("Product created successfully");
    } catch (error) {
      setMessage("Error happened");
    }
  };
  const ProductChange = (action, value) => {
    const newProduct = { ...product };
    switch (action) {
      case "name":
        newProduct.name = value;
        break;
      case "price":
        newProduct.price = value;
        break;
      case "quantity":
        newProduct.quantity = value;
        break;
      case "description":
        newProduct.description = value;
        break;
      default:
        break;
    }
    setProduct(newProduct);
  };
  return (
    <SimpleModal
      {...props}
      handleClose={() => props.handleClose(clearComponent)}
    >
      <Typography variant="h6" gutterBottom>
        ADD NEW PRODUCT
      </Typography>
      <Box display="flex" flexDirection="row" className={classes.box}>
        <ImageUploading value={myImg} onChange={onChange} dataURLKey="data_url">
          {({ imageList, onImageUpload }) => (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {myImg ? null : (
                <Box border={1}>
                  <img
                    src="https://yt3.ggpht.com/ytc/AKedOLQbvv1BhGrTxywgX6ANxpLpE1yw3m09JcmMT06wOQ=s900-c-k-c0x00ffffff-no-rj"
                    alt="defaultImg"
                    className={classes.img}
                  />
                </Box>
              )}
              {myImg ? (
                <img src={myImg} alt="defaultImg" className={classes.img} />
              ) : null}
              <Box display="flex" flexDirection="row" justifyContent="center">
                <Button
                  className={classes.btn}
                  onClick={() => {
                    onImageUpload();
                    setImage("");
                  }}
                  color="primary"
                >
                  Chọn ảnh
                </Button>
              </Box>
            </Box>
          )}
        </ImageUploading>
        <Box ml={4}>
          <Grid container spacing={1} className={classes.container}>
            <Grid item xs={8}>
              <TextField
                label="Name"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => ProductChange("name", e.target.value)}
                value={product.name}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="Price ($)"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => ProductChange("price", e.target.value)}
                value={product.price}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="Quantity"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => ProductChange("quantity", e.target.value)}
                value={product.quantity}
              />
            </Grid>
            <Grid item xs={12}>
              <Box>
                <TextField
                  label="Description"
                  variant="outlined"
                  size="small"
                  fullWidth
                  multiline
                  className={classes.input}
                  onChange={(e) => ProductChange("description", e.target.value)}
                  value={product.description}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {message === "" ? null : message === "Error happened" ? (
        <Typography color="secondary">{message} !!!</Typography>
      ) : (
        <Typography color="primary">{message} !!!</Typography>
      )}
      {message === "" ? (
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginTop: 10 }}
          onClick={createProduct}
        >
          Add
        </Button>
      ) : (
        <Box>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginTop: 10 }}
            onClick={() => props.handleClose(clearComponent)}
          >
            Finish
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginTop: 10 ,marginLeft:20}}
            onClick={clearComponent}
          >
            Add more
          </Button>
        </Box>
      )}
    </SimpleModal>
  );
};

export default AddProductModal;
