import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Button, Collapse, Container, Grid, List, ListItemButton, ListItemIcon, ListItemText, Switch, TextareaAutosize, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Footer2 from "../../components/Footer/Footer2";
import Header from "../../components/Header/Header";
import upload from '../../../src/pages/images/upload.svg'
import { makeStyles } from "@mui/styles";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import properties from '../../../src/pages/images/properties.svg'
import levels from '../../../src/pages/images/levels.svg'
import stats from '../../../src/pages/images/stats.svg'




const useStyle = makeStyles({
    submitbtn: {
        backgroundColor: '#33CC33 !important',
        color: '#fff !important',
        padding: '12px 50px !important',
        borderRadius: '30px !important',
        marginLeft: '20px !important'
    },
    upload: {
        display: 'inherit !important',
        color: '#FF5F29 !important',
        textAlign: 'center',
        textTransform: 'none !important',
        fontWeight: '700 !important',
        fontSize: '20px !important',
        backgroundColor: '#F3F3F3 !important',
        borderRadius: '20px !important',
        border: '3px dashed #d6d6d6 !important',
        padding: '50px 20px !important'
    },
    getintouch: {
        padding: '10px 20px !important',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '40px',
        backgroundColor: '#efefef96',
        width: '100%'
    },
    getintouch3: {
        padding: '10px 20px !important',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '20px',
        backgroundColor: '#efefef96',
        width: '100%'
    },
    getintouch4: {
        padding: '10px 30px !important',
        boxShadow: 'inset 0px 7px 15px -4px #00000024',
        borderRadius: '40px',
        backgroundColor: '#efefef96',
        width: '100%'
    },
    getintouch2: {
        width: '100%',
        backgroundColor: 'transparent',

    },
    uploadimg: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    uploadmain: {
        borderRadius: '20px',
        boxShadow: '0px 15px 30px -6px #00000036',
    },
    listbutn: {
        justifyContent: 'space-between !important',
        borderRadius: '20px !important',
        backgroundColor: '#efefef96 !important',
        marginTop: '15px !important',
        boxShadow: '0px 10px 20px -8px #00000036',
        padding: '15px 30px !important'
    },
    listbutn6: {
        justifyContent: 'space-between !important',
        borderRadius: '20px !important',
        backgroundColor: '#efefef96 !important',
        marginTop: '30px !important',
        boxShadow: '0px 10px 20px -8px #00000036',
        padding: '30px !important'
    },
    listbutn3: {
        justifyContent: 'space-between !important',
        borderRadius: '20px !important',
        backgroundColor: '#efefef96 !important',

        boxShadow: '0px 10px 20px -8px #00000036',
        padding: '15px 30px !important'
    },
    listbut2: {
        justifyContent: 'space-between !important',
        borderRadius: '20px !important',
        backgroundColor: '#efefef96 !important',
        margin: '20px 20px 0px 0px !important',
        boxShadow: '0px 10px 20px -8px #00000036',
        padding: '0px !important'
    },

    freeze: {
        backgroundColor: '#efefef96',
        padding: '20px !important',
        borderRadius: '20px',
        marginTop: '40px'
    }



})


const top100Films = [
    { label: 'Binance Coin', },
    { label: 'Cardano ', },
    { label: 'Binance USD', },
    { label: 'Solana', },
    { label: 'Dogecoin', },

];


