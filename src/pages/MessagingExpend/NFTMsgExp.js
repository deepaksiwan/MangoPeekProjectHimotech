import { Badge, Box, Button, Checkbox, List, ListItem, Typography, Grid } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";

import { makeStyles } from "@mui/styles";

import walletimg from '../../../src/pages/images/walletimg.svg'
// import messageimg1 from '../../../src/pages/images/messageimg1.svg'
// import arrowright from '../../../src/pages/images/arrowright.svg'
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import messagestore from '../../../src/pages/images/messagestore.svg'
import exp1 from '../../../src/pages/images/exp1.svg'
import ApiConfigs from "../../api/ApiConfig";
import exp2 from '../../../src/pages/images/exp2.svg'
import exp3 from '../../../src/pages/images/exp3.svg'
import exp4 from '../../../src/pages/images/exp4.svg'
import msgmore from '../../../src/pages/images/msgmore.svg'
import { UserContext } from "../../context/User/UserContext";
import axios from "axios"
import { format } from "timeago.js";
import { useQuery } from "react-query";
import { getAllNftByUserName } from "../../api/ApiCall/nftCollection/getAllNftByUserName"
import Loader from "../Loader/Loader"
import arrowright from '../../../src/pages/images/arrowright.svg'
import NftByUserName from "./NftByUserName";


const useStyle = makeStyles({
    namewithadd: {
        display: 'flex',
        padding: '10px !important',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '40px',
        backgroundColor: '#efefef96',
    },
    maindiv: {
        padding: '30px 0px 80px 0px',
        display: 'flex'
    },
    sidemenu: {
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '50px',
        backgroundColor: '#efefef96',
        padding: '10px 20px !important',
        display: 'inline-block',
        '@media(max-width : 600px)': {
            width: '100%',
        }
    },
    listpadding: {
        padding: '5px 0px !important',
        display: 'inherit !important'
    },
    badge: {
        marginTop: '10px',
    },
    roundbutn2: {
        marginTop: '-10px !important',
        padding: '10px',
        width: '40px',
        height: '40px',
        color: '#ADADAD',
        backgroundImage: 'linear-gradient(180deg, #ebeaea, #efefef3b)',
        borderRadius: '30px',
        display: 'flex',
        transition: '0.5s',
        '&:hover': {
            color: '#ADADAD',
            // transform: 'translateY(-6px)'
        }
        // boxShadow: 'inset 0 0 10px #00000029',
    },
    textbutn: {
        display: 'flex',
        alignItems: 'center',
        color: '#ADADAD',
        '&:hover': {
            color: '#ADADAD',
        }
    },
    imgicon: {
        backgroundImage: 'linear-gradient(180deg, #ebeaea, #efefef3b)',
        padding: '10px',
        width: '40px',
        height: '40px',
        borderRadius: '30px',
        marginRight: '20px !important',
        color: '#ADADAD',
        display: 'flex',
        transition: '0.5s',


    },



    explorenft: {
        marginLeft: '17rem',
        marginTop: '1rem'
    },
    mrleft: {
        marginLeft: '30px !important'
    },
    address: {
        fontSize: '14px !important'
    },

    rank: {
        fontSize: '18px !important'
    },
    rank2: {
        fontSize: '11px !important'
    },

    followers: {
        display: 'flex',
        justifyContent: 'space-between !important',
        padding: '5px 0px !important'
    },
    follower_align: {
        textAlign: 'center'
    },
    macmango: {
        width: '80px',
        display: 'inline-block'
    },
    nftinfobx2: {
        backgroundColor: '#efefef96 ',
        padding: '10px',
        borderRadius: '12px',
        width: '100%',
        marginTop: '16px !important',
        boxShadow: '0px 4px 22px -3px #00000036',
        '@media(min-width : 900px)': {
            width: '100%'
        }
    },
    fav: {
        padding: "0 !important",
    },
    viewbtn: {
        color: "#9B9B9B !important",
        fontSize: "16px !important",
        fontWeight: "500 !important",
        textTransform: "none !important"
    },
    profileimg: {
        borderRadius: "50%"
    },
    NoNftAdded: {
        margin: "8rem  0rem  !important",
        width: "250px !important",
        fontSize: "1rem !important",
        textAlign: "center !important"

    }
})


const label2 = { inputProps: { "aria-label": "Checkbox demo" } };








