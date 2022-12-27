import { Box, Container, Grid, } from "@mui/material";
import React, { useState } from "react";
import Header2 from "../../components/Header/Header2";
import { makeStyles } from "@mui/styles";
import Withoutmenucomp from "../Explorepagewithsidemenu/Withoutmenucomp";
import MessagingComp from "../Messaging/MessagingComp";
import NFTMsgExp from "./NFTMsgExp";
import MessageChat from "./MessageChat";



const useStyle = makeStyles({
    maindiv: {
        padding: '30px 0px 80px 0px',
        display: 'flex'
    },
    menuposition: {
        position: 'fixed',
        top: 0,
        marginTop: '9.10rem'
    },
    explorenft: {
        marginTop: '4rem',
    },


    chatboxwrp : {
        backgroundColor: '#efefef96 !important',
        marginTop : '80px !important',
        paddingRight : '20px !important',
        borderRadius : '45px',
    }

})


const MessagingExpend = () => {
    const classes = useStyle();



    return (
        <>
            <Container>
                <Header2 />
                <Box className={classes.maindiv}>


                    <Grid container spacing={2}>
                        <Grid item lg={0.9}>
                            <Box className={classes.menuposition}>
                                <Withoutmenucomp />
                            </Box>
                        </Grid>
                        <Grid item lg={7.9}>
                            <Box >
                                <Grid container spacing={0} className={classes.chatboxwrp}>
                                    <Grid item lg={6}>
                                        <MessagingComp />
                                    </Grid>
                                    <Grid item lg={6}>
                                        <MessageChat />
                                    </Grid>
                                </Grid>

                            </Box>
                        </Grid>
                        <Grid item lg={3.2}>
                            <Box className={classes.explorenft}>
                                <NFTMsgExp/>
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </>
    )
}

export default MessagingExpend