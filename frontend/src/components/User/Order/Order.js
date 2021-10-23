import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
const Order = () => {
  const classes = useStyles();
  return (
    <Box flexDirection="column" display="flex" justifyContent="center" alignItems="center">
      <Typography variant="h5">Order Information</Typography>
      <Paper>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell align="center">{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow hover>
                  {row.map((item) => (
                    <TableCell align="center">{item}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Order;

const columns = [
  { id: "code", label: "Code" },
  { id: "date", label: "Date" },
  {
    id: "product",
    label: "Product(s)",
  },
  {
    id: "total",
    label: "Total",
  },
  {
    id: "status",
    label: "Status",
  },
];
const rows = [
  [
    "#000008",
    "10-10-2021",
    "PURELL Advanced Hand Sanitizer Refreshing Gel,PURELL Advanced Hand Sanitizer Soothing Gel, Fresh scent, with Aloe and Vitamin",
    "20$",
    "completed",
  ],
  [
    "#000007",
    "09-10-2021",
    "KN95 Face Mask 60 Pack, BLScode Individually Wrapped 5-Layer Breathable Mask",
    "20$",
    "completed",
  ],
  [
    "#000006",
    "08-10-2021",
    "3M Personal Protective Equipment Particulate Respirator 8210",
    "20$",
    "completed",
  ],
  [
    "#000005",
    "07-10-2021",
    "MedicPro N95 Mask NIOSH Approved, Individually Wrapped N95",
    "20$",
    "completed",
  ],
  [
    "#000004",
    "06-10-2021",
    "BNX N95 Mask NIOSH Certified MADE IN USA Particulate Respirator Protective Face Mask",
    "20$",
    "completed",
  ],
  [
    "#000003",
    "29-09-2021",
    "3M 8511 Particulate Disposable Respirator, N95, Grinding, Sanding, Sawing, Sweeping, Dust, Smoke, 80 Pack",
    "20$",
    "completed",
  ],
  [
    "#000002",
    "19-09-2021",
    "Black KN95 Mask 20PCS Cup Dust Safety Face Masks Breathable 5 Layer with Elastic Ear Loop and Nose Bridge",
    "20$",
    "completed",
  ],
  [
    "#000001",
    "09-09-2021",
    "PURELL Advanced Hand Sanitizer Soothing Gel, Fresh scent, with Aloe and Vitamin",
    "20$",
    "completed",
  ],
];
