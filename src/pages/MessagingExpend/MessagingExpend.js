
import { Box, Container, Grid, Input, ListItem, Typography, Divider, List, TextField, InputAdornment, IconButton } from "@mui/material";
import React, { useState, useEffect, useContext, useRef } from "react";
//import TextareaAutosize from '@mui/base/TextareaAutosize';
import Header2 from "../../components/Header/Header2";
import { makeStyles } from "@mui/styles";
import Withoutmenucomp from "../Explorepagewithsidemenu/Withoutmenucomp";
import MessagingComp from "../Messaging/MessagingComp";
import NFTMsgExp from "./NFTMsgExp";
import MessageChat from "./MessageChat";
import { UserContext } from "../../context/User/UserContext";
import ApiConfigs from "../../api/ApiConfig";
import SearchIcon from '@mui/icons-material/Search';
import search from '../../../src/pages/images/search.svg'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import sidemenuarrow from '../../../src/pages/images/sidemenuarrow.svg'
import messageimg1 from '../../../src/pages/images/messageimg1.svg'
// import doublecheck from '../../../src/pages/images/doublecheck.svg'
// import doublecheck1 from '../../../src/pages/images/doublecheck1.svg'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { Link } from "react-router-dom";
import axios from "axios";
import { connect, io } from "socket.io-client";
import { format } from "timeago.js";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getMessage } from "../../api/ApiCall/getMessage";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Menu, MenuItem } from '@material-ui/core';
import { DeleteMessage } from "../../api/ApiCall/DeleteMessage";
import moment from 'moment'
import { ModeCommentSharp } from "@mui/icons-material";
import Loader from "../Loader/Loader"





const useStyle = makeStyles({
    maindiv: {
        padding: '30px 0px 80px 0px',
        display: 'flex'
    },
    menuposition: {
        position: 'fixed',
        top: 0,
        marginTop: '9.10rem',
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
        '@media(max-width : 900px)': {
            display: 'none',
            '@media(max-width : 600px)': {
                display: 'block',
                marginTop: '1rem',
            }
        }
    },


    chatboxwrp: {

        marginTop: '66px !important',
        paddingRight: '20px !important',
        borderRadius: '45px',
        '@media(max-width : 600px)': {
            marginTop: '0px !important',
            paddingRight: '0px !important',
        }
    },

    ///deeapk add
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
    listitem: {
        display: 'inherit !important',
        padding: '0px !important',
        transition: '0.8s'
    },
    searchinpt: {
        backgroundImage: 'linear-gradient(180deg, #ebeaea, #efefef3b) !important',
        borderRadius: '30px',
        padding: '10px',
        width: '280px !important',
        borderColor: 'transparent',
        display: 'flex'

    },
    msgscroll: {
        height: '63vh',
        overflowY: 'scroll'
    },

    //message css style ass
    chatlist: {
        position: 'fixed',
        marginLeft: '1.4rem',
        backgroundColor: '#f1f1f1',
        borderRadius: '40px',
        padding: '10px 15px',
        width: "365px",

        '@media(max-width : 1200px)': {
            marginLeft: '0rem',
            padding: '10px 10px',
            '@media(max-width : 600px)': {
                position: 'inherit',
                marginLeft: '0rem',
                marginTop: '1rem',
                width: '380px !important'
            }
        }
    },
    listitem1: {
        display: 'flex !important',
        padding: '0px !important',
        marginTop: '10px !important'
    },
    listitem2: {
        display: 'flex !important',
        padding: '20px !important',
        justifyContent: 'space-between !important',
        backgroundColor: '#F1F1F1 !important',
        boxShadow: 'inset 0px 7px 15px 1px #00000024',
        borderRadius: '35px',
        transition: '0.5s',
        '&:hover': {
            backgroundColor: '#e9e7e7'
        }
    },
    widthleft: {
        width: '80px',

    },

    widthright: {
        display: 'flex',
        width: '75%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    msgscroll: {
        height: '57vh',
        overflowY: 'scroll',
        '@media(max-width : 1200px)': {
            height: '60vh',
            '@media(max-width : 900px)': {
                height: '66.5vh',

            }
        }
    },
    Chatuser: {
        borderRadius: "50%",
        width: "60px"

    },
    chatinpt: {
        backgroundColor: '#efefef96',
        justifyContent: "center",
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        padding: '20px  50px 0px !important',
        width: '100% !important',
        borderRadius: '30px',
        height: "60px !important"
    },
    NoConversationBox: {
        height: "43.5rem",
        display: "inherit",
        // '@media(max-width : 900px)': {
        //     width: '',

        // }
    },
    NoConversation: {
        textAlign: "center !important",
        display: "inherit"
    },
    macmango: {
        width: '80px',
        display: 'inline-block',
        justifyContent: "center",
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
    },
    img: {
        fontSize: "10px !important",
        width: "inherit",
        justifyContent: "center"
    },
    menustyle: {
        "& .MuiPaper-root": {
            borderRadius: "1rem",
            marginTop: "50px",
            marginLeft: "-4rem !important",
            borderRadius: "10px !important",
            backgroundColor: "#f1f1f1"
        },
        '@media(max-width : 600px)': {
            "& .MuiPaper-root": {
                marginLeft: "-1rem !important",

            }
        }

    },
    menuItem: {
        marginRight: "10px"
    }
})


