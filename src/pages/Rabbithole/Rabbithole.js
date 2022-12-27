import React, { useState } from "react";
import Header from "../../components/Header/Header";
import {
  Box,
  Grid,
  Container,
  Typography,
  Stack,
  Button,
  Avatar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Data from "../Explore/ExploreData";
import { useParams } from "react-router-dom";
import NftBox from "../Explore/NftBox";
import AllNFT from "../../components/AllNFT/AllNFT";
import Explore from "../Explore/Explore";
import { Link } from "react-router-dom";
const useStyle = makeStyles({
  wrap12: {
    padding: "6rem 0",
    width: "100%",
    backgroundColor: "#f0f0f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bag15: {
    "& img": {
      width: "30%",
      margin: "0 auto",
    },
  },
  bag16: {
    textAlign: "center",
    marginTop: "3rem",
    "& a": {
      background: "#fff",
      border: "2px solid #000",
      padding: "10px 22px",
      borderRadius: "38px",
      color: "#000",
      fontWeight: "bold",
    },
    "& a:hover": {
      background: "#000",
      border: "2px solid #000",
      padding: "10px 22px",
      borderRadius: "38px",
      color: "#fff",
      fontWeight: "bold",
      transform: "translateY(-15px)",
      transition: ".5s",
    },
  },
  bag8: {
    // position: "relative",
    margin: "0",
    height: "auto",
    position: "relative",
    marginTop: "3rem",
    "& h6": {
      // margin:"1rem 0 0 0",
      //   textAlign: "center",
      fontWeight: "bold",
      fontSize: "1.3rem",
      color: "#000",
      textAlign:"center",
    },
    " & img": {
      margin: "1rem auto",
      width: "80%",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      height: "320px",
      objectFit: "cover",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      backgroundColor: "#fff",
    },
    "& p": {
      fontSize: "1rem",
      fontWeight: "500",
      textAlign: "left",
      padding: "10px  ",
      margin: "0 0 4px 0",
      color: "#000",
    },
  },
  bag7: {
    position: "relative ",
    zIndex: "1",
    textAlign: "end",
    left: "-40px",
    right: "0",
    // top:"6.5rem",
    "& button": {
      background: "#fff",
      color: "#000",
      border: "none",
      borderRadius: "50%",
      margin: "10px",
      "& i": {
        fontSize: "1.5rem",
        fontWeight: "bold",
      },
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
    width: "69%",
    background: "#fff",
    margin: "0 auto",
    borderRadius: "6px",
  },
  bag11: {
    width: "13%",
    margin: "0 auto",
  },
  wrap21: {
    padding: "2rem 0 ",
        "& h5":{
            fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem"
        }
  },
});
const Rabbithole = () => {
  const classes = useStyle();
  //   const { id } = useParams();
  //   const itemData = Data.filter((itemData) => itemData.id == id);
  //   console.log("itemData", itemData);

  const [show, setShow] = useState(false);
  return (
    <>
      <Header />

      <Box className={classes.wrap12}>
        <Container>
          <Grid container>
            <Grid md={12}>
              <Box className={classes.bag15}>
                <img
                  src="https://i.seadn.io/gae/d9TPpPu8wsVkFGCQkryKq2JY1Bef_fwHALjcfKqgUWqZuGtHfq0YhiLU5j_1OvKJURk3Yfkgm4d_JuxVlB77AQJGBYTods9-SmHD?w=500&auto=format"
                  alt=""
                />
                {/* <h1>{elz.title}</h1> */}
              </Box>
            </Grid>
            <Grid md={12}>
              <Box className={classes.bag16}>
                <Link className="btn btn-primary">More Info</Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className={classes.wrap21}>
        <Container>
          <Grid container>
            <Grid item md={12}>
              <Typography variant="h5">Similar NFTs 🎩</Typography>
            </Grid>
            <Grid item md={4}>
              <Box className={classes.bag8}>
                <Box className={classes.bag9}>
                  <Box className={classes.bag7}>
                    <button
                      className="btn btn-primary"
                      onClick={() => setShow(!show)}
                    >
                      {" "}
                      {show ? (
                        <i class="bi bi-x-lg"></i>
                      ) : (
                        <i class="bi bi-three-dots"></i>
                      )}
                    </button>
                  </Box>

                  {show ? (
                    <Box className={classes.bag10}>
                      <p>RabbitHole</p>
                      <p>BizarroWorld</p>
                      <p>veiw on OpenSea</p>
                      <p>veiw on EtherScan</p>
                    </Box>
                  ) : null}
                </Box>
                <img
                  src="https://lh3.googleusercontent.com/-UCue_Q4L1vH2oBTbABmVV8anp3dss0fI8CDDV14ItSF9I3NCygo6iZPlY9omo5glo1_cZYKvMOyCMxw5uD0gZqVifJeX022aw33Hw"
                  alt=""
                />
                <Box>
                  <h6 >DigitalART #243</h6>
                </Box>
              </Box>
            </Grid>
            <Grid md={12}>
              <Box className={classes.bag16}>
                <Link to="/bizarro-world" className="btn btn-primary">BizarroWorld</Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Rabbithole;