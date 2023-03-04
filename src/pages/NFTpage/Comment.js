
import React, { useContext, useEffect, useState, useRef } from "react";
import moment from 'moment'
import { Tooltip } from "@mui/material";

import nftdwrrow from '../../../src/pages/images/nftdwrrow.svg'
import { format } from "timeago.js";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { CommentReply } from "../../api/ApiCall/CommentReply";
import { UserContext } from "../../context/User/UserContext";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

import {
   Box,
   Input,
   Typography,
   Checkbox,
   Badge,
   Button,
   ListItem,

} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useMutation } from "react-query";




const useStyle = makeStyles((theme) => ({

   nftcommentlist: {
      display: 'inherit !important',
      borderBottom: '1px solid #0000003b',
      padding: '0px 0px 10px 0px !important',
      marginTop: '20px !important',

   },

   nftlistleft: {
      display: 'flex'
   },
   mainlistdiv: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '@media(max-width : 600px)': {
         display: 'inherit',
       }

   },
   chattype: {
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center',
      marginTop: '0rem !important',
      '@media(max-width : 600px)': {
         justifyContent: "center",

       }
   },
   replychatinpt: {
      backgroundColor: '#efefef96',
      boxShadow: 'inset 0px 7px 15px -4px #00000024',
      padding: '20px  15px!important',
      width: '65%',
      borderRadius: '30px',
      height: "30px !important"
   },
   reply: {
      marginTop: "8px",
      color: "#9B9B9B !important",
      fontsize: "12px !important",
      fontWeight: " 0 !important",
      textTransform: "none !important",
   },
   replystyle: {
      marginTop: "10px",
      color: "#9A9A9A !important",
      marginLeft: "5px",
      textAlign: "left",
      backgroundColor: "#e1e1e19c",
      fontSize: "14px",
      borderRadius: "10px",
      padding: "5px 10px"
   },
   replyuserName: {
      color: "black",
      fontWeight: "700"

   },
   widthleft: {
      marginLeft: "0px",
      marginTop: "10px"

   },

   imgs: {
      borderRadius: "50%",
      width: "1.9rem"

   },
   mainreplydiv: {
      textAlign: "center",
      justifyContent: "inline",
      marginLeft: "30px",
      '@media(max-width : 600px)': {
         marginLeft: "0px",

       }
   
   },
   replytime: {
      textAlign: "center",
      fontSize: "11px",
      textAlign: "left",
      marginLeft: "2.2rem"

   },
   like:{
      textAlign: "center",
      display:"flex",
      '@media(max-width : 600px)': {
         justifyContent: "center",

       }
   },
   date:{
      '@media(max-width : 600px)': {
         justifyContent: "center",

       }
   }




}));
const label3 = { inputProps: { "aria-label": "Checkbox demo" } };
const label2 = { inputProps: { "aria-label": "Checkbox demo" } };
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };




const Comment = ({ comment, nftId }) => {
   const classes = useStyle();
   const scrollRef = useRef();
   const [replyInput, setReplyInput] = useState(false)
   const [open, setOpen] = React.useState(false);
   const [{ userData }] = useContext(UserContext);

   const handleClose = () => {
      setOpen(false);
   };

   const handleOpen = () => {
      setOpen(true);
   };

   const replyClicable = () => {
      setReplyInput(true)

   }


   const { mutateAsync, refetch } = useMutation(["CommentReply", nftId],
      (nftId) => CommentReply(nftId), {
      onSuccess: (data) => {
         try {
            if (data.success == true) {
               refetch()

            }


         } catch (err) {
         }
      },
      onError: (error, data) => {

      },
   }
   );

   const ReplySubmit = async () => {
      const text = document.getElementById('replyInput').value.trim();
      if (!text) {
         return false
      }
      document.getElementById("replyInput").value = "";
      try {
         await mutateAsync({
            nftId: nftId,
            text: text,
            userId: userData?._id,
            commentId: comment?._id

         });
      } catch (error) {
         console.log("error", error);
      }

   };





   return (
      <>
         <ListItem key={comment?._id} className={classes.nftcommentlist} ref={scrollRef} >
            <Box className={classes.mainlistdiv}>
               <Box className={classes.nftlistleft}>

                  <Box ml={2}>
                     <Box>
                        <Typography fontWeight={700} color="#FB9A7A">{comment?.userId?.firstName}</Typography>
                        <Typography fontWeight={700} color="#80DC80">@{comment?.userId?.userName}
                           <Typography component="span" color="#626161" ml={1}>{comment?.text}</Typography>
                        </Typography>
                     </Box>
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {replyInput == true &&
                           <Box>
                              <Box className={classes.mainreplydiv}>
                                 {comment?.commentreply.map((v) => {
                                    return (
                                       <>

                                          <Box sx={{ display: "flex" }}>
                                             <Box className={classes.widthleft}>
                                                <Typography className={classes.imgs} component="img" src={v?.userId?.profilePic}></Typography>
                                             </Box>
                                             <Box className={classes.replystyle}>
                                                <Typography className={classes.replyuserName}>{v?.userId?.userName}</Typography>
                                                {v?.text}

                                             </Box>

                                          </Box>
                                          <Box className={classes.replytime}>
                                             {moment(v?.time).format('DD/MM/YYYY')}
                                          </Box>

                                       </>
                                    )
                                 })}
                              </Box>
                              <Box className={classes.like}>
                                 <Box sx={{ display: 'flex', marginTop: "0px" }}>
                                    <Badge color="primary">
                                       <Checkbox className={classes.fav}
                                          {...label3}
                                          icon={<FavoriteBorder sx={{ color: "#FF5F29" }} />}
                                          checkedIcon={
                                             <Favorite
                                                indeterminateIcon
                                                sx={{ color: "#FF5F29" }}
                                             />
                                          }
                                       />
                                    </Badge>
                                 </Box>
                                 <Box className={classes.reply}>Reply</Box>
                              </Box>
                              <Box className={classes.chattype}>
                                 <Input
                                    className={classes.replychatinpt}
                                    type="text"
                                    id="replyInput"
                                    placeholder="Write a reply..."
                                    // onChange={(e) => setNewComment(e.target.value)}
                                    variant="contained"
                                    onKeyDown={(event) => event.key === "Enter" ? ReplySubmit() : null}
                                    multiline
                                    rows={1}
                                    disableUnderline
                                 />

                              </Box>
                           </Box>
                        }

                     </Box>
                  </Box>
               </Box>

               <Box className={classes.date} mr={1}>
                  <Typography color="#AFAFAF">{moment(comment?.time).format('DD/MM/YYYY')}</Typography>
                  <Tooltip className={classes.tooltps} open={open} onClose={handleClose} onOpen={handleOpen} title="Reply" placement="left">
                     <Typography onClick={replyClicable} sx={{ cursor: "pointer" }} component="img" src={nftdwrrow}></Typography>
                  </Tooltip>
               </Box>

            </Box>
         </ListItem>
      </>
   )
}

export default Comment