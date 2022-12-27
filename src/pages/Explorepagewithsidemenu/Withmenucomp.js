import { Badge, Box,  Divider, List, ListItem, Typography, } from "@mui/material";
import React from "react";
 
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import message from '../../../src/pages/images/message.svg'
import notification from '../../../src/pages/images/notification.svg'
import add from '../../../src/pages/images/add.svg'
import collectionimgs from '../../../src/pages/images/collectionimgs.svg'
import saveimg from '../../../src/pages/images/saveimg.svg'
import logoutimg from '../../../src/pages/images/logoutimg.svg'
import walletimg from '../../../src/pages/images/walletimg.svg'
import macmango from '../../../src/pages/images/macmango.svg'
import menuarrow from '../../../src/pages/images/menuarrow.svg'

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
        width: '260px'
    },
    listpadding: {
        padding: '5px 0px !important'
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
        position: 'fixed',
        top: 0,
        marginTop: '5.8rem'
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
        position: 'fixed',
        top: '20rem',
        left: '25.3rem'
    }

})


const Withmenucomp = () => {

    const classes = useStyle();



    return (
        <>

            <Box className={classes.menuposition}>
                <List className={classes.sidemenu}>
                    <ListItem className={classes.listpadding}>
                        <Box sx={{ marginLeft: '5rem' }}>
                            <Box className={classes.macmango}>
                                <Typography component="img" src={macmango} width="100%"></Typography>
                            </Box>
                            <Typography color="#808080" fontWeight={700} >Mac iam</Typography>
                        </Box>
                    </ListItem>

                    <ListItem className={classes.listpadding}>
                        <Box className={classes.namewithadd}>
                            <Box sx={{ width: '20px' }}>
                                <Typography component="img" src={walletimg} width="100%"></Typography>
                            </Box>
                            <Typography className={classes.address} ml={1} fontWeight={500} color="#808080">0xdsdgs5545545asfsdgg</Typography>
                        </Box>
                    </ListItem>

                    <ListItem className={classes.followers}>

                        <Box className={classes.follower_align}>
                            <Typography className={classes.rank} ml={1} fontWeight={700} color="#808080">237</Typography>
                            <Typography className={classes.rank2} ml={1} fontWeight={500} color="#808080">NFTs</Typography>
                        </Box>
                        <Box className={classes.follower_align}>
                            <Typography className={classes.rank} ml={1} fontWeight={700} color="#808080">8.1K</Typography>
                            <Typography className={classes.rank2} ml={1} fontWeight={500} color="#808080">Followers</Typography>
                        </Box>
                        <Box className={classes.follower_align}>
                            <Typography className={classes.rank} ml={1} fontWeight={700} color="#808080">8.1K</Typography>
                            <Typography className={classes.rank2} ml={1} fontWeight={500} color="#808080">Following</Typography>
                        </Box>

                    </ListItem>

                    <Divider sx={{ margin: '10px 0px' }} />


                    <ListItem className={classes.listpadding}>
                        <Badge className={classes.badge} badgeContent={8} sx={{
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
                        </Badge>
                    </ListItem>


                    <ListItem className={classes.listpadding}>
                        <Badge className={classes.badge} badgeContent={3} sx={{
                            "& .MuiBadge-badge": {
                                backgroundColor: '#ff5f29', color: '#fff',
                                marginRight: '7px',
                                marginTop: '-5px',
                            },
                        }}>
                            <Link className={classes.roundbutn2} to="/notification">
                                <Typography width={20} component="img" src={notification}></Typography>
                                <Typography className={classes.mrleft}>Notifications</Typography>
                            </Link>
                        </Badge>
                    </ListItem>

                    <ListItem className={classes.listpadding}>
                        <Link className={classes.textbutn} to="#">
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

                    <ListItem className={classes.listpadding}>
                        <Link className={classes.textbutn} to="#">
                            <Box className={classes.imgicon}>
                                <Typography width={20} component="img" src={logoutimg}></Typography>
                            </Box>
                            Logout
                        </Link>
                    </ListItem>

                </List>

            </Box>
            <Link className={classes.menuarrowbtn} to="/explorepage_without_side_menu">
                <Typography component="img" src={menuarrow}></Typography>
            </Link>


        </>
    )
}

export default Withmenucomp