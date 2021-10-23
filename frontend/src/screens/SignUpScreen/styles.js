import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root:{
    minHeight:"100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: 10,
  },
}));
