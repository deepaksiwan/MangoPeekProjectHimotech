import React, { useContext, useEffect, useState, useRef } from "react";
import messagestore from '../../../src/pages/images/messagestore.svg'
//import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
//import BookmarkIcon from '@mui/icons-material/Bookmark';
//import ellipsenft from '../../../src/pages/images/ellipsenft.svg'
import Header from "../../components/Header/Header";
import shareinftcon from '../../../src/pages/images/shareinftcon.svg'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import arrowright from '../../../src/pages/images/arrowright.svg'
import nftdetailicon from '../../../src/pages/images/nftdetailicon.svg'
import nftdwrrow from '../../../src/pages/images/nftdwrrow.svg'
import { format } from "timeago.js";
import { useNavigate } from "react-router-dom"
//import { AddComment } from "../../api/ApiCall/AddComment";
import { AddNftComments } from "../../api/ApiCall/AddNftComments";
import { getNftComments } from "../../api/ApiCall/getNftComments";
import moment from 'moment'
// import { AddConversation } from "../../api/ApiCall/AddConversation";

import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  Checkbox,
  Badge,
  List,
  ListItem,
  IconButton,
  Input,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
// import WOLFPUPS_NFT_ABI from "../../config/WOLFPUPS_NFT_ABI.json"
// import { WOLFPUPS_NFT_address } from "../../config/index";
import { useMutation, useQuery, useQueryClient } from "react-query";
// import {  useAccount } from "wagmi";
// import { updateNftNameOrDescription } from "../../api/ApiCall/nftCollection/updateNftNameOrDescription"
import { getNftByNftCollectionId } from "../../api/ApiCall/nftCollection/getNftByNftCollectionId"

import { UserContext } from "../../context/User/UserContext";
// import Share from "../../components/Share/Share";
import {
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
// import { discord, LIVE_DOMAIN } from "../../config";
import { LIVE_DOMAIN } from "../../config";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
// import { toggleLike } from "../../api/ApiCall/nftCollection/toggleLike";


const useStyle = makeStyles((theme) => ({
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
    width: '50px !important',
    borderRadius: "50% !important"
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
  },
  nftdetail: {
    paddingTop: '7rem',
    paddingBottom: '3rem',
    '@media(max-width : 600px)': {
      paddingTop: '5rem',
      paddingBottom: '2rem',
    }
  },
  nftdetailbtn: {
    color: '#fff !important',
    backgroundColor: '#FFCC00 !important',
    borderRadius: '30px !important',
    padding: '0.8rem 1rem !important',
    boxShadow: '0px 9px 24px -7px #0000004a !important',
    width: '14rem',
    '@media(max-width : 1200px)': {
      width: '12rem',
      '@media(max-width : 900px)': {
        width: '21rem',
        '@media(max-width : 600px)': {
          width: '100%',
        }
      }
    }
  },
  share: {
    position: "fixed",
    marginLeft: "18.5rem",
    marginTop: "-1rem",
    '@media(max-width : 1200px)': {
      marginLeft: "8rem",
      marginTop: "-2rem",

      '@media(max-width : 900px)': {
        marginLeft: "8rem",
        marginTop: "-2rem",
        '@media(max-width : 600px)': {
          width: '100%',
          // marginTop: '1rem !important'
        }
      }
    }
  },

  sharebtn: {
    position: "relative",
    gap: "3",
    color: '#fff !important',
    backgroundColor: '#FF5F29 !important',
    borderRadius: '30px !important',
    padding: '0.8rem 1rem !important',
    boxShadow: '0px 9px 24px -7px #0000004a !important',
    width: '14rem',
    '@media(max-width : 1200px)': {
      width: '12rem',
      '@media(max-width : 900px)': {
        width: '21rem',
        '@media(max-width : 600px)': {
          width: '100%',
          marginTop: '1rem !important'
        }
      }
    }
  },
  nftbtnwrp: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
    '@media (max-width : 600px)': {
      display: 'inherit',
      marginTop: '1rem',
    }
  },
  nftimgmain: {
    height: '440px',
    '@media(max-width : 900px)': {
      height: 'inherit',

    }
  },
  comment: {
    padding: '20px !important',
    boxShadow: 'inset 0px 7px 15px -4px #00000024',
    borderRadius: '30px',
    backgroundColor: '#efefef96',
    height: '37.9rem',
    overflow: 'hidden',
    '@media(max-width : 900px)': {
      marginTop: '15px'
    }
  },
  nftcommentlist: {
    display: 'inherit !important',
    borderBottom: '1px solid #0000003b',
    padding: '0px 0px 10px 0px !important',
    marginTop: '20px !important',

  },
  maplistbox: {
    overflowY: 'scroll',
    height: '25rem'
  },
  nftlistleft: {
    display: 'flex'
  },
  mainlistdiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  chatinpt: {
    backgroundColor: '#efefef96',
    boxShadow: 'inset 0px 7px 15px -4px #00000024',
    padding: '10px !important',
    width: '100%',
    borderRadius: '30px',
    height: "60px !important"
  },
  chattype: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    marginTop: '2rem !important'
  },
  sharebox: {
    display: "flex"
  }

}));



