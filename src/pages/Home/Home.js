import React, { useState } from "react";
import Header from "../../components/Header/Header";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import trade from '../../../src/pages/images/trade.svg'

// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ExploreNFT from "../../components/ExploreNFT/ExploreNFT";
import Footer from "../../components/Footer/Footer";
import Footer2 from "../../components/Footer/Footer2";
import ExploreNFTHeading from "../../components/ExploreNFT/ExploreNFTHeading";
const useStyle = makeStyles((theme) => ({
  wrap14: {

    padding: "1.5rem 0 2rem",
    "& h6": {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "lighter",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
    '@media(max-width : 900px)':{
      padding : '5.5rem 0rem 1.5rem 0rem'
    }
  },

  mainbox: {
    // backgroundImage: 'linear-gradient(180deg, #ebeaea, #efefef3b)',
    boxShadow: 'inset 0px 7px 15px -4px #00000024',
    backgroundColor: '#efefef96',
    borderRadius: '40px',
    padding: '30px 0px 50px 0px !important'
  },
  boxborder1: {
    padding: '6px 60px',
    backgroundColor: '#FFCC00',
    borderRadius: '20px',
    boxShadow: '-13px 16px 23px -4px #000',
    display: 'inline-block'
  },
  boxborder2: {
    padding: '6px 50px',
    backgroundColor: '#33CC66',
    borderRadius: '20px',
    boxShadow: '-13px 16px 23px -4px #000',
    display: 'inline-block'
  },
  boxborder3: {
    padding: '6px 44px',
    backgroundColor: '#FF5F29',
    borderRadius: '20px',
    boxShadow: '-13px 16px 23px -4px #000',
    display: 'inline-block'
  },
  h1: {
    fontSize: '36px !important',
    fontWeight: '700 !important',
    color: '#949494'
  },
  tradeimg: {
    display: 'inline-block'
  }


}));
const Home = () => {
  const classes = useStyle();
  return (
    <>
      <Container>
        <Header />

        <Box className={classes.wrap14}>

          <Box className={classes.mainbox}>
            <Grid container spacing={3}>
              <Grid item md={4} lg={4} sm={12} >
                <Box sx={{ textAlign: 'center', marginTop: '100px','@media(max-width : 900px)':{marginTop: '25px',} }}>
                  <Typography variant="h1" className={classes.h1}>Create</Typography>
                  <Box className={classes.boxborder2}></Box>
                </Box>
              </Grid>
              <Grid item md={4} lg={4} sm={12} >
                <Box sx={{ textAlign: 'center', marginTop: '60px','@media(max-width : 900px)':{marginTop: '10px',} }}>
                  <Typography variant="h1" className={classes.h1}>Interact</Typography>
                  <Box className={classes.boxborder1}></Box>
                </Box>
              </Grid>
              <Grid item md={4} lg={4} sm={12} >
                <Box sx={{ textAlign: 'center' }}>
                  <Box className={classes.tradeimg} component="img" src={trade}></Box>
                  <Typography variant="h1" className={classes.h1}>Trade</Typography>
                  <Box className={classes.boxborder3}></Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

        </Box>
        <ExploreNFTHeading />
        <ExploreNFT />
        <Footer2 />
      </Container>
    </>
  );
};

export default Home;

