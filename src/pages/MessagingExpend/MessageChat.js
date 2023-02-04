import { Box,  ListItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

// import doublecheck1 from '../../../src/pages/images/doublecheck1.svg'

// import MoreVertIcon from '@mui/icons-material/MoreVert';
import chatimgleft from '../../../src/pages/images/chatimgleft.svg'
//import chatimgright from '../../../src/pages/images/chatimgright.svg'
import chatimgright2 from '../../../src/pages/images/chatimgright2.svg'
import chatimgright3 from '../../../src/pages/images/chatimgright3.svg'
// import nftexpandm from '../../../src/pages/images/nftexpandm.svg'
import { format } from "timeago.js";




const useStyle = makeStyles({
    listitem: {
        display: 'inherit !important',
        padding: '0px !important',
    },

    listitemleft: {
        display: 'inherit !important',
        padding: '10px  20px !important',
        marginTop: '10px !important',
        color: "#fff",
        fontWeight:"bold !important",
        justifyContent: "right",
        backgroundColor: "#9A9A9A",
        fontSize: "12px !important",
        borderRadius: "20px",
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
    },
    listitemright:{
        display: 'inherit !important',
        padding: '5px !important',
        marginTop: '10px !important',
        justifyContent: "left",
    
        

    },
    listitem2: {
        display: 'flex !important',
        padding: '10px !important',
        justifyContent: 'space-between !important',
        backgroundColor: '#F1F1F1',
        borderRadius: '35px',
        transition: '0.5s',
        '&:hover': {
            backgroundColor: '#e9e7e7'
        }
    },
    widthleft: {
        width: '25%'
    },
    widthright: {
        display: 'flex',
        width: '75%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    chatimgleft: {
        backgroundImage: `url(${chatimgleft})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        padding: '6px 15px 6px 30px !important',
        color: '#FFF',
        fontSize: '12px !important',
        fontWeight: 'bold !important'
    },
    chatimgright: {
        //backgroundImage: `url(${chatimgright})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        padding: '10px 30px 10px 20px !important',
        color: '#9A9A9A',
        borderRadius: "20px",
        fontSize: '12px !important',
        fontWeight: 'bold !important',
        
        backgroundColor: "#E1E1E1",
    },
    chatimgright2: {
        backgroundImage: `url(${chatimgright2})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        padding: '10px 30px 10px 31px !important',
        color: '#9A9A9A',
        fontSize: '12px !important',
        fontWeight: 'bold !important'
    },
    chatimgright3: {
        backgroundImage: `url(${chatimgright2})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        padding: '10px 30px 10px 15px !important',
        color: '#9A9A9A',
        fontSize: '12px !important',
        fontWeight: 'bold !important'
    },
    chatimgright4: {
        backgroundImage: `url(${chatimgright3})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        padding: '10px 20px 10px 15px !important',
        color: '#9A9A9A',
        fontSize: '12px !important',
        fontWeight: 'bold !important'
    },

    // chatinpt: {
    //     backgroundColor: '#efefef96',
    //     boxShadow: 'inset 0px 7px 15px -4px #00000024',
    //     padding: '10px !important',
    //     width: '100%',
    //     borderRadius: '30px'
    // },

    msgmainboxright:{
        display: 'flex', justifyContent: 'right', alignItems: 'center'

    },
    msgmainboxleft:{
        display: 'flex', justifyContent: 'left', alignItems: 'center',
        // backgroundColor: "#1877f2",
        color: "white"
    
    },
    timeleft:{
        width: "25%"
    },
    timeright:{
        width: "25%",
        
    }



    // chatlist: {
    //     position: 'fixed',
    //     marginLeft: '1.4rem',
    //     backgroundColor: '#f1f1f1',
    //     borderRadius: '40px',
    //     padding: '10px 15px',

    //     '@media(max-width : 1200px)': {
    //         marginLeft: '0rem',
    //         padding: '10px 10px',
    //         '@media(max-width : 600px)': {
    //             position: 'inherit',
    //             marginLeft: '0rem',
    //             marginTop: '1rem'
    //         }
    //     }
    // },
    // msgscroll: {
    //     height: '57vh',
    //     overflowY: 'scroll',
    //     '@media(max-width : 1200px)': {
    //         height: '60vh',
    //         '@media(max-width : 900px)': {
    //             height: '66.5vh',

    //         }
    //     }
    // }

})


const MessageChat = ({ message, own }) => {
    const classes = useStyle();
    return (
      

        <>  
        <ListItem className={classes.listitemright} >
            <Box className={own?classes.msgmainboxright: classes.msgmainboxleft}>
                <Typography className={own?classes.timeright: classes.timeleft} ml={1} fontSize="11px" fontWeight={700} color="#ADADAD">{message ? format(message?.createdAt) : "time"}
                    {/* <Typography mr={1} ml={1} display="inline-block" component="img" src={doublecheck1}></Typography> */}
                </Typography>
                <Typography className={own?classes.chatimgright: classes.listitemleft}>
                    {message?message?.text: ""}
                </Typography>

            </Box>
        </ListItem>

    
    </>



    )
}
export default MessageChat