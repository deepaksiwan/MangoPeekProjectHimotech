import React, { useState, useContext } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  CircularProgress,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { data } from "autoprefixer";
import NftBox from "../../pages/Explore/NftBox";
import { getMyNftCollection } from "../../api/ApiCall/nftCollection/getMyNftCollection";
import { useQuery, useInfiniteQuery } from "react-query";
import { UserContext } from "../../context/User/UserContext";
import { getNftCollectionByChainNameAndUserName } from "../../api/ApiCall/nftCollection/getNftCollectionByChainNameAndUserName";
import {getAllNftByUserName} from "../../api/ApiCall/nftCollection/getAllNftByUserName"

const useStyle = makeStyles((theme) => ({
  wrap5: {
    padding: "2rem 0 ",

    "& h2": {
      fontSize: "2rem",
      fontWeight: "bold",
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
  bag11: {
    display:"flex",
    justifyContent:"center",
    flexWrap: "wrap",
    // width: "13%",
    // margin: "0 auto",
  },
  alert:{
[theme.breakpoints.down("sm")]:{
  fontSize:"10.5px !important" ,
}
  }
}));
const AllNFT = ({userName}) => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(false);
  const [totalNftPages,setTotalNftPages] = useState(5);
  const [{ token,userData }] = useContext(UserContext);
  const [chainName,setChainName]=useState({Ethereum:"Ethereum",BSC_Testnet:"BSC Testnet"})
  const Active = () => {
    setShow(!show);

    // setTimeout(() => {
    //   setShow(!show)
    // }, 1000);
  };
  const inActive = () => {
    setChainName({Ethereum:"Ethereum",BSC_Testnet:"BSC Testnet"})
    setShow1(!show1);
  };


  const {data:dataByUserName}=useQuery(
    ["getAllNftByUserName",userName],
    ()=>getAllNftByUserName(userName),{
     onSuccess : (data) => {
      setTotalNftPages(Math.ceil(data?.responseResult.length/6))
     }   
    },
    
  )

  // const [nfts, setNfts] = useState([])
  // const {isLoading}=useQuery(
  //   ["getMyNftCollection",token],
  //   ()=>getMyNftCollection(token),
  //   {
  //     onSuccess:(data)=>{
  //       if(data?.success===true){
  //         setNfts(data?.responseResult);
  //       }
  //     }
  //   }
  // )

  // infinite Scroll
  // const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
  //   useInfiniteQuery(
  //     ["getMyNftCollection", token],
  //     ({ pageParam = 0 }) => getMyNftCollection(pageParam, token),
  //     {
  //       refetchOnWindowFocus: false,
  //       getNextPageParam: (lastPage, pages) => {
  //         if (pages.length < 4) {
  //           return pages.length + 1;
  //         } else {
  //           return undefined;
  //         }
  //         // Here I'm assuming you have access to the total number of pages

  //         // If there is not a next page, getNextPageParam will return undefined and the hasNextPage boolean will be set to 'false'
  //       },
  //     }
  //   );


  const { data:dataEthereum, fetchNextPage:fetchNextPageEthereum, hasNextPage:hasNextPageEthereum ,isFetchingNextPage:isFetchingNextPageEthereum, isFetching:isFetchingEthereum } =
  useInfiniteQuery(
    ["getNftCollectionByChainNameAndUserName",chainName?.Ethereum,userName??userData?.userName],
    ({ pageParam = 0 }) => getNftCollectionByChainNameAndUserName(pageParam,chainName?.Ethereum,userName??userData?.userName),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage, pages) => {
        if (pages.length <= totalNftPages) {
          return pages.length + 1;
        } else {
          return undefined;
        }
        // Here I'm assuming you have access to the total number of pages

        // If there is not a next page, getNextPageParam will return undefined and the hasNextPage boolean will be set to 'false'
      },

    }
  );

  const { data:dataBsc_Testnet, fetchNextPage:fetchNextPageBsc_Testnet, hasNextPage:hasNextPageBsc_Testnet ,isFetchingNextPage:isFetchingNextPageBsc_Testnet, isFetching:isFetchingBsc_Testnet } =
  useInfiniteQuery(
    ["getNftCollectionByChainNameAndUserName",chainName?.BSC_Testnet,userName??userData?.userName],
    ({ pageParam = 0 }) => getNftCollectionByChainNameAndUserName(pageParam,chainName?.BSC_Testnet,userName??userData?.userName),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage, pages) => {
        if (pages.length < 4) {
          return pages.length + 1;
        } else {
          return undefined;
        }
        // Here I'm assuming you have access to the total number of pages

        // If there is not a next page, getNextPageParam will return undefined and the hasNextPage boolean will be set to 'false'
      },

    }
  );


  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrap5}>
        <Container>
          <Grid>
            {/* <Grid item md={12} sm={12}>
              {/* <Typography variant="h2">All NFTs</Typography>  
              <Box className={classes.bag11}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        onClick={Active}
                      />
                    }
                    label="Ethereum"
                  />
                </FormGroup>
 
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                      defaultChecked
                      onClick={inActive} 
                      />
                    }
                    label="Binance"
                  />
                </FormGroup>  
              
              </Box>
            </Grid> */}
            
            {show ? (
              <>
                {/* <Grid> */}
                {/* <Grid item md={12} sm={12}> */}
                  <Typography variant="h2" sx={{ textAlign: "left",fontSize:"1.95rem !important", fontWeight: "bold !important",textTransform:"capitalize" }}>
                   ALL WOLF PUP NFTs
                  </Typography>
                {/* </Grid> */}
                {/* </Grid> */}
                { (
                  <>
                  {isFetchingEthereum && !!dataEthereum?.pages[0] && !isFetchingNextPageEthereum ? (
                      <Box justifyContent="center" sx={{display:"flex"}}>
                      <CircularProgress color="primary" size={30}/>
                      </Box>
                    ) : null}
                  <Grid container justifyContent="center">
                    {dataEthereum?.pages[0] ? (
                      dataEthereum?.pages.map((page, i) =>
                        page?.responseResult.map((nfts, index) => {
                          return (
                            <>
                              <Grid item key={index} lg={4} md={4} sm={6}>
                                <NftBox data={nfts} />
                              </Grid>
                            </>
                          );
                        })
                      )
                    ) : (
                      <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",padding:"0 10px 0 15px",textAlign:"center"}}>
                      <Typography variant="h5"> No NFTs Added Yet </Typography>
                      <Typography variant="body1" className={classes.alert}> (Please note, it may take 3-5 minutes initially to show up your data)</Typography>
                      </Box>
                    )
                    }
                    
                    
                    <Box sx={{ "display": "block", "width": "100%", "textAlign": "center", marginTop: "1rem" }}>
                      {dataEthereum?.pages[0] && hasNextPageEthereum && (
                        <Button
                          variant="contained"
                          disabled={!hasNextPageEthereum}
                          onClick={() => fetchNextPageEthereum()}
                          sx={{
                            background: "#000",
                            color: "#fff",
                            border: "none",
                            borderRadius: "20px",
                            // margin: "10px",
                            fontSize: "0.7rem",
                            fontWeight: "bold",
                            margin:"50px 0"
                          }}
                        >
                          Load More
                        </Button>
                      )}
                    </Box>
                  </Grid>
                  </>
                
                 ) 
  
               }
               </>
            ) :null
            }

            {show1 ? (
              <>
                <Grid item md={12} sm={12}>
                  <Typography variant="h5" sx={{ textAlign: "left", fontWeight: "bold" }}>
                    Binance NFTs
                  </Typography>
                </Grid>
                { (
                  <Grid container justifyContent="center">
                    {dataBsc_Testnet?.pages[0] ? (
                      dataBsc_Testnet?.pages.map((page, i) =>
                        page?.responseResult.map((nfts, index) => {
                          return (
                            <>
                              <Grid item key={index} lg={4} md={4} sm={6}>
                                <NftBox data={nfts} />
                              </Grid>
                            </>
                          );
                        })
                      )
                    ) : (

                      <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",padding:"0 10px 0 15px",textAlign:"center"}}>
                      <Typography variant="h5"> No NFTs Added Yet </Typography>
                      <Typography variant="body1" className={classes.alert}> (Please note, it may take 3-5 minutes initially to show up your data)</Typography>
                      </Box>
               
                    )
                    }
                    {isFetchingBsc_Testnet && !!dataBsc_Testnet?.pages[0] && !isFetchingNextPageBsc_Testnet ? (
                      <CircularProgress color="primary" />
                    ) : null}
                    <Box sx={{ "display": "block", "width": "100%", "textAlign": "center", marginTop: "1rem" }}>
                      {dataBsc_Testnet?.pages[0] && hasNextPageBsc_Testnet && (
                        <Button
                          variant="contained"
                          disabled={!hasNextPageBsc_Testnet}
                          onClick={() => fetchNextPageBsc_Testnet()}
                          sx={{
                            background: "#000",
                            color: "#fff",
                            border: "none",
                            borderRadius: "20px",
                            margin: "10px",
                            fontSize: "0.7rem",
                            fontWeight: "bold",
                          }}
                        >
                          Load More
                        </Button>
                      )}
                    </Box>
                  </Grid>
                
                )}
              </>
            ) : null}
          </Grid>
       </Container>
      </Box>
    </>
  );
};

export default AllNFT;