const MessagingExpend = () => {
    const classes = useStyle();
    const socket = useRef();
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    // const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [{ userData }] = useContext(UserContext);
    const [timeShow, settimeShow] = useState(null)
    const scrollRef = useRef();
    const [userSearch, setUserSearch] = useState('')
    const [chatUserList, setChatUserList] = useState([])
    const [chatTime, setChatTime] = useState("")
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);





    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };




     const ENDPOINT = "https://d38fct4fjh0hub.cloudfront.net"
    //const localhost = "ws://localhost:8900"

    useEffect(() => {
        socket.current = io(ENDPOINT);
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data?.senderId,
                text: data?.text,
                createdAt: Date.now(),
            });
        });
    }, []);



    useEffect(() => {
        arrivalMessage &&
            currentChat?.members?.includes(arrivalMessage?.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);


    useEffect(() => {
        socket.current.emit("addUser", userData?._id);
        socket.current.on("getUser", (users) => {
            //console.log("users", users)
            // console.log("followers", userData?.followers)
            setOnlineUsers(
                userData?.followers?.filter((f) => users((u) => u.userId == f))
            );
        });
    }, [userData]);



    //getconversation
    const getConversations = async () => {
        try {
            const res = await axios.get(ApiConfigs?.getConversation + `/${userData?._id}`);
            setConversations(res?.data);
        } catch (err) {
            console.log(err);
        }
    };




    var conversationId = currentChat?._id

    //getMessage
    // const getMessages = async () => {
    //     try {
    //         const res = await axios.get(ApiConfigs?.getMessage + `/${currentChat?._id}`);
    //         setMessages(res.data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    const { data: getMessages, isLoading: error, loadingData, refetch } = useQuery(["getMessage", conversationId],
        () => getMessage(conversationId), {
        onSuccess: (data) => {
            if (data.responseCodes == 200) {
                refetch()


            }

        }
    })

    useEffect(() => {
        if (getMessages) {
            refetch()
            setMessages(getMessages?.responseMessage);
        }
    }, [getMessages])



    useEffect(() => {
        getConversations();
        //getMessages();
    }, [userData?._id]);

    const handleSubmit = async () => {

        const newMessage = document.getElementById('chatInput').value.trim();
        if (!newMessage) {
            return false
        }
        document.getElementById("chatInput").value = "";

        const message = {
            sender: userData?._id,
            text: newMessage,
            conversationId: currentChat?._id,
        };

        const receiverId = currentChat.members.find(
            (member) => member !== userData?._id
        );

        socket.current.emit("sendMessage", {
            senderId: userData?._id,
            receiverId,
            text: newMessage,
        });
        try {
            const res = await axios.post(ApiConfigs?.AddMessage, message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }

    };


    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);



    const [user, setUser] = useState([]);
    
    const friendId = currentChat?.members?.find((m) => m !== userData?._id);


    const getUser = async () => {
        try {
            const res = await axios(ApiConfigs?.getUser + `?userId=${friendId}`);
            setUser(res.data);
        } catch (err) {
            console.log("err", err);
        }
    };


    useEffect(() => {
        getUser();
    }, [currentChat, userData]);




    const { mutateAsync: mutateAsyncDeleteMessage } = useMutation(
        "DeleteMessage",
        DeleteMessage,
        {
            onSuccess: (data) => {
                try {
                    if (data.success === true) {
                        refetch();
                    } else {

                    }
                } catch (error) {

                }
            },
        }
    );

    const handleDeleteMessage = async (conversationId) => {
        try {
            await mutateAsyncDeleteMessage({
                conversationId: conversationId,
            });
        } catch (err) { }
    };


    


    return (
        <>
            <Container>
                <Header2 messagecount={conversations?.length} />
                <Box className={classes.maindiv}>
                    <Grid container spacing={2}>
                        <Grid item lg={0.9} md={0.9} sm={1.2} xs={12}>
                            <Box className={classes.menuposition}>
                                <Withoutmenucomp messagecount={conversations?.length} />
                            </Box>
                        </Grid>
                        <Grid item lg={7.9} md={7.9} sm={10.8} xs={12}>
                            <Box>
                                <Grid container spacing={0} className={classes.chatboxwrp}>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
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
                                                        <Link to="/messaging">
                                                            <ArrowBackIcon sx={{ color: "red", fontSize: "30px" }}></ArrowBackIcon>
                                                        </Link>

                                                    </Box>
                                                </ListItem>
                                                <ListItem className={classes.listitem}>
                                                    <Box className={classes.msgscroll}>
                                                        {conversations?.length > 0 ?
                                                            conversations?.map((c) => {
                                                                return (
                                                                    <Box onClick={() => setCurrentChat(c)}>
                                                                        <MessagingComp Conversation={c} currentUser={userData} Messages={messages} CurrentChat={currentChat} query={userSearch} />
                                                                    </Box>
                                                                )
                                                            }) : <Typography className={classes.NoNftAdded}>
                                                                <Loader />
                                                            </Typography>
                                                        }
                                                        {conversations?.length == 0 && <Typography sx={{ textAlign: "center" }}>No Any Friend to chatList</Typography>}

                                                    </Box>

                                                </ListItem>
                                            </List>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Box className={classes.chatlist}>
                                            <List sx={{ p: 0 }}>
                                                {currentChat ? <>

                                                    <ListItem className={classes.listitem}>
                                                        <Link className={classes.listitem2} to="#">
                                                            <Box className={classes.widthleft}>
                                                                <Typography className={classes.Chatuser} component="img" src={user?.profilePic}></Typography>
                                                            </Box>
                                                            <Box className={classes.widthright}>
                                                                <Box>
                                                                    <Typography variant="h6" color="#949494">{user?.userName}</Typography>
                                                                    <Typography className={classes.para2} color="#949494">last seen at:{messages ? moment(messages?.time).format('DD/MM/YYYY') : "time"}</Typography>
                                                                </Box>
                                                                <Box textAlign="right">
                                                                    <IconButton sx={{ color: "#7d7070 !important" }}
                                                                        aria-label="more"
                                                                        id="long-button"
                                                                        aria-haspopup="true"
                                                                        onClick={handleClick}
                                                                    >
                                                                        <MoreVertIcon />
                                                                    </IconButton>
                                                                    <Menu


                                                                        className={classes.menustyle}
                                                                        id="long-menu"
                                                                        anchorEl={anchorEl}
                                                                        keepMounted
                                                                        open={open}
                                                                        onClose={handleClose}

                                                                    >
                                                                        {/* {options.map((option) => (
                                                                            <MenuItem className={classes.menuItem} key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                                                                {option}
                                                                            </MenuItem>
                                                                        ))} */}
                                                                        <MenuItem className={classes.menuItem} onClick={handleClose} >
                                                                            <Typography onClick={async () => await handleDeleteMessage(conversationId)}>Delete chat</Typography>

                                                                        </MenuItem>
                                                                        <MenuItem className={classes.menuItem} onClick={handleClose}>
                                                                            Profile
                                                                        </MenuItem>
                                                                    </Menu>
                                                                </Box>
                                                            </Box>
                                                        </Link>
                                                    </ListItem>

                                                    <Box className={classes.msgscroll}>
                                                        {messages?.map((m) => (
                                                            <Box ref={scrollRef}>
                                                                <MessageChat message={m} own={m?.sender === userData?._id} onClick={() => settimeShow(m)} />
                                                            </Box>
                                                        ))}
                                                    </Box>
                                                    <ListItem className={classes.listitem1}>
                                                        <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', width: "100% !important" }}>
                                                            <TextField
                                                                className={classes.chatinpt}
                                                                // id="outlined-basic"
                                                                type="text"
                                                                id="chatInput"
                                                                // placeholder="Nice one! considering this too"
                                                                placeholder="Type a message"
                                                                // onChange={(e) => setNewMessage(e.target.value)}
                                                                // value={newMessage}
                                                                variant="standard"
                                                                onKeyDown={(e) => e.key === 'Enter' ? handleSubmit() : null}
                                                                multiline
                                                                // rows={1}
                                                                InputProps={{
                                                                    disableUnderline: true,
                                                                }}
                                                            />
                                                            {<IconButton onClick={handleSubmit}
                                                                sx={{
                                                                    backgroundColor: '#90DD90',
                                                                    color: '#fff',
                                                                    marginLeft: '-50px',
                                                                    padding: '13px',
                                                                    transition: '0.5s',
                                                                    "&:hover": {
                                                                        backgroundColor: '#33CC33'
                                                                    }
                                                                }}
                                                                aria-label="rightarrow">
                                                                <KeyboardArrowRightRoundedIcon />
                                                            </IconButton>}
                                                        </Box>
                                                    </ListItem>
                                                </> : <Box className={classes.NoConversationBox}>
                                                    <Box textAlign={'center'}>
                                                        <Typography className={classes.img} display={"inline-block"} component="img" src={messageimg1}></Typography>
                                                    </Box>
                                                    <Divider color="orange" sx={{ margin: "5px 0px" }}></Divider>
                                                    <Typography className={classes.NoConversation}>No Conversation Start</Typography>
                                                </Box>

                                                }
                                            </List>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item lg={3.2} md={3.2} sm={2} xs={12}>
                            <Box className={classes.explorenft}>
                                <NFTMsgExp onLineUsers={onlineUsers} currentUser={userData} ChatUserId={user} />
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </>
    )
}

export default MessagingExpend