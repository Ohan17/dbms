import { makeStyles } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";
export default makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  button: {
    marginTop: 10,
    backgroundColor: yellow[500],
    "&:hover": {
      backgroundColor: yellow[700],
    },
  },
  box: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f4f4f8",
    padding: 10,
    paddingTop: 10,
    marginBottom: 10,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom:10,
  },
});
