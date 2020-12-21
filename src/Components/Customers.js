import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(FirstName, LastName, Email, Phone) {
    return { FirstName, LastName, Email, Phone };
}

const rows = [
    createData('Lucas', 'Carlsen', 'notmymail@mail.uc.edu', '513-158-1943'),
    createData('sam', 'Smith', 'email@gmail.com', '513-555-5555' ),
    createData('John', 'Smith', 'jsmith@gmail.com', '999-999-9999' ),
];

export default function Customers() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="middle">FirstName</TableCell>
                        <TableCell align="middle">LastName</TableCell>
                        <TableCell align="middle">Email</TableCell>
                        <TableCell align="middle">Phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row" align="middle">
                                {row.FirstName}
                            </TableCell>
                            <TableCell align="middle">{row.LastName}</TableCell>
                            <TableCell align="middle">{row.Email}</TableCell>
                            <TableCell align="middle">{row.Phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}