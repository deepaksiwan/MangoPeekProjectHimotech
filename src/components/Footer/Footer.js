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
const useStyle = makeStyles({
  wrap5: {
    width: "100%",
    padding: "2rem 0",
    "& h3": {
      fontSize: "1.9rem",
      fontWeight: "bold",
    },
    "& button": {
      fontSize: "1rem",
    },
  },
  bag5: {
    display: "flex",
    justifyContent: "center",
    "& Button": {
      background: "#fff !important",
      borderRadius: "15px",
      color: "#000",
      padding: "0.6rem 1.4rem",
      fontSize: "13px",
      border: "2px solid #000",
      borderRadius: "26px",
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
  bag9: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2.3rem",
    "& img": {
      border: "1px solid #ccc",
      padding: "8px 11px",
      borderRadius: "5px",
      width: "80%",
    },
  },
});
const Footer = () => {
  const Data = [
    {
      id: 1,
      img: "https://platform-cdn.sharethis.com/img/twitter-white.svg",
    },
    {
      id: 1,
      img: "https://platform-cdn.sharethis.com/img/facebook-white.svg",
    },
    // {
    //   id: 1,
    //   img: "https://platform-cdn.sharethis.com/img/linkedin-white.svg",
    // },
    {
      id: 1,
      img: "https://platform-cdn.sharethis.com/img/email-white.svg",
    },
    {
      id: 1,
      img: "https://platform-cdn.sharethis.com/img/sms-white.svg",
    },
    // {
    //   id: 1,
    //   img: "https://platform-cdn.sharethis.com/img/messenger-white.svg",
    //   width:"61%"
    // },
    {
      id: 1,
      img: "https://platform-cdn.sharethis.com/img/whatsapp-white.svg",
      //   width:"61%"
    },
  ];
  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrap5}>
        <Container>
          <Grid container>
            <Grid item md={12}>
              <Box className={classes.bag9}>
                {Data.map((e) => {
                  return (
                    <>
                      <Box>
                        <img src={e.img} alt="" style={{ width: e.width }} />
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;