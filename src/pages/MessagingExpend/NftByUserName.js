import React, { useContext } from 'react'
import { makeStyles } from "@mui/styles";
import { Badge, Box, Button, Checkbox, List, ListItem, Typography, Grid } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import messagestore from '../../../src/pages/images/messagestore.svg'
import { Link, NavLink, useNavigate } from "react-router-dom";
import arrowright from '../../../src/pages/images/arrowright.svg'
import { UserContext } from "../../context/User/UserContext";
import { toggleLike } from "../../api/ApiCall/nftCollection/toggleLike";
import { useMutation, useQueryClient } from "react-query";


const useStyle = makeStyles({
   nftinfobx2: {
      backgroundColor: '#efefef96 ',
      padding: '10px',
      borderRadius: '12px',
      width: '100%',
      marginTop: '16px !important',
      boxShadow: '0px 4px 22px -3px #00000036',
      '@media(min-width : 900px)': {
         width: '100%'
      }
   },
   viewbtn: {
      color: "#9B9B9B !important",
      fontSize: "16px !important",
      fontWeight: "500 !important",
      textTransform: "none !important"
   },
   fav: {
      padding: "0 !important",
   },

})


const label2 = { inputProps: { "aria-label": "Checkbox demo" } };
function NftByUserName(props) {
   const classes = useStyle();
   const navigate = useNavigate()


   const [{ userData },] = useContext(UserContext);
   const { mutateAsync: mutateAsyncToggleLike, data, isLoading: isLoadingtoggleLike } = useMutation(
      "toggleLike",
      toggleLike, {
      onSuccess: (data) => {
      }
   })


   const clickable = (() => {
      navigate(`/nftpage/${props?.data?._id}`)
   })

   console.log("sjnsdnf", props?.data?._id)

   return (

      <>
         <Typography component="img" src={props?.data.metadata.image ? props?.data?.metadata?.image.replace("ipfs://", "https://wizard.mypinata.cloud/ipfs/") : ""} width="100%"></Typography>
         <Box
            sx={{
               display: "flex",
               alignItems: "center",
               justifyContent: "space-between",
               marginTop: "16px"
            }}
         >
            <Box>
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
                        <Typography style={{ color: '#606060' }}>{props?.data?.comment?.length}</Typography>
                     </Box>

                  </Box>
               </Box>
            </Box>
            <Box sx={{ textAlign: "center" }} onClick={clickable}>
               <Button className={classes.viewbtn} endIcon={<Box sx={{ ml: '0px' }} component="img" src={arrowright} />}>
                  More
               </Button>
            </Box>
         </Box>
      </>

   )
}

export default NftByUserName