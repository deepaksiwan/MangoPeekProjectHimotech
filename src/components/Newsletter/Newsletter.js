import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme)=>({
  wrap5: {
    width: "100%",
    padding: "2rem 0",
    "& h2": {
      fontSize: "1.9rem",
      fontWeight: "bold",
    },
  },
  bag8: {
    display: "flex",
    gap: "19px",
    justifyContent: "center",
    flexWrap:"wrap",
    // margin: "0 auto",
    margin: "3rem 0 0 0",
    "& img": {
      width: "15%",
      borderRadius: "10px",
      height: "130px",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
       },
      [theme.breakpoints.down("md")]: {
        width: "50%",
       },
    },
  },
  // bag9: {
  //   width: "15%",
  //   lineHeight: "10px",
  // },
}));

const Newsletter = () => {
  const classes = useStyle();
  const Data = [
    {
      id: 1,
      img: "https://substackcdn.com/image/fetch/h_600,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F9f008d87-4612-465a-bca3-05d7607a1834_600x600.gif",
      name: "Newsletter #78",
      para: "Friday Beers + Reader Questions",
    },
    {
      id: 1,
      img: "https://substackcdn.com/image/fetch/h_600,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F75d046a7-f38d-4d74-b857-21a9903df594_1116x327.png",
      name: "Newsletter #77",
      para: "Lazy.com now supports Tezos NFTs",
    },
    // {
    //   id: 1,
    //   img: "https://substackcdn.com/image/fetch/h_600,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F40378262-2f60-4710-a9f0-cf046ab0375f_1111x319.png",
    //   name: "Newsletter #76",
    //   para: `The NFT bridges are coming&#8230;`,
    // },
    // {
    //   id: 1,
    //   img: "https://substackcdn.com/image/fetch/h_600,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F205fee52-38f0-4dfc-bea7-58c3cb154abc_1117x326.png",
    //   name: "Newsletter #75",
    //   para: "The impact of musical NFTs",
    // },
    // {
    //   id: 1,
    //   img: "https://substackcdn.com/image/fetch/h_600,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F0ee57631-e8c7-4337-b6f6-eb25d5e8aa94_1108x373.png",
    //   name: "Newsletter #74",
    //   para: "Exploring NFT utility",
    // },
  ];
  return (
    <>
      <Box className={classes.wrap5}>
        <Container>
          <Grid container>
            <Grid item lg={12} sm={12} md={12}>
              <Box className={classes.bag7}>
                <Typography variant="h2">Recent Newsletters</Typography>
              </Box>
            </Grid>
            <Grid item lg={12} sm={12} md={12}>
              {Data.map((e) => {
                return (
                  <>
                    <Box className={classes.bag8}>
                      <img src={e.img} alt="" />
                      <div classes={classes.bag9}>
                        <Typography variant="h5">{e.name}</Typography>
                        <p>{e.para}</p>
                      </div>
                    </Box>
                  </>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Newsletter;