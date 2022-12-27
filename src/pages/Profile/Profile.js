import React,{useContext, useEffect, useState} from "react";
import EditProfile from "../../components/EditProfile/EditProfile";
import Header from "../../components/Header/Header";
import { Box, Container, Grid,Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PinnedNFT from "../../components/PinnedNFT/PinnedNFT";
import { UserContext } from "../../context/User/UserContext";
import { useNetwork, useSwitchNetwork, useAccount } from "wagmi";
import {useQuery, useQueryClient } from "react-query";
import WOLFPUPS_NFT_ABI from "../../config/WOLFPUPS_NFT_ABI.json"
import {WOLFPUPS_NFT_address, WOLFPUPS_NFT_address_BSC} from "../../config/index";
import {useContract,useProvider } from "wagmi";
import {getUserNFTByTokenURI} from "../../api/ApiCall/getNftByTokenURI";
import {addorUpdateNftCollection} from "../../api/ApiCall/nftCollection/addorUpdateNftCollection";
import {getAllNftByUserName} from "../../api/ApiCall/nftCollection/getAllNftByUserName"
import { useParams } from "react-router-dom";
import { actionTypes } from "../../context/User/UserReducer";
import { viewWallet } from "../../api/ApiCall/viewWallet";
import {getProfileByUserName} from "../../api/ApiCall/getProfileByUserName"

const useStyle = makeStyles((theme)=>({
  wrap5: {
    padding: "2rem 0 ",
    [theme.breakpoints.down("sm")]: {

     },
    "& div": {
      " & img": {
        margin: "1rem auto",
        width: "16%",
        borderRadius: "50%",
        
      },
      "& h6": {
        // margin:"1rem 0 0 0",
        textAlign: "center",
        fontWeight:"bold",
        fontSize:"1.1rem"
      },
      "& p": {
        // margin:"1rem 0 0 0",
        textAlign: "center",
      },
    },
  },
  wer:{
    [theme.breakpoints.down("md")]: {
      justifyContent:"center"
    },
  }
}));
const Profile =  () => {
  const {userName}=useParams()
  // console.log(userName);
  const { chain } = useNetwork()
  const { chains, switchNetwork } =useSwitchNetwork()
  const provider = useProvider()
  const queryClient=useQueryClient();
  const {address,isConnected}=useAccount()
  const classes = useStyle();
  const [{userData,userUpdateData,updatePic,token},] = useContext(UserContext);
  
// console.log(UserContext);
  const {data:dataProfileByUserName}=useQuery(
    ["getProfileByUserName",userName],
    ()=>getProfileByUserName(userName),{
      onSuccess:(data)=>{
        // console.log(data);
      }
    },
  )

 const {data:dataByUserName}=useQuery(
  ["getAllNftByUserName",userName],
  ()=>getAllNftByUserName(userName),{

  },
)


const {
  data,
  isLoading: walletLoading,
} = useQuery(["viewWallet"], viewWallet, {
  onSuccess: (data) => {
    try {
      if (data?.success === true) {
        // console.log(data?.responseResult);
        // dispatch({ type: actionTypes.SET_WALLET, value: data?.responseResult[0]?.wallets });
        // toast.success(JSON.stringify("You wallets fetched Successfully"));
      } else {
        // toast.error(JSON.stringify(data));
      }
    } catch (error) {
      // toast.error(JSON.stringify(error));
    }
  },
});

useEffect(()=>{
  if(!token || token){
    queryClient?.invalidateQueries("getAllNftByUserName");
    queryClient?.invalidateQueries("viewWallet");
    queryClient?.invalidateQueries("getProfileByUserName")
    queryClient?.invalidateQueries("editProfile");
  }
},[])

// console.log(dataProfileByUserName?.data);

return (
  <>
    <Header />
    {
    dataProfileByUserName?.data.userName ? (
   
      <>

        
      <Box className={classes.wrap5}>
      <Container >
        <Grid container spacing={2} className={classes.wer}>
          <Grid item md={12}>
            <div>
              <img
                src={ dataProfileByUserName?.data.profilePic ?`${dataProfileByUserName?.data.profilePic .replace("ipfs://","https://ipfs.io/ipfs/")}`:null }
                alt=""
              />
              <h6>@{dataProfileByUserName?.data.userName }</h6>
              { !!dataByUserName?.responseResult &&
              <h6>Total NFTs Owned{" "}{dataByUserName?.responseResult.length ?? 0}</h6>
              }
              <p>
              { dataProfileByUserName?.data.bio}
              </p>
           
            </div>
              <Box sx={{"display":"flex","justifyContent":"center","gap":"2rem",flex:"wrap"}}>
             {dataProfileByUserName?.data.twitterName && <a href={`https://twitter.com/${dataProfileByUserName?.data.twitterName}`} target="_blank"  style={{color:"#000"}}>
              <i class="bi bi-twitter" style={{marginRight:"8px",color:"gray"}}></i>
              Twitter
              </a>
             }
             {
             dataProfileByUserName?.data.facebookName &&
              <a href={`https://www.facebook.com/${dataProfileByUserName?.data.facebookName}`} target="_blank"   style={{color:"#000"}}>
              <i class="bi bi-facebook" style={{marginRight:"8px",color:"gray"}}></i>
              Facebook
              </a>
             }
             {
              dataProfileByUserName?.data.personalURL &&
              <a  href={`https://${dataProfileByUserName?.data.personalURL}`} target="_blank"  style={{color:"#000"}}>
              <i class="bi bi-globe" style={{marginRight:"8px",color:"gray"}}></i>
              Personal URL
              </a>
             }
             </Box>
             <Box mt={2}>
           
           {  (dataProfileByUserName?.data.userName === userData?.userName) && 
               <EditProfile userName={``} />
                 }
           </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    {dataByUserName?.responseResult.length == 0 &&  
      
      <Container>
      <Grid container>
      <Grid   item md={12}  sx={{marginTop:5}}>
        <Box alignItems="center" className={classes.bag5}>
        <Typography  variant='h6' textAlign="center">This user has not added any wallets.</Typography>
        </Box>
        </Grid>
      </Grid>
    </Container>
      
    }
    <PinnedNFT  userName={userName}/>
    </>
    
    ):(

      <Container>
      <Grid container>
      <Grid   item md={12}  sx={{marginTop:5}}>
        <Box alignItems="center" className={classes.bag5} sx={{height:"600px",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Typography  variant='h6' textAlign="center">No User Found.</Typography>
        </Box>
        </Grid>
      </Grid>
    </Container>
    )
    
    }
  </>
);

};

export default Profile;


