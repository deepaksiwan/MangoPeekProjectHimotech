import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/Header/Header";
import profilebnrimg from '../../../src/pages/images/profilebnrimg.svg'
import profileicon from '../../../src/pages/images/profileicon.svg'
import { makeStyles } from "@mui/styles";
import walletimg from '../../../src/pages/images/walletimg.svg'
import eth from '../../../src/pages/images/eth.svg'
import ProfileTab from './ProfileTab'

const useStyle = makeStyles({
    profilebnr: {
        width: '100%'
    },
    profile: {
        width: '80px',
        margin: '-30px 0px 0px 40px !important',
        '@media(max-width : 600px)': {
            width: '50px',
            margin: '-30px 0px 0px 30px !important',
        }
    },
    bnrmain: {
        marginTop: '6rem',
        '@media(max-width : 900px)': {
            marginTop: '85px',
        }
    },
    hding: {
        fontSize: '30px !important',
        fontWeight: '700 !important',
        color: '#808080',
        '@media(max-width : 600px)': {
            textAlign: 'center',
        }
    },

    namewithadd: {
        display: 'flex',
        padding: '15px !important',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '40px',
        backgroundColor: '#efefef96',
        '@media(max-width : 600px)': {
            width: '100%'
        }
    },
    h4: {
        color: '#FF5E27',
        fontWeight: '900 !important',
        '@media(max-width : 600px)': {
            fontSize: '24px !important'
        }
    },
    h5: {
        fontSize: '20px !important',
        color: '#808080',
        fontWeight: '900 !important',
        '@media(max-width : 600px)': {
            fontSize: '30px !important',
        }
    },
    nftflowers: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '10px 30px!important',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '50px',
        backgroundColor: '#efefef96',

    },
    nftflowers2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '40px',
        '@media(max-width : 600px)': {
            display: 'inherit',
            textAlign: 'center',
            marginTop: '20px'
        }
    },

    typo: {
        '@media(max-width : 600px)': {
            marginTop: '25px !important'
        }
    },
    ethimg: {
        display: 'inline-block',
        marginRight: '6px !important'
    }

})


const Profile2 = () => {
    const classes = useStyle();
    return (
        <>
            <Container>
                <Header />

                <Grid lg={12} container spacing={0}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Box className={classes.bnrmain}>
                            <Typography className={classes.profilebnr} component="img" src={profilebnrimg}></Typography>
                            <Typography className={classes.profile} component="img" src={profileicon}></Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{
                    mt: '30px', '@media(max-width : 600px)': {
                        mt: '0px'
                    }
                }}>
                    <Grid item lg={7} md={7} sm={12} xs={12}>
                        <Box>
                            <Typography className={classes.hding} variant="h1">Unnamed</Typography>
                            <Box sx={{
                                display: 'flex', marginTop: '20px',
                                '@media(max-width : 600px)': {
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                }
                            }}>
                                <Box className={classes.namewithadd}>
                                    <Typography component="img" src={walletimg}></Typography>
                                    <Typography ml={2} fontWeight={700} color="#808080">0xdsdgs5545545asfsdgg</Typography>
                                </Box>
                                <Box sx={{
                                    alignSelf: 'center', marginLeft: '20px', '@media(max-width : 600px)': {
                                        marginLeft: '0px',
                                        marginTop: '15px',
                                    }
                                }}>
                                    <Typography fontWeight={700} color="#808080">Joined September 2022</Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                        <Box>
                            <Box className={classes.nftflowers} >
                                <Typography>
                                    <Typography className={classes.h4} variant="h4">237</Typography>
                                    <Typography color="rgb(112, 122, 131)">NFTs</Typography>
                                </Typography>

                                <Typography>
                                    <Typography className={classes.h4} variant="h4">8.1K</Typography>
                                    <Typography color="rgb(112, 122, 131)">Followers</Typography>
                                </Typography>

                                <Typography>
                                    <Typography className={classes.h4} variant="h4">8.1K</Typography>
                                    <Typography color="rgb(112, 122, 131)">Following</Typography>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>

                    <Grid item lg={7} md={7} sm={12} xs={12}>
                        <Box>
                            <Box className={classes.nftflowers2} >
                                <Typography className={classes.typo}>
                                    <Typography className={classes.h5} variant="h4">10.0K</Typography>
                                    <Typography color="rgb(112, 122, 131)">Items</Typography>
                                </Typography>

                                <Typography className={classes.typo}>
                                    <Typography className={classes.h5} variant="h4">6.5K</Typography>
                                    <Typography color="rgb(112, 122, 131)">Owners</Typography>
                                </Typography>

                                <Typography className={classes.typo}>
                                    <Typography > <img className={classes.ethimg} src={eth} alt="" /><Typography className={classes.h5} variant="h4" component="span">663.0K</Typography></Typography>
                                    <Typography color="rgb(112, 122, 131)">Total Volume</Typography>
                                </Typography>

                                <Typography className={classes.typo}>
                                    <Typography > <img className={classes.ethimg} src={eth} alt="" /><Typography className={classes.h5} variant="h4" component="span">75</Typography></Typography>
                                    <Typography color="rgb(112, 122, 131)">Floor Price</Typography>
                                </Typography>

                                <Typography className={classes.typo}>
                                    <Typography > <img className={classes.ethimg} src={eth} alt="" /><Typography className={classes.h5} variant="h4" component="span">68.7</Typography></Typography>
                                    <Typography color="rgb(112, 122, 131)">Best Price</Typography>
                                </Typography>

                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Box>
                    <ProfileTab />
                </Box>
            </Container>
        </>
    )
}

export default Profile2