import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "name", label: "Name", minWidth: 170, align: "center" },
  { id: "email", label: "Email", minWidth: 200, align: "center" },
  {
    id: "phone",
    label: "Phone",
    minWidth: 100,
    align: "center",
  },
  {
    id: "size",
    label: "Created Date",
    minWidth: 170,
    align: "center",
  },
  {
    id: "action",
    label: "",
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  ["Mai Truong Khang", "khang.mai@hcmut.edu.vn", "0999999888", "09-10-2021 20:33:00"],
  ["Mai Truong Khang", "khang.mai@hcmut.edu.vn", "0999999888", "09-10-2021 20:33:00"],
  ["Mai Truong Khang", "khang.mai@hcmut.edu.vn", "0999999888", "09-10-2021 20:33:00"],
  ["Mai Truong Khang", "khang.mai@hcmut.edu.vn", "0999999888", "09-10-2021 20:33:00"],
  ["Mai Truong Khang", "khang.mai@hcmut.edu.vn", "0999999888", "09-10-2021 20:33:00"],
  ["Mai Truong Khang", "khang.mai@hcmut.edu.vn", "0999999888", "09-10-2021 20:33:00"],
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "80vh",
  },
});

export default function UserList() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root} elevation={3}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {row.map((item) => {
                    return (
                      <TableCell align="center">
                        {item}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
