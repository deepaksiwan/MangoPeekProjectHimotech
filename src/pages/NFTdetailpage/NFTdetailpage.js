import React, { useContext, useEffect, useState, useRef } from "react";
import messagestore from '../../../src/pages/images/messagestore.svg'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ellipsenft from '../../../src/pages/images/ellipsenft.svg'
import Header from "../../components/Header/Header";
import nftimg from '../../../src/pages/images/nftimg.svg'
import shareinftcon from '../../../src/pages/images/shareinftcon.svg'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import arrowright from '../../../src/pages/images/arrowright.svg'
import nftdetailicon from '../../../src/pages/images/nftdetailicon.svg'
import nftdwrrow from '../../../src/pages/images/nftdwrrow.svg'
import {
  Box,
  Grid,
  Container,
  Typography,
  Stack,
  Button,
  Avatar,
  TextField,
  TextareaAutosize,
  Checkbox,
  Badge,
  List,
  ListItem,
  IconButton,
  Input
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import Data from "../Explore/ExploreData";
import { Link } from "react-router-dom";
import WOLFPUPS_NFT_ABI from "../../config/WOLFPUPS_NFT_ABI.json"
import { WOLFPUPS_NFT_address } from "../../config/index";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useContractRead, useContract, useProvider, useAccount } from "wagmi";
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { updateNftNameOrDescription } from "../../api/ApiCall/nftCollection/updateNftNameOrDescription"
import { getNftByNftCollectionId } from "../../api/ApiCall/nftCollection/getNftByNftCollectionId"
import { UserContext } from "../../context/User/UserContext";
import Share from "../../components/Share/Share";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
// import { discord, LIVE_DOMAIN } from "../../config";
import { discord, LIVE_DOMAIN } from "../../config";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { display } from "@mui/system";
import { toggleLike } from "../../api/ApiCall/nftCollection/toggleLike";
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

  sharebtn: {
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
          marginTop : '1rem !important'
        }
      }
    }
  },
  nftbtnwrp: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
    '@media (max-width : 600px)':{
      display : 'inherit',
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
    borderRadius: '30px'
  },
  chattype: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    marginTop: '2rem !important'
  }

}));

const nftdetaillist = [
  {
    id: 1,
    image: ellipsenft,
  },
  {
    id: 2,
    image: ellipsenft,
  },
  {
    id: 3,
    image: ellipsenft,
  },
  {
    id: 4,
    image: ellipsenft,
  },
  {
    id: 5,
    image: ellipsenft,
  },
  {
    id: 6,
    image: ellipsenft,
  },
  {
    id: 7,
    image: ellipsenft,
  },
  {
    id: 8,
    image: ellipsenft,
  },
]





