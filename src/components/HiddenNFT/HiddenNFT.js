import React, { useState ,useContext,useEffect} from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  TextareaAutosize,
  CircularProgress
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Header from "../Header/Header";
import { UserContext } from "../../context/User/UserContext";
import {getAllHideNft} from "../../api/ApiCall/nftHide/getAllHideNft"
import { useQuery} from "react-query";
import NftBox from "../../pages/Explore/NftBox";
const useStyle = makeStyles({
    wrap5: {
      padding: "2rem 0 ",
  
      "& h2": {
        fontSize:"2rem",
        fontWeight:"bold"
      },
    },
    bag8: {
      // position: "relative",
      margin: "0",
      height: "auto",
      position: "relative",
      "& h6": {
        // margin:"1rem 0 0 0",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1.3rem",
      },
      " & img": {
        margin: "1rem auto",
        width: "100%",
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
      },
      "& p": {
        fontSize: "1rem", fontWeight: "500", textAlign: "left", padding: "7px 26px ",margin:"0 0 4px 0"
      },
    },
    bag7: {
      position: "relative ",
      zIndex: "1",
      textAlign: "end",
      left: "0",
      right: "0",
      // top:"6.5rem",
      "& button": {
        background: "#fff",
        color: "#000",
        border: "none",
        borderRadius: "50%",
        margin: "10px",
        fontSize: "1rem",
        fontWeight: "bold",
      },
    },
    bag9: {
      // position: "relative !important",
      position: "absolute !important",
      zIndex: "1",
      // top:"14.6rem",
      textAlign: "center",
      left: "0",
      right: "0",
    },
    bag10: {
      width: "93%",
      background: "#fff",
      margin: "0 auto",
      borderRadius: "6px",
      padding:"11px",
    },
    wrap6: {
        padding: "1rem 0 0 0",
        "& div": {
          " & img": {
            margin: "1rem auto",
            width: "16%",
            borderRadius: "50%",
          },
          "& h6": {
            // margin:"1rem 0 0 0",
            textAlign: "center",
            fontWeight:"bold",
            fontSize:"1.1rem"
          },
          "& p": {
            // margin:"1rem 0 0 0",
            textAlign: "center",
          },
        },
      },
  });


const HiddenNFT = () => {
  const [{userData,userUpdateData,updatePic,token}, ] = useContext(UserContext);
  const classes = useStyle();


  const {data,isLoading}=useQuery(
    ["getAllHideNft",token],
    ()=>getAllHideNft(token),{
      onSuccess:(data)=>{
        
      }
    }
  )

  return (
    <>
    <Header/>
    <Box className={classes.wrap6}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <div>
              <img
                  src={ updatePic?.profilePic ?? userData?.profilePic}
                  alt=""
                />
                <h6>@{userData?.userName}</h6>
                <p>
               <b>{userData?.userName}</b> Hidden NFTs
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>

       <Box className={classes.wrap5}>
        <Container>
          <Grid container spacing={3} justifyContent="center">
            <Grid item md={12}>
              <Typography variant="h2">Hidden NFTs</Typography>
            </Grid>
            { isLoading? (
             <Container>
                <Grid>
                  <Grid>
                  <Box sx={{ textAlign: 'center' }}>
              <CircularProgress />
              </Box>
                  </Grid>
                </Grid>
             </Container>
            ):(
             ( data?.responseResult && data?.responseResult?.map((nft, index) => {
                return (
                  <Grid key={index} item md={4} sm={6}>
                    <NftBox hide={"true"} data={nft} />
                  </Grid>
                )
                })
              )
             )
            }
            { !data?.responseResult && <Container>
              <Grid container md={12} justifyContent="center">
              <Typography variant="h5">No Hidden NFTs Added Yet</Typography>
              </Grid>
              </Container>
               }
          </Grid>
          
        </Container>
      </Box>
    </>
  );
};

export default HiddenNFT;