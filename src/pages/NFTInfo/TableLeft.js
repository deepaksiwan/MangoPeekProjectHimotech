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
    createData('1.21 ETH ','243 ETH', '243 ETH', '243 ETH',<Box><Button sx={{  backgroundColor: '#33CC33 !important',
    color: '#fff !important',
    padding: '12px 20px !important',
    borderRadius: '30px !important',}}>Buy now</Button></Box>,),
    
];


const TableLeft = () => {
    const classes = useStyles();
    return (
        <Box>
            <TableContainer className={classes.tablectnr}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tablelist2} >Price</TableCell>
                            <TableCell className={classes.tablelist2} align="left">USD Price</TableCell>
                            <TableCell className={classes.tablelist2} align="left">Expiration</TableCell>
                            <TableCell className={classes.tablelist2} align="left">From</TableCell>
                            <TableCell className={classes.tablelist2} align="left"></TableCell>
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