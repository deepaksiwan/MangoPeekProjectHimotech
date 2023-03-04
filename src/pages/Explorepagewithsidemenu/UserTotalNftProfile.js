import { Badge, Box, Button, Checkbox, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";
import {useNavigate } from "react-router-dom";
import arrowright from '../../../src/pages/images/arrowright.svg'
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import messagestore from '../../../src/pages/images/messagestore.svg'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ellipsenft from '../../../src/pages/images/ellipsenft.svg'
// import { getAllNftByUserName } from "../../api/ApiCall/nftCollection/getAllNftByUserName"
// import { useQuery } from "react-query";

import { useMutation, useQueryClient } from "react-query";
import { toggleLike } from "../../api/ApiCall/nftCollection/toggleLike";
import { UserContext } from "../../context/User/UserContext";







const useStyle = makeStyles({
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
      width: "100%",
      boxShadow: '0px 4px 22px -3px #00000036',
      '@media(max-width : 900px)': {
         width: "100%"
      }
   },
   // grid:{
   //    '@media(min-width : 900px)': {
   //       marginTop: "-5px !important"
   //   }

   // },

   owned: {
      display: 'flex',
      padding: '20px 0px',

   },

   NoNftAdded: {
      marginTop: "3rem !important",
      fontSize: "1.5rem !important"
   },
   mainnftbox:{
      textAlign: "center",
      '@media(max-width : 1536px)': {
         maxwidth: "500px",
         textAlign: "center !important",
         // width: "23rem"
         '@media(max-width : 600px)': {
            width: "100%",
            textAlign: "center !important",
            // width: "23rem"
            
         }
   
      }

   }

})

const label2 = { inputProps: { "aria-label": "Checkbox demo" } };
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };





const UserTotalNftProfile = (props) => {
   const classes = useStyle();
   const navigate = useNavigate()
   const [{ userData },] = useContext(UserContext);

   const { mutateAsync: mutateAsyncToggleLike, data, isLoading: isLoadingtoggleLike } = useMutation(
      "toggleLike",
      toggleLike, {
      onSuccess: (data) => {
      }
   }
   )

   const clickable = (() => {
      navigate(`/nftpage/${props?.data?._id}`)
   })


   return (
      <>
         <Box className={classes.mainnftbox}>
            <Box className={classes.nftinfobx2}>
               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', margin: '5px 0px 15px 0px' }}>
                     <Box><Typography component="img" className={classes.ellipsenft} src={ellipsenft}></Typography></Box>
                     <Box sx={{ alignSelf: 'center', ml: '10px' }}>
                        <Typography variant="h6" className={classes.hding6}>{props.data?.metadata?.name}</Typography>
                        <Typography className={classes.para}>{props.data?.metadata?.description}</Typography>
                     </Box>
                  </Box>
                  {/* <Box sx={{ marginLeft: '10px' }}>
                     <Checkbox
                        {...label}
                        icon={<BookmarkBorderIcon sx={{ color: '#33CC33' }} />}
                        checkedIcon={<BookmarkIcon sx={{ color: '#33CC33' }} />}
                     />
                  </Box> */}
               </Box>
               <Typography component="img" src={props?.data?.metadata?.image ? props?.data?.metadata?.image.replace("ipfs://", "https://wizard.mypinata.cloud/ipfs/") : ""} width="100%"></Typography>
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
                           <Badge badgeContent={`${(data?.responseResult?.likes?.length || props?.data?.likesCount || props?.data?.likes?.length)}`} color="primary">
                              <Checkbox className={classes.fav}
                                 onClick={async () => {
                                    try {
                                       await mutateAsyncToggleLike({ token: localStorage.getItem("token"), nftCollectionId: props?.data?._id })
                                    } catch (error) {
                                    }
                                 }}
                                 {...label2}
                                 icon={<FavoriteBorder sx={{ color: "#FF5F29" }} />}
                                 checkedIcon={
                                    <Favorite
                                       indeterminateIcon
                                       sx={{ color: "#FF5F29" }}
                                       onClick={() => {
                                          setCount(count + 1);
                                       }}
                                    />
                                 }
                                 checked={data?.responseResult?.likes.includes(userData?._id) || props?.data?.data?.likes?.includes(userData?._id)}
                              />
                           </Badge>
                           {/* <Typography style={{ color: '#606060' }}>{props?.data?.likes?.length}</Typography> */}
                        </Box>

                        <Box sx={{ display: 'flex', marginLeft: '10px' }}>
                           <Box sx={{ alignSelf: 'center' }}>
                              <img style={{ margin: '0px', borderRadius: '0px' }} src={messagestore} alt=""></img>
                           </Box>
                           <Typography style={{ color: '#606060' }}>3k</Typography>
                        </Box>

                     </Box>
                  </Box>
                  <Box sx={{ textAlign: "center" }} onClick={clickable}>
                     <Button className={classes.viewbtn} endIcon={<Box sx={{ ml: '10px' }} component="img" src={arrowright} />}>
                        More
                     </Button>
                  </Box>
               </Box>
            </Box>
         </Box>
      </>
   )
}

export default UserTotalNftProfile