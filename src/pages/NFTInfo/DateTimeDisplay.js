import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles({
  maindiv: {
    display: 'flex !important',
  }
})

const DateTimeDisplay = ({ value, type, isDanger }) => {
  const classes = useStyle();
  return (
    <Box className={classes.maindiv}>
      <Typography variant='h4' fontWeight={700} color="#FBAB90">{value}</Typography>
      <Typography variant='h4' fontWeight={700} color="#7C7C7C">{type}</Typography>
    </Box>
  );
};

export default DateTimeDisplay;
