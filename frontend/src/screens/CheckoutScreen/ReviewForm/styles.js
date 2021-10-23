import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
    marginRight:20,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title1: {
    display: "flex",
    justifyContent: "center",
  },
  scroll: {
    overflow: "auto",
    maxHeight: 380,
    paddingRight:20,
    marginRight:"-1vw",
  },
}));
