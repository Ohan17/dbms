import React from "react";
import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    padding: 5,
    textDecoration: "none",
  },
  img: {
    width: 180,
    height: 170,
  },
});
const ImageSlide = ({ product }) => {
  const classes = useStyles();
  return (
    <Paper
      className={classes.root}
      square
      elevation={0}
      component={Link}
      to={`/product/${product.id}`}
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
    >
      <img src={product.image} alt="product_img" className={classes.img} />
      <Box display="flex" flexDirection="column">
        <Typography variant="body1" noWrap style={{ maxWidth: 180 }}>
          {product.name}
        </Typography>
        <Rating name="size-small" defaultValue={5} size="small" />
        <Typography variant="body2" style={{ marginTop: 2 }}>
          <b>${product.price}</b>
        </Typography>
      </Box>
    </Paper>
  );
};

export default ImageSlide;
