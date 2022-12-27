import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, IconButton, Input, InputAdornment, List, ListItem, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import search from '../../../src/pages/images/search.svg'
import { Link } from "react-router-dom";
import sidemenuarrow from '../../../src/pages/images/sidemenuarrow.svg'
import messageimg1 from '../../../src/pages/images/messageimg1.svg'
import messageimg2 from '../../../src/pages/images/messageimg2.svg'
import messageimg3 from '../../../src/pages/images/messageimg3.svg'
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import doublecheck1 from '../../../src/pages/images/doublecheck1.svg'
import doublecheck from '../../../src/pages/images/doublecheck.svg'



const useStyle = makeStyles({

    messagemain: {
        width: '370px',
        minHeight : '83vh !important',
        display: 'inline-block',
        padding: '10px 20px !important',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '50px',
        backgroundColor: '#efefef96',
        top: 0,
        position: 'fixed',
        marginTop: '5.8rem',
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
        display : 'inherit !important',
        padding : '0px !important',
    },

    listitem1: {
        padding: '10px !important',
        justifyContent: 'space-between !important',
    },
    listitem2: {
        display : 'flex !important',
        padding: '10px !important',
        justifyContent: 'space-between !important',
        backgroundColor : '#F1F1F1',
        marginTop : '10px !important',
        borderRadius : '35px',
        transition : '0.5s',
        '&:hover' : {
            backgroundColor : '#e9e7e7'
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
        justifyContent : 'space-between'
    }

})


const MessagingComp = () => {
    const classes = useStyle();



    return (
        <>
            <Box className={classes.messagemain}>
                <List>
                    <ListItem className={classes.listitem}>
                        <Typography color="#949494" variant="h5" fontWeight={700}>Messages</Typography>
                    </ListItem>

                    <ListItem className={classes.listitem1}>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-haspopup="true"
                        >
                            <MoreVertIcon />
                        </IconButton>
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
                                <Typography component="img" src={sidemenuarrow}></Typography>
                            </Link>

                        </Box>
                    </ListItem>

                    <ListItem className={classes.listitem}>
                        <Link className={classes.listitem2} to="/messagingExpend">
                        <Box className={classes.widthleft}>
                            <Typography component="img" src={messageimg1}></Typography>
                        </Box>
                        <Box className={classes.widthright}>
                            <Box>
                                <Typography variant="h6" color="#949494">Lorem Ipsum</Typography>
                                <Typography className={classes.para2} color="#949494">Hi, are you up?</Typography>
                            </Box>
                            <Box textAlign="right">
                                <Typography display="inline-block" component="img" src={doublecheck1}></Typography>
                                <Typography className={classes.para}>11:45 PM</Typography>
                            </Box>
                        </Box>
                        </Link>
                    </ListItem>

                    <Link to="/messagingExpend" className={classes.listitem}>
                        <Box className={classes.listitem2}>
                        <Box className={classes.widthleft}>
                            <Typography component="img" src={messageimg2}></Typography>
                        </Box>
                        <Box className={classes.widthright}>
                        <Box>
                            <Typography variant="h6" color="#949494">Lorem Ipsum</Typography>
                            <Typography className={classes.para2} color="#949494">Checkout this nft</Typography>
                        </Box>
                        <Box textAlign="right">
                            <Typography display="inline-block" component="img" src={doublecheck}></Typography>
                            <Typography className={classes.para}>11:45 PM</Typography>
                        </Box>
                        </Box>
                        </Box>
                    </Link>

                    <Link to="/messagingExpend" className={classes.listitem}>
                       <Box className={classes.listitem2}>
                       <Box className={classes.widthleft}>
                            <Typography component="img" src={messageimg3}></Typography>
                        </Box>
                        <Box className={classes.widthright}>
                        <Box>
                            <Typography variant="h6" color="#949494">Lorem Ipsum</Typography>
                            <Typography className={classes.para2} color="#949494">Bro, have you found anythi....</Typography>
                        </Box>
                        <Box textAlign="right">
                            <Typography display="inline-block" component="img" src={doublecheck}></Typography>
                            <Typography className={classes.para}>11:45 PM</Typography>
                        </Box>
                        </Box>
                       </Box>
                    </Link>


                </List>
            </Box>
        </>
    )
}

export default MessagingComp