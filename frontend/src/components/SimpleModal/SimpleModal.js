import React from "react";
import { Modal, Box, Paper, IconButton } from "@material-ui/core";
import useStyles from "./styles";
import CloseIcon from "@material-ui/icons/Close";
export default function SimpleModal(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <React.Fragment>
          <Paper >
            <Box className={classes.container}>{props.children}</Box>
          </Paper>
        </React.Fragment>
      </Modal>
    </React.Fragment>
  );
}
