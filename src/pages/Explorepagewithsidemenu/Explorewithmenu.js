import { Box, Container, Grid, Typography} from "@mui/material";
import React, { useContext } from "react";
import Header2 from "../../components/Header/Header2";
import { makeStyles } from "@mui/styles";
import ExploreNFT from "../../components/ExploreNFT/ExploreNFT";
import { UserContext } from "../../context/User/UserContext";
import Withmenucomp from "./Withmenucomp";
import UserTotalNftProfile from "./UserTotalNftProfile"
import { getAllNftByUserName } from "../../api/ApiCall/nftCollection/getAllNftByUserName"
import { useQuery } from "react-query";
import Loader from "../Loader/Loader"

const useStyle = makeStyles({

    explorenft: {
        //marginLeft: '20rem',
        // justifyContent: "center",
        marginTop: '6rem !important',
        marginLeft: "3rem",
        // "& .css-1lj5egr-MuiGrid-root":{
        //     flexBasis: "46.333333%",
        //     maxWidth: "48.333333%",
        // },
        '@media(max-width : 900px)': {
            marginLeft: "0rem",
            marginRight: "0rem",
            marginTop: '2rem !important',

        }

    },
    maindiv: {
        padding: '30px 15px 0px',
        display: 'flex',
        '@media(max-width : 600px)': {
            display: 'inherit !important',
            width: "100%",

        }

    },
    NoNftAdded:{
        justifyContent: "center"
        
        

     },
   

})


const Explorepagewithsidemenu = () => {
    const classes = useStyle();
    const [{ token, userData }, dispatch] = useContext(UserContext);

    const { data: dataByUserName, isLoading: loadingData, refetch } = useQuery(
        ["getAllNftByUserName", userData?.userName],
        () => getAllNftByUserName(userData?.userName), {
        onSuccess: (data) => {
            if (data.success === true) {
                refetch()
            }

        }
    },
    )
    return (
        <>
            <Container>
                <Header2 />
                <Box className={classes.maindiv}>
                    <Withmenucomp userProfile={userData} Dispatch={dispatch} NftDataByUserName={dataByUserName} />
                    <Box className={classes.explorenft}>
                        {/* <ExploreNFT /> */}
                        {/* <UserTotalNftProfile NftDataByUserName={dataByUserName} LoadingData={loadingData} /> */}
                        <Grid  container spacing={2} >
                            {loadingData == false ? dataByUserName?.responseResult.map((nfts, index) => {
                                return (
                                    <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
                                        <UserTotalNftProfile data={nfts} />
                                    </Grid>

                                )
                            })
                                : <Typography className={classes.NoNftAdded}>
                                    <Loader />
                                </Typography>
                            }
                            {dataByUserName?.responseResult?.length == 0 || dataByUserName == undefined &&
                                <Typography className={classes.NoNftAdded}>
                                    No NFTs Added Yet
                                </Typography>}

                        </Grid>
                    </Box>

                </Box>
                {/* <Footer2 /> */}
            </Container>
        </>
    )
}

export default Explorepagewithsidemenu