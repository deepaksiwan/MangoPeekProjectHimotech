import { Box, Container, } from "@mui/material";
import React from "react";
import Header2 from "../../components/Header/Header2";
import { makeStyles } from "@mui/styles";
import ExploreNFT from "../../components/ExploreNFT/ExploreNFT";
import Withmenucomp from "./Withmenucomp";

const useStyle = makeStyles({

    explorenft: {
        marginLeft: '17rem',
        marginTop: '1rem'
    },

    maindiv: {
        padding: '30px 0px 80px 0px',
        display: 'flex'
    },

})


const Explorepagewithsidemenu = () => {
    const classes = useStyle();



    return (
        <>
            <Container>
                <Header2 />
                <Box className={classes.maindiv}>
                    <Withmenucomp />
                    <Box className={classes.explorenft}>
                        <ExploreNFT />
                    </Box>
                </Box>
                {/* <Footer2 /> */}
            </Container>
        </>
    )
}

export default Explorepagewithsidemenu