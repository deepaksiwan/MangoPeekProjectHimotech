import {
  Box,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import NftBox from "../../pages/Explore/NftBox";
import { getAllNftCollection } from "../../api/ApiCall/nftCollection/getAllNftCollection";
import { useQuery, useInfiniteQuery } from "react-query";
// import { WOLFPUPS_NFT_address, WOLFPUPS_NFT_address_BSC } from "../../config";
import { getAllNftByChainName } from "../../api/ApiCall/nftCollection/getAllNftByChainName";
import Loader from "../.././pages/Loader/Loader"
 import ExploreNFTHeading from "./ExploreNFTHeading";






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
  hding: {
    boxShadow: 'inset 0px 7px 15px -6px #00000024',
    backgroundColor: '#efefef96',
    borderRadius: '40px',
    padding: '8px 20px',
    width: '83%',
    textAlign: 'left',
  },
  viewbtn: {
    color: '#666666 !important',
    textTransform: 'none !important',
    fontSize: '18px !important',
    fontWeight: '700 !important',
    '&:hover': {
      backgroundColor: 'transparent !important'
    }
  },
  loadmorebtn: {
    backgroundColor: '#FF5F29 !important',
    color: '#fff !important',
    borderRadius: '30px !important',
    padding: '10px 24px !important',
  }
}));
const ExploreNFTSingle = (props) => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [totalNftPages, setTotalNftPages] = useState(5);
  const [chainName, setChainName] = useState({ BSC_Testnet: "BSC Testnet" })
  const [filter, setFilter] = useState(0);

  const Active = () => {
    setShow(!show);
  };
  const inActive = () => {
    setChainName({ Ethereum: "Ethereum", BSC_Testnet: "BSC Testnet" })
    setShow1(!show1);
  };


  const { data } =
    useQuery(
      ["getAllNftCollection"],
      getAllNftCollection,
      {
        onSuccess: (data) => {
          setTotalNftPages(Math.ceil(data?.responseResult.length));
        }

      }
    );

    //console.log("datasmdfdnsm", data)

  

  const { data: dataEthereum, fetchNextPage: fetchNextPageEthereum, hasNextPage: hasNextPageEthereum, isFetchingNextPage: isFetchingNextPageEthereum, isFetching: isFetchingEthereum } =
    useInfiniteQuery(
      ["getAllNftByChainName", props.network, props.filter],
      ({ pageParam = 0 }) => getAllNftByChainName(pageParam, props.network, props.filter),
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



    

    


    //  console.log("dataEthereum", dataEthereum?.pages[0]?.responseResult[1]?.userId?.firstName
     
 


  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  const classes = useStyle();


  return (
    <>
      <Box className={classes.wrap7}>

        {/* <Grid item lg={6}>
          <ExploreNFTHeading/>
        </Grid> */}

        <Box>
          {filter === 0 && (
            <Grid container justifyContent="center">
              {dataEthereum?.pages[0] &&
                dataEthereum?.pages.map((page, i) =>
                  page?.responseResult?.map((nfts, index) => {
                    return (
                      <>
                        <Grid item key={index} lg={4} md={4} sm={6}>
                          <NftBox styles={{ curser: "pointer" }} data={nfts} />
                        </Grid>
                      </>
                    );
                  })
                )}
              {isFetchingEthereum && !isFetchingNextPageEthereum ? (
                <Typography> <Loader /></Typography>
              ) : null}
              <Box sx={{ "display": "block", "width": "100%", "textAlign": "center", marginTop: "1rem", marginBottom: '2rem' }}>
                {(dataEthereum?.pages[0] && hasNextPageEthereum) && (
                  <Button
                    variant="contained"
                    disabled={!hasNextPageEthereum}
                    onClick={() => fetchNextPageEthereum()}
                    className={classes.loadmorebtn}
                  >
                    Load More
                  </Button>

                )}
              </Box>
            </Grid>
          )}

        </Box>
        {!dataEthereum?.pages[0] && show && (
          <Grid container md={12} justifyContent="center" className={classes.bin1}>
            <Typography variant="h5">No NFTs Added Yet</Typography>
          </Grid>

        )}

      </Box>
    </>
  );
};

export default ExploreNFTSingle;