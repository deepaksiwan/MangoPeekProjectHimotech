import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import arrow from '../../../src/pages/images/arrow.svg'

const useStyle = makeStyles({
    hding: {
        boxShadow: 'inset 0px 7px 15px -6px #00000024',
        backgroundColor: '#efefef96',
        borderRadius: '40px',
        padding: '8px 20px',
        width : '100%',
        textAlign : 'left',
        '@media(max-width : 1200px)':{
            width : '100%',
        },
        '@media(max-width : 900px)':{
            width : '100%',
        },
        '@media(max-width : 600px)':{
            width : '100%',
            textAlign : 'center'
        }
      },
      viewbtn  : { 
        color : '#666666 !important',
        textTransform: 'none !important',
        fontSize: '18px !important',
        fontWeight: '700 !important',
        '&:hover':{
          backgroundColor : 'transparent !important'
        },
        '@media(max-width : 600px)':{
            width : '100%',
            textAlign : 'center'
        }
      }
})


const ExploreNFTHeading = (props) => {
    const classes = useStyle();
    return (
        <>
            <Box
                sx={{
                    textAlign: "center",
                    margin: "1rem 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    '@media(max-width : 600px)':{
                        width : '100%',
                        justifyContent : 'center',
                        marginTop : '20px',
                    }
                }}
            >
                {/* <Box> */}
                {/* <Typography variant="h3">Ethereum Feature Nfts</Typography> */}

                <Box className={classes.hding}>
                    <Typography variant="h5" fontWeight={700} color="#7B7B7B" letterSpacing={1} >Ethereum  <Typography sx={{ fontSize: '20px' }} color="#ADADAD" component="span">{props.label}</Typography></Typography>
                </Box>
                {/* <Box>
                    <Button className={classes.viewbtn} endIcon={<Box sx={{ ml: '10px' }} component="img" src={arrow} />}>
                        View More
                    </Button>
                </Box> */}

            </Box>
        </>
    )
}

export default ExploreNFTHeading