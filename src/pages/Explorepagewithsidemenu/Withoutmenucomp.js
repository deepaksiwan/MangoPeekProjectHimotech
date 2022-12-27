import { Badge, Box, Button, Container, List, ListItem, Typography, } from "@mui/material";
import React from "react";
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



const useStyle = makeStyles({
    maindiv: {
        padding: '30px 0px 80px 0px',
        display: 'flex'
    },
    sidemenu: {
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '50px',
        backgroundColor: '#efefef96',
        padding: '10px 10px 7px 10px !important',
        display: 'inline-block'
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
        marginTop: '9.10rem'
    },

    explorenft: {
        marginLeft: '5rem',
        marginTop: '1rem'
    }
})


const Withoutmenucomp = () => {
    const classes = useStyle();



    return (
        <>

            <List className={classes.sidemenu}>

                <ListItem className={classes.listpadding}>
                    <Link className={classes.roundbutn} to="/explorepage_with_side_menu">
                        <Typography width={20} component="img" src={sidemenuarrow}></Typography>
                    </Link>
                </ListItem>

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
                        </Link>
                    </Badge>
                </ListItem>

                <ListItem className={classes.listpadding}>
                    <Link className={classes.roundbutn} to="#">
                        <Typography width={20} component="img" src={add}></Typography>
                    </Link>
                </ListItem>

                <ListItem className={classes.listpadding}>
                    <Link className={classes.roundbutn} to="#">
                        <Typography width={20} component="img" src={collectionimgs}></Typography>
                    </Link>
                </ListItem>

                <ListItem className={classes.listpadding}>
                    <Link className={classes.roundbutn} to="#">
                        <Typography width={20} component="img" src={saveimg}></Typography>
                    </Link>
                </ListItem>

                <ListItem className={classes.listpadding}>
                    <Link className={classes.roundbutn} to="#">
                        <Typography width={20} component="img" src={logoutimg}></Typography>
                    </Link>
                </ListItem>

            </List>

        </>
    )
}

export default Withoutmenucomp