const NFTMsgExp = ({ currentUser, onLineUsers, ChatUserId }) => {
    // console.log("onLineUsers",onLineUsers)
    const classes = useStyle();
    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);
    const [userChatfourNftData, setFourNftData] = useState([])
    const [{ userData },] = useContext(UserContext);
    const [allreadyfriends, setallreadyfriends] = useState([])



    //getfriends get api call
    const getFriends = async () => {
        const res = await axios.get(ApiConfigs?.Getfriends + `/${userData?._id}`);
        setFriends(res.data);
    };




    useEffect(() => {
        getFriends();
    }, [currentUser?._id]);


    // console.log("friends", friends)
    //console.log("onlineFriendssdfs", onlineFriends)
    //  console.log("ChatUserId", ChatUserId)



    useEffect(() => {
        setOnlineFriends(friends.filter((f) => onLineUsers?.includes(f._id)));
    }, [friends, onLineUsers]);

    const { data: dataBychatUserName, isLoading: loadingData } = useQuery(
        ["getAllNftByUserName", ChatUserId?.userName],
        () => getAllNftByUserName(ChatUserId?.userName), {
        onSuccess: (dataBychatUserName) => {
            let randomfourNft = [];
            if (dataBychatUserName?.responseResult?.length) {
                for (let i = dataBychatUserName?.responseResult?.length; i >= 0; i--) {
                    var randomnft = Math.floor(Math.random() * i);
                    randomfourNft.push(dataBychatUserName?.responseResult[randomnft]);
                    if (i == dataBychatUserName?.responseResult?.length - 3) break;
                }
            }
            setFourNftData(randomfourNft)
        }
    },
    )

    return (
        <>

            <Box className={classes.menuposition}>
                <Box className={classes.sidemenu}>
                    <List>
                        <ListItem className={classes.listpadding}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Box className={classes.macmango}>
                                    <Typography className={classes.profileimg} display="inline-block" component="img" src={ChatUserId ? ChatUserId?.profilePic : exp1} width="100%"></Typography>
                                </Box>
                                <Typography color="#808080" fontWeight={700} >{ChatUserId ? ChatUserId?.userName : "unNamed"}</Typography>
                                <Typography color="#A9A9A9" fontSize="13px">{format(currentUser?.createdAt)}</Typography>
                            </Box>
                        </ListItem>

                        <ListItem className={classes.listpadding}>
                            <Box className={classes.namewithadd}>
                                <Box sx={{ width: '20px' }}>
                                    <Typography component="img" src={walletimg} width="100%"></Typography>
                                </Box>
                                <Typography className={classes.address} ml={1} fontWeight={500} color="#808080">{ChatUserId?.userName}</Typography>
                            </Box>
                        </ListItem>

                        <ListItem className={classes.followers}>

                            <Box className={classes.follower_align}>
                                <Typography className={classes.rank} ml={1} fontWeight={700} color="#808080">{dataBychatUserName?.responseResult?.length ? dataBychatUserName?.responseResult?.length : "0"}</Typography>
                                <Typography className={classes.rank2} ml={1} fontWeight={500} color="#808080">NFTs</Typography>
                            </Box>
                            <Box className={classes.follower_align}>
                                <Typography className={classes.rank} ml={1} fontWeight={700} color="#808080">{ChatUserId?.followers?.length ? ChatUserId?.followers?.length : "0"}</Typography>
                                <Typography className={classes.rank2} ml={1} fontWeight={500} color="#808080">Followers</Typography>
                            </Box>
                            <Box className={classes.follower_align}>
                                <Typography className={classes.rank} ml={1} fontWeight={700} color="#808080">{ChatUserId?.followings?.length ? ChatUserId?.followings?.length : "0"}</Typography>
                                <Typography className={classes.rank2} ml={1} fontWeight={500} color="#808080">Following</Typography>
                            </Box>

                        </ListItem>

                    </List>
                    {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', '@media(max-width : 1200px)': { display: 'inherit', width: '100%' } }}>
                        {loadingData == false ? userChatfourNftData?.map((v, id) => {
                            return (
                                <>

                                    <Box className={classes.nftinfobx2} key={id}>

                                        <Typography component="img" src={v.metadata.image ? v?.metadata?.image.replace("ipfs://", "https://wizard.mypinata.cloud/ipfs/") : ""} width="100%"></Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                marginTop: "16px"
                                            }}
                                        >
                                            <Box>
                                                <Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }} >
                                                        <Box sx={{ display: 'flex' }}>
                                                            <Badge color="primary">
                                                                <Checkbox className={classes.fav}
                                                                    {...label2}
                                                                    icon={<FavoriteBorder sx={{ color: "#FF5F29" }} />}
                                                                    checkedIcon={
                                                                        <Favorite
                                                                            indeterminateIcon
                                                                            sx={{ color: "#FF5F29" }}
                                                                        />
                                                                    }
                                                                />
                                                            </Badge>
                                                            <Typography style={{ color: '#606060' }}>{v?.likes?.length}</Typography>
                                                        </Box>

                                                        <Box sx={{ display: 'flex', marginLeft: '10px' }}>
                                                            <Box sx={{ alignSelf: 'center' }}>
                                                                <img style={{ margin: '0px', borderRadius: '0px' }} src={messagestore} alt=""></img>
                                                            </Box>
                                                            <Typography style={{ color: '#606060' }}>{v?.comment?.length}</Typography>
                                                        </Box>

                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box sx={{ textAlign: "center" }}>
                                                <Button className={classes.viewbtn} endIcon={<Box sx={{ ml: '0px' }} component="img" src={arrowright} />}>
                                                    More
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>


                                </>
                            )
                        }) : <Typography className={classes.NoNftAdded}>
                            <Loader />
                        </Typography>
                        }
                        {userChatfourNftData?.length == 0 && dataBychatUserName == undefined &&
                            <Typography className={classes.NoNftAdded}>
                                No NFTs Found
                            </Typography>}
                    </Box> */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', '@media(max-width : 1200px)': { display: 'inherit', width: '100%' } }}>
                        {loadingData == false ? userChatfourNftData?.map((nft, index) => {
                            return (
                                <Box className={classes.nftinfobx2} key={index}>
                                    <NftByUserName  data={nft}/>
                                </Box>
                            )
                        }) : <Typography className={classes.NoNftAdded}>
                            <Loader />
                        </Typography>
                        }
                        {userChatfourNftData?.length == 0 && dataBychatUserName == undefined &&
                            <Typography className={classes.NoNftAdded}>
                                No NFTs Found
                            </Typography>}
                    </Box>

                </Box>

            </Box>



        </>
    )
}

export default NFTMsgExp