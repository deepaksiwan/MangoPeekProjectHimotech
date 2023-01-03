import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import cyf from '../../../src/pages/images/cyf.svg'
import fos from '../../../src/pages/images/fos.svg'
import fosm from '../../../src/pages/images/fosm.svg'
import { makeStyles } from '@mui/styles';



const useStyle = makeStyles({
    mainbox: {
        flexGrow: 1,
        cursor: 'pointer',
        padding: '30px !important',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '40px',
        backgroundColor: '#efefef96',
        '@media(max-width : 600px)':{
            padding : '50px 30px 30px 30px !important'
        }
    },
    imgbox: {
        margin: '4rem 10rem',
        '@media(max-width : 1200px)': {
            margin: '4rem 7.8rem',
            '@media(max-width : 900px)': {
                margin: '2rem 18rem',
                '@media(max-width : 600px)': {
                    margin: '3rem 6rem',
                },
            },
        },
    }
})



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'Move One Step ahead to Create your Future!',
        imgPath: cyf,
    },
    {
        label: 'Move One Step ahead to the Future of Security',
        imgPath: fos,
    },
    {
        label: 'Move One Step ahead to the Future of Social Media',
        imgPath: fosm,
    },

];

function Slider() {

    const classes = useStyle();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box className={classes.mainbox}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    p: 4,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    textAlign: 'center',
                    '@media(max-width : 600px)': {
                        padding : '20px'
                    },
                }}
            >
                <Typography variant='h5' fontWeight={500} color="#949494">{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <Box key={step.label} className={classes.imgbox}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </Box>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                sx={{
                    backgroundColor: 'transparent',
                    justifyContent: 'center'
                }}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}


            />
        </Box>
    );
}

export default Slider;
