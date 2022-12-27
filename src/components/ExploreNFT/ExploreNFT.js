import {
  Box,
  Container,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";

import React, { useEffect, useState } from "react";
//   import Header from "../Header/Header";
import { makeStyles } from "@mui/styles";
//   import Data from "../ExploreData";
// import Data from "../../pages/Explore/ExploreData";
import Data1 from "../../pages/Explore/Polygon/PolygonData";
import Data2 from "../../pages/Explore/Solana/SolanaData";
import Data3 from "../../pages/Explore/Wax/WaxData";
import Data4 from "../../pages/Explore/Tezos/TezosData";
import NftBox from "../../pages/Explore/NftBox";
import Polygon from "../../pages/Explore/Polygon/Polygon";
import Solana from "../../pages/Explore/Solana/Solana";
import Tezos from "../../pages/Explore/Tezos/Tezos";
import { getAllNftCollection } from "../../api/ApiCall/nftCollection/getAllNftCollection";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { recentlyListedNft } from "../../api/ApiCall/nftCollection/recentlyListedNft";
import { mostViewNft } from "../../api/ApiCall/nftCollection/mostViewNft";
import { mostLikeNft } from "../../api/ApiCall/nftCollection/mostLikeNft";

import { useQuery, useInfiniteQuery } from "react-query";
import { WOLFPUPS_NFT_address, WOLFPUPS_NFT_address_BSC } from "../../config";
import { getAllNftByChainName } from "../../api/ApiCall/nftCollection/getAllNftByChainName";
import ExploreNFTSingle from "./ExploreNFTSingle";
const useStyle = makeStyles((theme) => ({
  wrap7: {
    "& h3": {
      fontSize: "1.7rem",
      fontWeight: "bold",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
        marginTop: "1rem"
      },
    },
  },
  bag15: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  bag8: {
    // position: "relative",
    margin: "0",
    height: "auto",
    position: "relative",
    "& h6": {
      // margin:"1rem 0 0 0",
      //   textAlign: "center",
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
      padding: "10px  ",
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
      "& i": {
        fontSize: "1.5rem",
        fontWeight: "bold",
      },
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
    width: "13%",
    margin: "0 auto",
  },
  hjk: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column !important",
      display: "flex",
    },
  },
  bin1: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "flex-start !important",
    },
    "& h5": {

      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem"
      },
    }
  },
  sel: {
    "& .MuiSelect-select": {
      // display:"flex",
      // gap:"5px",
      textAlign: "start",
      padding: "6px 18px !important"
    }
  }
}));
const ExploreNFT = () => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  // const [show2, setShow2] = useState(true);
  // const [show3, setShow3] = useState(true);
  // const [show4, setShow4] = useState(true);
  const [chainName, setChainName] = useState({ Ethereum: "Ethereum", BSC_Testnet: "BSC Testnet" })

  const Active = () => {
    setShow(!show);

    // setTimeout(() => {
    //   setShow(!show)
    // }, 1000);
  };
  const inActive = () => {
    setChainName({ Ethereum: "Ethereum", BSC_Testnet: "BSC Testnet" })
    setShow1(!show1);
  };
  // const DisActive = () => {
  //   setShow2(!show2);
  // };
  // const unActive = () => {
  //   setShow3(!show3);
  // };
  // const DActive = () => {
  //   setShow4(!show4);
  // };



  // const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
  //   useInfiniteQuery(
  //     ["getAllNftCollection"],
  //     ({ pageParam = 0 }) => getAllNftCollection(pageParam),
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

  const { data: dataEthereum, fetchNextPage: fetchNextPageEthereum, hasNextPage: hasNextPageEthereum, isFetchingNextPage: isFetchingNextPageEthereum, isFetching: isFetchingEthereum } =
    useInfiniteQuery(
      ["getAllNftByChainName", chainName?.Ethereum],
      ({ pageParam = 0 }) => getAllNftByChainName(pageParam, chainName?.Ethereum),
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

  const { data: dataBsc_Testnet, fetchNextPage: fetchNextPageBsc_Testnet, hasNextPage: hasNextPageBsc_Testnet, isFetchingNextPage: isFetchingNextPageBsc_Testnet, isFetching: isFetchingBsc_Testnet } =
    useInfiniteQuery(
      ["getAllNftByChainName", chainName?.BSC_Testnet],
      ({ pageParam = 0 }) => getAllNftByChainName(pageParam, chainName?.BSC_Testnet),
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

        // onSuccess:(data)=>{
        //   setLoading(true)
        // }

      }
    );

  const [filter, setFilter] = useState(0);
  // console.log(filter);

  // const _recentlyListedNft = useQuery(
  //   ["recentlyListedNft"],
  //   recentlyListedNft,
  //   {}
  // );
  // const _mostViewNft = useQuery(["mostViewNft"], mostViewNft, {});
  // const _mostLikeNft = useQuery(["mostLikeNft"], mostLikeNft, {});

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  const classes = useStyle();

  const netWorkArray = [{
    "value": "Ethereum",
    "label": "featured NFTs"
  },
    // {
    //   "value" : "BSC Testnet",
    //   "label" : "Binance Testnet"
    // }
  ];

  // const networkLabels = {
  //   "BSC Testnet" : "Binance Testnet",
  //   "Ethereum" : "Ethereum",
  // }
  const [activeNetworks, setActiveNetworks] = useState(["Ethereum", "BSC Testnet"])

  useEffect(() => {
    // alert(activeNetworks.length)
  }, [activeNetworks])

  const toggleActiveNetwork = async (_v) => {
    let _activeNetworks = activeNetworks;
    if (_activeNetworks.includes(_v)) {
      let _temp = [];
      activeNetworks.map((v, i) => {
        if (v != _v) {
          _temp.push(v);
        }
      })
      setActiveNetworks(_temp);
    }
    else {


      setActiveNetworks(oldArray => [...oldArray, _v]);


    }
  }
  return (
    <>
      <Box className={classes.wrap7}>

        {/* <Grid container className={classes.hjk}> */}
        <Grid item md={12}>
          <Box sx={{
            textAlign: "center",
            margin: "1rem 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }} >
            <Box className={classes.bag15}>
              {/* {
                netWorkArray.map((v,i) => {
                  return (
                    
                    <FormControlLabel
                      control={<Checkbox  defaultChecked onClick={() => toggleActiveNetwork(v.value)} />}
                      label={v.label}
                    />
                  )
                })
              } */}


            </Box>

            {/* <FormControl sx={{ m: 1, minWidth: 150 }}>
                <Select
                className={classes.sel}
                  value={filter}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  
                >
                  <MenuItem value={0} disableRipple >
                    Default
                  </MenuItem>
                  <MenuItem value={1} disableRipple>
                    Recently listed
                  </MenuItem>
                  
                  <MenuItem disableRipple value={2}>
                    Most viewed
                  </MenuItem>
                  <MenuItem disableRipple value={3}>
                    Most liked
                  </MenuItem>
                </Select>
          
              </FormControl> */}
          </Box>
        </Grid>
        {/* {activeNetworks.length} */}
        {
          netWorkArray.length > 0 && netWorkArray.map((v, i) => {
            if (activeNetworks.includes(v.value)) {
              return (
                <ExploreNFTSingle label={v.label} network={v.value} filter={filter} />
              )
            }
          })
        }




      </Box>
    </>
  );
};

export default ExploreNFT;