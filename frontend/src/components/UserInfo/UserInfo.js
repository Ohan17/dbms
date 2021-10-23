import { Box, TextField, Typography, Button, Card } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const UserInfo = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Box className={classes.row}>
        <Typography variant="body2" className={classes.name}>
          First Name:
        </Typography>
        <TextField className={classes.input} />
        <Typography variant="body2" className={classes.name}>
          Last Name:
        </Typography>
        <TextField className={classes.input} />
      </Box>
      <Box className={classes.row}>
        <Typography variant="body2" className={classes.name}>
          Phone:
        </Typography>
        <TextField className={classes.input} />
        <Typography variant="body2" className={classes.name}>
          Date Of Birth:
        </Typography>
        <TextField type="date" className={classes.date} />
      </Box>
      <Box className={classes.row}>
        <Typography variant="body2" className={classes.name}>
          Email:
        </Typography>
        <TextField
          className={classes.email}
          type="email"
          defaultValue="maitruongkhang3172@gmail.com"
          disabled
        />
      </Box>
      <Box className={classes.lastrow}>
        <Button
          className={classes.button}
          variant="contained"
          size="small"
        >
          Update
        </Button>
      </Box>
    </Card>
  );
};

export default UserInfo;
