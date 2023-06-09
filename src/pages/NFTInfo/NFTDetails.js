import { Badge, Box, Button, Checkbox, Container, FormControl, Grid, InputLabel, List, MenuItem, Select, Typography, } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer2 from "../../components/Footer/Footer2";
import Header from "../../components/Header/Header";
import { makeStyles } from "@mui/styles";
import arrowright from '../../../src/pages/images/arrowright.svg'
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import messagestore from '../../../src/pages/images/messagestore.svg'
import nftimg from '../../../src/pages/images/nftimg.svg'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import nfteye from '../../../src/pages/images/nfteye.svg'
import CountdownTimer from './CountdownTimer';
import ethrepo from '../../../src/pages/images/ethrepo.svg'
import discrip from '../../../src/pages/images/discrip.svg'
import divider from '../../../src/pages/images/divider.svg'
import ClearIcon from '@mui/icons-material/Clear';
import divider2 from '../../../src/pages/images/divider2.svg'
import divider3 from '../../../src/pages/images/divider3.svg'
import divider4 from '../../../src/pages/images/divider4.svg'
import historyp from '../../../src/pages/images/historyp.svg'
import properties2 from '../../../src/pages/images/properties2.svg'
import club from '../../../src/pages/images/club.svg'
import exclusive from '../../../src/pages/images/exclusive.svg'
import Graph from "./Graph";
import TableLeft from "./TableLeft";
import TableLeft2 from "./TableLeft2";
import percentage from '../../../src/pages/images/percentage.svg'
import swaparrow from '../../../src/pages/images/swaparrow.svg'
import ellipsenft from '../../../src/pages/images/ellipsenft.svg'
import { Link } from "react-router-dom";
import NftBox from "../Explore/NftBox";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getNftByNftCollectionId } from "../../api/ApiCall/nftCollection/getNftByNftCollectionId"
import { getAllNftCollection } from "../../api/ApiCall/nftCollection/getAllNftCollection";
import Loader from "../Loader/Loader"





const NftBoxs = [
    {
        id: 1,
        Image: nftimg,
    },
    {
        id: 2,
        Image: nftimg,
    },
    {
        id: 3,
        Image: nftimg,
    },
    {
        id: 4,
        Image: nftimg,
    }
]







