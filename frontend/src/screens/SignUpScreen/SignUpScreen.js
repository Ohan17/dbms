import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";
import { useState } from "react";
import Context from "../../store/ContextProvider";

export default function SignUpScreen() {
  const [Name, setName] = useState({ firstName: "", lastName: "" });
  const [userInfomation, setuserInfomation] = useState({
    email: "",
    password: "",
  });
  const ctx = useContext(Context);
  const classes = useStyles();
  const checkPassword = (str) => {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(str);
  };
  return (
    <Container className={classes.root} component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4">Sign up</Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required="true"
                fullWidth
                id="firstName"
                label="First Name"
                value={Name.firstName}
                error={Name.firstName !== "" ? false : true}
                onChange={(event) =>
                  setName({
                    firstName: event.target.value,
                    lastName: Name.lastName,
                  })
                }
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={Name.lastName}
                error={Name.lastName !== "" ? false : true}
                onChange={(event) =>
                  setName({
                    lastName: event.target.value,
                    firstName: Name.firstName,
                  })
                }
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={
                  userInfomation.email.includes("@") &&
                  userInfomation.email.length > 2
                    ? false
                    : true
                }
                value={userInfomation.email}
                onChange={(event) =>
                  setuserInfomation({
                    email: event.target.value,
                    password: userInfomation.password,
                  })
                }
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={userInfomation.password}
                error={userInfomation.password.length >= 8 ? false : true}
                helperText="At least 8 characters, uppercase and lowercase, number and special characters"
                onChange={(event) =>
                  setuserInfomation({
                    email: userInfomation.email,
                    password: event.target.value,
                  })
                }
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {
              ctx.signUpHandler({
                email: userInfomation.email,
                password: userInfomation.password,
                firstName: Name.firstName,
                lastName: Name.lastName,
              });
            }}
            disabled={
              Name.firstName !== "" &&
              Name.lastName !== "" &&
              userInfomation.email.includes("@") &&
              userInfomation.email.length > 2 &&
              userInfomation.password.length >= 8
                ? false
                : true
            }
            size="small"
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Typography component={Link} to="/login" variant="body2">
                Already have an account? Sign in
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
