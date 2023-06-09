import { Box, Container, Grid, } from "@mui/material";
import React, { useState } from "react";
import Header2 from "../../components/Header/Header2";
import { makeStyles } from "@mui/styles";
import Withoutmenucomp from "../Explorepagewithsidemenu/Withoutmenucomp";
import NotificationComp from "./NotificationComp";
import NFTMsg from "../Messaging/NFTMsg";



const useStyle = makeStyles({
    maindiv: {
        padding: '30px 0px 80px 0px',
        display: 'flex'
    },
    menuposition: {
        position: 'fixed',
        top: 0,
        marginTop: '9.10rem',
        '@media(max-width : 1200px)': {
            marginTop: '12.1rem',
            '@media(max-width : 900px)': {
                marginTop: '18.1rem',
                '@media(max-width : 600px)': {
                    marginTop: '11.1rem',
                    zIndex: '100',

                }
            }
        }
    },
    explorenft: {
        marginTop: '4rem',
        '@media(max-width : 600px)': {
            marginTop: '1rem',
        }
    },




})


const Notification = () => {
    const classes = useStyle();
    

    



    return (
        <>
            <Container>
                <Header2 />
                <Box className={classes.maindiv}>


                    <Grid container spacing={2}>
                        <Grid item lg={0.9} md={1} sm={1.1} xs={12}>
                            <Box className={classes.menuposition}>
                                <Withoutmenucomp />
                            </Box>
                        </Grid>
                        <Grid item lg={4.1} md={4.3} sm={5.7} xs={12}>
                            <NotificationComp />
                        </Grid>
                        <Grid item lg={7} md={6.7} sm={5.2} xs={12}>
                            <Box className={classes.explorenft}>
                                <NFTMsg  />
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </>
    )
}

export default Notification