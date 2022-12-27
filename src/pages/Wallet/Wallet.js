import React, { useContext, useEffect, useState } from "react";
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
import { useConnectModal, useChainModal } from "@rainbow-me/rainbowkit";
import { addWallet } from "../../api/ApiCall/addWallet";
import { viewWallet } from "../../api/ApiCall/viewWallet";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import EditProfile from "../../components/EditProfile/EditProfile";
import Swap from "../../components/Swap/Swap";
import Newsletter from "../../components/Newsletter/Newsletter";
import Share from "../../components/Share/Share";
import { useAccount, useDisconnect, useNetwork } from "wagmi";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "react-query";
import { UserContext } from "../../context/User/UserContext";
import { actionTypes } from "../../context/User/UserReducer";
import { removeWallet } from "../../api/ApiCall/removeWallet";
const useStyle = makeStyles((theme) => ({
  wrap2: {
    width: "100%",
    padding: "2rem 0",
    "& h3": {
      fontSize: "1.6rem",
    },
    "& button": {
      fontSize: "1rem",
    },
  },
  bag4: {
    display: "flex",
    justifyContent: "end",
  },
  bag3: {
    "& h3": {
      fontSize: "20px",
      textAlign: "center",
    },
  },
  main: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems:"center",
    padding:"25px 15px",
    marginTop: "20px",
    boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",
    borderRadius: "15px",
  },
  bag12: {
    // display: "flex",
    // justifyContent: "space-between",
    marginBottom: "1rem",
    // flexDirection: "column",
  },
  // Wrap2 Complete
  bag5: {
    // display: "flex",
    // justifyContent: "center",
    "& Button": {
      background: "#fff",
      color: "#111",
      border: "2px solid black",
      fontWeight: "bold",
    },
    "& Button:hover": {
      background: "#111",
      transform: "translatey(-3px)",
      transition: "0.5s ease-in-out",
      color: "#fff",
    },
  },
}));
const Wallet = () => {
  const { openConnectModal } = useConnectModal();
  const { openChainModal } = useChainModal();
  const { isConnected, address, status, isDisconnected } = useAccount();
  const { chain } = useNetwork();
  const { disconnectAsync } = useDisconnect({
    async onMutate(id) {
      await handleRemoveWallet?.(id);
    },
  });
  const [{ token, userData }, dispatch] = useContext(UserContext);

  const {
    data,
    refetch,
    isLoading: walletLoading,
  } = useQuery(["viewWallet"], viewWallet, {
    onSuccess: (data) => {
      try {
        if (data.success === true) {
          // console.log(data.responseResult[0]?.wallets[0]);
          // dispatch({ type: actionTypes.SET_WALLET, value: data?.responseResult[0]?.wallets });
          // toast.success(JSON.stringify("You wallets fetched Successfully"));
        } else {
          // toast.error(JSON.stringify(data));
        }
      } catch (error) {
        // toast.error(JSON.stringify(error));
      }
    },
    // refetchOnWindowFocus: false,
  });

  const { isError, error, mutateAsync } = useMutation("addWallet", addWallet, {
    onSuccess: (data) => {
      try {
        if (data.success === true) {
          refetch();
        } else {
          toast.error(JSON.stringify(data.message));
        }
      } catch (error) {
        // toast.error(JSON.stringify(error));
      }
    },
    onError: (error, data) => {
      // toast.error(JSON.stringify(error));
    },
  });

  const addWallets = async () => {
    if (isConnected && address && chain?.name == "Ethereum") {
      try {
        await mutateAsync({
          token: localStorage.getItem("token"),
          networkName: chain.name,
          address: address,
        });
      } catch (err) {}
    } else if (chain?.name != "Ethereum") {
      toast.error("Please switch to Ethereum mainnet");
    }
  };

  // useEffect(() => {
  //   if (status === "connected") {
  //     addWallets?.();
  //   }
  // }, [chain?.name,address]);

  const { mutateAsync: mutateAsyncRemoveWallet } = useMutation(
    "removeWallet",
    removeWallet,
    {
      onSuccess: (data) => {
        try {
          if (data.success === true) {
            // navigate("/wallet");
            // dispatch({ type: actionTypes.SET_TOKEN, value: data.token });
            // localStorage.setItem("data", data);
            // console.log(data);
            refetch();
            // toast.success(JSON.stringify("You are signup Successfully"));
            // dispatch({ type: actionTypes.SET_USER, value: data.responseResult });
          } else {
            // toast.error(JSON.stringify(data));
          }
        } catch (error) {
          toast.error(JSON.stringify(error));
        }
      },
    }
  );

  const handleRemoveWallet = async (walletId) => {
    try {
      await mutateAsyncRemoveWallet({
        token: localStorage.getItem("token"),
        walletId: walletId,
      });
    } catch (err) {}
  };
  const classes = useStyle();

  return (
    <>
      <Header />
      <Box className={classes.wrap2}>
        <Container>
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: {
                lg: "auto",
                xs: "space-between",
                alignItems: "center",
              },
            }}
          >
            <Grid item md={6} sm={12}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    justifyContent: {
                      lg: "auto",
                      xs: "space-between",
                      alignItems: "center",
                    },
                    fontWeight:"bold",fontSize:"2rem !important"
                  }}
                >
                  My Wallets
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} sm={12}>
              <Box className={classes.bag4}>
                {isConnected && address ? (
                  <Button
                    onClick={addWallets}
                    size="large"
                    variant="contained"
                    sx={{ borderRadius: 50, textTransform: "none" }}
                  >
                    Add Wallet
                  </Button>
                ) : (
                  <Button
                    onClick={() => isDisconnected && openConnectModal()}
                    size="large"
                    variant="contained"
                    sx={{ borderRadius: 50, textTransform: "none" }}
                  >
                    Connect Wallet
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>
          {data?.responseResult.length > 0 ? (
            <>
              {data?.responseResult &&
                data?.responseResult.map(
                  ({ networkName, address, _id }, index) => {
                    return (
                      <Box className={classes.main}>
                        {/* <Grid
                      className={classes.main}
                        container
                        key={index}
                        spacing={3}
                        sx={{
                          marginTop: 5,
                          boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",
                          borderRadius: "15px",
                        }}
                      > */}

                        <Box className={classes.bag12}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "bold",
                              wordBreak: "break-all",
                            }}
                          >
                            {networkName}
                          </Typography>
                          <Typography sx={{ wordBreak: "break-all" }}>
                            {address}
                          </Typography>
                        </Box>

                        {/* <Grid item lg={2} md={12}> */}
                        <Box className={classes.bag5}>
                          <Button
                            onClick={async () => await disconnectAsync(_id)}
                            size="large"
                            sx={{ borderRadius: 50, textTransform: "none" }}
                            variant="submit"
                          >
                            Remove
                          </Button>
                        </Box>
                        {/* </Grid> */}
                        {/* </Grid> */}
                      </Box>
                    );
                  }
                )}
            </>
          ) : (
            <Grid item md={12} sx={{ marginTop: 5 }}>
              <Box className={classes.bag5}>
                <Typography component={"div"} variant="h6">
                  No Wallets Added Yet{" "}
                </Typography>
              </Box>
            </Grid>
          )}
        </Container>
      </Box>

      <EditProfile heading="My Profile" userName={`@${userData?.userName}`} />
      {/* <Swap /> */}
      {/* <Newsletter /> */}
      <Share />
    </>
  );
};

export default Wallet;
