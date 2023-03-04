import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import profilebnrimg from '../../../src/pages/images/profilebnrimg.svg'
import profileicon from '../../../src/pages/images/profileicon.svg'
import { makeStyles } from "@mui/styles";
import walletimg from '../../../src/pages/images/walletimg.svg'
import eth from '../../../src/pages/images/eth.svg'
import ProfileTab from './ProfileTab'
import { UserContext } from "../../context/User/UserContext";
import { useQuery, useMutation } from "react-query";
import { toast } from "react-toastify";
import { format } from "timeago.js";
import { getAllNftByUserName } from "../../api/ApiCall/nftCollection/getAllNftByUserName"
import { getNftByNftCollectionId } from "../../api/ApiCall/nftCollection/getNftByNftCollectionId"
import { addConversation } from "../../api/ApiCall/addConversation";
import { follow } from "../../api/ApiCall/follow";
import { unFollow } from "../../api/ApiCall/unFollow";
import { useParams, useSearchParams } from "react-router-dom";
import ApiConfigs from "../../api/ApiConfig";
import axios from "axios";


const useStyle = makeStyles({
    profilebnr: {
        width: '100%'
    },
    profile: {
        width: '80px',
        borderRadius: "50%",
        margin: '-30px 0px 0px 40px !important',
        '@media(max-width : 600px)': {
            width: '50px',
            margin: '-30px 0px 0px 30px !important',
        }
    },
    bnrmain: {
        marginTop: '6rem',
        '@media(max-width : 900px)': {
            marginTop: '85px',
        }
    },
    hding: {
        fontSize: '30px !important',
        fontWeight: '700 !important',
        color: '#808080',
        '@media(max-width : 600px)': {
            textAlign: 'center',
        }
    },

    namewithadd: {
        display: 'flex',
        padding: '15px !important',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '40px',
        backgroundColor: '#efefef96',
        '@media(max-width : 600px)': {
            width: '100%'
        }
    },
    h4: {
        color: '#FF5E27',
        fontWeight: '900 !important',
        '@media(max-width : 600px)': {
            fontSize: '24px !important'
        }
    },
    h5: {
        fontSize: '20px !important',
        color: '#808080',
        fontWeight: '900 !important',
        '@media(max-width : 600px)': {
            fontSize: '30px !important',
        }
    },
    nftflowers: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '10px 30px!important',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '50px',
        backgroundColor: '#efefef96',

    },
    nftflowers2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '40px',
        '@media(max-width : 600px)': {
            display: 'inherit',
            textAlign: 'center',
            marginTop: '20px'
        }
    },

    typo: {
        '@media(max-width : 600px)': {
            marginTop: '25px !important'
        }
    },
    ethimg: {
        display: 'inline-block',
        marginRight: '6px !important'
    },

})


