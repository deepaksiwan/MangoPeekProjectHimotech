import {
    Box,
    Container,
    Grid,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import Header from "../../../components/Header/Header";
  import { makeStyles } from "@mui/styles";
  // import data from "../Exploredata";
  import NftBox from "../NftBox";
  const useStyle = makeStyles({
    wrap7: {
      "& h3": {
        fontSize: "1.7rem",
        fontWeight: "bold",
      },
    },
    bag15: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    bag8: {
      // position: "relative",
      margin: "0",
      height: "auto",
      position: "relative",
      "& h6": {
        // margin:"1rem 0 0 0",
        //   textAlign: "center",
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
        fontSize: "1rem",
        fontWeight: "500",
        textAlign: "left",
        padding: "10px  ",
        margin: "0 0 4px 0",
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
      width: "93%",
      background: "#fff",
      margin: "0 auto",
      borderRadius: "6px",
    },
    bag11: {
      width: "13%",
      margin: "0 auto",
    },
  });
  const Wax = (props, { title }) => {
    const [show3, setShow3] = useState(false);
    // const [show, setShow] = useState(false);
    const [show, setShow] = useState(false);
    const classes = useStyle();
    return (
      <>
       {
        props.dfg ? 
        <Container key={props.data1.id}>
          <Grid container spacing={3}>
            <Grid item lg={12}>
              <Box>
                <Typography variant="h3" style={{ margin: "2rem 0 0 0" }}>
                  {props.data1.title}
                </Typography>
              </Box>
            </Grid>
            <Grid item md={12} style={{ margin: props.data1.margin }}>
              <Box className={classes.bag8}>
                <Box className={classes.bag9}>
                  <Box className={classes.bag7}>
                    <button
                      className="btn btn-primary"
                      onClick={() => setShow(!show)}
                    >
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
                <img src={props.data1.img} alt="" />
                {/* <img src={props.data11.img} alt="" /> */}
                <Box>
                  <h6>{props.data1.decs}</h6>
                  <p>{props.data1.name}</p>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        : null
       }
      </>
    );
  };
  
  export default Wax;