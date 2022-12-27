import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import { Drawer, Avatar, InputAdornment, Input } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemText, } from "@mui/material";
import { UserContext } from "../../context/User/UserContext";
import { actionTypes } from "../../context/User/UserReducer";
import { makeStyles } from "@mui/styles";
import logo from '../../../src/pages/images/logo.svg'
import user from '../../../src/pages/images/user.svg'
import setting from '../../../src/pages/images/setting.svg'
import add from '../../../src/pages/images/add.svg'
import Badge from '@mui/material/Badge';
import notification from '../../../src/pages/images/notification.svg'
import message from '../../../src/pages/images/message.svg'
import SearchIcon from '@mui/icons-material/Search';
import search from '../../../src/pages/images/search.svg'
import { Container } from "@mui/system";






const drawerWidth = 300;

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
    width: '300px !important',
    borderColor: 'transparent',
    display: 'flex'

  },
  logo: {
    width: '140px'
  },
  roundbutn: {
    backgroundImage: 'linear-gradient(180deg, #ebeaea, #efefef3b)',
    width: '50px',
    height: '50px',
    padding: '14px',
    borderRadius: '30px',
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
    borderRadius: '30px',
    width: '50px',
    height: '50px',
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
      color: '#fff',
      backgroundImage: 'linear-gradient(180deg, #FFCC00, #FFCC00)',
    }
    // boxShadow: 'inset 0 0 10px #00000029',
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
    padding : '0.5rem 13rem 0rem 11rem !important',
    backgroundColor : '#fff',
  },
  listpadding: {
    padding: '0px 10px !important'
  },
  badge: {
    marginTop: '10px',
  },
  headerposition: {
    position: 'fixed !important',
    right: 0,
    left : 0,
    zIndex : '1000'
  }
}));
const Header2 = () => {
  const [{ token, userData }, dispatch] = useContext(UserContext);
  const sideBar = [
    { sidebarName: "Explore", path: "/explore" },
    { sidebarName: "My Settings", path: "/wallet" },
    { sidebarName: "My Portfolio", path: `/${userData?.userName}` },
    { sidebarName: "Hidden NFTs", path: "/hidden-nft" },
  ];
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    dispatch({ type: actionTypes.SET_TOKEN, value: null });
    localStorage.clear();
    navigate("/explore");
  };
  const [isopen, setIsOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(!open);
  };

  const classes = useStyle();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className={classes.headerposition}
          color="transparent"
          component="div"
          position="relative"
          elevation={0}
        >

          <Toolbar className={classes.toolbarmain}>
            <Box component="div" className={classes.navend}  >
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                <Link
                  to={token ? `/explore` : `/`}
                  style={{}}
                  className={classes.ghjk}
                >
                  <Typography className={classes.logo} component="img" src={logo}></Typography>
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
                        width="100%"
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

              </List>
            </Box>
            {/* {token ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer(false)}
              >
                <MenuIcon fontSize="large" sx={{ color: "#111" }} />
              </IconButton>
            ) : (
              

            )} */}
            <List className={classes.navend}>

              <ListItem className={classes.listpadding}>
                <Link className={classes.textbutn} to="#">
                  Explore
                </Link>
              </ListItem>

              <ListItem className={classes.listpadding}>
                <Link className={classes.roundbutn} to="#">
                  <Typography width={20} component="img" src={setting}></Typography>
                </Link>
              </ListItem>

              <ListItem className={classes.listpadding}>
                <Link className={classes.roundbutn} to="#">
                  <Typography width={20} component="img" src={user}></Typography>
                </Link>
              </ListItem>

            </List>
          </Toolbar>

        </AppBar>

      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        anchor="right"
        open={isopen}
        onClose={toggleDrawer(true)}
      >




        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            marginTop: "17px",
            padding: "0  10px 0",
          }}
        >
          <Avatar onClick={toggleDrawer(true)} sx={{ bgcolor: "none", cursor: 'pointer' }}>
            <CloseIcon />
          </Avatar>
        </Box>
        <List>
          {sideBar.map((data, index) => (
            <Link to={data.path} key={index}>
              <ListItem>
                <ListItemButton>
                  <Typography
                    component="div"
                    sx={{ color: "#111", padding: "0" }}
                  >
                    <ListItemText primary={data.sidebarName} />
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
          <ListItem>
            <ListItemButton>
              <ListItemText onClick={logout} primary={`Sign Out`} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header2;
