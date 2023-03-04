
import React, { useState, useEffect, useContext } from "react";
import { Box, Container, Grid, Input, ListItem, Typography, List, InputAdornment, IconButton } from "@mui/material";
import Header2 from "../../components/Header/Header2";
import { makeStyles } from "@mui/styles";
import Withoutmenucomp from "../Explorepagewithsidemenu/Withoutmenucomp";
import MessagingComp from "./MessagingComp";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import sidemenuarrow from '../../../src/pages/images/sidemenuarrow.svg'
import NFTMsg from "./NFTMsg";
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import search from '../../../src/pages/images/search.svg'
import ApiConfigs from "../../api/ApiConfig";
import { Link } from "react-router-dom";
// import { io } from "socket.io-client";
import { UserContext } from "../../context/User/UserContext";
import { getAllNftByUserName } from "../../api/ApiCall/nftCollection/getAllNftByUserName"
import { useQuery, useInfiniteQuery } from "react-query";
// import ApiConfigs from "../../api/ApiConfig";
import Loader from "../Loader/Loader"



const useStyle = makeStyles({
    maindiv: {
        padding: '30px 0px 80px 0px',
        display: 'flex'
    },
    menuposition: {
        position: 'fixed',
        top: 0,
        marginTop: '10.10rem',
        '@media(max-width : 1200px)': {
            marginTop: '12.1rem',
            '@media(max-width : 900px)': {
                marginTop: '18.1rem',
                '@media(max-width : 600px)': {
                    marginTop: '11.1rem',
                    zIndex: '100',

                }
            }
        }
    },
    explorenft: {
        marginTop: '4rem',
        '@media(max-width : 600px)': {
            marginTop: '1rem',
        }
    },
    messagemain: {
        width: '370px',
        minHeight: '83vh !important',
        display: 'inline-block',
        padding: '10px 20px !important',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '50px',
        backgroundColor: '#efefef96',
        top: 0,
        position: 'fixed',
        marginTop: '5.8rem',
        '@media(max-width : 1200px)': {
            width: '300px',
            '@media(max-width : 600px)': {
                position: 'inherit',
                width: '100%',
                marginTop: '3.8rem',
                padding: '10px 20px 10px 55px !important'
            }
        }
    },
    searchinpt: {
        backgroundImage: 'linear-gradient(180deg, #ebeaea, #efefef3b) !important',
        borderRadius: '30px',
        padding: '10px',
        width: '280px !important',
        borderColor: 'transparent',
        display: 'flex'

    },
    listitem: {
        display: 'inherit !important',
        padding: '0px !important',
        transition: '0.8s'
    },
    msgscroll: {
        height: '63vh',
        overflowY: 'scroll'
    }




})


const Messaging = () => {
    const classes = useStyle();
    const [conversations, setConversations] = useState([]);
    const [userSearch, setUserSearch] = useState('')


    const [{ token, userData }, dispatch] = useContext(UserContext);



    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get(ApiConfigs?.getConversation + `/${userData?._id}`);
                setConversations(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [userData?._id]);



    const { data: dataByUserName, isLoading: loadingData } = useQuery(
        ["getAllNftByUserName", userData?.userName],
        () => getAllNftByUserName(userData?.userName), {
        onSuccess: (data) => {
            //setTotalNftPages(Math.ceil(data?.responseResult.length/6))
        }
    },
    )



    return (
        <>
            <Container>
                <Header2 />
                <Box className={classes.maindiv}>
                    <Grid container spacing={2}>
                        <Grid item lg={0.9} md={0.9} sm={1.4} xs={12}>
                            <Box className={classes.menuposition}>
                                <Withoutmenucomp />
                            </Box>
                        </Grid>
                        <Grid item lg={4.1} md={4.1} sm={5.6} xs={12}>
                            <Box className={classes.messagemain}>
                                <List sx={{ p: 0 }}>
                                    <ListItem className={classes.listitem}>
                                        <Typography color="#949494" variant="h5" fontWeight={700}>Messages</Typography>
                                    </ListItem>

                                    <ListItem className={classes.listitem1}>
                                        {/* <IconButton
                                            aria-label="more"
                                            id="long-button"
                                            aria-haspopup="true"
                                        >
                                            <MoreVertIcon />
                                        </IconButton> */}
                                        <Box className={classes.searchinpt}>
                                            <Box sx={{ alignSelf: 'center' }}>
                                                <Typography width={30} component="img" src={search}></Typography>
                                            </Box>
                                            <Box>
                                                <Input
                                                    width="120px"
                                                    type="search"
                                                    variant="contained"
                                                    margin="normal"
                                                    value={userSearch}
                                                    onChange={(e) => {
                                                        setUserSearch(e.target.value)
                                                    }}

                                                    disableUnderline
                                                    InputProps={{
                                                        startAdornment: (

                                                            <InputAdornment position="start">
                                                                <SearchIcon />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                        <Box sx={{ marginLeft: "20px" }}>
                                            <Link to="/messagingExpend">
                                                <Typography component="img" src={sidemenuarrow}></Typography>
                                            </Link>

                                        </Box>
                                    </ListItem>

                                    <ListItem className={classes.listitem}>
                                        <Box className={classes.msgscroll}>
                                            {conversations?.length > 0 ?
                                                conversations?.map((c) => {
                                                    return (
                                                        <Box >
                                                            <MessagingComp Conversation={c} currentUser={userData} query={userSearch} />
                                                        </Box>
                                                    )
                                                }) : <Typography sx={{ textAlign: "center" }}>No Any Friend to chatList</Typography>
                                            }
                                           

                                        </Box>
                                    </ListItem>
                                </List>
                            </Box>

                        </Grid>
                        <Grid item lg={7} md={7} sm={5} xs={12}>
                            <Box className={classes.explorenft}>
                                <Grid container spacing={2} justifyContent="center">
                                    {loadingData == false ? dataByUserName?.responseResult.map((nfts, index) => {
                                        return (
                                            <Grid item lg={6} md={6} xs={12} key={index}>
                                                <NFTMsg data={nfts} />
                                            </Grid>

                                        )
                                    }) : <Typography className={classes.NoNftAdded}>
                                        <Loader />
                                    </Typography>
                                    }
                                    {dataByUserName?.responseResult?.length == 0 || dataByUserName == undefined &&
                                        <Typography className={classes.NoNftAdded}>
                                            No NFTs Added Yet
                                        </Typography>}
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </>
    )
}

export default Messaging


