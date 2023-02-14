import { Badge, Box, Button, Checkbox, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import arrowright from '../../../src/pages/images/arrowright.svg'
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import messagestore from '../../../src/pages/images/messagestore.svg'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ellipsenft from '../../../src/pages/images/ellipsenft.svg';
import Loader from "../Loader/Loader"






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
      boxShadow: '0px 4px 22px -3px #00000036',
   },

   owned: {
      display: 'flex',
      padding: '20px 0px',

   },

   NoNftAdded: {
      marginTop: "3rem !important",
      fontSize: "1.5rem !important"
   }

})

const label2 = { inputProps: { "aria-label": "Checkbox demo" } };
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const NftByUserName = ({ AllNftDataByUserName, Datafetch }) => {
   const classes = useStyle();
   

   return (
      <>
         <Box>
            <Grid container spacing={2} justifyContent="center">
               {Datafetch == false ? AllNftDataByUserName?.responseResult?.map((v, id) => {
                  return (
                     <Grid item lg={4} md={4} xs={12} key={id}>
                        <Box className={classes.nftinfobx2}>
                           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Box sx={{ display: 'flex', margin: '5px 0px 15px 0px' }}>
                                 <Box><Typography component="img" className={classes.ellipsenft} src={ellipsenft}></Typography></Box>
                                 <Box sx={{ alignSelf: 'center', ml: '10px' }}>
                                    <Typography variant="h6" className={classes.hding6}>{v?.metadata?.name}</Typography>
                                    <Typography className={classes.para}>{v?.metadata?.description}</Typography>
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
                           <Typography component="img" src={v.metadata.image ? v?.metadata?.image.replace("ipfs://", "https://wizard.mypinata.cloud/ipfs/") : ""} width="100%"></Typography>
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
                                       <Typography style={{ color: '#606060' }}>{v?.likes?.length}</Typography>
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
               })
                  : <Typography className={classes.NoNftAdded}>
                     <Loader />
                  </Typography>

               }
               {AllNftDataByUserName?.responseResult?.length == 0 || AllNftDataByUserName == undefined &&
                  <Typography className={classes.NoNftAdded}>
                     No NFTs Added Yet
                  </Typography>}
            </Grid>
         </Box>

      </>
   )
}

export default NftByUserName