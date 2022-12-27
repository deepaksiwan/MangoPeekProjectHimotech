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
        margin: '-30px 0px 0px 40px !important'
    },
    bnrmain: {
        marginTop: '50px'
    },
    hding: {
        fontSize: '30px !important',
        fontWeight: '700 !important',
        color: '#808080',
    },

    namewithadd: {
        display: 'flex',
        padding: '15px !important',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '40px',
        backgroundColor: '#efefef96',
    },
    h4: {
        color: '#FF5E27',
        fontWeight: '900 !important',
    },
    h5: {
        fontSize: '20px !important',
        color: '#808080',
        fontWeight: '900 !important',
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
        marginTop: '40px'

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
                    <Grid item lg={12}>
                        <Box className={classes.bnrmain}>
                            <Typography className={classes.profilebnr} component="img" src={profilebnrimg}></Typography>
                            <Typography className={classes.profile} component="img" src={profileicon}></Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: '30px' }}>
                    <Grid item lg={7}>
                        <Box>
                            <Typography className={classes.hding} variant="h1">Unnamed</Typography>
                            <Box sx={{ display: 'flex', marginTop: '20px' }}>
                                <Box className={classes.namewithadd}>
                                    <Typography component="img" src={walletimg}></Typography>
                                    <Typography ml={2} fontWeight={700} color="#808080">0xdsdgs5545545asfsdgg</Typography>
                                </Box>
                                <Box sx={{ alignSelf: 'center', marginLeft: '20px' }}>
                                    <Typography fontWeight={700} color="#808080">Joined September 2022</Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item lg={5}>
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

                    <Grid item lg={7}>
                        <Box>
                            <Box className={classes.nftflowers2} >
                                <Typography>
                                    <Typography className={classes.h5} variant="h4">10.0K</Typography>
                                    <Typography color="rgb(112, 122, 131)">Items</Typography>
                                </Typography>

                                <Typography>
                                    <Typography className={classes.h5} variant="h4">6.5K</Typography>
                                    <Typography color="rgb(112, 122, 131)">Owners</Typography>
                                </Typography>

                                <Typography>
                                    <Typography > <img className={classes.ethimg} src={eth} alt="" /><Typography className={classes.h5} variant="h4" component="span">663.0K</Typography></Typography>
                                    <Typography color="rgb(112, 122, 131)">Total Volume</Typography>
                                </Typography>

                                <Typography>
                                    <Typography > <img className={classes.ethimg} src={eth} alt="" /><Typography className={classes.h5} variant="h4" component="span">75</Typography></Typography>
                                    <Typography color="rgb(112, 122, 131)">Floor Price</Typography>
                                </Typography>

                                <Typography>
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