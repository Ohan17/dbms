import { Box, Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import testApi from "./api/testApi";
import ImageUploading from "react-images-uploading";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
  },
  img: {
    width: 100,
    height: 100,
  },
}));
const Test = () => {
  const classes = useStyles();
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("");
  const [myImg, setImage] = useState("");
  const onChange = (img) => {
    setImage(img[0].data_url);
    console.log(img[0].data_url);
  };
  const loginHandler = async () => {
    try {
      const response = await testApi.login({
        email: "admin@ecommerce.no",
        password: "admin",
      });
      localStorage.setItem("accessToken", response.accessToken);
    } catch (e) {
      console.log(e);
    }
  };
  const createProduct = async () => {
    try {
      const response = await testApi.createProduct({
        name: "valuehere",
        price: 10,
        image: myImg,
        quantity: 0,
        description: "string",
      });
      console.log(response);
    } catch (error) {}
  };
  return (
    <React.Fragment>
      <input
        type="file"
        id="myfile"
        name="myfile"
        className={classes.root}
        onChange={onChange}
      />
      <Button onClick={loginHandler} className={classes.root}>
        login
      </Button>{" "}
      <Button onClick={createProduct} className={classes.root}>
        createProduct
      </Button>
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
    </React.Fragment>
  );
};

export default Test;
