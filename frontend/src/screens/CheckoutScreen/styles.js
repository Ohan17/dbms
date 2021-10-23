import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    paddingTop: 75
  },
  paper: {
    padding:"1vw",
  },
  stepper: {
    padding: theme.spacing(2, 0, 2),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