const useStyle = makeStyles({
    buynowbtn: {
        backgroundColor: '#33CC33 !important',
        color: '#fff !important',
        padding: '12px 20px !important',
        borderRadius: '30px !important',
        width: '180px',
        textTransform: 'none !important',
        '@media(max-width : 1200px)': {
            marginTop: '15px !important',
            '@media(max-width : 600px)': {
                width: '100%',
            }
        }
    },
    clearbtn: {
        color: '#FF5F29',
        marginLeft: '15px',
        "& : hover": {
            color: 'FF5F29',
        },
        '@media(max-width : 600px)': {
            marginLeft: '0px',
            marginTop: '15px !important',
            display: 'block'
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
        marginLeft: '15px !important',
        '@media(max-width : 600px)': {
            marginLeft: '0px !important',
            marginTop: '15px !important',
            width: '100%',
            justifyContent: 'space-between !important'
        }
    },
    makeofferbtn: {
        backgroundColor: '#7C7C7C !important',
        color: '#fff !important',
        padding: '12px 20px !important',
        borderRadius: '30px !important',
        marginTop: '15px !important',
        width: '180px',
        textTransform: 'none !important',
        '@media(max-width : 1200px)': {
            marginLeft: '15px !important',
            '@media(max-width : 600px)': {
                width: '100%',
                marginLeft: '0px !important',
            }
        }
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
        padding: '6rem 0rem 6rem 0rem',
        '@media(max-width : 900px)': {
            padding: '90px 0px 80px 0px',
            '@media(max-width : 600px)': {
                padding: '90px 0px 30px 0px',
            }
        }
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
        '@media(max-width : 1200px)': {
            marginTop: '30px',
            '@media(max-width : 600px)': {
                marginTop: '20px',
                padding: '15px',
                textAlign: 'center'
            },
        },
    },
    owned: {
        display: 'flex',
        padding: '20px 0px',
        '@media(max-width : 600px)': {
            justifyContent: 'space-between',

        }

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
        '@media(max-width : 600px)': {
            display: 'inherit'
        }
    },
    flex: {
        display: 'flex',
        width: '20% !important',
        '@media(max-width : 1200px)': {
            width: '50% !important',
            '@media(max-width : 900px)': {
                width: '100% !important',
                display: 'inherit',
                '@media(max-width : 600px)': {
                    justifyContent: 'center',
                }
            },
        },
    },
    flex7: {
        display: 'flex',
        width: '40% !important',
        '@media(max-width : 1200px)': {
            width: '60% !important',
            '@media(max-width : 900px)': {
                width: '100% !important',
                '@media(max-width : 600px)': {
                    justifyContent: 'center',
                }
            }
        }
    },
    flex6: {
        display: 'flex',
        width: '90% !important',
        '@media(max-width : 900px)': {
            width: '100% !important',
            '@media(max-width : 600px)': {
                justifyContent: 'center',
            }
        }
    },
    flex5: {
        display: 'flex',
        marginTop: '30px',
        alignItems: 'center',
        '@media(max-width : 900px)': {
            width: '100% !important',
            '@media(max-width : 600px)': {
                display: 'inherit',
                textAlign: 'center'
            }
        }
    },
    flex2: {
        display: 'flex',
        justifyContent: 'space-between',
        '@media(max-width : 900px)': {
            width: '100% !important',
        }
    },
    flex3: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px',
        '@media(max-width : 900px)': {
            width: '100% !important',
            '@media(max-width : 600px)': {
                marginTop: '10px',
            }
        }
    },
    divider: {
        width: '100%',
        alignSelf: 'center',
        '@media(max-width : 900px)': {
            display: 'none'
        }

    },
    propertiesbox: {
        border: '1px solid #FFCC00',
        boxShadow: '0px 10px 10px -6px #00000036',
        padding: '15px',
        borderRadius: '50px',
        backgroundColor: '#F2F2F2',
        marginTop: '8px !important',
        '@media(max-width : 1200px)': {
            padding: '15px 35px',
        }
    },
    pboxwrp: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        '@media(max-width : 600px)': {
            display: 'inherit'
        }
    },
    rbx: {
        textAlign: 'center'
    },

    dis_sidebox: {
        padding: '30px !important',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '40px',
        backgroundColor: '#efefef96',
        '@media(max-width : 600px)': {
            padding: '15px !important',
        }
    },
    dis_sidebox2: {
        padding: '30px !important',
        borderRadius: '40px',
        backgroundColor: 'transparent',
        '@media(max-width : 600px)': {
            padding: '15px !important',
        }
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
        paddingTop: '185px',
        '@media(max-width : 900px)': {
            paddingTop: '30px',
        }

    }

})

