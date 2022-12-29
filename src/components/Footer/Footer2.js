import { Box, Button, Container, Grid, List, ListItem, TextField, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import telegramicon from '../../../src/pages/images/telegramicon.svg'
import discordicon from '../../../src/pages/images/discordicon.svg'
import twittericon from '../../../src/pages/images/twittericon.svg'
import ftrsheild from '../../../src/pages/images/ftrsheild.svg'
import fjumplogo from '../../../src/pages/images/fjumplogo.gif'
import ftrbx from '../../../src/pages/images/ftrbx.svg'

const useStyle = makeStyles((theme) => ({
    mainbox: {
        padding: '30px !important',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '40px',
        backgroundColor: '#efefef96',
        height: '160px',
        '@media(max-width : 600px)': {
            marginTop: '40px',
            marginBottom: '20px',
            height: '310px',
        }
    },
    footerimg: {
        marginTop: '-70px',
    },
    footerlogo: {
        width: '150px',
        marginLeft: '20px !important',
        '@media(max-width : 600px)': {
            marginLeft: '0px !important'
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
    },
    ftrmainwrp: {
        display: 'flex'
    },
    ftrbx: {
        width: '160px',
        boxShadow: '0px 13px 23px -3px #0000004a',
        marginTop: '-1.6rem !important',
        marginLeft: '1rem! important',
        marginBottom: '3rem !important',
        borderRadius: '15px 15px 36px 36px',
        '@media(max-width : 900px)': {
            width: '140px',
            '@media(max-width : 900px)': {
                width: '120px',
                marginLeft: '0rem! important',
                marginBottom: '0.6rem !important'
            }
        }
    },
    ftrsheildbx: {
        marginTop: '5.6rem',
        marginRight: '12rem',
        '@media(max-width : 1200px)': {
            marginRight: '8rem',
            '@media(max-width : 900px)': {
                marginRight: '2rem',
                '@media(max-width : 900px)': {
                    marginRight: '0rem',
                    marginTop: '8.6rem'
                }
            }
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
                            <Link to="/">
                                <Box className={classes.ftrmainwrp}>
                                    <Box>
                                        <Typography display="inline-block" className={classes.footerlogo} component="img" src={fjumplogo}></Typography>
                                        <Typography className={classes.ftrbx} display="inline-block" component="img" src={ftrbx}></Typography>
                                    </Box>
                                    <Box className={classes.ftrsheildbx}>
                                        <Typography display="inline-block" component="img" src={ftrsheild} width="100%"></Typography>
                                    </Box>
                                </Box>
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
                            <ListItem sx={{
                                padding: '0px', '@media(max-width : 600px)': {
                                    justifyContent: 'center'
                                }
                            }}>
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