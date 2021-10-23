import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Checkbox, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
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
  [
    "Nguyen Thi A",
    "a.nguyen@hcmut.edu.vn",
    "0999999888",
    "09-10-2021 20:33:00",
  ],
  [
    "Nguyen Van B",
    "b.nguyen@hcmut.edu.vn",
    "0999999887",
    "09-10-2021 20:33:00",
  ],
  [
    "Truong Thi C",
    "c.truong@hcmut.edu.vn",
    "0999999885",
    "09-10-2021 20:33:00",
  ],
  [
    "Truong Thi D",
    "d.truong@hcmut.edu.vn",
    "0999999886",
    "09-10-2021 20:33:00",
  ],
  [
    "Truong Thi E",
    "e.truong@hcmut.edu.vn",
    "0999999886",
    "09-10-2021 20:33:00",
  ],
  [
    "Truong Thi F",
    "f.truong@hcmut.edu.vn",
    "0999999886",
    "09-10-2021 20:33:00",
  ],
  [
    "Truong Thi G",
    "g.truong@hcmut.edu.vn",
    "0999999886",
    "09-10-2021 20:33:00",
  ],
  [
    "Truong Thi H",
    "h.truong@hcmut.edu.vn",
    "0999999886",
    "09-10-2021 20:33:00",
  ],
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
  const [myRows, setMyRows] = useState(rows);
  const [rowsToDelete, setRowsToDelete] = useState([]);
  const classes = useStyles();
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
            {myRows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {row.map((item) => {
                    return <TableCell align="center">{item}</TableCell>;
                  })}
                  <IconButton>
                    {" "}
                    <DeleteIcon color="secondary"/>{" "}
                  </IconButton>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
