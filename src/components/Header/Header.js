import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import { InputAdornment, Input, IconButton, Dialog, Tooltip, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { List, ListItem, } from "@mui/material";
import { UserContext } from "../../context/User/UserContext";
import { makeStyles } from "@mui/styles";
import logo from '../../../src/pages/images/logo.gif'
import logocont from '../../../src/pages/images/logocont.svg'
import user from '../../../src/pages/images/user.svg'
import setting from '../../../src/pages/images/setting.svg'
import add from '../../../src/pages/images/add.svg'
import Slide from '@mui/material/Slide';
import Badge from '@mui/material/Badge';
import notification from '../../../src/pages/images/notification.svg'
import message from '../../../src/pages/images/message.svg'
import SearchIcon from '@mui/icons-material/Search';
import search from '../../../src/pages/images/search.svg'
import { actionTypes } from "../../context/User/UserReducer";
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from '@material-ui/core';
import { display } from "@mui/system";







const useStyle = makeStyles((theme) => ({
  ghjk: {
    color: "#000",
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px",
    },
  },
  searchinpt: {
    backgroundImage: 'linear-gradient(180deg, #ebeaea, #efefef3b) !important',
    borderRadius: '30px',
    padding: '10px',
    width: '180px !important',
    borderColor: 'transparent',
    display: 'flex'

  },
  logo: {
    width: '70px',
  },

  logocont: {
    width: '90px',
  },


  logomob: {
    width: '70px',
    '@media(max-width : 900px)': {
      width: '40px',
    }
  },

  logocontmob: {
    width: '90px',
    '@media(max-width : 900px)': {
      width: '60px',
    }
  },




  roundbutn: {
    backgroundImage: 'linear-gradient(180deg, #ebeaea, #efefef3b)',
    padding: '14px',
    borderRadius: '30px',
    width: '50px',
    height: '50px',
    transition: '0.5s',
    '&:hover': {
      transform: 'translateY(-6px)'
    }
    // boxShadow: 'inset 0 0 10px #00000029',
  },
  roundbutn2: {
    marginTop: '-10px !important',
    backgroundImage: 'linear-gradient(180deg, #ebeaea, #efefef3b)',
    padding: '14px',
    width: '50px',
    height: '50px',
    borderRadius: '30px',
    transition: '0.5s',
    '&:hover': {
      transform: 'translateY(-6px)'
    }
    // boxShadow: 'inset 0 0 10px #00000029',
  },
  textbutn: {
    backgroundImage: 'linear-gradient(180deg, #ebeaea, #efefef3b)',
    padding: '14px 30px',
    color: '#9B9B9B',
    fontWeight: '700 !important',
    borderRadius: '30px',
    transition: '0.5s',
    '&:hover': {
      transform: 'translateY(-6px)',
      color: '#9B9B9B'
    }
    // boxShadow: 'inset 0 0 10px #00000029',
  },

  getStarted: {
    color: '#9B9B9B !important',
    padding: '14px 30px !important',
    transition: '0.5s !important',
    fontWeight: '500 !important',
    borderRadius: '30px !important',
    background: 'linear-gradient(180deg, #ebeaea, #efefef3b)',
    backgroundColor: 'transparent !important',
    boxShadow: 'none !important',
    '&:hover': {
        boxShadow: '0px 2px 17px -4px #00000078 !important'
    },
    '@media(max-width : 600px)': {
        width: '100% !important'
    }
},

  

  sidemenubtn: {
    color: "#9B9B9B !important",
    padding: "14px 30px !important",
    background: "linear-gradient(180deg, #ebeaea, #efefef3b)",
    boxShadow: "none !important",
    transition: "0.5s !important",
    fontWeight: "500 !important",
    borderRadius: "30px !important",
    backgroundColor: "transparent !important",
    '&:hover': {
      boxShadow: '0px 2px 17px -4px #00000078 !important'
    },

  },
  navend: {
    display: 'flex',
  },
  navend2: {
    display: 'flex',
    marginLeft: '30px !important'
  },
  toolbarmain: {
    display: 'flex !important',
    justifyContent: 'space-between',
    padding: ' 0.5rem 11rem 0rem 11rem !important',
    '@media(max-width : 1200px)': {
      padding: '0.5rem 4rem 0rem 4rem !important'
    }
  },
  listpadding: {
    padding: '0px 10px !important'
  },
  listpaddingmob: {
    justifyContent: 'center !important',
    display:"flex"
  },
  badge: {
    marginTop: '10px',
  },
  desktopwrp: {
    backgroundColor: '#fff !important',
    position: 'fixed !important',
    right: 0,
    left: 0,
    zIndex: '1000',
    '@media(max-width : 900px)': {
      display: 'none !important'
    }
  },
  mobile: {
    display: 'none',
    '@media(max-width : 900px)': {
      display: 'block',

    }
  },
  mobhdrbox: {
    position: 'fixed',
    zIndex: '100 !important',
    backgroundColor: '#fff !important',
    left: 0,
    padding: '10px 10px',
    boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 4%), 0px 4px 5px 0px rgb(0 0 0 / 2%), 0px 1px 10px 0px rgb(0 0 0 / 2%)',
    width: '100%'
  },
  mobwrp: {
    display: 'flex !important',
    justifyContent: 'space-between',
    // paddingTop:'20px !important'

  },
  moblogo: {
    width: '100px',
    alignSelf: 'center',
  },

  mobtoolbar: {
    justifyContent: 'end',
    backgroundColor: '#fff',
    '@media(max-width : 900px)': {
      padding: '10px !important'
    }
  },
  mobappbar: {
    boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 4%), 0px 4px 5px 0px rgb(0 0 0 / 2%), 0px 1px 10px 0px rgb(0 0 0 / 2%) !important'
  },
  hdrlistbox2: {
    backgroundColor: '#fff',
    minHeight: '100vh'
  },
  navendmob: {
    textAlign: 'center'
  },
  menuItem: {
    backgroundColor: 'transparent !important',
    '&:hover': {
      backgroundColor: 'transparent !important'
    }
  },
  menustyle: {
    "& .MuiPaper-root": {
      borderRadius: "1rem",
      marginTop: "64px",
      marginLeft: "-8rem !important",
      borderRadius: "10px !important",
      backgroundColor: "#f1f1f1"
    },
    '@media(max-width : 600px)': {
      "& .MuiPaper-root": {
        marginLeft: "-1rem !important",

      }
    }

  },

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Header = () => {
  const [{ token, userData }, dispatch] = useContext(UserContext);
  const navigate = useNavigate();
  const [open1, setOpen1] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open5 = Boolean(anchorEl);




  const classes = useStyle();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen(false);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };


  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleOpen3 = () => {
    setOpen3(true);
  };


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const logout = (e) => {
    e.preventDefault();
    dispatch({ type: actionTypes.SET_TOKEN, value: null });
    localStorage.clear();
    // navigate("/login")

  };




  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className={classes.desktopwrp}
          color="transparent"
          component="div"
          position="relative"
          elevation={0}
          padding={0}
        >

          <Toolbar className={classes.toolbarmain}>
            <Box component="div" className={classes.navend}  >
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                <Link
                  to={token && `/`}
                  style={{}}
                  className={classes.ghjk}
                >
                  <Box sx={{ display: 'flex' }}>
                    <Typography className={classes.logo} component="img" src={logo}></Typography>
                    <Typography className={classes.logocont} component="img" src={logocont}></Typography>
                  </Box>
                </Link>
              </Typography>
              <List className={classes.navend2}>

                <ListItem className={classes.listpadding}>
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

                </ListItem>
                <Tooltip className={classes.tooltps}
                  open={open1} onClose={handleClose1} onOpen={handleOpen1} title="Messaging" placement="top-start">
                  <ListItem className={classes.listpadding}>

                    <Link className={classes.roundbutn2} to="/messaging">
                      <Typography width={20} component="img" src={message}></Typography>
                    </Link>
                  </ListItem>
                </Tooltip>
                {/* <Tooltip className={classes.tooltps}
                  open={open3} onClose={handleClose3} onOpen={handleOpen3} title="Notification" placement="top-start">
                  <ListItem className={classes.listpadding}>
                    <Badge className={classes.badge} badgeContent={3} sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: '#ff5f29', color: '#fff'
                      },
                    }}>
                      <Link className={classes.roundbutn2} to="/notification">
                        <Typography width={20} component="img" src={notification}></Typography>
                      </Link>
                    </Badge>
                  </ListItem>
                </Tooltip> */}
                {/* <ListItem className={classes.listpadding}>
                  <Link className={classes.roundbutn} to="/create">
                    <Typography width={20} component="img" src={add}></Typography>
                  </Link>
                </ListItem> */}

              </List>
            </Box>
            <List className={classes.navend}>
              <ListItem className={classes.listpadding}>
                {!token ? <Link className={classes.getStarted} to="/login">
                  Get Started
                </Link> :
                  <MenuIcon sx={{ cursor: "pointer", fontSize: "2rem" }} onClick={handleClick} />
                }
              </ListItem>
              <Menu
                className={classes.menustyle}
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open5}
                onClose={handleClose}

              >
                <MenuItem className={classes.menuItem} onClick={handleClose} >
                  <Link className={classes.sidemenubtn} to="/explorepage_without_side_menu">
                    Explore
                  </Link>

                </MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleClose}>
                  <Typography className={classes.sidemenubtn} onClick={logout}>
                    Logout
                  </Typography>
                </MenuItem>

              </Menu>

              {/* <ListItem className={classes.listpadding}>
                <Link className={classes.roundbutn} to="/not_link_wallet">
                  <Typography width={20} component="img" src={setting}></Typography>
                </Link>
              </ListItem>

              {!token && <ListItem className={classes.listpadding}>
                <Link className={classes.roundbutn} to="/register">
                  <Typography width={20} component="img" src={user}></Typography>
                </Link>
              </ListItem>} */}

            </List>
          </Toolbar>

        </AppBar>

        <Box className={classes.mobile}>
          <Box className={classes.mobhdrbox}>
            <Box className={classes.mobwrp}>
              <Box className={classes.moblogo}>
                <Link
                  to={token ? `/explore` : `/`}
                  style={{}}
                  className={classes.ghjk}
                >
                  <Box sx={{ display: 'flex' }}>
                    <Typography className={classes.logomob} component="img" src={logo}></Typography>
                    <Typography className={classes.logocontmob} component="img" src={logocont}></Typography>
                  </Box>
                </Link>
              </Box>
              <Box>
                <Box>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClickOpen}
                    aria-label="close"
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <Dialog
              fullScreen
              open={open}
              onClose={handleClose2}
              TransitionComponent={Transition}
            >
              <AppBar sx={{ position: 'relative', padding: 0 }}
                className={classes.mobappbar}
              >
                <Toolbar className={classes.mobtoolbar}>

                  <IconButton sx={{ color: '#000' }}
                    edge="start"
                    color="inherit"
                    onClick={handleClose2}
                    aria-label="close"
                  >
                    <CloseIcon color="#000" />
                  </IconButton>
                </Toolbar>

                <Box className={classes.hdrlistbox2}>

                  <List className={classes.navendmob}>

                    <ListItem className={classes.listpaddingmob}>
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

                    </ListItem>

                    <ListItem className={classes.listpaddingmob}>
                      {/* <Badge className={classes.badge} badgeContent={8} sx={{
                        "& .MuiBadge-badge": {
                          backgroundColor: '#FFCC00', color: '#fff'
                        },
                      }}>
                        <Link className={classes.roundbutn2} to="/messaging">
                          <Typography width={20} component="img" src={message}></Typography>
                        </Link>
                      </Badge> */}
                      <Link className={classes.roundbutn2} to="/messaging">
                        <Typography width={20} component="img" src={message}></Typography>
                      </Link>
                    </ListItem>

                    {/* <ListItem className={classes.listpaddingmob}>
                      <Badge className={classes.badge} badgeContent={3} sx={{
                        "& .MuiBadge-badge": {
                          backgroundColor: '#ff5f29', color: '#fff'
                        },
                      }}>
                        <Link className={classes.roundbutn2} to="/notification">
                          <Typography width={20} component="img" src={notification}></Typography>
                        </Link>
                      </Badge>
                    </ListItem> */}


                    {/* <ListItem className={classes.listpaddingmob}>
                      <Link className={classes.roundbutn} to="/create">
                        <Typography width={20} component="img" src={add}></Typography>
                      </Link>
                    </ListItem> */}
                   <ListItem className={classes.listpaddingmob}>
                   {!token ? <Link className={classes.textbutn} to="/login">
                      Get Started
                    </Link> :
                      <>
                     
                       <ListItem className={classes.listpaddingmob} onClick={handleClose} >
                          <Link className={classes.sidemenubtn} to="/explorepage_without_side_menu">
                            Explore
                          </Link>

                        </ListItem>
                        <ListItem className={classes.listpaddingmob} onClick={handleClose}>
                          <Typography className={classes.sidemenubtn} onClick={logout}>
                            Logout
                          </Typography>
                        </ListItem>
                       
                      </>
                    }
                   </ListItem>

                  </List>
                </Box>
              </AppBar>

            </Dialog>
          </Box>
        </Box>
      </Box>

    </>
  );
};

export default Header;
