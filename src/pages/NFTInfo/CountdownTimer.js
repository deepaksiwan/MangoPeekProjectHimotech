import { Box } from '@mui/material';
import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './useCountdown';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  maindiv: {
    display: 'flex !important',
    justifyContent : 'space-between',
    marginTop : '15px'
  },
  mr : {
    marginLeft : '20px !important'
  }
})

const ExpiredNotice = () => {

  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  const classes = useStyle();
  return (
    <Box className={classes.maindiv}>


      <DateTimeDisplay   value={hours} type={'Hours'} isDanger={false} />

      <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />

      <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />

    </Box>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
