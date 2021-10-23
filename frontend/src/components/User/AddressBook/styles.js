import { makeStyles } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";
export default makeStyles(() => ({
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  padding: {
    paddingLeft: 10,
  },
  item: {
    marginBottom: 20,
    padding: 10,
  },
  rowmid: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  add: {
    marginBottom: 20,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
}));
