import { Box, Button, Container, Grid, List, ListItem, TextField, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import footerlogo from '../../../src/pages/images/footerlogo.svg'
import telegramicon from '../../../src/pages/images/telegramicon.svg'
import discordicon from '../../../src/pages/images/discordicon.svg'
import twittericon from '../../../src/pages/images/twittericon.svg'


const useStyle = makeStyles((theme) => ({
    mainbox: {
        padding: '30px !important',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '40px',
        backgroundColor: '#efefef96',
        height: '160px'
    },
    footerimg: {
        marginTop: '-70px',
    },
    footerlogo: {
        width: '80%',
        '@media(max-width : 900px)':{
            width: '100%',
        }
    },
    getintouch: {
        padding: '10px 20px !important',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '40px',
        backgroundColor: '#efefef96',
    },
    submitbtn: {
        backgroundColor: '#FFCC00 !important',
        color: '#fff !important',
        padding: '12px 34px !important',
        borderRadius: '30px !important',
    },
    socialicon: {
        display: 'flex',
        marginTop: '20px !important'
    },
    smi: {
        display: 'inline-block',
        transition: 'all .3s ease-out',
        '& : hover': {
            transform: 'translate(0, -5px) !important'
        }
    }
}))


const Footer2 = () => {
    const classes = useStyle();
    return (
        <>

            <Box className={classes.mainbox}>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={6}>
                        <Box className={classes.footerimg}>
                            <Link to="#">
                                <Typography className={classes.footerlogo} component="img" src={footerlogo}></Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6}>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ width: '100%' }}>
                                <TextField
                                    fullWidth
                                    className={classes.getintouch}
                                    placeholder="Get in Touch"
                                    id="outlined-size-small"
                                    variant="standard"
                                    size="small"
                                    InputProps={{ disableUnderline: true }}
                                />
                            </Box>
                            <Box sx={{ marginLeft: '-40px' }}>
                                <Button className={classes.submitbtn}>Submit</Button>
                            </Box>
                        </Box>

                        <List className={classes.socialicon}>
                            <ListItem sx={{ padding: '0px' }}>
                                <Link className={classes.smi} to="#"><Typography component="img" src={telegramicon}></Typography></Link>
                                <Link className={classes.smi} to="#"><Typography ml={3} component="img" src={discordicon}></Typography></Link>
                                <Link className={classes.smi} to="#"><Typography ml={3} component="img" src={twittericon}></Typography></Link>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default Footer2