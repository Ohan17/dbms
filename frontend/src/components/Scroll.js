import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Pagination } from "@material-ui/lab";
import { Container, MenuItem } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import { products } from "../store/ContextProvider";
import ProductLine from "../components/ProductLine/WarehouseProduct";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    marginTop: 200,
    maxHeight: 400,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("acb", 356, 16.0, 49, 3.9),
  createData("Gingread", 356, 16.0, 49, 3.9),
  createData("Gingerbre", 356, 16.0, 49, 3.9),
  createData("Gingerbrd", 356, 16.0, 49, 3.9),
  createData("Gingerbaead", 356, 16.0, 49, 3.9),
  createData("Gingrbread", 356, 16.0, 49, 3.9),
  createData("Gngaread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Giaead", 356, 16.0, 49, 3.9),
  createData("Gicd", 356, 16.0, 49, 3.9),
  createData("Gingers", 356, 16.0, 49, 3.9),
  createData("Gingaad", 356, 16.0, 49, 3.9),
];
const tag = [
  "Dessert (100g serving)",
  "Calories",
  "Fat (g)",
  "Carbs (g)",
  "Protein (g)",
];
export default function BasicTable() {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [recordPerPage, setRecordPerPage] = useState(3);
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const handleRecordPerPageChange = (event) => {
    setRecordPerPage(event.target.value);
  };
  return (
    <Container maxWidth="xl">
      <TableContainer className={classes.root} component={Paper}>
        <Table stickyHeader className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Dessert (100g serving)</TableCell> */}
              {tag.map((item) => (
                <TableCell>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              .slice((page - 1) * recordPerPage, page * recordPerPage)
              .map((product) => (
                <TableRow>
                  <ProductLine product={product} />
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Select onChange={handleRecordPerPageChange} defaultValue={3}>
        <MenuItem value={1}>1 </MenuItem>
        <MenuItem value={3}>3 </MenuItem>
        <MenuItem value={5}>5 </MenuItem>
        <MenuItem value={8}>8 </MenuItem>
      </Select>
      <Pagination
        count={Math.ceil(products.length / recordPerPage)}
        onChange={handlePageChange}
      />
    </Container>
  );
}