const label3 = { inputProps: { "aria-label": "Checkbox demo" } };
const label2 = { inputProps: { "aria-label": "Checkbox demo" } };
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const NFTdetailpage = () => {
  // const provider = useProvider()
  const queryClient = useQueryClient();
  const { address, isConnected } = useAccount()
  const [show, setShow] = useState(false);
  const classes = useStyle();
  const { id: nftCollectionId } = useParams();
  const [words, setWords] = useState(0)
  const bodyRef = useRef()
  const CHARACTER_LIMIT = 160;
  const ref = useRef();


  const { data } = useQuery(["getNftByNftCollectionId", nftCollectionId],
    () => getNftByNftCollectionId(nftCollectionId), {
    onSuccess: (data) => {
      // console.log(data?.responseResult.likes)

    }
  })


  const { mutateAsync } = useMutation("updateNftNameOrDescription",
    updateNftNameOrDescription, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("getNftByNftCollectionId");
    }
  }
  )

  const { mutateAsync: mutateAsyncToggleLike, data: likeData, isLoading: isLoadingtoggleLike } = useMutation(
    "toggleLike",
    toggleLike, {
    onSuccess: (data) => {
      // console.log(data?.responseResult?.likes);

      queryClient.invalidateQueries("getAllHideNft");
      queryClient.invalidateQueries("getNftCollectionByChainNameAndUserName")
      queryClient.invalidateQueries("getAllNftByChainName")
      queryClient.invalidateQueries("getAllPinnedNftByUserName");
      queryClient.invalidateQueries("getNftByNftCollectionId");
      // queryClient.invalidateQueries("getAllNftCollection");
      // queryClient.invalidateQueries("recentlyListedNft");
      // queryClient.invalidateQueries("mostViewNft");
      // queryClient.invalidateQueries("mostLikeNft");


    }
  }
  )


  const [shows, setShows] = useState(false);
  const [{ userData, token }] = useContext(UserContext);
  const handleClose = () => setShows(false);
  const handleShow = () => setShows(true);
  const formik = useFormik({
    initialValues: {
      decs: "",
      name: "",
    },
    validationSchema: yup.object({
      decs: yup.string()
        .min(0, "Too Short!")
        .max(160, "Too Long!"),
      name: yup.string()

    }),
    onSubmit: async (values) => {
      try {
        await mutateAsync({
          token: localStorage.getItem("token"),
          nftCollectionId: nftCollectionId,
          value: {
            lazyName: lazyName,
            lazyDescription: lazyDescription
          }
        });
        handleClose()
      } catch (error) {
        // console.log(error);
      }
    },

  });
  // console.log(data?.responseResult?.likes.includes(userData?._id));

  const [lazyName, setLazyName] = useState(null);
  const [lazyDescription, setLazyDescription] = useState(null)

  useEffect(() => {
    if (data?.responseResult) {
      // console.log();
      setLazyName(data?.responseResult?.lazyName);
      setWords(0 + data?.responseResult?.lazyDescription?.length)
      setLazyDescription(data?.responseResult?.lazyDescription);
    }
  }, [data?.responseResult])

  const count = (e) => {
    setWords(0 + e.target.value.length)
    setLazyDescription(e.target.value);
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
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', margin: '5px 0px 15px 0px' }}>
                      <Box><Typography component="img" className={classes.ellipsenft} src={ellipsenft}></Typography></Box>
                      <Box sx={{ alignSelf: 'center', ml: '10px' }}>
                        <Typography variant="h6" className={classes.hding6}>Loremipsum</Typography>
                        <Typography className={classes.para}>@loremipsum</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ marginLeft: '10px' }}>
                      <Checkbox
                        {...label}
                        icon={<BookmarkBorderIcon sx={{ color: '#33CC33' }} />}
                        checkedIcon={<BookmarkIcon sx={{ color: '#33CC33' }} />}
                      />
                    </Box>
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
                          <Typography style={{ color: '#606060' }}>1.2k</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', marginLeft: '10px' }}>
                          <Box sx={{ alignSelf: 'center' }}>
                            <img style={{ margin: '0px', borderRadius: '0px' }} src={messagestore} alt=""></img>
                          </Box>
                          <Typography style={{ color: '#606060' }}>3k</Typography>
                        </Box>

                      </Box>
                    </Box>
                    <Box sx={{ textAlign: "center", }}>
                      <Button className={classes.viewbtn} endIcon={<Box sx={{ ml: '10px', transform: 'rotate(180deg)' }} component="img" src={arrowright} />}>
                        less
                      </Button>
                    </Box>
                  </Box>
                </Box>
                <Box className={classes.nftbtnwrp}>
                  <Button component={Link} to="/nftinfo" className={classes.nftdetailbtn} startIcon={<Box component="img" src={nftdetailicon} />}>
                    NFT Details
                  </Button>
                  <Button className={classes.sharebtn} startIcon={<Box component="img" src={shareinftcon} />}>
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

                      {
                        nftdetaillist.map((e, id) => {

                          const { ellipsenft, } = e

                          return (
                            <ListItem className={classes.nftcommentlist}>
                              <Box className={classes.mainlistdiv}>
                                <Box className={classes.nftlistleft}>
                                  <Box><Typography component="img" src={ellipsenft}></Typography></Box>
                                  <Box ml={2}>
                                    <Box>
                                      <Typography fontWeight={700} color="#FB9A7A">elainery</Typography>
                                      <Typography fontWeight={700} color="#80DC80">@lorem
                                        <Typography component="span" color="#626161" ml={1}>haha amazing</Typography>
                                      </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }} >
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
                                        <Typography style={{ color: '#606060' }}>29k</Typography>
                                      </Box>

                                      <Box sx={{ display: 'flex', marginLeft: '10px' }}>
                                        <Box sx={{ alignSelf: 'center' }}>
                                          <img style={{ margin: '0px', borderRadius: '0px', width: '20px' }} src={messagestore} alt=""></img>
                                        </Box>
                                        <Typography style={{ color: '#606060' }}>45</Typography>
                                      </Box>

                                    </Box>
                                  </Box>
                                </Box>

                                <Box mr={1}>
                                  <Typography color="#AFAFAF">29 Jan</Typography>
                                  <Typography component="img" src={nftdwrrow}></Typography>
                                </Box>
                              </Box>
                            </ListItem>
                          )
                        }
                        )
                      }
                    </Box>

                  </List>


                </Box>
                <Box className={classes.chattype}>
                  <Input
                    className={classes.chatinpt}
                    id="outlined-basic"
                    placeholder="Nice one! considering this too"
                    variant="contained"
                    disableUnderline
                  />
                  <IconButton
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
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* <Box className={classes.wrap13}>
              <Container>
                <Grid container item sx={{}} className={classes.bin1}>
                  <Grid  md={6}>
                    <Box className={classes.bin2}> */}
        {/* <Typography variant="h4">#{data?.responseResult?.tokenId}</Typography> */}
        {/* <Typography variant="h4">{data?.responseResult?.lazyName? data?.responseResult?.lazyName :data?.responseResult?.metadata?.name}</Typography>
                      <p>{data?.responseResult?.lazyDescription? data?.responseResult?.lazyDescription :data?.responseResult?.metadata?.description}</p>
                    </Box>
                  </Grid>
                  <Grid  md={6}>
                    <Box>
                    <Box sx={{ textAlign: "right" }}>
                    <Badge badgeContent={`${likeData?.responseResult?.likes?.length || data?.responseResult.likes.length || "0"}`} color="primary">
                    <Checkbox className={classes.fav} */}
        {/* onClick={async() => {
                      
                        try{
                  await mutateAsyncToggleLike({token:localStorage.getItem("token"),nftCollectionId:nftCollectionId})
                }catch(error){

                }
                        
                      }}
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={
                        <Favorite */}
        {/* indeterminateIcon
                          sx={{ color: "red" }}
                          // onClick={() => {
                          //   setCount(count + 1);
                          // }}
                        />
                      }
                      checked={(data?.responseResult?.likes  || likeData?.responseResult)? data?.responseResult?.likes.includes(userData?._id) || likeData?.responseResult?.likes.includes(userData?._id):false }
                    />
                  </Badge>
                 
                  <Typography variant="body2"> <Badge badgeContent={data?.responseResult?.viewsCount?data?.responseResult?.viewsCount:"0"} color="primary">
                  <RemoveRedEyeIcon/>
                 
                  </Badge></Typography> */}
        {/* <Typography variant="body2"><RemoveRedEyeIcon/>{" "}{props?.data.viewsCount}</Typography> */}
        {/* </Box>
                    </Box>
                  </Grid>

                
                    <Grid md={12}>
                      <Stack spacing={2} direction="row" justifyContent="center">
                      <Box>
                      { (token && data?.responseResult?.userId===userData?._id) &&
                      <a variant="primary" onClick={handleShow} style={{textAlign:'center'}}>Edit</a>
                      }
                      { data?.responseResult?.chainName==="Ethereum" &&
                        <>
                        <a href={`https://opensea.io/assets/ethereum/${data?.responseResult?.tokenAddress}/${data?.responseResult?.tokenId}`} target="_blank">View on OpenSea</a>
                        <a href={`https://etherscan.io/nft/${data?.responseResult?.tokenAddress}/${data?.responseResult?.tokenId}`} target="_blank">View on EtherScan</a>
                        </>
                      }
                      { data?.responseResult?.chainName==="BSC Testnet" &&
                        <>
                        {/* <a href={`https://opensea.io/assets/bsc/${data?.responseResult?.tokenAddress}/${data?.responseResult?.tokenId}`} target="_blank">View on OpenSea</a> */}
        {/* <a href={`https://testnet.bscscan.com/token/${data?.responseResult?.tokenAddress}?a=${data?.responseResult?.tokenId}`} target="_blank">View on BscScan</a>
                        </>
                      }
                      </Box>
                      <Box>
                      </Box>
                    </Stack>
                    </Grid>
                </Grid>
              </Container>
            </Box> */}

      </>


      {/* <Box>
        <Container>
          <Grid container>
            <Grid md={12}>
              <Box className={classes.bag12}>
                <Typography variant="h3">Similar NFTs 🎩</Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box className={classes.bag8}>
                <Box className={classes.bag9}>
                  <Box className={classes.bag7}>
                    <button
                      className="btn btn-primary"
                      onClick={() => setShow(!show)}
                    >
                      {" "}
                      {show ? (
                        <i class="bi bi-x-lg"></i>
                      ) : (
                        <i class="bi bi-three-dots"></i>
                      )}
                    </button>
                  </Box>

                  {show ? (
                    <Box className={classes.bag10}>
                      <p>veiw on OpenSea</p>
                      <p>veiw on EtherScan</p>
                    </Box>
                  ) : null}
                </Box>
                <img
                  src="https://lh3.googleusercontent.com/n6S_T7MuOzH_Q0NeFy53hBSjDSxlIisbiKRErGZvyrMQsVj5JVjVCldc4urgydNRfKez41gnTxkSJHvDrx2wYEJ1T8C2dt9d7hEZ"
                  alt=""
                />
                <Box>
                  <h6>Flip Ape 692</h6>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Box className={classes.wrap13}>
              <Container>
                <Grid>
                  <Box>
                    <Stack spacing={2} direction="row" justifyContent="center">
                      <Box>
                        <Link to="/bizarro-world">BizarroWorld</Link>
                      </Box>
                    </Stack>
                  </Box>
                </Grid>
              </Container>
            </Box>
      </Box> */}
      {/* <Footer /> */}
      {/* <Share/> */}


      {/* <Box className={classes.wrap5}>
        <Container>
          <Grid container sx={{ justifyContent: { lg: "auto", xs: "center" } }}> */}

      {/* <Grid item md={12} sm={12}>
             
            </Grid> */}
      {/* <Grid item md={12}>
              <Box className={classes.bag9}> */}
      {/* {Data.map((e,i) => {
                  return (
                    <>
                      <Box key={i}>
                        <a href={e.link}><img src={e.img} alt="" style={{width:e.width}}/></a>
                      </Box>
                    </>
                  );
                })} */}
      {/* <TelegramShareButton url={encodeURI(LIVE_DOMAIN+"nftdetailpage/"+nftCollectionId)}>
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
                <WhatsappShareButton url={encodeURI(LIVE_DOMAIN+"nftdetailpage/"+nftCollectionId)}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <TwitterShareButton url={encodeURI(LIVE_DOMAIN+"nftdetailpage/"+nftCollectionId)}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton> */}
      {/* <a href={encodeURI(LIVE_DOMAIN+userData?.userName)} target="_blank" style={{color:"#000"}}> <i class="bi bi-discord" style={{fontSize:"2rem"}}></i></a> */}
      {/* </Box>
            </Grid>
          </Grid>
        </Container>
      </Box> */}


      {/* Modal Open Edit name and decs */}

      <Modal show={shows} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Box>
            <Box>
              <form className={classes.bagr} onSubmit={formik.handleSubmit}>
                <TextField
                  name="name"
                  id="name"
                  placeholder="Enter Name"
                  className={classes.bag90}
                  // sx={{width:"100%"}}

                  value={lazyName}
                  onChange={(e) => setLazyName(e.target.value)}
                  error={
                    formik.touched.name &&
                    Boolean(formik.errors.name)
                  }
                  helperText={
                    formik.touched.name && formik.errors.name
                  }
                />

                <TextareaAutosize
                  className={classes.bag90}
                  // aria-label="minimum height"
                  minRows={3}
                  placeholder="Enter Description"
                  // style={{ width: 200 }}
                  onChange={(e) => count(e)}
                  id="decs"
                  name="decs"
                  value={lazyDescription}
                  error={formik.touched.decs && Boolean(formik.errors.decs)}
                  helperText={formik.touched.decs && formik.errors.decs}
                />
                <Box className={classes.bag6} mb>
                  <h6>Character Count {words}/160</h6>
                  {/* <h6>Character Count {count}/160</h6> */}
                </Box>
                <button type="submit">
                  Submit
                </button>

              </form>

              <Box className={classes.bagr}>
                <button onClick={handleClose}>
                  Close
                </button>
              </Box>
            </Box>
          </Box>
        </Modal.Body>

      </Modal>

    </>
  );
};

export default NFTdetailpage;