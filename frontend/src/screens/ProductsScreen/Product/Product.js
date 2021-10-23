import React, { useContext } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
  CardActionArea,
  Box,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import Context from "../../../store/ContextProvider";
import { Rating } from "@material-ui/lab";
const Product = ({ product }) => {
  const ctx = useContext(Context);
  const classes = useStyles();
  return (
    <Card square elevation={3} className={classes.root}>
      <CardActionArea component={Link} to={`/product/${product.id}`}>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="body1" gutterBottom noWrap>
              {product.name}
            </Typography>
            <Typography style={{ color: "grey" }} variant="body1">
              ${product.price}
            </Typography>
          </div>
          <Typography variant="body2" noWrap color="textSecondary">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing className={classes.cardActions}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Rating rate={5} value={5} readOnly size="medium"/>
          <Button
            component={Link}
            to={`/product/${product.id}`}
            size="small"
            color="inherit"
          >
            Detail
          </Button>
        </Box>
        <IconButton
          onClick={() => {
            ctx.addToCartHandler({
              id: product.id,
              name: product.name,
              qty: 1,
              image: product.image,
              price: product.price,
            });
          }}
          aria-label="Add to Card"
          disabled={ctx.checkIfProductAvailable(product.id) ? false : true}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
