import React, { useContext } from "react";
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
import { UserContext } from "../../context/User/UserContext";
import { Link } from "react-router-dom";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { discord, LIVE_DOMAIN } from "../../config";
const useStyle = makeStyles((theme) => ({
  wrap5: {
    width: "100%",
    padding: "2rem 0",
    "& h3": {
      fontSize: "1.9rem",
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
        textAlign: "center",
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
}));
const Share = () => {
  const [{ userData }] = useContext(UserContext);
  const Data = [
    {
      id: 1,
      img: "https://platform-cdn.sharethis.com/img/twitter-white.svg",
      link: "https://twitter.com/",
    },
    {
      id: 1,
      img: "https://platform-cdn.sharethis.com/img/facebook-white.svg",
      link: "https://www.facebook.com/",
    },
    // {
    //   id: 1,
    //   img: "https://platform-cdn.sharethis.com/img/linkedin-white.svg",
    // },
    {
      id: 1,
      img: "https://platform-cdn.sharethis.com/img/email-white.svg",
      link: "https://www.facebook.com/",
    },
    {
      id: 1,
      img: "https://platform-cdn.sharethis.com/img/sms-white.svg",
      link: "https://www.facebook.com/",
    },
    // {
    //   id: 1,
    //   img: "https://platform-cdn.sharethis.com/img/messenger-white.svg",
    //   width:"61%"
    // },
    {
      id: 1,
      img: "https://platform-cdn.sharethis.com/img/whatsapp-white.svg",
      link: "https://web.whatsapp.com/",
      //   width:"61%"
    },
  ];
  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrap5}>
        <Container>
          <Grid container sx={{ justifyContent: { lg: "auto", xs: "center" } }}>
            <Grid item lg={12} sm={12}>
              <Box>
                <Typography variant="h3">Share</Typography>
              </Box>
              <Box className={classes.bag5}>
                <Button
                  variant="contained"
                  sx={{ mt: { lg: "auto", xs: "15px", textTransform: "none" } }}
                >
                  <a href={encodeURI(LIVE_DOMAIN+userData?.userName)} style={{ color: "#000" }}>
                    {LIVE_DOMAIN}{userData?.userName}
                  </a>
                </Button>
              </Box>
            </Grid>
            {/* <Grid item md={12} sm={12}>
             
            </Grid> */}
            <Grid item md={12}>
              <Box className={classes.bag9}>
                {/* {Data.map((e,i) => {
                  return (
                    <>
                      <Box key={i}>
                        <a href={e.link}><img src={e.img} alt="" style={{width:e.width}}/></a>
                      </Box>
                    </>
                  );
                })} */}
                <TelegramShareButton url={encodeURI(LIVE_DOMAIN+userData?.userName)}>
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
                <WhatsappShareButton url={encodeURI(LIVE_DOMAIN+userData?.userName)}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <TwitterShareButton url={encodeURI(LIVE_DOMAIN+userData?.userName)}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
               {/* <a href={encodeURI(LIVE_DOMAIN+userData?.userName)} target="_blank" style={{color:"#000"}}> <i class="bi bi-discord" style={{fontSize:"2rem"}}></i></a> */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Share;