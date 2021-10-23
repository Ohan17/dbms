import React from "react";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarHalfRoundedIcon from "@material-ui/icons/StarHalfRounded";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
const Rating = (props) => {
  const classes = useStyles();
  const getRate = (rate) => {
    let rs = [];
    for (let i = 0; i < rate - 1; i++) {
      rs = [...rs, <StarRoundedIcon className={classes.star} />];
    }
    if (rate % 1 !== 0) {
      rs = [...rs, <StarHalfRoundedIcon className={classes.star} />];
      rate += 1.5;
    } else {
      rs = [...rs, <StarRoundedIcon className={classes.star} />];
      rate += 1;
    }
    for (let i = 0; i <= 5 - rate; i++) {
      rs = [...rs, <StarBorderRoundedIcon className={classes.star} />];
    }
    return rs;
  };
  return (
    <Box className={classes.box}>
      {getRate(props.rate)}
    </Box>
  );
};
export default Rating;
