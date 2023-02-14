import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import SearchIcon from '@mui/icons-material/Search';
// import search from '../../../src/pages/images/search.svg'
import { Link, useRouteLoaderData } from "react-router-dom";
// import sidemenuarrow from '../../../src/pages/images/sidemenuarrow.svg'
// import messageimg1 from '../../../src/pages/images/messageimg1.svg'
// import messageimg2 from '../../../src/pages/images/messageimg2.svg'
// import messageimg3 from '../../../src/pages/images/messageimg3.svg'
// import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
// import doublecheck1 from '../../../src/pages/images/doublecheck1.svg'

import doublecheck from '../../../src/pages/images/doublecheck.svg'
import { UserContext } from "../../context/User/UserContext";
import axios from "axios";
//import { io } from "socket.io-client";
import ApiConfigs from "../../api/ApiConfig";
//import { getUser } from "../../../../../MongoPeekApi/mangoPeek-main/controllers/ChatController/Users";



const useStyle = makeStyles({

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
        width: '180px !important',
        borderColor: 'transparent',
        display: 'flex'

    },
    listitem: {
        display: 'inherit !important',
        padding: '0px !important',
        transition: '0.8s'
    },

    listitem1: {
        padding: '10px !important',
        justifyContent: 'space-between !important',
        transition: '0.8s'
    },
    listitem2: {
        display: 'flex !important',
        padding: '10px !important',
        alignItems: "center",

        justifyContent: 'space-between !important',
        backgroundColor: '#F1F1F1',
        marginTop: '10px !important',
        borderRadius: '35px',
        transition: '0.5s',
        '&:hover': {
            backgroundColor: '#e9e7e7'
        }
    },
    para: {
        fontSize: '12px !important',
        color: '#949494 !important',
        marginTop: '5px !important'
    },

    para2: {
        fontSize: '14px !important',
        color: '#949494 !important',
    },

    widthleft: {
        width: '25%'
    },

    widthright: {
        display: 'flex',
        width: '75%',
        justifyContent: 'space-between'
    },
    msgscroll: {
        height: '63vh',
        overflowY: 'scroll'
    },
    imgs:{
        borderRadius: "50%",
        width: "3rem"
        
    }

})


const data = [
    {
        heading: "Lorem Ipsum",
        message: "Hi, are you up?",
        time: "11:45"
    },
    {
        heading: "Lorem Ipsum",
        message: "Hi, are you up?",
        time: "11:00"
    },
    {
        heading: "Lorem Ipsum",
        message: "Checkout this nft",
        time: "1:12"
    },
    {
        heading: "Lorem Ipsum",
        message: "Hi, are you up?",
        time: "12:00"
    },
    {
        heading: "Lorem Ipsum",
        message: "Hi, are you up?",
        time: "11:50"
    },
    {
        heading: "Lorem Ipsum",
        message: "Hi, are you up?",
        time: "11:50"
    },
    {
        heading: "Lorem Ipsum",
        message: "Hi, are you up?",
        time: "12:00"
    },
    {
        heading: "Lorem Ipsum",
        message: "Hi, are you up?",
        time: "11:50"
    },
    {
        heading: "Lorem Ipsum",
        message: "Hi, are you up?",
        time: "11:50"
    },
    {
        heading: "Lorem Ipsum",
        message: "Hi, are you up?",
        time: "11:50"
    },
    {
        heading: "Lorem Ipsum",
        message: "Hi, are you up?",
        time: "11:50"
    },
    {
        heading: "Lorem Ipsum",
        message: "Hi, are you up?",
        time: "11:50"
    },
    {
        heading: "Lorem Ipsum",
        message: "Hi, are you up?",
        time: "11:50"
    },
    {
        heading: "Lorem Ipsum",
        message: "Hi, are you up?",
        time: "11:50"
    }
]



const MessagingComp = ({ Conversation, currentUser, Messages, CurrentChat }) => {
    const classes = useStyle();
    const [user, setUser] = useState(null);
    const [{ userData }] = useContext(UserContext);
    


    

    const friendId = Conversation?.members?.find((m) => m !== currentUser?._id);
    const getUser = async () => {
        try {
            const res = await axios(ApiConfigs?.getUser+`?userId=${friendId}`);
            setUser(res.data);
        } catch (err) {
            console.log("err", err);
        }
    };

    useEffect(() => {
        getUser();
    }, [Conversation, currentUser]);


    //console.log("userdffdf", user)

    //  console.log("userfriends", user)
    //  console.log("CurrentChat", CurrentChat?.members?.find((m) => m !== currentUser?._id))
    //  console.log("Messages", Messages?.slice(-1)[0]?.text)

    return (
        <>
            <Link to="/messagingExpend" className={classes.listitem}>
                <Box className={classes.listitem2}>
                    <Box className={classes.widthleft}>
                        <Typography className={classes.imgs} component="img" src={user?.profilePic}></Typography>
                    </Box>
                    <Box className={classes.widthright}>
                        <Box>
                            <Typography variant="h6" color="#949494">{user? user?.userName : ""}</Typography>
                            {/* <Typography className={classes.para2} color="#949494">{CurrentChat?.members?.find((m) => m !== currentUser?._id)?Messages?.slice(-1)[0]?.text:"message"}</Typography> */}
                        </Box>
                        <Box textAlign="right">
                            <Typography display="inline-block" component="img" src={doublecheck}></Typography>
                            {/* <Typography className={classes.para}>time</Typography> */}
                        </Box>
                    </Box>
                </Box>
            </Link>
        </>
    )
}

export default MessagingComp