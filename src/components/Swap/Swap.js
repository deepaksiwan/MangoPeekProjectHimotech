import React from "react";
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
import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const useStyle = makeStyles((theme)=>({
    wrap5: {
        width: "100%",
        padding: "2rem 0",
        "& h3": {
          fontSize: "1.9rem",
          fontWeight:"bold",
          [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem",
           },
        },
        "& button": {
          fontSize: "1rem",
        },
      },
      bag5: {
        display: "flex",
        justifyContent: "center",
        "& Button": {
          background: "#000 !important",
          borderRadius: "15px",
          padding: "0.6rem 1.4rem",
          fontSize: "13px",
          [theme.breakpoints.down("sm")]: {
            marginTop:"1rem"
           },
        },
        "& Button:hover": {
          background: "#000",
          transform: "translatey(-10px)",
          transition: "0.5s ease-in-out",
        },
        "& p": {
          color: "#000",
          fontSize: "1rem",
          fontWeight: "bolder",
          padding: "1rem",
        },
      },
      bag6:{
          // width:"100% !important"
      },
      yhu:{
        [theme.breakpoints.down("sm")]: {
         justifyContent:"center",
         alignItems:"center"
        },
      },
      yhu:{
        [theme.breakpoints.down("md")]: {
         justifyContent:"space-between",
         alignItems:"center"
        },
      }
  }));
const Swap = () => {
  const {openConnectModal}=useConnectModal();
  const {isConnected,address}=useAccount()
      const classes = useStyle();
  return (
    <>
      <Box className={classes.wrap5}>
        <Container >
          <Grid container className={classes.yhu}>
            <Grid item lg={12}>
              <Box >
              <Typography variant="h3">My Wallets</Typography>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Box className={classes.bag5}>
              { (isConnected && address) ?(
                <p></p>
              ):(
                <Button onClick={openConnectModal} size="large" variant="contained"  sx={{borderRadius: 50,textTransform: 'none',}} >Connect Wallet</Button>
              )
              }
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={12} sm={12}>
              <Box className={classes.bag6}>
                <SwapWidget />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Swap;