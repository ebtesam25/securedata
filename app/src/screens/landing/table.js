import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import data from '../../data.json';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(time, date, weight,heart,spo2,medication) {
  return {time, date,weight,heart,spo2,medication };
}
const rows = [];
for(var i=0;i<20;i++){
   rows.push(createData(data[i].Time,data[i].Date,data[i].Weight,data[i].Heartrate,data[i].SpO2,data[i].Medication));
}


export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date/Time</TableCell>
            <TableCell align="right">Weight</TableCell>
            <TableCell align="right">Pulse rate</TableCell>
            <TableCell align="right">SpO2</TableCell>
            <TableCell align="right">Medication</TableCell>



           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.time}>
              <TableCell align="left">{row.date}{row.time}</TableCell>
              <TableCell align="right">{row.weight}</TableCell>
              <TableCell align="right">{row.heart}</TableCell>
              <TableCell align="right">{row.spo2}</TableCell>
              <TableCell align="right">{row.medication}</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}