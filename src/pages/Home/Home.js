import React, { useState } from "react";
import Header from "../../components/Header/Header";
import createbnrimg from '../../../src/pages/images/createbnrimg.gif'
import interactimg from '../../../src/pages/images/interact.gif'
import tradeimg from '../../../src/pages/images/tradeimg.gif'
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

    padding: "6.5rem 0rem 1.5rem 0rem",
    "& h6": {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "lighter",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },

    '@media(max-width : 900px)': {
      padding: '5.5rem 0rem 1.5rem 0rem'
    }
  },

  mainbox: {
    // backgroundImage: 'linear-gradient(180deg, #ebeaea, #efefef3b)',
    boxShadow: 'inset 0px 7px 15px -4px #00000024',
    backgroundColor: '#efefef96',
    borderRadius: '40px',
    padding: '30px 0px 50px 0px !important',
    cursor: 'pointer',
    height: '330px',
    '@media(max-width : 900px)': {
      height: '320px',
      '@media(max-width : 600px)': {
        height: '700px',
      }
    }
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
  },

  createbnrimg: {
    width: '160px !important',
    display: 'inline-block !important',
    boxShadow: 'inset 0px 7px 15px -4px #00000024',
    borderRadius: '16px',
    padding: '10px 0px !important',
    backgroundColor: '#efefef96',
    transition: '0.8s',
  },
  createbnrimgwrp: {
    textAlign: 'center !important',
    marginTop: '100px !important',
    transition: '0.8s',
    '&:hover': {
      marginTop: '0px !important',
    },
    '@media(max-width : 900px)': {
      marginTop: '100px !important',
      '@media(max-width : 600px)': {
        marginTop: '100px !important',
      }
    }
  },


  interactimg: {
    width: '160px !important',
    display: 'inline-block !important',
    boxShadow: 'inset 0px 7px 15px -4px #00000024',
    borderRadius: '16px',
    padding: '10px 0px !important',
    backgroundColor: '#efefef96',
    transition: '0.8s',
  },

  interactimgwrp: {
    textAlign: 'center',
    marginTop: '60px',
    transition: '0.8s',
    '&:hover': {
      marginTop: '0px !important',
    },
    '@media(max-width : 600px)': {
      marginTop: '100px !important',
    }
  },

  tradeimgs: {
    width: '160px !important',
    display: 'inline-block !important',
    boxShadow: 'inset 0px 7px 15px -4px #00000024',
    borderRadius: '16px',
    padding: '10px 0px !important',
    backgroundColor: '#efefef96',
    transition: '0.8s',
  },

  tradeimgwrp: {
    textAlign: 'center',
    marginTop: '100px',
    transition: '0.8s',
    '&:hover': {
      marginTop: '0px !important',
    },
    '@media(max-width : 600px)': {
      marginTop: '100px !important',
    }
  }


}));
const Home = () => {
  const classes = useStyle();
  const [isShown, setIsShown] = useState(false);

  const [isShown2, setIsShown2] = useState(false);

  const [isShown3, setIsShown3] = useState(false);
  return (
    <>
      <Container>
        <Header />

        <Box className={classes.wrap14}>

          <Box className={classes.mainbox}>
            <Grid container spacing={3}>
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <Box className={classes.createbnrimgwrp}
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  {isShown && (
                    <Typography className={classes.createbnrimg} component="img" src={createbnrimg}></Typography>
                  )}
                  <Typography variant="h1" className={classes.h1}>Create</Typography>
                  <Box className={classes.boxborder2}></Box>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <Box className={classes.interactimgwrp}
                  onMouseEnter={() => setIsShown2(true)}
                  onMouseLeave={() => setIsShown2(false)}
                >
                  {isShown2 && (
                    <Typography className={classes.interactimg} component="img" src={interactimg}></Typography>
                  )}
                  <Typography variant="h1" className={classes.h1}>Interact</Typography>
                  <Box className={classes.boxborder1}></Box>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <Box className={classes.tradeimgwrp}
                  onMouseEnter={() => setIsShown3(true)}
                  onMouseLeave={() => setIsShown3(false)}
                >
                  {isShown3 && (
                    <Typography className={classes.tradeimgs} component="img" src={tradeimg}></Typography>
                  )}
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

