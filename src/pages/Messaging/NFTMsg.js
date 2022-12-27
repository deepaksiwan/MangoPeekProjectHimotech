import { Badge, Box, Button, Checkbox, Grid, Typography, } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import arrowright from '../../../src/pages/images/arrowright.svg'
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import messagestore from '../../../src/pages/images/messagestore.svg'
import nftimg from '../../../src/pages/images/nftimg.svg'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ellipsenft from '../../../src/pages/images/ellipsenft.svg'


const Nftdat = [
    {
        id: 1,
        Image: nftimg,
        title: "Lorem Ipsum"
    },
    {
        id: 2,
        Image: nftimg,
        title: "Lorem Ipsum"
    },
    {
        id: 3,
        Image: nftimg,
        title: "Lorem Ipsum"
    },
    {
        id: 4,
        Image: nftimg,
        title: "Lorem Ipsum"
    },
    {
        id: 5,
        Image: nftimg,
        title: "Lorem Ipsum"
    },
    {
        id: 6,
        Image: nftimg,
        title: "Lorem Ipsum"
    },
]


const useStyle = makeStyles({
    buynowbtn: {
        backgroundColor: '#33CC33 !important',
        color: '#fff !important',
        padding: '12px 50px !important',
        borderRadius: '30px !important',
    },
    clearbtn: {
        color: '#FF5F29',
        marginLeft: '15px',
        "& : hover": {
            color: 'FF5F29'
        }
    },
    salebtn: {
        backgroundColor: '#efefef96 !important',
        borderRadius: '30px !important',
        boxShadow: '0px 10px 10px -6px #00000036 !important',
        padding: '7px 20px !important',
        border: '1px solid #FF5F29 !important',
        color: '#7A7A7A !important',
        textTransform: 'none !important',
        marginLeft: '15px !important'
    },
    makeofferbtn: {
        backgroundColor: '#7C7C7C !important',
        color: '#fff !important',
        padding: '12px 50px !important',
        borderRadius: '30px !important',
        marginTop: '15px !important'
    },
    ellipsenft: {
        width: '50px'
    },
    fav: {
        padding: "0 !important"
    },
    viewbtn: {
        color: '#9B9B9B !important',
        textTransform: 'none !important',
        fontSize: '18px !important',
        fontWeight: '700 !important',
        '&:hover': {
            backgroundColor: 'transparent !important'
        }
    },
    maindiv: {
        padding: '40px 0px 80px 0px'
    },
    nftinfobx: {
        backgroundColor: '#efefef96 ',
        padding: '10px',
        borderRadius: '30px',
        boxShadow: '0px 20px 20px -6px #00000036',
    },
    nftinfobx2: {
        backgroundColor: '#efefef96 ',
        padding: '10px',
        borderRadius: '30px',
        boxShadow: '0px 4px 22px -3px #00000036',
    },
    nftrbox: {
        padding: '30px',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '30px',
        backgroundColor: '#efefef96',
    },
    owned: {
        display: 'flex',
        padding: '20px 0px',

    },
    btnmainwrp: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '30px !important',
        boxShadow: '0px 20px 20px -6px #00000036',
        borderRadius: '30px',
        backgroundColor: '#efefef96',
        border: '1px solid #FF5F29',
        marginTop: '32px !important',

    },
    flex: {
        display: 'flex',
        width: '20% !important'
    },
    flex7: {
        display: 'flex',
        width: '40% !important'
    },
    flex6: {
        display: 'flex',
        width: '90% !important'
    },
    flex5: {
        display: 'flex',
        marginTop: '30px',
        alignItems: 'center'
    },
    flex2: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    flex3: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px'
    },
    divider: {

        width: '100%',
        alignSelf: 'center'
    },
    propertiesbox: {
        border: '1px solid #FFCC00',
        boxShadow: '0px 10px 10px -6px #00000036',
        padding: '15px',
        borderRadius: '50px',
        backgroundColor: '#F2F2F2',
        marginTop: '8px !important'
    },
    pboxwrp: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    rbx: {
        textAlign: 'center'
    },

    dis_sidebox: {
        padding: '30px !important',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '40px',
        backgroundColor: '#efefef96',
    },
    dis_sidebox2: {
        padding: '30px !important',
        borderRadius: '40px',
        backgroundColor: 'transparent',
    },


    secsecond: {
        backgroundColor: '#F6F6F6 !important',
        borderRadius: '40px',
        marginTop: '40px !important',
        boxShadow: '0px 20px 20px -6px #00000036'
    },
    secsecond2: {
        backgroundColor: 'transparent !important',
        borderRadius: '40px',
        marginTop: '40px !important',
        boxShadow: 'inset 0px 0px 60px -2px #00000036',
    },
    noactive: {
        textAlign: 'center',
        paddingTop: '185px'
    }

})

const label2 = { inputProps: { "aria-label": "Checkbox demo" } };
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const NFTMsg = () => {
    const classes = useStyle();

    return (
        <>
            <Box>

                <Grid container spacing={2}>
                    {Nftdat.map((e, id) => {
                        const { title, Image } = e
                        return (

                            <Grid item lg={6} md={12} xs={12} key={id}>
                                <Box className={classes.nftinfobx2}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Box sx={{ display: 'flex', margin: '5px 0px 15px 0px' }}>
                                            <Box><Typography component="img" className={classes.ellipsenft} src={ellipsenft}></Typography></Box>
                                            <Box sx={{ alignSelf: 'center', ml: '10px' }}>
                                                <Typography variant="h6" className={classes.hding6}>{title}</Typography>
                                                <Typography className={classes.para}>@loremipsum</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ marginLeft: '10px' }}>
                                            <Checkbox
                                                {...label}
                                                icon={<BookmarkBorderIcon sx={{ color: '#33CC33' }} />}
                                                checkedIcon={<BookmarkIcon sx={{ color: '#33CC33' }} />}
                                            />
                                        </Box>
                                    </Box>
                                    <Typography component="img" src={Image} width="100%"></Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            padding: "10px"
                                        }}
                                    >
                                        <Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }} >
                                                <Box sx={{ display: 'flex' }}>
                                                    <Badge color="primary">
                                                        <Checkbox className={classes.fav}
                                                            {...label2}
                                                            icon={<FavoriteBorder sx={{ color: "#FF5F29" }} />}
                                                            checkedIcon={
                                                                <Favorite
                                                                    indeterminateIcon
                                                                    sx={{ color: "#FF5F29" }}
                                                                />
                                                            }
                                                        />
                                                    </Badge>
                                                    <Typography style={{ color: '#606060' }}>1.2k</Typography>
                                                </Box>

                                                <Box sx={{ display: 'flex', marginLeft: '10px' }}>
                                                    <Box sx={{ alignSelf: 'center' }}>
                                                        <img style={{ margin: '0px', borderRadius: '0px' }} src={messagestore} alt=""></img>
                                                    </Box>
                                                    <Typography style={{ color: '#606060' }}>3k</Typography>
                                                </Box>

                                            </Box>
                                        </Box>
                                        <Box sx={{ textAlign: "center" }}>
                                            <Button className={classes.viewbtn} endIcon={<Box sx={{ ml: '10px' }} component="img" src={arrowright} />}>
                                                More
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        )
                    })}

                </Grid>
            </Box>

        </>
    )
}

export default NFTMsg