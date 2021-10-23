import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  img: {
    height: "100%",
    width: "100%",
  },
  container: {
    height: "140px",
  },
  root: {
    marginBottom: 10,
    marginTop: 10,
    padding: 5,
  },
  cl: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  product: {
    height: "100%",
  },
  divider:{
      marginRight:"0.9%",
      marginLeft:"0.91%",
  },
  product_detail:{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  button_box:{
      flexDirection: "column",
      width: "100%",
      display: "flex",
      justifyContent:"space-evenly",
      height: "100%",
  },
  second: {
    flexGrow:1,
    padding: 10,
  },
  button: {
    marginLeft:40,
    marginRight:40
  }
}));
