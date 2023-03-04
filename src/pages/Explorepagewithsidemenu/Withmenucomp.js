import { Badge, Box, Divider, List, ListItem, Typography, } from "@mui/material";
import React, { useContext, useEffect } from "react";

import { makeStyles } from "@mui/styles";
import message from '../../../src/pages/images/message.svg'
import notification from '../../../src/pages/images/notification.svg'
import add from '../../../src/pages/images/add.svg'
import collectionimgs from '../../../src/pages/images/collectionimgs.svg'
import saveimg from '../../../src/pages/images/saveimg.svg'
import logoutimg from '../../../src/pages/images/logoutimg.svg'
import walletimg from '../../../src/pages/images/walletimg.svg'
import macmango from '../../../src/pages/images/macmango.svg'
import menuarrow from '../../../src/pages/images/menuarrow.svg'
import { Menu, MenuItem } from '@material-ui/core';
import { Link, useNavigate } from "react-router-dom";
import { actionTypes } from "../../context/User/UserReducer";
import { UserContext } from "../../context/User/UserContext";
import { useQuery } from "react-query";
import { getFriends, } from "../../api/ApiCall/getFriends";
import { getFollowigUsers } from "../../api/ApiCall/getFollowigUsers";
import { display, spacing, textTransform } from "@mui/system";
import { Button } from "bootstrap";



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
        width: '260px',
        minHeight: '84vh',
        '@media(max-width : 900px)': {
            minHeight: '84vh',
            '@media(max-width : 600px)': {
                minHeight: '100vh', 
                width: "370px !important",
              
                width: "100%"

            }
        }
    },
    listpadding1: {
        padding: '5px 0px !important',
        justifyContent: "center !important"
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

    menuposition: {
        //position: 'fixed',
        top: 0,
        marginTop: '5.8rem',
        '@media(max-width : 600px)': {
            width: '100% !important',
            textAlign: "center",
            marginTop: "1rem"
        }

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
    macmango: {
        width: '60px'
    },
    followers: {
        display: 'flex',
        justifyContent: 'space-between !important',
        padding: '5px 0px !important'
    },
    follower_align: {
        textAlign: 'center'
    },
    menuarrowbtn: {
        cursor: "pointer !important",
          //marginLeft: "-4rem",
        marginTop: "20rem",
        color: "red",
        // position: "fixed",
        // left: "240px",
        position: "absolute",
    right: "0",
        '@media(max-width : 600px)': {
            // marginLeft: "-4rem",
            // position: "relative !important",
            cursor: "pointer",
            marginTop: "15rem",
            // left:"285px"
            
        }
    },
    ption: {
        display: "flex",
        position:"relative"
    }
    ,
    username: {
        justifyContent:"center"
    },
    followgmenustyle: {
        "& .MuiPaper-root": {
            borderRadius: "1rem",
            marginTop: "50px",
            marginLeft: "-5.5rem !important",
            borderRadius: "10px !important",
            backgroundColor: "#f1f1f1",
            width: "12rem"
        },
        '@media(max-width : 600px)': {
            "& .MuiPaper-root": {
                marginLeft: "-4rem !important",
                justifyContent: "center",
            }
        }
    },
    followingmenustyle: {
        "& .MuiPaper-root": {
            borderRadius: "1rem",
            marginTop: "50px",
            marginLeft: "-7.5rem !important",
            borderRadius: "10px !important",
            backgroundColor: "#f1f1f1",
            width: "12rem"
        },
        '@media(max-width : 600px)': {
            "& .MuiPaper-root": {
                marginLeft: "-4rem !important",
                justifyContent: "center",
            }
        }
    },
    imgs: {
        borderRadius: "50%",
        width: "1.9rem"

    },
    followmaindiv:{
        height: "2rem",
        display: "flex",
        textAlign: "center",
        gap: "8px"
    
    },
    styleUsername:{
        marginTop: "3px",
    
    }
})

