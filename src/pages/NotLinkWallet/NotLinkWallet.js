import { Box, Button, Container, Grid, Typography, } from "@mui/material";
import { useConnectModal, useChainModal } from "@rainbow-me/rainbowkit";
import React, { useContext } from "react";
import Footer2 from "../../components/Footer/Footer2";
import Header from "../../components/Header/Header";
import { makeStyles } from "@mui/styles";
import walletimgp from '../../../src/pages/images/walletimgp.svg'
import EditProfile from "../../components/EditProfile/EditProfile";
import { Link } from "react-router-dom";
import { useAccount, useDisconnect, useNetwork } from "wagmi";
import { viewWallet } from "../../api/ApiCall/viewWallet";
import { addWallet } from "../../api/ApiCall/addWallet";
import { UserContext } from "../../context/User/UserContext";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { removeWallet } from "../../api/ApiCall/removeWallet";

const useStyle = makeStyles({
    maindiv: {
        padding: '6rem 0rem 6rem 0rem',
        '@media(max-width : 1200px)': {
            minHeight: '100vh',
            '@media(max-width : 900px)': {
                padding: '85px 0px 80px 0px',
            }
        }
    },
    mainbox: {
        padding: '45px !important',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '40px',
        backgroundColor: '#efefef96',
        '@media(max-width : 600px)': {
            padding: '30px !important',
        }

    },
    innerbox: {
        display: 'flex',
        padding: '30px !important',
        boxShadow: '0px 20px 20px -6px #00000036',
        borderRadius: '30px',
        backgroundColor: '#efefef96',
        alignItems: 'center',
        '@media(max-width : 600px)': {
            display: 'inherit',
            padding: '20px !important',
            textAlign: 'center'

        }
    },
    br: {
        '@media(max-width : 600px)': {
            display: 'none',

        }
    },
    unlockbtn: {
        color: '#9B9B9B !important',
        padding: '14px 30px !important',
        transition: '0.5s !important',
        fontWeight: '500 !important',
        borderRadius: '30px !important',
        background: 'linear-gradient(180deg, #ebeaea, #efefef3b)',
        backgroundColor: 'transparent !important',
        boxShadow: 'none !important',
        '&:hover': {
            boxShadow: '0px 2px 17px -4px #00000078 !important'
        },
        '@media(max-width : 600px)': {
            width: '100% !important'
        }
    },
    wallet: {
        textAlign: 'right',
        marginTop: '-125px',
        marginRight: '-35px',
        '@media (max-width : 600px)': {
            marginTop: '10px',
            textAlign: 'right',
            marginRight: '0px',
            transform: 'rotate(90deg)',
        }
    },

    main: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center",
        padding: "30px !important",
        marginTop: "0px",
        boxShadow: '0px 20px 20px -6px #00000036',
        borderRadius: "15px",
        alignItems: "center",
        borderRadius: "30px",
        backgroundColor: "efefef96",
        justifyContent: "space-between"
    },

    bag12: {
        marginBottom: "1rem",

    },

    bag5: {
        "& Button": {
            color: '#9B9B9B !important',
            padding: '14px 30px !important',
            transition: '0.5s !important',
            fontWeight: '500 !important',
            borderRadius: '30px !important',
            background: 'linear-gradient(180deg, #ebeaea, #efefef3b)',
            backgroundColor: 'transparent !important',
            boxShadow: 'none !important',
        },
        "& Button:hover": {
            boxShadow: '0px 2px 17px -4px #00000078 !important'
        },
    },
   

})


const NotLinkWallet = () => {
    const classes = useStyle();
    const { openConnectModal } = useConnectModal();
    const { openChainModal } = useChainModal();
    const { isConnected, address, status, isDisconnected } = useAccount();
    const { chain } = useNetwork();
    const [{ token, userData }, dispatch] = useContext(UserContext);
    const { disconnectAsync } = useDisconnect({
        async onMutate(id) {
            await handleRemoveWallet?.(id);
        },
    });

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
    console.log("viewWallet", data)

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
            } catch (err) { }
        } else if (chain?.name != "Ethereum") {
            toast.error("Please switch to Ethereum mainnet");
        }
    };

    const { mutateAsync: mutateAsyncRemoveWallet } = useMutation(
        "removeWallet",
        removeWallet,
        {
            onSuccess: (data) => {
                try {
                    if (data.success === true) {
                        refetch();
                    } else {
                        
                    }
                } catch (error) {
                    toast.error(JSON.stringify(error));
                }
            },
        }
    );

    //handleRemoveWallet
    const handleRemoveWallet = async (walletId) => {
        try {
            await mutateAsyncRemoveWallet({
                token: localStorage.getItem("token"),
                walletId: walletId,
            });
        } catch (err) { }
    };

    return (
        <>
            <Container>
                <Header />
                <Box className={classes.maindiv}>
                    <Box className={classes.mainbox}>
                        <Box className={classes.innerbox}>
                            <Box>
                                <Typography variant="h4" color="#B5B4B4" fontWeight={700}>Link your <br className={classes.br} />wallet to
                                    <Typography variant="h4" component="span" color="#FF5F29" fontWeight={700} ml={1}>Explore</Typography>
                                </Typography>
                            </Box>
                            <Box sx={{ margin: '30px 0px 0px 30px', '@media(max-width : 600px)': { margin: '30px 0px 0px 0px' } }}>
                                {isConnected && address ? (
                                    <Button className={classes.unlockbtn}
                                        onClick={addWallets}
                                        size="large"
                                        variant="contained"
                                        sx={{ borderRadius: 50, textTransform: "none" }}
                                    >
                                        Add Wallet
                                    </Button>
                                ) : (
                                    <Button className={classes.unlockbtn}
                                        onClick={() => isDisconnected && openConnectModal()}
                                        size="large"
                                        variant="contained"
                                        sx={{ borderRadius: 50, textTransform: "none" }}
                                    >
                                        Connect Wallet
                                    </Button>
                                )}

                            </Box>
                        </Box>
                        <Box className={classes.wallet}>
                            <Typography display="inline-block" component="img" src={walletimgp}></Typography>
                        </Box>
                    </Box>

                </Box>
                {data?.responseResult.length > 0 ? (
                    <>
                        {data?.responseResult &&
                            data?.responseResult.map(
                                ({ networkName, address, _id }, index) => {
                                    return (
                                        <Box className={classes.mainbox}>
                                            <Box className={classes.main}>
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

                                            </Box>
                                            {/* <EditProfile userName={`@${userData?.userName}`} /> */}
                                        </Box>

                                    );
                                }
                            )}
                    </>
                ) : (
                    <Grid item md={12} sx={{ marginTop: 5, textAlign: "center" }}>
                        <Box className={classes.bag5}>
                            <Typography component={"div"} variant="h6">
                                No Wallets Added Yet{" "}
                            </Typography>
                        </Box>
                    </Grid>
                )}
                <Box sx={{textAlign:"center", marginTop:"10px"}}> 
                {/* <EditProfile  heading="My profile" userName={`@${userData?.userName}`} /> */}
                <EditProfile  heading="My profile" userName={`@${userData?.userName}`} />
                </Box>
                <Footer2 />
            </Container>
        </>
    )
}

export default NotLinkWallet


