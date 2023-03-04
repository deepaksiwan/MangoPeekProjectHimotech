import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import {  InputAdornment, Input, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from "react-router-dom";
import { List, ListItem } from "@mui/material";
import { UserContext } from "../../context/User/UserContext";
import { makeStyles } from "@mui/styles";
import logo from '../../../src/pages/images/logo.gif'
import logocont from '../../../src/pages/images/logocont.svg'
import user from '../../../src/pages/images/user.svg'
import setting from '../../../src/pages/images/setting.svg'
import Slide from '@mui/material/Slide';
import SearchIcon from '@mui/icons-material/Search';
import search from '../../../src/pages/images/search.svg'
import { useParams } from "react-router-dom";









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
    width: '70px',
  },

  logocont: {
    width: '90px',
  },


  logomob: {
    width: '70px',
    '@media(max-width : 900px)':{
      width: '40px',
    }
  },

  logocontmob: {
    width: '90px',
    '@media(max-width : 900px)':{
      width: '60px',
    }
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
    padding: '0.5rem 13rem 0rem 11rem !important',
    backgroundColor: '#fff',
    '@media(max-width : 1200px)': {
      padding: '0.5rem 2rem 0rem 2rem !important'
    }
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
  navendmob : {
    textAlign : 'center'
  },
  listpaddingmob : {
    justifyContent : 'center !important'
  },
  hdrlistbox2 : {
    backgroundColor : '#fff',
    minHeight : '100vh'
  },
}));





const Header2 = ({messagecount}) => {
  const [{ token, userData }, dispatch] = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams();
 

  const classes = useStyle();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen(false);
  };
  const handleRidirect = ()=>{
    navigate(`/profile/${id}`)
  }
  

  return (
    <>
      <Box sx={{ flexGrow: 1, padding:0}}>
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
                  to={token  && `/`}
                  style={{}}
                  className={classes.ghjk}
                >
                 <Box sx={{display : 'flex'}}>
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
           
            <List className={classes.navend}>
              <ListItem className={classes.listpadding}>
                <Link className={classes.textbutn} to="/not_link_wallet">
                  Explore
                </Link>
              </ListItem>

              {/* <ListItem className={classes.listpadding}>
                <Link className={classes.roundbutn} to="/not_link_wallet">
                  <Typography width={20} component="img" src={setting}></Typography>
                </Link>
              </ListItem> */}

             {!token &&<ListItem className={classes.listpadding}>
                <Link className={classes.roundbutn} onClick={handleRidirect}>
                  <Typography width={20} component="img" src={user}></Typography>
                </Link>
              </ListItem>}

            </List>
          </Toolbar>

        </AppBar>

      
      </Box>
    
    </>
  );
};

export default Header2;
