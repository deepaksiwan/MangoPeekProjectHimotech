import { Box, Button, Container, Typography, } from "@mui/material";
import React from "react";
import Footer2 from "../../components/Footer/Footer2";
import Header from "../../components/Header/Header";
import { makeStyles } from "@mui/styles";
import walletimgp from '../../../src/pages/images/walletimgp.svg'

const useStyle = makeStyles({
    maindiv: {
        padding: '40px 0px 80px 0px'
    },
    mainbox: {
        padding: '50px !important',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '40px',
        backgroundColor: '#efefef96',
    },
    innerbox: {
        display: 'flex',
        padding: '30px !important',
        boxShadow: '0px 20px 20px -6px #00000036',
        borderRadius: '30px',
        backgroundColor: '#efefef96',
        alignItems: 'center'
    },
    unlockbtn: {
        color: '#9B9B9B !important',
        padding: '14px 30px !important',
        transition: '0.5s !important',
        fontWeight: '500 !important',
        borderRadius: '30px !important',
        background: 'linear-gradient(180deg, #ebeaea, #efefef3b)',
        backgroundColor: 'transparent !important',
        boxShadow: 'none !important'
    },
    wallet: {
        textAlign: 'right',
        marginTop: '-125px',
        marginRight: '-35px',
    }

})


const NotLinkWallet = () => {
    const classes = useStyle();



    return (
        <>
            <Container>
                <Header />
                <Box className={classes.maindiv}>
                    <Box className={classes.mainbox}>
                        <Box className={classes.innerbox}>
                            <Box>
                                <Typography variant="h4" color="#B5B4B4" fontWeight={700}>Link your <br />wallet to
                                    <Typography variant="h4" component="span" color="#FF5F29" fontWeight={700} ml={1}>Explore</Typography>
                                </Typography>
                            </Box>
                            <Box sx={{ margin: '30px 0px 0px 30px' }}>
                                <Button className={classes.unlockbtn} variant="contained">Unlock</Button>
                            </Box>
                        </Box>
                        <Box className={classes.wallet}>
                            <Typography display="inline-block" component="img" src={walletimgp}></Typography>
                        </Box>
                    </Box>
                </Box>
                <Footer2 />
            </Container>
        </>
    )
}

export default NotLinkWallet