const label3 = { inputProps: { "aria-label": "Checkbox demo" } };
const label2 = { inputProps: { "aria-label": "Checkbox demo" } };
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const NFTpage = () => {
  const navigate = useNavigate();
  //const queryClient = useQueryClient();
  const classes = useStyle();
  const { id: nftCollectionId } = useParams();
 // const [nftUserId, setNftUserId] = useState(null)
  const [nftuserName, setNftUserName] = useState(null)
  //const [nftUserPic, setNftuserPic] = useState(null)
  const [isOpen, setIsOpen] = useState(false);
 // const [text, setNewComment] = useState("");
  const [allComment, setAllComment] = useState([])
  const [{ userData }] = useContext(UserContext);
  const scrollRef = useRef();

  const { data } = useQuery(["getNftByNftCollectionId", nftCollectionId],
    () => getNftByNftCollectionId(nftCollectionId), {
    onSuccess: (data) => {
      if (data.success === true) {
        refetch();


      }
    }
  })

  let nftId = nftCollectionId;
  let getNftId = nftCollectionId

  const { mutateAsync, error, isSuccess} = useMutation(["AddNftComments", nftId],
    (nftId) => AddNftComments(nftId), {
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


  const { data: getNftcomment, isLoading: loadingData , refetch} = useQuery(["getNftComments", getNftId],
    () => getNftComments(getNftId), {
    onSuccess: (data) => {
      refetch()
      if (data.success === true) {
        
      }

    }
  })

  useEffect(() => {
    if (getNftcomment?.result?.comment && getNftId) {
      setAllComment(getNftcomment?.result?.comment)
    }

  }, [getNftcomment?.result?.comment])

  
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [allComment]);



  useEffect(() => {
    if (data?.responseResult) {
      //setNftUserId(data?.responseResult?.userId?._id)
      setNftUserName(data?.responseResult?.userId?.userName)
      //setNftuserPic(data?.responseResult?.userId?.profilePic)
    }
  }, [data?.responseResult])

  const nftDetails = (() => {
    navigate(`/nftDetails/${nftCollectionId}`)
  })

  //Comment submit
  const CommentSubmit = async () => {
    const text = document.getElementById('chatInput').value.trim();
    if (!text) {
      return false
    }
    document.getElementById("chatInput").value = "";
    try {
      await mutateAsync({
        nftId: nftId,
        text: text,
        userId: userData?._id

      });
    } catch (error) {
      console.log("error", error);
    }

  };


  const handleridirect = () => {
    navigate(`/profile/${nftCollectionId}`)
  }

  const handleRedirectHomePage = ()=>{
    navigate("/")
  }

 


  return (
    <>
      <Header />
      <>
        <Box className={classes.nftdetail}>
          <Container>
            <Grid container spacing={2} >
              <Grid item lg={5} md={5} sm={12} xs={12}>
                <Box className={classes.nftinfobx2}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: "pointer" }} onClick={handleridirect}>
                    <Box sx={{ display: 'flex', margin: '5px 0px 15px 0px' }}>
                      <Box><Typography component="img" className={classes.ellipsenft} src={userData?.profilePic}></Typography></Box>
                      <Box sx={{ alignSelf: 'center', ml: '10px' }}>
                        <Typography variant="h6" className={classes.hding6}>{nftuserName ? nftuserName : "unNamed"}</Typography>
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
                  <img className={classes.nftimgmain} src={data?.responseResult?.metadata?.image ? `${data?.responseResult?.metadata?.image.replace("ipfs://", "https://wizard.mypinata.cloud/ipfs/")}` : ""} alt="" width="100%" />
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
                          <Typography style={{ color: '#606060' }}>{data?.responseResult?.likes?.length ? data?.responseResult?.likes?.length : "0"}</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', marginLeft: '10px' }}>
                          <Box sx={{ alignSelf: 'center' }}>
                            <img style={{ margin: '0px', borderRadius: '0px' }} src={messagestore} alt=""></img>
                          </Box>
                          <Typography style={{ color: '#606060' }}>3k</Typography>
                        </Box>

                      </Box>
                    </Box>
                    <Box sx={{ textAlign: "center", }} onClick={handleRedirectHomePage}>
                      <Button className={classes.viewbtn} endIcon={<Box sx={{ ml: '10px', transform: 'rotate(180deg)' }} component="img" src={arrowright} />}>
                        less
                      </Button>
                    </Box>
                  </Box>
                </Box>
                {isOpen && <Box className={classes.share}>
                  <Box className={classes.sharebox}>
                    <WhatsappShareButton url={encodeURI(LIVE_DOMAIN + "nftpage/" + nftCollectionId)}>
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <Box width={15} />
                    <TwitterShareButton url={encodeURI(LIVE_DOMAIN + "nftpage/" + nftCollectionId)}>
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <Box width={15} />
                    <TelegramShareButton url={encodeURI(LIVE_DOMAIN + "nftpage/" + nftCollectionId)}>
                      <TelegramIcon size={32} round />
                    </TelegramShareButton>
                  </Box>

                </Box>}
                <Box className={classes.nftbtnwrp}>
                  <Button onClick={nftDetails} className={classes.nftdetailbtn} startIcon={<Box component="img" src={nftdetailicon} />}>
                    NFT Details
                  </Button>
                  <Button className={classes.sharebtn} startIcon={<Box component="img" src={shareinftcon} />}
                    onClick={() => setIsOpen(prev => !prev)}
                  >
                    Share
                  </Button>
                </Box>
              </Grid>
              <Grid item lg={7} md={7} sm={12} xs={12}>
                <Box className={classes.comment}>
                  <List>
                    <ListItem className={classes.nftcommentlist}>
                      <Typography color="#ABAAAA">Posted on Jan 29 2024</Typography>
                      <Typography variant="h6" color="#626161">Dot  matrix  art of man wearing sunglasses of NFT. of lorem ipusm</Typography>
                    </ListItem>

                    <ListItem sx={{ justifyContent: 'center' }}>
                      <Typography variant="h5" color="#929292">Comments</Typography>
                    </ListItem>
                    <Box className={classes.maplistbox}>
                      {allComment && allComment.slice(-10)?.map((v, id) => {
                        return (
                          <ListItem className={classes.nftcommentlist} ref={scrollRef} >
                            <Box className={classes.mainlistdiv}>
                              <Box className={classes.nftlistleft}>
                                {/* <Box><Typography component="img" src={ellipsenft}></Typography></Box> */}
                                <Box ml={2}>
                                  <Box>
                                    <Typography fontWeight={700} color="#FB9A7A">{v.userId?.firstName}</Typography>
                                    <Typography fontWeight={700} color="#80DC80">@{v.userId?.userName}
                                      <Typography component="span" color="#626161" ml={1}>{v?.text}</Typography>
                                    </Typography>
                                  </Box>
                                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box sx={{ display: 'flex' }}>
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
                                      <Typography style={{ color: '#606060' }}>{data?.responseResult?.likes?.length}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', marginLeft: '10px' }}>
                                      <Box sx={{ alignSelf: 'center' }}>
                                        <img style={{ margin: '0px', borderRadius: '0px', width: '20px' }} src={messagestore} alt=""></img>
                                      </Box>
                                      <Typography style={{ color: '#606060' }}>{allComment?.length}</Typography>
                                    </Box>

                                  </Box>
                                </Box>
                              </Box>
                              <Box mr={1}>
                                <Typography color="#AFAFAF">{moment(v?.time).format('DD/MM/YYYY')}</Typography>
                                {/* moment(time, "HH:mm").format("hh:mm A") */}
                                <Typography component="img" src={nftdwrrow}></Typography>
                              </Box>
                            </Box>
                          </ListItem>
                        )
                      }
                      ) 
                      }
                      {allComment?.length === 0 &&<Box sx={{textAlign: "center", color:"#929292"}}>No Any comment add</Box>}
                    </Box>

                  </List>
                </Box>
                <Box className={classes.chattype}>
                  <Input
                    className={classes.chatinpt}
                    type="text"
                    id="chatInput"
                    placeholder="Write a comment..."
                    // onChange={(e) => setNewComment(e.target.value)}
                    variant="contained"
                    onKeyDown={(event) => event.key === "Enter" ? CommentSubmit() : null}
                    multiline
                    rows={1}
                    disableUnderline
                  />
                  {<IconButton onClick={CommentSubmit}
                    sx={{
                      backgroundColor: '#90DD90',
                      color: '#fff',
                      marginLeft: '-50px',
                      padding: '13px',
                      transition: '0.5s',
                      "&:hover": {
                        backgroundColor: '#33CC33'
                      }
                    }}
                    aria-label="rightarrow">
                    <KeyboardArrowRightRoundedIcon />
                  </IconButton>}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>

    </>

  );
};

export default NFTpage;