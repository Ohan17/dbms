import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import useStyles from "./styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
const Process = (props) => {
  const classes = useStyles();
  const [chosen, setChosen] = useState("standard");
  return (
    <Box className={classes.root}>
      <Box className={classes.box} border={1} borderColor="#cccccc">
        <Typography variant="body1"> Choose shipping services</Typography>
        <RadioGroup defaultValue="standard" styles={{ marginBottom: 5 }}>
          <FormControlLabel
            value="standard"
            control={
              <Radio
                size="small"
                color="primary"
                onChange={() => setChosen("standard")}
              />
            }
            label={
              <Typography variant="body2">
                <b>Standard services </b>
              </Typography>
            }
            labelPlacement="end"
          />
          <FormControlLabel
            value="fast"
            control={
              <Radio
                size="small"
                color="primary"
                onChange={() => setChosen("fast")}
              />
            }
            label={
              <Typography variant="body2">
                {" "}
                <b>Fast services </b>
              </Typography>
            }
            labelPlacement="end"
          />
        </RadioGroup>
        <Typography variant="body2" color="secondary">
          {chosen === "standard" ? (
            <i>Arrives in 1-2 weeks</i>
          ) : (
            <i>Arrives in 3 working days</i>
          )}
        </Typography>
      </Box>

      <Box className={classes.box} border={1} borderColor="#cccccc">
        <Box className={classes.row}>
          <Typography>Discount</Typography>
          <Box display="flex" flexDirection="row">
            <Typography
              variant="body2"
              color="textSecondary"
              style={{ paddingRight: 5 }}
            >
              {" "}
              Enters code
            </Typography>
            <Tooltip title="One code is allowed">
              <HelpOutlineIcon fontSize="small" />
            </Tooltip>
          </Box>
        </Box>
        <TextField
          variant="outlined"
          size="small"
          id="standard-basic"
        />
      </Box>
      <Box className={classes.box} border={1} borderColor="#cccccc">
        <Box className={classes.row}>
          <Typography variant="body1">Cart:</Typography>
          <Typography variant="body1">${props.total}</Typography>
        </Box>{" "}
        <Box className={classes.row}>
          <Typography variant="body1">Ship:</Typography>
          <Typography variant="body1">${chosen ==="fast" ? 3:0}</Typography>
        </Box>
        <Box className={classes.row}>
          <Typography variant="body1">Promotion:</Typography>
          <Typography variant="body1">$0</Typography>
        </Box>
        <Box className={classes.row}>
          <Typography variant="body1">Total:</Typography>
          <Typography variant="body1">${ chosen ==="fast" ? props.total +3: props.total +0}</Typography>
        </Box>
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          endIcon={<ArrowForwardIosIcon />}
          component={Link}
          to="/checkout"
          disabled={props.total === 0 ? true : false}
          style={{ width: "100%" }}
        >
          Payment
        </Button>
      </Box>
    </Box>
  );
};

export default Process;