const Profile = () => {
    const classes = useStyle();
    const [searchParams] = useSearchParams();
    const { id: nftCollectionId } = useParams();
    const [{ token, userData }, dispatch] = useContext(UserContext);
    const [nftuserName, setNftuserName] = useState(null)
    const [userProfilePic, setuserProfilePic] = useState(null)
    const [nftuserId, setNftuserId] = useState(null)
    const [followed, setfollowed] = useState(false)
    const [conversation, setConversation] = useState([]);


    const { data, refetch } = useQuery(["getNftByNftCollectionId", nftCollectionId],
        () => getNftByNftCollectionId(nftCollectionId), {
        onSuccess: (data) => {
            if (data.success === true) {
                refetch();


            }
        }
    })



    useEffect(() => {
        if (data) {
            setNftuserName(data?.responseResult?.userId?.userName)
            setuserProfilePic(data?.responseResult?.userId?.profilePic)
            setNftuserId(data?.responseResult?.userId?._id);
            setfollowed(data?.responseResult?.userId?.followers.includes(userData?._id))

        }
    }, [data])
    //let followed = data?.responseResult?.userId?.followers.includes(userData._id)

    const { data: dataByUserName, isLoading: loadingData } = useQuery(
        ["getAllNftByUserName", nftuserName],
        () => getAllNftByUserName(nftuserName), {
        onSuccess: (data) => {
            if (data.success === true) {

            }
            //setTotalNftPages(Math.ceil(data?.responseResult.length/6))
        }
    },
    )


    //add conversation api call
    const { mutateAsync, isError, error } = useMutation("addConversation", addConversation, {
        onSuccess: (data) => {
            console.log("datadsf", data)
            try {
                if (data.success === true) {
                    toast.success(JSON.stringify(data.responseMessage));


                } else if (data.success === false) {
                    toast.error(JSON.stringify(data.responseMessage));
                }
            } catch (err) {

            }
        },
        onError: (error, data) => {
            toast.error(JSON.stringify(error.message));
        },
    }
    );

    const Addfriends = async () => {
        try {
            await mutateAsync({
                senderId: nftuserId,
                receiverId: userData?._id
            });
        } catch (error) {
            console.log("error", error);
        }

    };

    let followerId = userData?._id
    let userId = nftuserId
    console.log("userId", userId)
    //Follow api call
    const { mutateAsync: addfollow } = useMutation(["follow", userId],
        (userId) => follow(userId), {
        onSuccess: (data) => {

            try {
                if (data.success === true) {
                    refetch();
                } else {

                }

            } catch (err) {
            }
        },
        onError: (error, data) => {
        },
    }
    );

    const Followers = async () => {
        try {
            await addfollow({
                followerId: followerId,
                userId: nftuserId,

            });
        } catch (error) {
            console.log("error", error);
        }
    };

    //Unfollowed api call
    const { mutateAsync: removeFollow } = useMutation(["unFollow", userId],
        (userId) => unFollow(userId), {
        onSuccess: (data) => {
            try {
                if (data.success === true) {
                    refetch();
                } else {
                }

            } catch (err) {
            }
        },
        onError: (error, data) => {
        },
    }
    );

    const unfollowed = async () => {
        try {
            await removeFollow({
                followerId: followerId,
                userId: nftuserId,

            });
        } catch (error) {
            console.log("error", error);
        }
    };



    //getconversation
    const getConversations = async() => {
        try {
            const res = await axios.get(ApiConfigs?.getConversation + `/${userData?._id}`);
            //setConversation(res?.data);
            let friend = []
            if(res?.data){
                await res?.data.map((v)=>{
                    friend.push(v?.members.filter((members) =>members.includes(nftuserId)))
                })
            }
            setConversation(friend)
        } catch (err) {
            console.log("err", err);
        }
    };
    
    useEffect(() => {
        getConversations();
    }, [nftuserId]);


      let filter = conversation.filter((items)=> items.includes(nftuserId))
      let checkuser = filter[0]?.[0] === nftuserId

     // console.log("checkjdjs", checkuser)
     



    return (
        <>
            <Container>
                <Header />
                <Grid lg={12} container spacing={0}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Box className={classes.bnrmain}>
                            <Typography className={classes.profilebnr} component="img" src={profilebnrimg}></Typography>
                            <Typography className={classes.profile} component="img" src={userProfilePic ? userProfilePic : profileicon}></Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{
                    mt: '30px', '@media(max-width : 600px)': {
                        mt: '0px'
                    }
                }}>
                    <Grid item lg={7} md={7} sm={12} xs={12}>
                        <Box>
                            <Typography className={classes.hding} variant="h1">{nftuserName ? nftuserName : "unNamed"}</Typography>
                            <Box sx={{
                                display: 'flex', marginTop: '20px',
                                '@media(max-width : 600px)': {
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                }
                            }}>
                                <Box className={classes.namewithadd}>
                                    <Typography component="img" src={walletimg}></Typography>
                                    <Typography ml={2} fontWeight={700} color="#808080">{nftuserName ? nftuserName : "NoUserName"}</Typography>
                                </Box>
                                <Box sx={{
                                    alignSelf: 'center', marginLeft: '20px', '@media(max-width : 600px)': {
                                        marginLeft: '0px',
                                        marginTop: '15px',
                                    }
                                }}>
                                    <Typography fontWeight={700} color="#808080">Joined {userData ? format(userData?.createdAt) : "No time"}</Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                        <Box>
                            <Box className={classes.nftflowers} >
                                <Typography>
                                    <Typography className={classes.h4} variant="h4">{dataByUserName?.responseResult?.length ? dataByUserName?.responseResult?.length : "0"}</Typography>
                                    <Typography color="rgb(112, 122, 131)">NFTs</Typography>
                                </Typography>

                                <Typography sx={{ cursor: "pointer" }}>
                                    <Typography className={classes.h4} variant="h4">{data?.responseResult?.userId?.followers?.length ? data?.responseResult?.userId?.followers?.length : "0"}</Typography>
                                    {/* {followed == true ?<Typography  onClick={unfollowed}color="rgb(112, 122, 131)">Unfollowed</Typography>:
                                    <Typography onClick={Followers} color="rgb(112, 122, 131)">Followers</Typography>} */}
                                    {followed == true ? <Typography onClick={unfollowed} color="rgb(112, 122, 131)">Unfollowed</Typography> :
                                        <Typography onClick={Followers} color="rgb(112, 122, 131)">Followers</Typography>}
                                </Typography>

                                <Typography>
                                    <Typography className={classes.h4} variant="h4">{data?.responseResult?.userId?.followings?.length ? data?.responseResult?.userId?.followings?.length : "0"}</Typography>
                                    <Typography color="rgb(112, 122, 131)">Following</Typography>

                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>

                    <Grid item lg={7} md={7} sm={12} xs={12}>
                        <Box>
                            <Box className={classes.nftflowers2} >
                                <Typography className={classes.typo}>
                                    <Typography className={classes.h5} variant="h4">10.0K</Typography>
                                    <Typography color="rgb(112, 122, 131)">Items</Typography>
                                </Typography>

                                <Typography className={classes.typo}>
                                    <Typography className={classes.h5} variant="h4">6.5K</Typography>
                                    <Typography color="rgb(112, 122, 131)">Owners</Typography>
                                </Typography>

                                <Typography className={classes.typo}>
                                    <Typography > <img className={classes.ethimg} src={eth} alt="" /><Typography className={classes.h5} variant="h4" component="span">663.0K</Typography></Typography>
                                    <Typography color="rgb(112, 122, 131)">Total Volume</Typography>
                                </Typography>

                                <Typography className={classes.typo}>
                                    <Typography > <img className={classes.ethimg} src={eth} alt="" /><Typography className={classes.h5} variant="h4" component="span">75</Typography></Typography>
                                    <Typography color="rgb(112, 122, 131)">Floor Price</Typography>
                                </Typography>

                                <Typography className={classes.typo}>
                                    <Typography > <img className={classes.ethimg} src={eth} alt="" /><Typography className={classes.h5} variant="h4" component="span">68.7</Typography></Typography>
                                    <Typography color="rgb(112, 122, 131)">Best Price</Typography>
                                </Typography>

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Box>
                    <ProfileTab DataByUserName={dataByUserName} LoadingData={loadingData} addFriends={Addfriends} FollowerId={followerId} NftuserId={nftuserId} checkFriends={checkuser} />
                </Box>
            </Container>
        </>
    )
}

export default Profile