const Create = () => {
    const classes = useStyle();

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };


    const [open2, setOpen2] = useState(false);
    const handleClick2 = () => {
        setOpen2(!open2);
    };

    const [open3, setOpen3] = useState(false);
    const handleClick3 = () => {
        setOpen3(!open3);
    };


    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    return (
        <>
            <Container>
                <Header />
                <Box sx={{ textAlign: 'center', margin: '30px 0px 50px 0px' }}>
                    <Typography variant="h4" color="#999999">Create New Item</Typography>
                </Box>
                <Grid lg={12} container spacing={2}>
                    <Grid item lg={6} md={6} xs={12}>
                        <Box className={classes.uploadmain}>
                            <Box>
                                <Button className={classes.upload} component="label">
                                    <Box className={classes.uploadimg}>
                                        <Typography component="img" src={upload} alt="" width="15%" />
                                    </Box>
                                    {"Drag"}
                                    / Upload your Mangos here
                                    <TextField type="file" hidden />
                                    <Typography color="#AAAAAA" mt={3}> * Required fields</Typography>
                                    <Typography fontWeight={700} color="#7A7A7A">Image, Video, Audio, or 3D Model</Typography>
                                    <Typography mt={2} color="#AAAAAA">File types supported: JPG, PNG, GIF, SVG, MP4,
                                        WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <Box sx={{ width: '100%' }}>
                            <TextField
                                fullWidth
                                className={classes.getintouch}
                                placeholder="FULL NAME"
                                id="outlined-size-small"
                                variant="standard"
                                size="small"
                                InputProps={{ disableUnderline: true }}
                            />
                        </Box>
                        <Box sx={{ width: '100%', marginTop: '20px' }}>
                            <TextField
                                fullWidth
                                className={classes.getintouch}
                                placeholder="External link"
                                id="outlined-size-small"
                                variant="standard"
                                size="small"
                                InputProps={{ disableUnderline: true }}
                            />
                        </Box>
                        <Box className={classes.getintouch3} sx={{ width: '100%', marginTop: '20px' }}>
                            <Typography color="#7C7C7C" fontWeight={700} >Enter Detailed Description</Typography>
                            <TextareaAutosize

                                multiline
                                aria-label="minimum height"
                                minRows={7}
                                className={classes.getintouch2}
                                placeholder="will  be  included  on  the  item's  detail  page underneath  its  image.  Markdown  syntax  is  supported.
                                "
                                id="outlined-size-small"
                                variant="standard"
                                size="small"
                                disableUnderline
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid lg={12} container spacing={2}>
                    <Grid item lg={6} md={6} xs={12}>
                        <Box className={classes.getintouch4} sx={{ width: '100%', marginTop: '36px' }}>
                            <Typography color="#7C7C7C" fontWeight={700} >Enter Collection,</Typography>
                            <Box sx={{ width: '100%', }}>
                                <TextField
                                    fullWidth
                                    className={classes.getintouch2}
                                    placeholder="This is the collection where your item will appear.                                "
                                    id="outlined-size-small"
                                    variant="standard"
                                    size="small"
                                    InputProps={{ disableUnderline: true }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <List
                            sx={{ width: '100%', }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"

                        >
                            <ListItemButton className={classes.listbutn} onClick={handleClick}>
                                <ListItemIcon>
                                    <Box sx={{ alignSelf: 'center' }}>
                                        <Typography component="img" src={properties}></Typography>
                                    </Box>
                                    <Box ml={2}>
                                        <Typography variant="h6">Properties</Typography>
                                        <Typography>Numerical traits that just show as numbers</Typography>
                                    </Box>
                                </ListItemIcon>

                                {open ? <RemoveIcon sx={{ color: '#FF5E27' }} /> : <AddIcon sx={{ color: '#FF5E27' }} />}
                            </ListItemButton>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <Box className={classes.getintouch4} sx={{ width: '100%', marginTop: '20px' }}>
                                    <Typography color="#7C7C7C" fontWeight={700} >Enter Collection,</Typography>
                                    <Box sx={{ width: '100%', }}>
                                        <TextField
                                            fullWidth
                                            className={classes.getintouch2}
                                            placeholder="This is the collection where your item will appear.                                "
                                            id="outlined-size-small"
                                            variant="standard"
                                            size="small"
                                            InputProps={{ disableUnderline: true }}
                                        />
                                    </Box>
                                </Box>
                            </Collapse>
                        </List>
                    </Grid>
                </Grid>

                <Grid lg={12} container spacing={2}>
                    <Grid item lg={6} md={6} xs={12}>
                        <List
                            sx={{ width: '100%', }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"

                        >
                            <ListItemButton className={classes.listbutn} onClick={handleClick2}>
                                <ListItemIcon>
                                    <Box sx={{ alignSelf: 'center' }}>
                                        <Typography component="img" src={levels}></Typography>
                                    </Box>
                                    <Box ml={2}>
                                        <Typography variant="h6">Levels</Typography>
                                        <Typography>Numerical traits that show as a progress bar</Typography>
                                    </Box>
                                </ListItemIcon>

                                {open2 ? <RemoveIcon sx={{ color: '#FF5E27' }} /> : <AddIcon sx={{ color: '#FF5E27' }} />}
                            </ListItemButton>
                            <Collapse in={open2} timeout="auto" unmountOnExit>
                                <Box className={classes.getintouch4} sx={{ width: '100%', marginTop: '20px' }}>
                                    <Typography color="#7C7C7C" fontWeight={700} >Enter Collection,</Typography>
                                    <Box sx={{ width: '100%', }}>
                                        <TextField
                                            fullWidth
                                            className={classes.getintouch2}
                                            placeholder="This is the collection where your item will appear.                                "
                                            id="outlined-size-small"
                                            variant="standard"
                                            size="small"
                                            InputProps={{ disableUnderline: true }}
                                        />
                                    </Box>
                                </Box>
                            </Collapse>
                        </List>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <List
                            sx={{ width: '100%', }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"

                        >
                            <ListItemButton className={classes.listbutn} onClick={handleClick3}>
                                <ListItemIcon>
                                    <Box sx={{ alignSelf: 'center' }}>
                                        <Typography component="img" src={stats}></Typography>
                                    </Box>
                                    <Box ml={2}>
                                        <Typography variant="h6">Stats</Typography>
                                        <Typography>Numerical traits that just show as numbers</Typography>
                                    </Box>
                                </ListItemIcon>

                                {open3 ? <RemoveIcon sx={{ color: '#FF5E27' }} /> : <AddIcon sx={{ color: '#FF5E27' }} />}
                            </ListItemButton>
                            <Collapse in={open3} timeout="auto" unmountOnExit>
                                <Box className={classes.getintouch4} sx={{ width: '100%', marginTop: '20px' }}>
                                    <Typography color="#7C7C7C" fontWeight={700} >Enter Collection,</Typography>
                                    <Box sx={{ width: '100%', }}>
                                        <TextField
                                            fullWidth
                                            className={classes.getintouch2}
                                            placeholder="This is the collection where your item will appear.                                "
                                            id="outlined-size-small"
                                            variant="standard"
                                            size="small"
                                            InputProps={{ disableUnderline: true }}
                                        />
                                    </Box>
                                </Box>
                            </Collapse>
                        </List>
                    </Grid>
                </Grid>

                <Box className={classes.listbut2}>
                    <Grid lg={12} container>
                        <Grid item lg={6} md={6} xs={12}>
                            <List sx={{ padding: '0px' }}>

                                <Box className={classes.listbutn3} sx={{ display: 'flex' }}>
                                    <ListItemIcon sx={{ width: '90%' }}>
                                        <Box sx={{ alignSelf: 'center', }}>
                                            <Typography component="img" src={levels}></Typography>
                                        </Box>
                                        <Box ml={2} >
                                            <Typography variant="h6">Unlockable Content</Typography>
                                            <Typography>Include unlockable content that can only be revealed by the owner of the item.</Typography>
                                        </Box>
                                    </ListItemIcon>

                                    <Box sx={{ width: '10%', alignSelf: 'center' }}>
                                        <Switch checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                                    </Box>
                                </Box>


                                {isChecked &&
                                    <Box className={classes.listbutn} sx={{ width: '100%', }}>
                                        <Typography color="#7C7C7C" fontWeight={700} >Enter Collection,</Typography>
                                        <Box sx={{ width: '100%', }}>
                                            <TextField
                                                fullWidth
                                                className={classes.getintouch2}
                                                placeholder="This is the collection where your item will appear.                                "
                                                id="outlined-size-small"
                                                variant="standard"
                                                size="small"
                                                InputProps={{ disableUnderline: true }}
                                            />
                                        </Box>
                                    </Box>
                                }

                            </List>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                            <Box sx={{ margin: '40px 0px 0px 20px' }}>
                                <Typography>Enter content ( access key, code to redeem, link to a file, etc. )</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Grid lg={12} container spacing={2}>
                    <Grid item lg={6} md={6} xs={12}>
                        <List sx={{ padding: '0px', marginTop: '30px' }}>

                            <Box className={classes.listbutn3} sx={{ display: 'flex' }}>
                                <ListItemIcon sx={{ width: '90%' }}>
                                    <Box sx={{ alignSelf: 'center', }}>
                                        <Typography component="img" src={levels}></Typography>
                                    </Box>
                                    <Box ml={2} >
                                        <Typography variant="h6">Unlockable Content</Typography>
                                        <Typography>Include unlockable content that can only be revealed by the owner of the item.</Typography>
                                    </Box>
                                </ListItemIcon>

                                <Box sx={{ width: '10%', alignSelf: 'center' }}>
                                    <Switch checked={isChecked2} onChange={() => setIsChecked2(!isChecked2)} />
                                </Box>
                            </Box>


                            {isChecked2 &&
                                <Box className={classes.listbutn} sx={{ width: '100%', }}>
                                    <Typography color="#7C7C7C" fontWeight={700} >Enter Collection,</Typography>
                                    <Box sx={{ width: '100%', }}>
                                        <TextField
                                            fullWidth
                                            className={classes.getintouch2}
                                            placeholder="This is the collection where your item will appear.                                "
                                            id="outlined-size-small"
                                            variant="standard"
                                            size="small"
                                            InputProps={{ disableUnderline: true }}
                                        />
                                    </Box>
                                </Box>
                            }

                        </List>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <Box className={classes.listbutn6} sx={{ width: '100%', }}>
                            <Typography color="#7C7C7C" fontWeight={700} >Enter Collection,</Typography>
                            <Box sx={{ width: '100%', }}>
                                <TextField
                                    fullWidth
                                    className={classes.getintouch2}
                                    placeholder="This is the collection where your item will appear.                                "
                                    id="outlined-size-small"
                                    variant="standard"
                                    size="small"
                                    InputProps={{ disableUnderline: true }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid lg={12} container spacing={2}>
                    <Grid item lg={6} md={6} xs={12}>
                        <Typography sx={{ margin: '20px 0px 10px 20px' }} variant="h6"  >Select your Blockchain Network</Typography>
                        <Box>
                            <Autocomplete
                                size="large"
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                disableUnderline={false}
                                sx={{
                                    width: '100%',
                                    color: '#7A7A7A',
                                    backgroundColor: '#efefef96',
                                    marginRight: '1px',
                                    padding: '10px',
                                    borderRadius: '20px',

                                    "svg": {
                                        fill: "#7A7A7A"
                                    }, "fieldset": {
                                        border: 'none',
                                        borderRadius: '20px',
                                    },
                                    '@media(max-width: 1200px)': {
                                        marginTop: '10px'
                                    },
                                    '@media(max-width: 600px)': {
                                        width: '100%',
                                    }
                                }}
                                renderInput={(params) => <TextField
                                    sx={{
                                        borderColor: "transparent",
                                        "& .MuiFormLabel-root": {
                                            color: "#7A7A7A", "& .MuiInputBase-input.MuiAutocomplete-input": {
                                                color: "#7A7A7A",
                                            },
                                        },
                                    }}{...params} label="Etherium" className={classes.TextField} />}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid lg={12} container spacing={2}>
                    <Grid item lg={6} md={6} xs={12}>
                        <Box sx={{ marginLeft: '20px', padding: '30px 0px' }}>
                            <Typography variant="h6" color="#7A7A7A">Unlockable Content</Typography>
                            <Typography color="#CCCCCC">Freezing  your  metadata  will  allow  you  to permanently lock and store all of this item's content in decentralized file storage.</Typography>
                        </Box>
                    </Grid>

                    <Grid item lg={6} md={6} xs={12}>
                        <Box className={classes.freeze}>
                            <Typography color="#C2C2C2">To freeze your metadata, you must create your item first.</Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid lg={12} container spacing={2}>
                    <Grid item lg={12} md={12} xs={12}>
                        <Box sx={{ marginBottom: '60px' }}>
                            <Button className={classes.submitbtn}>Create</Button>
                        </Box>
                    </Grid>
                </Grid>
                <Footer2 />
            </Container>
        </>
    )
}

export default Create