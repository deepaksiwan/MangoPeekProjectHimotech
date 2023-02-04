import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { textAlign } from '@mui/system';

const  Loader =() =>{
  return (
    <Box sx={{ display: 'flex',  justifyContent:"center"}} >
      <CircularProgress  size={"30px"} color={"error"}/>
    </Box>
  );
}
export default Loader;