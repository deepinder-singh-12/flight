import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const cellStyle = { fontWeight: "bold" };

const FlightTable = ({ flightsArr }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={cellStyle} align="left">
              Airlines
            </TableCell>
            <TableCell sx={cellStyle} align="left">
              Fight
            </TableCell>
            <TableCell sx={cellStyle} align="left">
              Cities
            </TableCell>
            <TableCell sx={cellStyle} align="left">
              Arrival Time
            </TableCell>
            <TableCell sx={cellStyle} align="left">
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flightsArr?.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.Carrier}</TableCell>
              <TableCell align="left">{row.Flight}</TableCell>
              <TableCell align="left">{row.Cities}</TableCell>
              <TableCell align="left">{row.SchedTime}</TableCell>
              <TableCell
                sx={{ color: row.Status === "Delayed" ? "red" : "" }}
                align="left"
              >
                {row.Status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FlightTable;