const label2 = { inputProps: { "aria-label": "Checkbox demo" } };
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const NFTDetails = () => {
    const classes = useStyle();
    const { id: nftDetails } = useParams();
    const [fourNftdata, setFourNftData] = useState([])


    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;


    const [dropdown, setDropdown] = React.useState('');

    const handleChangeDropdown = (event) => {
        setDropdown(event.target.value);
    };

    const [dropdown2, setDropdown2] = React.useState('');

    const handleChangeDropdown2 = (event) => {
        setDropdown2(event.target.value);
    };


    const { data } = useQuery(["getNftByNftCollectionId", nftDetails],
        () => getNftByNftCollectionId(nftDetails), {
        onSuccess: (data) => {
            // console.log(data?.responseResult.likes)

        }
    })


    const { data: fourNftData } =
        useQuery(
            ["getAllNftCollection"],
            getAllNftCollection,
            {
                onSuccess: (fourNftData) => {
                    // setFourNftData(fourNftData?.responseResult?.slice(-4))
                    let randomfourNft = [];
                    if (fourNftData?.responseResult?.length) {
                        for (let i = fourNftData?.responseResult?.length; i >= 0; i--) {
                            var randomnft = Math.floor(Math.random() * i);
                            randomfourNft.push(fourNftData?.responseResult[randomnft]);
                            if (i == fourNftData?.responseResult?.length - 3) break;
                        }
                    }
                    setFourNftData(randomfourNft)
                }
            }
        );


    return (
        <>
            <Container>
                <Header />
                <Box className={classes.maindiv}>
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <Box className={classes.nftinfobx}>
                                <Typography component="img" src={data?.responseResult?.metadata?.image ? `${data?.responseResult?.metadata?.image.replace("ipfs://", "https://wizard.mypinata.cloud/ipfs/")}` : ""} width="100%"></Typography>
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
                                            {/* <Box sx={{ display: 'flex', marginLeft: '10px' }}>
                                                <Checkbox
                                                    {...label}
                                                    icon={<BookmarkBorderIcon sx={{ color: '#33CC33' }} />}
                                                    checkedIcon={<BookmarkIcon sx={{ color: '#33CC33' }} />}
                                                />
                                            </Box> */}
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: "center" }}>
                                        <Button className={classes.viewbtn} endIcon={<Box sx={{ ml: '10px' }} component="img" src={arrowright} />}>
                                            More
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <Box className={classes.nftrbox}>
                                <Box>
                                    {/* <Typography variant="h6" color="#FF5F29">Lorem ipsum Club of Dot matrix</Typography> */}
                                    <Typography variant="h6" color="#FF5F29">{data?.responseResult ? data?.responseResult?.lazyName : "lazyname"}</Typography>
                                    {/* <Typography variant="h4" mt={1} fontWeight={700} color="#7C7C7C">Lorem ipsum club of Dot Matrix</Typography> */}
                                    <Typography variant="h4" mt={1} fontWeight={700} color="#7C7C7C">{data?.responseResult?.metadata?.description}</Typography>
                                    <Typography variant="h4" mt={1} fontWeight={700} color="#ADADAD">{data?.responseResult ? data?.responseResult?.metadata?.name : "name"}</Typography>
                                </Box>
                                <Box className={classes.owned}>
                                    <Box>
                                        <Typography color="#7C7C7C">Owned by
                                            <Typography component="span" color="#FF5F29" ml={1}>{data?.responseResult?.tokenOwner.substring(0, 6) + "..." + (data?.responseResult?.tokenOwner.length - 6)}</Typography>
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', marginLeft: '30px' }}>
                                        <Typography component="img" src={nfteye}></Typography>
                                        <Typography component="span" color="#7C7C7C" ml={1}>{data?.responseResult?.viewsCount} Views</Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography variant="h6" color="#7C7C7C" fontWeight={700}>Sale ends September 18, 2022 at 2:59 PM GMT +5:30</Typography>
                                    <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                                </Box>
                                <Box className={classes.btnmainwrp}>
                                    <Box>
                                        <Typography variant="h6" color="#7A7A7A" fontWeight={500}>Current Price</Typography>
                                        <Box sx={{ display: 'flex', marginTop: '10px', '@media(max-width : 600px)': { justifyContent: 'center' } }}>
                                            <Typography component="img" src={ethrepo}></Typography>
                                            <Typography variant="h4" fontWeight={700} ml={1} color="#7A7A7A">0.019
                                                <Typography component="span" color="#7A7A7A" fontWeight={600} ml={1}>$27.19</Typography>
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Button className={classes.buynowbtn}>Buy now</Button>
                                        <Button className={classes.makeofferbtn}>Make an offer</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box className={classes.secsecond}>
                        <Grid container spacing={0}>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Box className={classes.dis_sidebox}>
                                    <Box className={classes.flex2}>
                                        <Box className={classes.flex}>
                                            <Box sx={{ width: '20px', alignSelf: 'center' }}><Typography component="img" src={discrip} width="100%"></Typography></Box>
                                            <Box> <Typography variant="h5" fontWeight={700} color="#FF5F29" ml={2}>Description</Typography></Box>
                                        </Box>
                                        <Box sx={{ alignSelf: 'center' }}>
                                            <Typography component="img" className={classes.divider} src={divider} />
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        marginLeft: '35px',
                                        '@media(max-width : 600px)': {
                                            marginLeft: '0px',
                                            marginTop: '15px',
                                            textAlign: 'center'
                                        }
                                    }}>
                                        <Typography color="#AAAAAA" fontWeight={500}>By 5879C
                                            <Typography color="#AAAAAA" fontWeight={500}>{data?.responseResult ? data?.responseResult?.lazyDescription : "lazydesciption"}</Typography></Typography>
                                    </Box>
                                    <Box className={classes.flex3}>
                                        <Box className={classes.flex}>
                                            <Box sx={{ width: '20px', alignSelf: 'center' }}><Typography component="img" src={properties2} width="100%"></Typography></Box>
                                            <Box> <Typography variant="h5" fontWeight={700} color="#FF5F29" ml={2}>Properties</Typography></Box>
                                        </Box>
                                        <Box sx={{ alignSelf: 'center' }}>
                                            <Typography component="img" className={classes.divider} src={divider} />
                                        </Box>
                                    </Box>
                                    <List className={classes.pboxwrp}>
                                        {data?.responseResult?.metadata?.attributes.map((v) => {
                                            return (
                                                <Box className={classes.rbx}>
                                                    <Typography mt={1} color="#7A7A7A">{v.trait_type}</Typography>
                                                    <Box className={classes.propertiesbox}>
                                                        <Typography color="#F9A98D" fontWeight={500}>{v.value}</Typography>
                                                        <Typography color="#A9A9A9">6% have the traite</Typography>
                                                    </Box>
                                                </Box>
                                            )
                                        })}

                                        {/* <Box className={classes.rbx}>
                                            <Typography mt={1} color="#7A7A7A">Background</Typography>
                                            <Box className={classes.propertiesbox}>
                                                <Typography color="#F9A98D" fontWeight={500}>Red</Typography>
                                                <Typography color="#A9A9A9">6% have the traite</Typography>
                                            </Box>
                                        </Box>*/}

                                    </List>
                                    <Box className={classes.flex3}>
                                        <Box className={classes.flex6}>
                                            <Box sx={{ width: '20px', alignSelf: 'center' }}><Typography component="img" src={club} width="100%"></Typography></Box>
                                            <Box> <Typography variant="h5" fontWeight={700} color="#FF5F29" ml={2}>About exclusive app Billionaire Club</Typography></Box>
                                        </Box>
                                        <Box sx={{ alignSelf: 'center' }}>
                                            <Typography component="img" className={classes.divider} src={divider2} />
                                        </Box>
                                    </Box>
                                    <Box className={classes.flex5}>
                                        <Typography display="inline-block" component="img" src={exclusive}></Typography>
                                        <Typography sx={{ marginLeft: '20px', '@media(max-width : 600px)': { marginTop: '20px', marginLeft: '0px' } }} fontWeight={700} color="#AAAAAA">
                                            Exclusive  collection  for  the  best  0% royaltis! Supply  will be reduced to  5000 after we sold that  amount,   the  mutant   airdrop    foreach   holder  and  we  are  working on a   3D  version  that will be claimable in the near  the future for free just gas fees.
                                        </Typography>
                                    </Box>
                                    <Box className={classes.flex3}>
                                        <Box className={classes.flex}>
                                            <Box sx={{ width: '20px', alignSelf: 'center' }}><Typography component="img" src={discrip} width="100%"></Typography></Box>
                                            <Box> <Typography variant="h5" fontWeight={700} color="#FF5F29" ml={2}>Details</Typography></Box>
                                        </Box>
                                        <Box sx={{ alignSelf: 'center' }}>
                                            <Typography component="img" className={classes.divider} src={divider} />
                                        </Box>
                                    </Box>
                                    <Box className={classes.flex}>
                                        <Box p={0} mt={2} component="ul" sx={{ '@media(max-width : 600px)': { textAlign: 'center' } }}>
                                            <Typography component="li" color="#AAAAAA">Contract Address</Typography>
                                            <Typography component="li" color="#AAAAAA">Token ID</Typography>
                                            <Typography component="li" color="#AAAAAA">Token Standard</Typography>
                                            <Typography component="li" color="#AAAAAA">Blockchain</Typography>
                                            <Typography component="li" color="#AAAAAA">Metadata</Typography>
                                            <Typography component="li" color="#AAAAAA">Creator Earnings</Typography>
                                        </Box>
                                        <Box p={0} mt={2} sx={{ marginLeft: '60px', '@media(max-width : 900px)': { marginLeft: '0px', '@media(max-width : 600px)': { textAlign: 'center', } } }} component="ul">
                                            <Typography component="li" color="#AAAAAA">{data?.responseResult?.tokenAddress.substring(0, 6) + "..." + (data?.responseResult?.tokenAddress.length - 6)}</Typography>
                                            <Typography component="li" color="#AAAAAA">{data?.responseResult?.tokenId}</Typography>
                                            <Typography component="li" color="#AAAAAA">Token Standard</Typography>
                                            <Typography component="li" color="#AAAAAA">{data?.responseResult?.chainName}</Typography>
                                            <Typography component="li" color="#AAAAAA">Metadata</Typography>
                                            <Typography component="li" color="#AAAAAA">Creator Earnings</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Box className={classes.dis_sidebox2}>
                                    <Box className={classes.flex2}>
                                        <Box className={classes.flex7}>
                                            <Box sx={{ width: '20px', alignSelf: 'center' }}><Typography component="img" src={historyp} width="100%"></Typography></Box>
                                            <Box> <Typography variant="h5" fontWeight={700} color="#FF5F29" ml={2}>Price History</Typography></Box>
                                        </Box>
                                        <Box sx={{ alignSelf: 'center' }}>
                                            <Typography component="img" className={classes.divider} src={divider3} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ marginTop: '20px', '@media (max-width : 600px)': { textAlign: 'center', marginBottom: '20px' } }}>
                                        <FormControl sx={{ minWidth: 150, }} size="small">
                                            <InputLabel id="demo-select-small">All time</InputLabel>
                                            <Select
                                                sx={{
                                                    width: '100%',
                                                    color: '#7A7A7A',
                                                    backgroundColor: '#efefef96',
                                                    marginRight: '1px',
                                                    borderRadius: '20px',
                                                    boxShadow: '0px 10px 10px -6px #00000036',

                                                    "svg": {
                                                        fill: "#7A7A7A"
                                                    }, "fieldset": {
                                                        border: '1px solid #FF5F29',
                                                        borderRadius: '20px',
                                                    },
                                                    '@media(max-width: 1200px)': {
                                                        marginTop: '10px'
                                                    },
                                                    '@media(max-width: 600px)': {
                                                        width: '100%',
                                                    }
                                                }}
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                value={dropdown}
                                                label="All time"
                                                onChange={handleChangeDropdown}
                                            >

                                                <MenuItem value={10}>Last 7 Days</MenuItem>
                                                <MenuItem value={20}>Last 14 Days</MenuItem>
                                                <MenuItem value={30}>Last 21 Days</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Graph />
                                    <Box className={classes.flex3}>
                                        <Box className={classes.flex}>
                                            <Box sx={{ width: '20px', alignSelf: 'center' }}><Typography component="img" src={properties2} width="100%"></Typography></Box>
                                            <Box> <Typography variant="h5" fontWeight={700} color="#FF5F29" ml={2}>Listing</Typography></Box>
                                        </Box>
                                        <Box sx={{ alignSelf: 'center' }}>
                                            <Typography component="img" className={classes.divider} src={divider} />
                                        </Box>
                                    </Box>
                                    <TableLeft />
                                    <Box className={classes.flex3}>
                                        <Box className={classes.flex}>
                                            <Box sx={{ width: '20px', alignSelf: 'center' }}><Typography component="img" src={percentage} width="100%"></Typography></Box>
                                            <Box> <Typography variant="h5" fontWeight={700} color="#FF5F29" ml={2}>Offers</Typography></Box>
                                        </Box>
                                        <Box sx={{ alignSelf: 'center' }}>
                                            <Typography component="img" className={classes.divider} src={divider} />
                                        </Box>
                                    </Box>
                                    <Box className={classes.noactive}>
                                        <Typography color="#949494">No Active Offers now</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box className={classes.secsecond2}>
                        <Grid container spacing={0}>
                            <Grid item lg={12} md={12} xs={12}>
                                <Box className={classes.dis_sidebox2}>

                                    <Box className={classes.flex3}>
                                        <Box className={classes.flex}>
                                            <Box sx={{ width: '20px', alignSelf: 'center' }}><Typography component="img" src={swaparrow} width="100%"></Typography></Box>
                                            <Box> <Typography variant="h5" fontWeight={700} color="#FF5F29" ml={2}>Item Activity</Typography></Box>
                                        </Box>
                                        <Box sx={{ alignSelf: 'center' }}>
                                            <Typography component="img" className={classes.divider} src={divider4} />
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', paddingLeft: '20px', '@media(max-width : 600px)': { display: 'inherit', padding: '0px' } }}>
                                        <Box>
                                            <FormControl sx={{ minWidth: 120, '@media(max-width : 600px)': { width: '100%' } }} size="small">
                                                <InputLabel id="demo-select-small" sx={{ '@media(max-width : 600px)': { lineHeight: '2.4375em !important' } }}>Filter</InputLabel>
                                                <Select
                                                    sx={{
                                                        width: '100%',
                                                        color: '#7A7A7A',
                                                        backgroundColor: '#efefef96',
                                                        marginRight: '1px',
                                                        borderRadius: '20px',
                                                        boxShadow: '0px 10px 10px -6px #00000036',

                                                        "svg": {
                                                            fill: "#7A7A7A"
                                                        }, "fieldset": {
                                                            border: '1px solid #FF5F29',
                                                            borderRadius: '20px',
                                                        },
                                                        '@media(max-width: 1200px)': {
                                                            marginTop: '10px'
                                                        },
                                                        '@media(max-width: 600px)': {
                                                            width: '100%',
                                                        }
                                                    }}
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    value={dropdown2}
                                                    label="Filter"
                                                    onChange={handleChangeDropdown2}
                                                >

                                                    <MenuItem value={10}>Sale</MenuItem>
                                                    <MenuItem value={20}>Sale</MenuItem>
                                                    <MenuItem value={30}>Sale</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                        <Box>
                                            <Button className={classes.salebtn} endIcon={<ClearIcon sx={{ color: "FF5F29" }} />}>Sales</Button>
                                        </Box>
                                        <Box>
                                            <Button className={classes.salebtn} endIcon={<ClearIcon sx={{ color: "FF5F29" }} />}>Sales</Button>
                                        </Box>
                                        <Box>
                                            <Link className={classes.clearbtn} to="#">Clear all</Link>
                                        </Box>
                                    </Box>
                                    <Box mt={2}>
                                        <TableLeft2 Address={data?.responseResult?.tokenOwner} />
                                    </Box>


                                    <Box sx={{ marginTop: '30px' }}>
                                        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                                            {fourNftdata?.length > 0 ?
                                                fourNftdata.map((v, id) => {
                                                    return (
                                                        <Grid item lg={3} md={6} sm={6} xs={12}>
                                                            <Box className={classes.nftinfobx2}>
                                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                    <Box sx={{ display: 'flex', margin: '5px 0px 15px 0px' }}>
                                                                        <Box><Typography component="img" className={classes.ellipsenft} src={ellipsenft}></Typography></Box>
                                                                        <Box sx={{ alignSelf: 'center', ml: '10px' }}>
                                                                            <Typography variant="h6" className={classes.hding6}> {v?.lazyName ? v?.lazyName : "Lorem Ipsum"}</Typography>

                                                                            <Typography className={classes.para}>{v?.lazyDescription ? v?.lazyDescription : "@loremipsum"}</Typography>
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
                                                                <Typography component="img" src={v.metadata.image ? v?.metadata?.image.replace("ipfs://", "https://wizard.mypinata.cloud/ipfs/") : <Loader />} width="100%"></Typography>
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
                                                                                <Typography style={{ color: '#606060' }}>{v.likes?.length}</Typography>
                                                                            </Box>
                                                                            <Box sx={{ display: 'flex', marginLeft: '10px' }}>
                                                                                <Box sx={{ alignSelf: 'center' }}>
                                                                                    <img style={{ margin: '0px', borderRadius: '0px' }} src={messagestore} alt=""></img>
                                                                                </Box>
                                                                                <Typography style={{ color: '#606060' }}>3k</Typography>
                                                                            </Box>

                                                                        </Box>
                                                                    </Box>
                                                                    <Box sx={{ textAlign: "center" }}>
                                                                        <Button className={classes.viewbtn} endIcon={<Box sx={{ ml: '10px' }} component="img" src={arrowright} />}>
                                                                            More
                                                                        </Button>
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </Grid>
                                                    )
                                                })
                                                :
                                                <Typography>
                                                    <Loader />
                                                </Typography>
                                            }

                                        </Grid>
                                    </Box>


                                </Box>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
                <Footer2 />
            </Container>
        </>
    )
}

export default NFTDetails