import { Box, Container, } from "@mui/material";
import React from "react";
import Header2 from "../../components/Header/Header2";
import { makeStyles } from "@mui/styles";
import ExploreNFT from "../../components/ExploreNFT/ExploreNFT";
import Withoutmenucomp from "./Withoutmenucomp";



const useStyle = makeStyles({
    maindiv: {
        padding: '30px 0px 80px 0px',
        display: 'flex',
        
        

        
    },
    menuposition: {
        position: 'fixed',

        top: 0,
        marginTop: '9.10rem',
        '@media(max-width : 600px)': {
          zIndex:"1 !important"
        },
        '@media(max-width : 1200px)': {
            marginTop: '12.1rem',
            '@media(max-width : 900px)': {
                marginTop: '18.1rem !important',
                '@media(max-width : 600px)': {
                    marginTop: '11.1rem !important',
                }
            }
        }
    },
    explorenft: {
        marginLeft: '5rem',
        marginTop: '1rem',
        '@media(max-width : 600px)': {
            margin: "0px !important",
 
         }
       
    },




})


const Explorewithmenu = () => {
    const classes = useStyle();



    return (
        <>
            <Container>
                <Header2 />
                <Box className={classes.maindiv}>
                    <Box className={classes.menuposition}>
                        <Withoutmenucomp />
                    </Box>
                    <Box className={classes.explorenft}>
                        <ExploreNFT />
                    </Box>
                </Box>
                {/* <Footer2 /> */}
            </Container>
        </>
    )
}

export default Explorewithmenu