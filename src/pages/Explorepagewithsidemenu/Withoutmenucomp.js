import { Badge, Box, Button, Container, List, ListItem, Typography, Tooltip } from "@mui/material";
import React,{useContext} from "react";
import Footer2 from "../../components/Footer/Footer2";
import Header2 from "../../components/Header/Header2";
import { makeStyles } from "@mui/styles";
import ExploreNFT from "../../components/ExploreNFT/ExploreNFT";
import { Link } from "react-router-dom";
import message from '../../../src/pages/images/message.svg'
import notification from '../../../src/pages/images/notification.svg'
import add from '../../../src/pages/images/add.svg'
import collectionimgs from '../../../src/pages/images/collectionimgs.svg'
import saveimg from '../../../src/pages/images/saveimg.svg'
import logoutimg from '../../../src/pages/images/logoutimg.svg'
import sidemenuarrow from '../../../src/pages/images/sidemenuarrow.svg'
import { UserContext } from "../../context/User/UserContext";
import { actionTypes } from "../../context/User/UserReducer";



const useStyle = makeStyles({
    maindiv: {
        padding: '30px 0px 80px 0px',
        display: 'flex'
    },
    sidemenu: {
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '50px',
        backgroundColor: '#efefef',
        padding: '10px 10px 7px 10px !important',
        display: 'inline-block',

    },
    listpadding: {
        padding: '10px 0px !important'
    },
    badge: {
        marginTop: '10px',
    },
    roundbutn2: {
        marginTop: '-10px !important',
        padding: '10px',
        width: '40px',
        height: '40px',
        backgroundImage: 'linear-gradient(180deg, #ebeaea, #efefef3b)',
        borderRadius: '30px',
        transition: '0.5s',
        '&:hover': {
            // transform: 'translateY(-6px)'
        }
        // boxShadow: 'inset 0 0 10px #00000029',
    },
    roundbutn: {
        backgroundImage: 'linear-gradient(180deg, #ebeaea, #efefef3b)',
        padding: '10px',
        width: '40px',
        height: '40px',
        borderRadius: '30px',
        transition: '0.5s',
        '&:hover': {
            // transform: 'translateY(-6px)'
        }
        // boxShadow: 'inset 0 0 10px #00000029',
    },

    menuposition: {
        position: 'fixed',
        top: 0,
        marginTop: '9.10rem',

    },

    explorenft: {
        marginLeft: '5rem',
        marginTop: '1rem',
        '@media(max-width : 600px)': {
            margin: "0px !important",
 
         }
        
        

    }
})


const Withoutmenucomp = ({ messagecount }) => {
    const classes = useStyle();
    const [{ token, userData }, dispatch] = useContext(UserContext);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleOpen1 = () => {
        setOpen1(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    const handleOpen2 = () => {
        setOpen2(true);
    };

    const handleClose3 = () => {
        setOpen3(false);
    };

    const handleOpen3 = () => {
        setOpen3(true);
    };
    const handleClose4 = () => {
        setOpen4(false);
    };

    const handleOpen4 = () => {
        setOpen4(true);
    };

    const handleClose5 = () => {
        setOpen5(false);
    };

    const handleOpen5 = () => {
        setOpen5(true);
    };

    const logout = (e) => {
        e.preventDefault();
        dispatch({ type: actionTypes.SET_TOKEN, value: null });
        localStorage.clear();
        
    };



    return (
        <>
            <List className={classes.sidemenu}>
                <ListItem className={classes.listpadding}>
                    <Link className={classes.roundbutn} to="/explorepage_with_side_menu">
                        <Typography width={20} component="img" src={sidemenuarrow}></Typography>
                    </Link>
                </ListItem>

                <ListItem className={classes.listpadding}>
                    <Tooltip className={classes.tooltps}
                        open={open1} onClose={handleClose1} onOpen={handleOpen1} title="Messaging" placement="top-start">
                        {/* <Badge className={classes.badge} badgeContent={messagecount} sx={{
                        "& .MuiBadge-badge": {
                            backgroundColor: '#FFCC00', color: '#fff',
                            marginRight: '7px',
                            marginTop: '-5px',
                        },
                    }}>
                        <Link className={classes.roundbutn2} to="/messaging">
                            <Typography width={20} component="img" src={message}></Typography>
                        </Link>
                    </Badge> */}
                        <Link className={classes.roundbutn2} to="/messaging">
                            <Typography width={20} component="img" src={message}></Typography>
                        </Link>
                    </Tooltip>
                </ListItem>

                {/* <ListItem className={classes.listpadding}>
                    <Link className={classes.roundbutn2} to="/notification">
                            <Typography width={20} component="img" src={notification}></Typography>
                        </Link>
                </ListItem> */}

                <ListItem className={classes.listpadding}>
                <Tooltip className={classes.tooltps}
                        open={open4} onClose={handleClose4} onOpen={handleOpen4} title="Create Post" placement="top-start">
                    <Link className={classes.roundbutn} to="">
                        <Typography width={20} component="img" src={add}></Typography>
                    </Link>
                    </Tooltip>
                </ListItem>

                <ListItem className={classes.listpadding}>
                <Tooltip className={classes.tooltps}
                        open={open5} onClose={handleClose5} onOpen={handleOpen5} title="My Collection" placement="top-start">
                    <Link className={classes.roundbutn} to="#">
                        <Typography width={20} component="img" src={collectionimgs}></Typography>
                    </Link>
                    </Tooltip>
                </ListItem>

                <ListItem className={classes.listpadding}>
                <Tooltip className={classes.tooltps}
                        open={open3} onClose={handleClose3} onOpen={handleOpen3} title="Save" placement="top-start">
                    <Link className={classes.roundbutn} to="#">
                        <Typography width={20} component="img" src={saveimg}></Typography>
                    </Link>
                    </Tooltip>
                </ListItem>

                <ListItem className={classes.listpadding} onClick={logout}>
                    <Tooltip className={classes.tooltps}
                        open={open2} onClose={handleClose2} onOpen={handleOpen2} title="Logout" placement="top-start">
                    <Link className={classes.roundbutn} >
                        <Typography width={20} component="img" src={logoutimg}></Typography>
                    </Link>
                    </Tooltip>
                </ListItem>

            </List>

        </>
    )
}

export default Withoutmenucomp