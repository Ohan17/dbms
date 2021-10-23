import React from "react";
import { Box, IconButton, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
const AddressBook = () => {
  const classes = useStyles();
  const list_address = [
    {
      name: "Mai Truong Khang",
      address: "Tk 21/29 nguyễn cảnh chân, Phường Cầu Kho, Quận 1, Hồ Chí Minh",
      phone: "0966857525",
    },
    {
      name: "Mai Truong Khang",
      address: "Tk 21/29 nguyễn cảnh chân, Phường Cầu Kho, Quận 1, Hồ Chí Minh",
      phone: "0966857525",
    },
  ];
  return (
    <React.Fragment>
      <Paper square variant="outlined" className={classes.add}>
        <IconButton>
          <AddIcon />
          <Typography color="primary">Add new address</Typography>
        </IconButton>
      </Paper>
      {list_address.map((item) => (
        <Paper className={classes.item}>
          <Box className={classes.row}>
            <Typography>{item.name.toString().toUpperCase()}</Typography>
          </Box>
          <Box className={classes.rowmid}>
            <Box display="flex" flexDirection="row">
              <Typography variant="body1" color="textSecondary">
                Address:{" "}
              </Typography>{" "}
              <Typography className={classes.padding}>
                {item.address}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row">
              <IconButton>
                <EditIcon color="primary" />
              </IconButton>{" "}
              <IconButton>
                <DeleteIcon color="secondary" />
              </IconButton>
            </Box>
          </Box>
          <Box className={classes.row}>
            <Typography variant="body1" color="textSecondary">
              Phone:{" "}
            </Typography>{" "}
            <Typography className={classes.padding}>{item.phone}</Typography>
          </Box>
        </Paper>
      ))}
    </React.Fragment>
  );
};

export default AddressBook;