const Withmenucomp = ({ userProfile, Dispatch, NftDataByUserName }) => {
    const classes = useStyle();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [following, setFolllowing] = React.useState(null);
    const [{ userData, token }] = useContext(UserContext);
    const open1 = Boolean(following);
    const open = Boolean(anchorEl);
    let userId = userData?._id


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickFollowing = (event) => {
        setFolllowing(event.currentTarget);
    };

    const handleCloseFollowing = () => {
        setFolllowing(null);
    };


    const logout = (e) => {
        e.preventDefault();
        Dispatch({ type: actionTypes.SET_TOKEN, value: null });
        localStorage.clear();
        
    };



    


    const { data: getFriend } = useQuery(["getFriends", userId],
        () => getFriends(userId), {
        onSuccess: (data) => {
            if (data.responseCodes == 200) {


            }
        }
    })

    const { data: getFollowig } = useQuery(["getFollowigUsers", userId],
        () => getFollowigUsers(userId), {
        onSuccess: (data) => {
            if (data.responseCodes == 200) {


            }
        }
    })
      

      console.log("getFollowigUser",getFollowig)
    // console.log("getFriend", getFriend?.friendList)

    // const redirectPage = (()=>{
    //     navigate("//explorepage_without_side_menu")
    // })



    return (
        <>
            <Box className={classes.ption}>
                <Box className={classes.menuposition}>
                    <List className={classes.sidemenu}>
                        <ListItem className={classes.listpadding1}>
                            <Box >
                                <Box className={classes.macmango}>
                                    <Typography sx={{ borderRadius: "50%" }} component="img" src={userProfile ? userProfile?.profilePic : macmango} width="100%"></Typography>
                                </Box>
                                <Typography className={classes.username} color="#808080" fontWeight={700} >@{userProfile ? userProfile?.firstName : "Hello"}</Typography>
                            </Box>
                        </ListItem>

                        <ListItem className={classes.listpadding1}>
                            <Box className={classes.namewithadd}>
                                <Box sx={{ width: '20px' }}>
                                    <Typography component="img" src={walletimg} width="100%"></Typography>
                                </Box>
                                <Typography className={classes.address} ml={1} fontWeight={500} color="#808080">{userProfile ? userProfile?.userName : "dhshdsj124325342"}</Typography>
                            </Box>
                        </ListItem>

                        <ListItem className={classes.followers}>

                            <Box className={classes.follower_align}>
                                <Typography className={classes.rank} ml={1} fontWeight={700} color="#808080">{NftDataByUserName?.responseResult?.length ? NftDataByUserName?.responseResult?.length : "0"}</Typography>
                                <Typography className={classes.rank2} ml={1} fontWeight={500} color="#808080">NFTs</Typography>
                            </Box>
                            <Box className={classes.follower_align} onClick={handleClick} sx={{ cursor: "pointer" }}>
                                <Typography className={classes.rank} ml={1} fontWeight={700} color="#808080">{userProfile ? userProfile?.followers?.length : "0"}</Typography>
                                <Typography className={classes.rank2} ml={1} fontWeight={500} color="#808080">Followers</Typography>
                            </Box>
                            <Box className={classes.follower_align} onClick={handleClickFollowing}  sx={{ cursor: "pointer" }}>
                                <Typography className={classes.rank} ml={1} fontWeight={700} color="#808080">{userProfile?.followings?.length ? userProfile?.followings?.length : "0"}</Typography>
                                <Typography className={classes.rank2} ml={1} fontWeight={500} color="#808080">Following</Typography>
                            </Box>
                        </ListItem>
                        <Menu
                            className={classes.followgmenustyle}
                            id="long-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}

                        >
                            {getFriend?.friendList?.map((followUser) => {
                                console.log("ndsmds", followUser?.profilePic)
                                return (
                                    <MenuItem className={classes.menuItem} onClick={handleClose}>
                                        <Box className={classes.followmaindiv}>
                                         <Box >
                                            <Typography className={classes.imgs} component="img" src={followUser?.profilePic}></Typography>
                                        </Box>
                                        <Box className={classes.styleUsername}>
                                            <Typography textTransform={'capitalize'}> {followUser.userName}</Typography>
                                        </Box>
                                        </Box>
                                    </MenuItem>
                                )

                            })}
                        </Menu>
                        <Menu
                            className={classes.followingmenustyle}
                            id="long-menu"
                            anchorEl={following}
                            keepMounted
                            open={open1}
                            onClose={handleCloseFollowing}

                        >
                            {getFollowig?.followingList?.map((followUser) => {
                            
                                return (
                                    <MenuItem className={classes.menuItem} onClick={handleCloseFollowing}>
                                        <Box className={classes.followmaindiv}>
                                         <Box >
                                            <Typography className={classes.imgs} component="img" src={followUser?.profilePic}></Typography>
                                        </Box>
                                        <Box className={classes.styleUsername}>
                                            <Typography textTransform={'capitalize'}> {followUser.userName}</Typography>
                                        </Box>
                                        </Box>
                                    </MenuItem>
                                )

                            })}
                        </Menu>
                        <Divider sx={{ margin: '10px 0px' }} />
                        <ListItem className={classes.listpadding}>
                            {/* <Badge className={classes.badge} badgeContent={8} sx={{
                                "& .MuiBadge-badge": {
                                    backgroundColor: '#FFCC00', color: '#fff',
                                    marginRight: '7px',
                                    marginTop: '-5px',
                                },
                            }}>
                                <Link className={classes.roundbutn2} to="/messaging">
                                    <Typography width={20} component="img" src={message}></Typography>
                                    <Typography className={classes.mrleft}>Messages</Typography>
                                </Link>
                            </Badge> */}
                            <Link className={classes.roundbutn2} to="/messaging">
                                    <Typography width={20} component="img" src={message}></Typography>
                                    <Typography className={classes.mrleft}>Messages</Typography>
                                </Link>
                        </ListItem>


                        {/* <ListItem className={classes.listpadding}>
                          
                            <Link className={classes.roundbutn2} to="/notification">
                                    <Typography width={20} component="img" src={notification}></Typography>
                                    <Typography className={classes.mrleft}>Notifications</Typography>
                                </Link>
                        </ListItem> */}

                        <ListItem className={classes.listpadding}>
                            <Link className={classes.textbutn} to="/create">
                                <Box className={classes.imgicon}>
                                    <Typography width={20} component="img" src={add}></Typography>
                                </Box>
                                Create Post
                            </Link>
                        </ListItem>

                        <ListItem className={classes.listpadding}>
                            <Link className={classes.textbutn} to="#">
                                <Box className={classes.imgicon}>
                                    <Typography width={20} component="img" src={collectionimgs}></Typography>
                                </Box>
                                My Collections
                            </Link>
                        </ListItem>

                        <ListItem className={classes.listpadding}>
                            <Link className={classes.textbutn} to="#">
                                <Box className={classes.imgicon}>
                                    <Typography width={20} component="img" src={saveimg}></Typography>
                                </Box>
                                Saved
                            </Link>
                        </ListItem>

                        <ListItem className={classes.listpadding} >
                            <Link className={classes.textbutn} onClick={logout}>
                                <Box className={classes.imgicon}>
                                    <Typography width={20} component="img" src={logoutimg}></Typography>
                                </Box>
                                <Typography >Logout</Typography>

                            </Link>
                        </ListItem>

                    </List>

                </Box>
                <Link className={classes.menuarrowbtn} to="/explorepage_without_side_menu">
                    <Typography component="img" src={menuarrow}></Typography>
                </Link>
            </Box>

        </>
    )
}

export default Withmenucomp