import { Badge, Box, Button, Checkbox, Grid, List, ListItem, Typography, } from "@mui/material";
import React from "react";

import { makeStyles } from "@mui/styles";

import walletimg from '../../../src/pages/images/walletimg.svg'
import messageimg1 from '../../../src/pages/images/messageimg1.svg'
import arrowright from '../../../src/pages/images/arrowright.svg'
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import messagestore from '../../../src/pages/images/messagestore.svg'
import exp1 from '../../../src/pages/images/exp1.svg'
import exp2 from '../../../src/pages/images/exp2.svg'
import exp3 from '../../../src/pages/images/exp3.svg'
import exp4 from '../../../src/pages/images/exp4.svg'
import msgmore from '../../../src/pages/images/msgmore.svg'

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
        padding: '2px',
        borderRadius: '12px',
        width: '125px',
        marginTop: '5px !important',
        boxShadow: '0px 4px 22px -3px #00000036',
    },
    fav: {
        padding: "0 !important",
    },
    viewbtn: {
        color: '#9B9B9B !important',
        textTransform: 'none !important',
        fontWeight: '700 !important',
        fontSize: '8px !important',
        padding: '0px !important',
        justifyContent: 'center !important',
        '&:hover': {
            backgroundColor: 'transparent !important'
        }
    },
})


const label2 = { inputProps: { "aria-label": "Checkbox demo" } };



const expnft = [
    {
        id: 1,
        Image: exp1,
    },

    {
        id: 2,
        Image: exp2,
    },
    {
        id: 3,
        Image: exp3,
    },
    {
        id: 4,
        Image: exp4,
    }
]




const NFTMsgExp = () => {

    const classes = useStyle();



    return (
        <>

            <Box className={classes.menuposition}>
                <Box className={classes.sidemenu}>
                    <List>
                        <ListItem className={classes.listpadding}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Box className={classes.macmango}>
                                    <Typography display="inline-block" component="img" src={messageimg1} width="100%"></Typography>
                                </Box>
                                <Typography color="#808080" fontWeight={700} >Lorem Ipsum</Typography>
                                <Typography color="#A9A9A9" fontSize="13px">Last seen 15 min ago</Typography>
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

                    </List>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {expnft.map((e, id) => {
                            const { Image, } = e
                            return (
                                <>

                                    <Box className={classes.nftinfobx2} key={id}>

                                        <Typography component="img" src={Image} width="100%"></Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",

                                            }}
                                        >
                                            <Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }} >
                                                    <Box sx={{ display: 'flex' }}>
                                                        <Badge color="primary">
                                                            <Checkbox className={classes.fav}

                                                                size="small"
                                                                {...label2}
                                                                icon={<FavoriteBorder sx={{ color: "#FF5F29" }} />}
                                                                checkedIcon={
                                                                    <Favorite
                                                                        indeterminateIcon
                                                                        sx={{ color: "#FF5F29", }}
                                                                    />
                                                                }
                                                            />
                                                        </Badge>
                                                        <Typography style={{ color: '#606060', fontSize: '8px' }}>1.2k</Typography>
                                                    </Box>

                                                    <Box sx={{ display: 'flex', marginLeft: '10px' }}>
                                                        <Box sx={{ alignSelf: 'center' }}>
                                                            <img style={{ margin: '0px', borderRadius: '0px' }} src={messagestore} alt=""></img>
                                                        </Box>
                                                        <Typography style={{ color: '#606060', fontSize: '10px' }}>3k</Typography>
                                                    </Box>

                                                </Box>
                                            </Box>
                                            <Box sx={{ textAlign: "center" }}>
                                                <Button className={classes.viewbtn} endIcon={<Box component="img" src={msgmore} />}>
                                                    More
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>

                                </>
                            )
                        })
                        }
                    </Box>

                </Box>




            </Box>



        </>
    )
}

export default NFTMsgExp