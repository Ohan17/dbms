import React, { useState, useContext, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";
import Context from "../../store/ContextProvider";
import testApi from "../../api/testApi";
const LogInScreen = (props) => {
  const [userInfomation, setuserInfomation] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setrememberMe] = useState(false);
  const classes = useStyles();
  const ctx = useContext(Context);
  const loginHandler = () => {
    ctx.loginHandler(userInfomation.email, userInfomation.password);
  };
  return (
    <Container className={classes.root} maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography variant="h4">Sign in</Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={userInfomation.email}
                onChange={(event) =>
                  setuserInfomation({
                    email: event.target.value,
                    password: userInfomation.password,
                  })
                }
                error={
                  userInfomation.email.length > 2 &&
                  userInfomation.email.includes("@")
                    ? false
                    : true
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={userInfomation.password}
                onChange={(event) =>
                  setuserInfomation({
                    email: userInfomation.email,
                    password: event.target.value,
                  })
                }
                error={
                  userInfomation.password === "admin"
                    ? false
                    : userInfomation.password.length >= 8
                    ? false
                    : true
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="allowExtraEmails"
                    color="primary"
                    onChange={() => {
                      setrememberMe(!rememberMe);
                    }}
                  />
                }
                label="Remember me for later"
              />
            </Grid>
            {ctx.err ? (
              <Grid item xs={12}>
                <Typography color="secondary">
                  * Invalid email or password
                </Typography>
              </Grid>
            ) : null}
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={
              userInfomation.password === "admin"
                ? false
                : userInfomation.password.length >= 8 &&
                  userInfomation.email.length > 2 &&
                  userInfomation.email.includes("@")
                ? false
                : true
            }
            onClick={loginHandler}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Typography component={Link} to="/signup" variant="body2">
                Do not have an account? Sign up
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default LogInScreen;
