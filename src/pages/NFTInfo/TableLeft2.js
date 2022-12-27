import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import { Box, Button } from '@mui/material';


const useStyles = makeStyles({
    tablectnr: {
        backgroundColor: '#24273100',
        boxShadow: 'inherit',
        borderRadius: '20px',
         
    },
    tablelist2: {
        color : '#ACACAC !important',
        fontWeight : '700 !important',
        borderBottom: 'none !important',
        padding: '10px 0px !important',
        '@media(max-width : 1200px)': {
            padding: '10px 10px !important',
        }
    },
    tablelist: {
        color : '#626262 !important',
        borderBottom: 'none !important',
        padding: '10px 0px !important',
        '@media(max-width : 1200px)': {
            padding: '10px 10px !important',
        }
    },
    
})


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Minted','512 ETH', 'NullAddress', 'NullAddress','NullAddress', ),
    
];


const TableLeft = () => {
    const classes = useStyles();
    return (
        <Box>
            <TableContainer className={classes.tablectnr}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tablelist2} >Event</TableCell>
                            <TableCell className={classes.tablelist2} align="left">Price</TableCell>
                            <TableCell className={classes.tablelist2} align="left">From</TableCell>
                            <TableCell className={classes.tablelist2} align="left">To</TableCell>
                            <TableCell className={classes.tablelist2} align="right">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell className={classes.tablelist} component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell className={classes.tablelist} align="left">{row.calories}</TableCell>
                                <TableCell className={classes.tablelist} align="left">{row.fat}</TableCell>
                                <TableCell className={classes.tablelist} align="left">{row.carbs}</TableCell>
                                <TableCell className={classes.tablelist} align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default TableLeft;