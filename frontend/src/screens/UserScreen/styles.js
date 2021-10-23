import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    paddingTop: "10vh",
    backgroundColor: theme.palette.background.default,
  },
}));
