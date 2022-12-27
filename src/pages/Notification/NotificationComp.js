import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import notifiarrow from '../../../src/pages/images/notifiarrow.svg'
import notifimsg from '../../../src/pages/images/notifimsg.svg'
import notifitelegram from '../../../src/pages/images/notifitelegram.svg'
import notifiuser from '../../../src/pages/images/notifiuser.svg'
import notifiadd from '../../../src/pages/images/notifiadd.svg'
import notifiwish from '../../../src/pages/images/notifiwish.svg'


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
    },

    listitem1: {
        padding: '10px !important',
        justifyContent: 'space-between !important',
    },
    listitem2: {
        display: 'flex !important',
        padding: '8px 10px !important',
        justifyContent: 'space-between !important',
        backgroundColor: '#F1F1F1',
        marginTop: '8px !important',
        borderRadius: '24px',
        alignItems: 'center',
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
    },

    widthleft: {
        width: '12%'
    },

    widthcenter: {
        display: 'flex',
        width: '88%',
        justifyContent: 'space-between'
    },

    widthright: {
        alignSelf: 'center',
    }

})


const NotificationComp = () => {
    const classes = useStyle();



    return (
        <>
            <Box className={classes.messagemain}>
                <List>
                    <ListItem className={classes.listitem}>
                        <Typography sx={{ textAlign: 'center' }} color="#949494" variant="h6" fontWeight={500}>Notifications</Typography>
                    </ListItem>

                    <ListItem className={classes.listitem}>
                        <Link to="#" className={classes.listitem}>
                            <Box className={classes.listitem2}>
                                <Box className={classes.widthleft}>
                                    <Typography component="img" src={notifimsg}></Typography>
                                </Box>
                                <Box className={classes.widthcenter}>
                                    <Box>
                                        <Typography variant="h6" color="#ffcc00">@mac
                                            <Typography color="#606060" ml={1} fontWeight={700} component="span">commented</Typography>
                                        </Typography>
                                        <Typography className={classes.para2} fontWeight={700} color="#606060">on your new post</Typography>
                                    </Box>
                                    <Box className={classes.widthright}>
                                        <Typography display="inline-block" component="img" src={notifiarrow}></Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Link>
                    </ListItem>

                    <ListItem className={classes.listitem}>
                        <Link to="#" className={classes.listitem}>
                            <Box className={classes.listitem2}>
                                <Box className={classes.widthleft}>
                                    <Typography component="img" src={notifitelegram}></Typography>
                                </Box>
                                <Box className={classes.widthcenter}>
                                    <Box>
                                        <Typography variant="h6" color="#FF5F29">23
                                            <Typography color="#FF5F29" ml={1} fontWeight={700} component="span">New Messages</Typography>
                                        </Typography>
                                        <Typography className={classes.para2} fontWeight={700} color="#606060">checkout now!</Typography>
                                    </Box>
                                    <Box className={classes.widthright}>
                                        <Typography display="inline-block" component="img" src={notifiarrow}></Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Link>
                    </ListItem>

                    <ListItem className={classes.listitem}>
                        <Box sx={{textAlign : 'center', marginTop : '10px'}}>
                        <Typography fontSize={12} color="#C6C6C6">a day ago</Typography>
                         <Divider sx={{m:"10px 0px"}}/>
                        </Box>
                    </ListItem>

                    <ListItem className={classes.listitem}>
                        <Link to="#" className={classes.listitem}>
                            <Box className={classes.listitem2}>
                                <Box className={classes.widthleft}>
                                    <Typography component="img" src={notifiuser}></Typography>
                                </Box>
                                <Box className={classes.widthcenter}>
                                    <Box>
                                        <Typography variant="h6" color="#FF5F29">23+
                                            <Typography color="#606060" ml={1} fontWeight={700} component="span">new followers</Typography>
                                        </Typography>
                                    </Box>
                                    <Box className={classes.widthright}>
                                        <Typography display="inline-block" component="img" src={notifiarrow}></Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Link>
                    </ListItem>

                    <ListItem className={classes.listitem}>
                        <Link to="#" className={classes.listitem}>
                            <Box className={classes.listitem2}>
                                <Box className={classes.widthleft}>
                                    <Typography component="img" src={notifiuser}></Typography>
                                </Box>
                                <Box className={classes.widthcenter}>
                                    <Box>
                                        <Typography variant="h6" color="#FF5F29">@mac
                                            <Typography color="#606060" ml={1} fontWeight={700} component="span">following you</Typography>
                                        </Typography>
                                    </Box>
                                    <Box className={classes.widthright}>
                                        <Typography display="inline-block" component="img" src={notifiarrow}></Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Link>
                    </ListItem>

                    <ListItem className={classes.listitem}>
                        <Box sx={{textAlign : 'center', marginTop : '5px'}}>
                        <Typography fontSize={12} color="#C6C6C6">15 min ago</Typography>
                        </Box>
                    </ListItem>

                    <ListItem className={classes.listitem}>
                        <Link to="#" className={classes.listitem}>
                            <Box className={classes.listitem2}>
                                <Box className={classes.widthleft}>
                                    <Typography component="img" src={notifiwish}></Typography>
                                </Box>
                                <Box className={classes.widthcenter}>
                                    <Box>
                                        <Typography variant="h6" color="#FF5F29">72
                                            <Typography color="#606060" ml={1} fontWeight={700} component="span">likes for new post</Typography>
                                        </Typography>
                                    </Box>
                                    <Box className={classes.widthright}>
                                        <Typography display="inline-block" component="img" src={notifiarrow}></Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Link>
                    </ListItem>

                    <ListItem className={classes.listitem}>
                        <Box sx={{textAlign : 'center', marginTop : '5px'}}>
                        <Typography fontSize={12} color="#C6C6C6">30 min ago</Typography>
                        </Box>
                    </ListItem>

                    <ListItem className={classes.listitem}>
                        <Link to="#" className={classes.listitem}>
                            <Box className={classes.listitem2}>
                                <Box className={classes.widthleft}>
                                    <Typography component="img" src={notifiadd}></Typography>
                                </Box>
                                <Box className={classes.widthcenter}>
                                    <Box>
                                        <Typography variant="h6" color="#33CC66">Added new Nfts</Typography>
                                    </Box>
                                    <Box className={classes.widthright}>
                                        <Typography display="inline-block" component="img" src={notifiarrow}></Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Link>
                    </ListItem>
                </List>
            </Box>
        </>
    )
}

export default NotificationComp