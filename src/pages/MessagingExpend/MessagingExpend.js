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
        '@media(max-width : 900px)': {
            display: 'none',
            '@media(max-width : 600px)': {
                display: 'block',
                marginTop: '1rem',
            }
        }
    },


    chatboxwrp: {

        marginTop: '66px !important',
        paddingRight: '20px !important',
        borderRadius: '45px',
        '@media(max-width : 600px)': {
            marginTop: '0px !important',
            paddingRight: '0px !important',
        }
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
                        <Grid item lg={0.9} md={0.9} sm={1.2} xs={12}>
                            <Box className={classes.menuposition}>
                                <Withoutmenucomp />
                            </Box>
                        </Grid>
                        <Grid item lg={7.9} md={7.9} sm={10.8} xs={12}>
                            <Box>
                                <Grid container spacing={0} className={classes.chatboxwrp}>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <MessagingComp />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <MessageChat />
                                    </Grid>
                                </Grid>

                            </Box>
                        </Grid>
                        <Grid item lg={3.2} md={3.2} sm={2} xs={12}>
                            <Box className={classes.explorenft}>
                                <NFTMsgExp />
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </>
    )
}

export default MessagingExpend