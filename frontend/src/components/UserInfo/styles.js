import { makeStyles } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";
export default makeStyles(() => ({
  item: {
    padding: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  input: {
    marginLeft: 20,
    marginRight: 20,
  },
  date: {
    marginLeft: 20,
    marginRight: 20,
    width: 200,
  },
  email: {
    marginLeft: 20,
    marginRight: 20,
    width: "40%",
  },
  lastrow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20,
  },
  button: {
    backgroundColor: yellow[500],
    "&:hover": {
      backgroundColor: yellow[700],
    },
  },
  card: {
    padding: 20,
  },
}));
