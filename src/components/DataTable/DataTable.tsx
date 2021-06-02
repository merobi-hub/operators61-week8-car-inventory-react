import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useGetData } from '../../custom-hooks';

// const StyledTableCell = withStyles((theme) => ({
//     head: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     body: {
//       fontSize: 14,
//     },
// }))(TableCell);
  
// const StyledTableRow = withStyles((theme) => ({
//     root: {
//       '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//       },
//     },
// }))(TableRow);

// function createData(id: number, firstName: string | null, lastName: string, age: number | null) {
//     return { id, firstName, lastName, age };
// }

// const rows = [
//     createData(1, 'Jon', 'Snow', 35),
//     createData(2, 'Cersei', 'Lannister', 42),
//     createData(3, 'Jaime', 'Lannister', 45),
//     createData(4, 'Arya', 'Stark', 16),
//     createData(5, 'Daenerys', 'Targaryen', null),
//     createData(6, null, 'Melisandre', 150),
//     createData(7, 'Ferrara', 'Clifford', 44),
//     createData(8, 'Rossini', 'Frances', 36),
//     createData(9, 'Harvey', 'Roxie', 65),
// ];

// const useStyles = makeStyles({
//     table: {
//       minWidth: 700,
//     },
// });

// export default function CustomizedTables() {
// export const DataTable = () => {
//     const classes = useStyles();
  
//     return (
//       <TableContainer component={Paper}>
//         <Table className={classes.table} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell align="right"></StyledTableCell>
//               <StyledTableCell align="right">First&nbsp;Name</StyledTableCell>
//               <StyledTableCell align="right">Last&nbsp;Name</StyledTableCell>
//               <StyledTableCell align="right">Age</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <StyledTableRow key={row.id}>
//                 <StyledTableCell component="th" scope="row">
//                   {row.id}
//                 </StyledTableCell>
//                 <StyledTableCell align="right">{row.firstName}</StyledTableCell>
//                 <StyledTableCell align="right">{row.lastName}</StyledTableCell>
//                 <StyledTableCell align="right">{row.age}</StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     );
//   }
 
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'model', headerName: 'Model', width: 130 },
    { field: 'make', headerName: 'Make', width: 130 },
    { field: 'year', headerName: 'Year', type: 'number', width: 4 },
    { field: 'category', headerName: 'Category', width: 90 },
    { field: 'seats', headerName: 'Seats', type: 'number', width: 1 },
    { field: 'horsepower', headerName: 'Horsepower', type: 'number', width: 4 },
    { field: 'torque', headerName: 'Torque', type: 'number', width: 4 },
    { field: 'color', headerName: 'Color', width: 90 },
    { field: 'interior', headerName: 'Interior', width: 90 },
    { field: 'user_token', headerName: 'User Token', width: 70 }
  ];

const rows = [];

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
});
  
export const DataTable = () => {
  return (
      <div style={{ height: 400, width: '100%' }}>
        <h2>Cars in Inventory</h2>
        <DataGrid rows={[]} columns={columns} pageSize={5} checkboxSelection />
      </div>
    );
}