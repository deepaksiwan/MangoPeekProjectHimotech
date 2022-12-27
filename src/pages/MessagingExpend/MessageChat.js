import { Box, IconButton, Input, List, ListItem, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import messageimg1 from '../../../src/pages/images/messageimg1.svg'
import doublecheck1 from '../../../src/pages/images/doublecheck1.svg'
import doublecheck from '../../../src/pages/images/doublecheck.svg'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import chatimgleft from '../../../src/pages/images/chatimgleft.svg'
import chatimgright from '../../../src/pages/images/chatimgright.svg'
import chatimgright2 from '../../../src/pages/images/chatimgright2.svg'
import chatimgright3 from '../../../src/pages/images/chatimgright3.svg'
import nftexpandm from '../../../src/pages/images/nftexpandm.svg'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';


const useStyle = makeStyles({
    listitem: {
        display: 'inherit !important',
        padding: '0px !important',
    },

    listitem1: {
        display: 'inherit !important',
        padding: '0px !important',
        marginTop: '10px !important'
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
        fontWeight : 'bold !important'
    },
    chatimgright: {
        backgroundImage: `url(${chatimgright})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        padding: '10px 30px 10px 20px !important',
        color: '#9A9A9A',
        fontSize: '12px !important',
        fontWeight : 'bold !important'
    },
    chatimgright2: {
        backgroundImage: `url(${chatimgright2})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        padding: '10px 30px 10px 31px !important',
        color: '#9A9A9A',
        fontSize: '12px !important',
        fontWeight : 'bold !important'
    },
    chatimgright3: {
        backgroundImage: `url(${chatimgright2})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        padding: '10px 30px 10px 15px !important',
        color: '#9A9A9A',
        fontSize: '12px !important',
        fontWeight : 'bold !important'
    },
    chatimgright4: {
        backgroundImage: `url(${chatimgright3})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        padding: '10px 20px 10px 15px !important',
        color: '#9A9A9A',
        fontSize: '12px !important',
        fontWeight : 'bold !important'
    },

    chatinpt: {
        backgroundColor: '#efefef96',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        padding: '10px !important',
        width: '100%',
        borderRadius: '30px'
    },

    chatlist: {
        position: 'fixed',
        marginLeft: '2rem'
    }

})


const MessageChat = () => {
    const classes = useStyle();
    return (
        <>
            <Box className={classes.chatlist}>

                <List>
                    <ListItem className={classes.listitem}>
                        <Link className={classes.listitem2} to="#">
                            <Box className={classes.widthleft}>
                                <Typography component="img" src={messageimg1}></Typography>
                            </Box>
                            <Box className={classes.widthright}>
                                <Box>
                                    <Typography variant="h6" color="#949494">Lorem Ipsum</Typography>
                                    <Typography className={classes.para2} color="#949494">Hi, are you up?</Typography>
                                </Box>
                                <Box textAlign="right">
                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-haspopup="true"
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Link>
                    </ListItem>

                    <ListItem className={classes.listitem1}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography className={classes.chatimgleft}>
                                Hey the one you have send me<br />
                                yesterday is rocket
                            </Typography>
                            <Typography ml={1} fontSize="11px" fontWeight={700} color="#ADADAD">11:45 PM</Typography>
                        </Box>
                    </ListItem>

                    <ListItem className={classes.listitem1}>
                        <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                            <Typography ml={1} fontSize="11px" fontWeight={700} color="#ADADAD">11:45 PM
                                <Typography mr={1} ml={1} display="inline-block" component="img" src={doublecheck1}></Typography>
                            </Typography>
                            <Typography className={classes.chatimgright}>
                                Okay thanks
                            </Typography>

                        </Box>
                    </ListItem>

                    <ListItem className={classes.listitem1}>
                        <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                            <Typography ml={1} fontSize="11px" fontWeight={700} color="#ADADAD">11:50 PM
                                <Typography mr={1} ml={1} display="inline-block" component="img" src={doublecheck1}></Typography>
                            </Typography>
                            <Typography className={classes.chatimgright4}>
                                Also, if you found anything special<br />
                                please send me too
                            </Typography>

                        </Box>
                    </ListItem>

                    <ListItem className={classes.listitem1}>
                        <Box sx={{ display: 'flex', justifyContent: 'left', }}>
                            <Typography component="img" src={nftexpandm}></Typography>

                        </Box>
                    </ListItem>

                    <ListItem className={classes.listitem1}>
                        <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                            <Typography ml={1} fontSize="11px" fontWeight={700} color="#ADADAD">11:50 PM
                                <Typography mr={1} ml={1} display="inline-block" component="img" src={doublecheck1}></Typography>
                            </Typography>
                            <Typography className={classes.chatimgright3}>
                                Nice one! considering this too
                            </Typography>

                        </Box>
                    </ListItem>

                    <ListItem className={classes.listitem1}>
                        <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                            <Input
                                className={classes.chatinpt}
                                id="outlined-basic"
                                placeholder="Nice one! considering this too"
                                variant="contained"
                                disableUnderline
                            />
                            <IconButton
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
                            </IconButton>
                        </Box>
                    </ListItem>
                </List>
            </Box>
        </>

    )
}


export default MessageChat