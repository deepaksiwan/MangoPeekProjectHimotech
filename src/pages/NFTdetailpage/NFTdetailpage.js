import React, { useContext, useEffect, useState ,useRef} from "react";
import Header from "../../components/Header/Header";
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
  Badge
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import Data from "../Explore/ExploreData";
import { Link } from "react-router-dom";
import WOLFPUPS_NFT_ABI from "../../config/WOLFPUPS_NFT_ABI.json"
import {WOLFPUPS_NFT_address} from "../../config/index";
import { useMutation, useQuery,useQueryClient } from "react-query";
import { useContractRead,useContract,useProvider, useAccount } from "wagmi";
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {updateNftNameOrDescription} from "../../api/ApiCall/nftCollection/updateNftNameOrDescription"
import {getNftByNftCollectionId} from "../../api/ApiCall/nftCollection/getNftByNftCollectionId"
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
const useStyle = makeStyles((theme) =>({
  fav:{
    padding:"0 !important"
     },
  wrap12: {
    padding: "6rem 0",
    width: "100%",
    backgroundColor: "#f0f0f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bag15: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrap13: {
    padding: "2rem 0 1rem",
    "& h4": {
      fontWeight: "bold",
      fontSize: "25pt",
      display: "block",
    },
    "& p": {
      fontSize: "1rem",
      fontWeight: "600",
      margin: "1rem 0 0 0",
    },
    "& a": {
      display: "block",
      margin: "19px 0",
      border: "2px solid #000",
      borderRadius: "33px",
      padding: "7px 25px",
      color: "#000",
      fontWeight: "bold",
      cursor:"pointer"
    },
    "& a:hover": {
      backgroundColor: "#000",
      color: "#fff !important",
    },
  },
  bag8: {
    // position: "relative",
    margin: "0",
    height: "auto",
    position: "relative",
    "& h6": {
      // margin:"1rem 0 0 0",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1.3rem",
    },
    " & img": {
      margin: "1rem auto",
      width: "100%",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
    },
    "& p": {
      fontSize: "1rem",
      fontWeight: "500",
      textAlign: "left",
      padding: "7px 26px ",
      margin: "0 0 4px 0",
    },
  },
  bag7: {
    position: "relative ",
    zIndex: "1",
    textAlign: "end",
    left: "0",
    right: "0",
    // top:"6.5rem",
    "& button": {
      background: "#fff",
      color: "#000",
      border: "none",
      borderRadius: "50%",
      margin: "10px",
      fontSize: "1rem",
      fontWeight: "bold",
    },
  },
  bag9: {
    // position: "relative !important",
    position: "absolute !important",
    zIndex: "1",
    // top:"14.6rem",
    textAlign: "center",
    left: "0",
    right: "0",
  },
  bag10: {
    width: "93%",
    background: "#fff",
    margin: "0 auto",
    borderRadius: "6px",
  },
  bag12: {
    "& h3": {
      fontSize: "1.6rem",
      fontWeight: "bold",
    },
  },
    
  bag90: {
    // display: "block",
    // border: "1px solid linen",
    margin: "10px 0",
    width: "100%",
    padding: "13px",
    borderRadius: "15px",
    boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",
  },
  bagr:{
    "& button": {
      width: "100%",
      margin: "13px 0",
      border: "1px solid #000",
      padding: "10px",
      borderRadius: "41px",
    },
    "& button:hover": {
      backgroundColor: "#000",
      color: "#fff",
      transition:
        "color 0.5s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    },
  },
  bag9: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2.3rem",
    marfinBottom:"1rem",
  },
  bin1:{
    justifyContent:"center",
     display:"flex", 
     [theme.breakpoints.down("sm")]: {
      justifyContent:"flex-start",
    },
  },
  bin2:{
    "& h4":{
      [theme.breakpoints.down("sm")]: {
       fontSize:"14px"
      },
    },
    "& p":{
      [theme.breakpoints.down("sm")]: {
       fontSize:"14px"
      },
    },
   
  },
  wrap5: {
    width: "100%",
    padding: "2rem 0",
  
  },
  bag6: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& h5,h6": {
      margin: "0",
    },
  },
}));

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const NFTdetailpage = () => {
  // const provider = useProvider()
  const queryClient=useQueryClient();
  const {address,isConnected}=useAccount()
  const [show, setShow] = useState(false);
  const classes = useStyle();
  const {id:nftCollectionId } = useParams();
  const [words, setWords] = useState(0)
  const bodyRef = useRef()
  const CHARACTER_LIMIT = 160;
  const ref = useRef();


const {data}=useQuery(["getNftByNftCollectionId",nftCollectionId],
 ()=>getNftByNftCollectionId(nftCollectionId),{
    onSuccess:(data)=>{
      // console.log(data?.responseResult.likes)
     
    }
  })


const {mutateAsync}=useMutation("updateNftNameOrDescription",
updateNftNameOrDescription,{
  onSuccess:(data)=>{
    queryClient.invalidateQueries("getNftByNftCollectionId");
  }
}
)

const {mutateAsync:mutateAsyncToggleLike,data:likeData,isLoading:isLoadingtoggleLike}=useMutation(
  "toggleLike",
  toggleLike,{
    onSuccess:(data)=>{
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
  const [{ userData ,token}] = useContext(UserContext);
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
          nftCollectionId:nftCollectionId,
          value: {
            lazyName:lazyName,
            lazyDescription:lazyDescription
          }
        });
        handleClose()
      } catch (error) {
        // console.log(error);
      }
    },

  });
  // console.log(data?.responseResult?.likes.includes(userData?._id));

