import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    paddingTop: "9vh",
  },
  img: {
    height: "450px",
    width: "100%",
  },
  box: {
    flexDirection: "column",
    justifyContent: "space-between",
    display: "flex",
    height: "100%",
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pricebox: {
    display: "flex",
    height: "250px",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 20,
  },
  button: {
    marginRight: 10,
    marginLeft: 10,
  },
  firstline: {
    marginBottom: 20,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-evenly",
    width: "80%",
  },
  line: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  instock: {
    color: "green",
  },
  outstock: {
    color: "red",
  },
  boxrating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  select: {
    width: "100px",
  },
  grid: {
    padding: 10,
    paddingTop: 20,
  },
  price: {
    width: "100%",
    background: "#f4f4f8",
    padding: 15,
  },
  logo: {
    maxWidth: 20,
  },
  description: {
    marginTop: 20,
    maxHeight: 200,
    overflow: "scroll",
  },
  input: {
    maxWidth: 30,
    maxHeight: 30,
    minWidth: 30,
    minHeight: 30,
    border: 0,
    textAlign: "center",
    border: "1px solid #e6e6ea",
  },
  qbutton: {
    maxWidth: 30,
    maxHeight: 30,
    minWidth: 30,
    minHeight: 30,
    borderRadius: 0,
  },
  slide_img: {
    width: 200,
    height: 200,
  },
  slider: {
    borderTop: "1px solid #e6e6ea",
    paddingTop:10,
    paddingBottom:15,
    backgroundColor:"#f9f9f9",
  },
}));