const [lazyName,setLazyName]=useState(null);
const [lazyDescription,setLazyDescription]=useState(null)

useEffect(()=>{
  if(data?.responseResult){
    // console.log();
    setLazyName(data?.responseResult?.lazyName);
    setWords(0 + data?.responseResult?.lazyDescription?.length)
    setLazyDescription(data?.responseResult?.lazyDescription);
  }
},[data?.responseResult])

const count = (e) => {
  setWords(0 + e.target.value.length)
  setLazyDescription(e.target.value);
}
  return (
    <>
      <Header />
        
          <>
            <Box className={classes.wrap12}>
              <Container>
                <Grid container >
                  <Grid md={12}>
                    <Box className={classes.bag15}>
                      <img src={data?.responseResult?.metadata?.image?`${ data?.responseResult?.metadata?.image.replace("ipfs://","https://wizard.mypinata.cloud/ipfs/")}`:""}alt="" />
                      {/* <h1>{elz.title}</h1> */}
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Box>
       
            <Box className={classes.wrap13}>
              <Container>
                <Grid container item sx={{}} className={classes.bin1}>
                  <Grid  md={6}>
                    <Box className={classes.bin2}>
                    {/* <Typography variant="h4">#{data?.responseResult?.tokenId}</Typography> */}
                      <Typography variant="h4">{data?.responseResult?.lazyName? data?.responseResult?.lazyName :data?.responseResult?.metadata?.name}</Typography>
                      <p>{data?.responseResult?.lazyDescription? data?.responseResult?.lazyDescription :data?.responseResult?.metadata?.description}</p>
                    </Box>
                  </Grid>
                  <Grid  md={6}>
                    <Box>
                    <Box sx={{ textAlign: "right" }}>
                    <Badge badgeContent={`${likeData?.responseResult?.likes?.length || data?.responseResult.likes.length || "0"}`} color="primary">
                    <Checkbox className={classes.fav}
                      onClick={async() => {
                      
                        try{
                  await mutateAsyncToggleLike({token:localStorage.getItem("token"),nftCollectionId:nftCollectionId})
                }catch(error){

                }
                        
                      }}
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={
                        <Favorite
                          indeterminateIcon
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
                 
                  </Badge></Typography>
                  {/* <Typography variant="body2"><RemoveRedEyeIcon/>{" "}{props?.data.viewsCount}</Typography> */}
                </Box>
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
                        <a href={`https://testnet.bscscan.com/token/${data?.responseResult?.tokenAddress}?a=${data?.responseResult?.tokenId}`} target="_blank">View on BscScan</a>
                        </>
                      }
                      </Box>
                      <Box>
                      </Box>
                    </Stack>
                    </Grid>
                </Grid>
              </Container>
            </Box>
         
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


      <Box className={classes.wrap5}>
        <Container>
          <Grid container sx={{ justifyContent: { lg: "auto", xs: "center" } }}>
           
            {/* <Grid item md={12} sm={12}>
             
            </Grid> */}
            <Grid item md={12}>
              <Box className={classes.bag9}>
                {/* {Data.map((e,i) => {
                  return (
                    <>
                      <Box key={i}>
                        <a href={e.link}><img src={e.img} alt="" style={{width:e.width}}/></a>
                      </Box>
                    </>
                  );
                })} */}
                <TelegramShareButton url={encodeURI(LIVE_DOMAIN+"nftdetailpage/"+nftCollectionId)}>
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
                <WhatsappShareButton url={encodeURI(LIVE_DOMAIN+"nftdetailpage/"+nftCollectionId)}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <TwitterShareButton url={encodeURI(LIVE_DOMAIN+"nftdetailpage/"+nftCollectionId)}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
               {/* <a href={encodeURI(LIVE_DOMAIN+userData?.userName)} target="_blank" style={{color:"#000"}}> <i class="bi bi-discord" style={{fontSize:"2rem"}}></i></a> */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>


      {/* Modal Open Edit name and decs */}

      <Modal show={shows} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Box>
          <Box>
         <form  className={classes.bagr} onSubmit={formik.handleSubmit}>
         <TextField
                name="name"
                id="name"
                placeholder="Enter Name"
                className={classes.bag90}
                // sx={{width:"100%"}}
               
                value={lazyName}
                onChange={(e)=>setLazyName(e.target.value)}
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
              <button  onClick={handleClose}>
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