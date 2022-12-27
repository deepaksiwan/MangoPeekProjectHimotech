import React, { useContext,useState,useRef, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { useMutation, useQueryClient } from "react-query";
import { editProfile } from "../../api/ApiCall/editProfile";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { UserContext } from "../../context/User/UserContext";
import {actionTypes} from "../../context/User/UserReducer";
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';

import Counter from "./Counter"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { LIVE_DOMAIN } from "../../config";
const useStyle = makeStyles({
  //Wrap 3 Start

  wrap3: {
    // padding: "4rem 0 2rem",
    " & h2": {
      fontSize: "2rem",
      fontWeight: "bold",
    },
  },
  bag5: {
    display: "flex",
    justifyContent: "center",
    "& Button": {
      background: "#000",
      borderRadius: "15px",
      padding: "0.6rem 1.4rem", 
      fontSize: "13px",
    },
    "& Button:hover": {
      background: "#000",
      transform: "translatey(-10px)",
      transition: "0.5s ease-in-out",
    },
    "& p": {
      color: "#000",
      fontSize: "1rem",
      fontWeight: "bolder",
      padding: "1rem",
    },
  },
  bag6: {
    display: "flex",
    margin:"10px 0",
    alignItems: "center",
    justifyContent: "space-between",
    "& h2,h6": {
      margin: "0",
    },
    "& h2":{
      fontSize: "1.5rem",
      fontWeight: "bold",
    }
  },
  bag7: {
    width: "100% !important",
    border: "1px solid",
    // margin: "3rem 0 0 0",
    border: "1px solid ",
    padding: "10px",
    boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",
    borderColor:"linen",
    borderRadius:"20px"
    
  },

  bag8: {
    marginBottom:"20px",
    padding:"0",
    "& input::placeholder": {
      fontSize: "13px",
      // padding:"0 10px"
    },
    "& input": {
      fontSize: "13px",
      padding:"10px!important"
    },
    " & p": {
      fontSize: "13px",
      color: "#000",
      fontWeight: "400",
    },
    "& button": {
      width: "100%",
      // margin: "13px 0",
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
    // marginTop: "10px",
    "& Form": {
      display: "block",
      padding: "10px",
      "& input":{
        // display: "block",
         border: "solid linen",
         borderWidth:"0 0 0 1px",
        // margin: "10px 0",
        // width: "100%",
        //  borderRadius: "25px",
         boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",
         padding:"auto 0 !important"
        
      },
      "&  h2": {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom:"0 !important"
      },
      "& label": {
        margin: "8px  0",
        fontSize: "1.3rem",
        fontWeight: "bolder",
      },
    },
  },
  bag9: {
    // display: "block",
     borderColor: "linen !important",
    // margin: "10px 0",
    // width: "100%",
    // padding: "13px",
    // borderRadius: "25px",
    // boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",
    "& input":{
      padding:"auto 0 !important",
      // borderRadius:"25px"
    },
    "& fieldset":{
      borderColor:"linen",
      borderRadius:"20px"
    }

  },
  bag10: {
    // display: "block",
     borderColor: "linen !important",
    "& input":{
      padding:"auto 0 !important",
      borderRadius:"25px"
    },
    "& fieldset":{
      borderColor:"linen",
      borderRadius:"20px"
    }

  },
  bin1:{
    // marginBottom:"2px ",
    fontSize:"14px"
  }
});

const EditProfile = ({heading,userName}) => {
  const [{userData,userUpdateData}, dispatch] = useContext(UserContext);
  const queryClient=useQueryClient();
  const navigate=useNavigate()
  const bodyRef = useRef()
  // const [words, setWords] = useState("")

  // const count = () => {
  //  return  words.count();
  // }
  const CHARACTER_LIMIT = 160;
  const [words, setWords] = useState(0)


  const {isError, mutateAsync,status } = useMutation(
    "editProfile",
    editProfile,
    {
      onSuccess: (data,value) => {
        try {
          if (data?.success) {
            queryClient?.invalidateQueries("getProfileByUserName")
            queryClient?.invalidateQueries("viewProfile")
            dispatch({ type: actionTypes.UPDATE_USER, value:data?.data});
            toast.success(JSON.stringify("You Profile Update Successfully"));
            navigate(`/${data?.data.userName}`)
          } 
          if(data.success==false){
            toast.error(data?.message);
            navigate(`/${userName}`)

          }
        } catch(error) {
          if(value){
            toast.error("Email Or Username already exist");
          }
        }
      },

    }
  );
  const [bio,setBio]=useState(null)
  const [twitterName,setTwitterName]=useState(null);
  const [facebookName,setFacebookName]=useState(null);
  const [personalURL,setPersonalURL]=useState(null);
  const [email,setEmail]=useState(null);
  const [username,setUsername]=useState(null);
  useEffect(()=>{
    if(userData){
      setBio(userData?.bio);
      setWords(0 + userData?.bio?.length);
      setEmail(userData?.email);
      setUsername(userData?.userName);
      setTwitterName(userData?.twitterName);
      setFacebookName(userData?.facebookName);
      setPersonalURL(userData?.personalURL);
    }
  },[userData])
  
  const count = (e) => {
    setWords(0 + bodyRef.current.value.length)
    setBio(e.target.value);
  }

  const formik = useFormik({
    initialValues: {
      email:"",
      username:"",
      bio: "",
      twitterName: "",
      facebookName: "",
      personalURL: "",
    },
    validationSchema: Yup.object({
      bio: Yup.string()
        .min(0, "Too Short!")
        .max(160, "Too Long!"),
      twitterName: Yup.string(),
      facebookName: Yup.string(),
      personalURL: Yup.string()
    }),
    validateOnChange:(values)=>{
      setWords(values.bio)
    },
    onSubmit: async (values) => {
      try {
        await mutateAsync({
          token: localStorage.getItem("token"),
          value: {
            email:email,
            userName:username,
            bio:bio,
            twitterName: twitterName,
            facebookName: facebookName,
            personalURL: personalURL,
          },
        });
        handleClose();
      } catch (error) {
        toast.error(JSON.stringify(error?.message));
      }
    // setShow(true)
    },
  });

  const classes = useStyle();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if(status==="error"){
   toast.error(JSON.stringify("error"))
  }


   
  return (
    <>
      <Box className={classes.wrap3}>
        <Container>
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: {
                lg: "auto",
                xs: "space-between",
                alignItems: "center",
              },
            }}
          >
            <Grid item md={12}>
              <Box>
                <Typography variant="h2">{heading?? " "}</Typography>
              </Box>
            </Grid>

            <Grid item md={12}>
              <Box className={classes.bag5}>
                <Button variant="contained" onClick={handleShow}>
                  Edit Profile
                </Button>
              </Box>
            </Grid>
            <Grid item md={12}>
              {userName && 
              <Box className={classes.bag5}>
                <Link to={`/${userName.replace("@","")}`}>
                <p  style={{ margin: "0" }}>{userName}</p>
                </Link>
              </Box>
              }
            </Grid>
     
          </Grid>
        </Container>
      </Box>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body>
          <Box className={classes.bag8}>
            <form onSubmit={formik.handleSubmit}>
            <label htmlFor="bio">Email:</label>
              
              <TextField
              fullWidth
                name="email"
                id="email"
                variant="outlined"
                placeholder="Enter Your Email"
                className={classes.bag10}
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                error={
                  formik.touched.email &&
                  Boolean(formik.errors.email)
                }
                helperText={
                  formik.touched.email && formik.errors.email
                }
        //         InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start"  >
        //       <span className={classes.bin1}>Email</span>
        //     </InputAdornment>
        //   ),
        // }}
              />
              <label htmlFor="bio">Username:</label>
              
              <TextField
              fullWidth
                name="username"
                id="username"
                variant="outlined"
                placeholder="Enter Your username "
                className={classes.bag9}
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                error={
                  formik.touched.username &&
                  Boolean(formik.errors.username)
                }
                helperText={
                  formik.touched.username && formik.errors.username
                }
                InputProps={{
          startAdornment: (
            <InputAdornment position="start"  >
              <span className={classes.bin1}>{LIVE_DOMAIN}</span>
            </InputAdornment>
          ),
        }}
              />
              <Box className={classes.bag6}>
                <h2>Bio</h2>
                <h6>Character Count {words}/160</h6>
                {/* <h6>Character Count {count}/160</h6> */}
              </Box>
              <Box>
              <Counter/>
                <TextareaAutosize
                 ref={bodyRef}
                  className={classes.bag7}
                  // aria-label="minimum height"
                  minRows={3}
                
                  placeholder="Enter Bio"
                  style={{ width: 200 }}
                  onChange={count}
                  maxLength={CHARACTER_LIMIT}
                  // onChange={formik.handleChange}
                  id="bio"
                  required
                  value={bio}
                  // error={formik.touched.bio && Boolean(formik.errors.bio)}
                  // helperText={formik.touched.bio && formik.errors.bio}
                />
              </Box>
              <h2>Links</h2>
              
              <label htmlFor="bio">Twitter Name:</label>
              
              <TextField
              fullWidth
                name="twitterName"
                id="twitterName"
                variant="outlined"
                placeholder="Enter Twitter Name"
                className={classes.bag9}
                value={twitterName}
                onChange={(e)=>setTwitterName(e.target.value)}
                error={
                  formik.touched.twitterName &&
                  Boolean(formik.errors.twitterName)
                }
                helperText={
                  formik.touched.twitterName && formik.errors.twitterName
                }
                InputProps={{
          startAdornment: (
            <InputAdornment position="start"  >
              <span className={classes.bin1}>@</span>
            </InputAdornment>
          ),
        }}
              />
               {/* <TextField
                            fullWidth
                            id="twitterName"
                            name="twitterName"
                            placeholder="xxx@gmail.com"
                            variant="outlined"
                            value={formik.values.twitterName}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.twitterName && Boolean(formik.errors.twitterName)
                            }
                            helperText={
                              formik.touched.twitterName && formik.errors.twitterName
                            }
                          /> */}

              <label htmlFor="">Facebook Name:</label>
              <TextField
              fullWidth
                name="facebookName"
                placeholder="Enter Facebook Name"
                className={classes.bag9}
                id="facebookName"
                variant="outlined"
                value={facebookName}
                onChange={(e)=>setFacebookName(e.target.value)}
                error={
                  formik.touched.facebookName &&
                  Boolean(formik.errors.facebookName)
                }
                helperText={
                  formik.touched.facebookName && formik.errors.facebookName
                }
                InputProps={{
          startAdornment: (
            <InputAdornment position="start"  >
              <span className={classes.bin1} >https://facebook.com/</span>
            </InputAdornment>
          ),
        }}    
              />

              <label htmlFor="">Personal URL:</label>
              <TextField
              fullWidth
                name="personalURL"
                type="text"
                placeholder=" Website"
                variant="outlined"
                id="personalURL"
                className={classes.bag9}
                value={personalURL}
                onChange={(e)=>setPersonalURL(e.target.value)}
                error={
                  formik.touched.personalURL &&
                  Boolean(formik.errors.personalURL)
                }
                helperText={
                  formik.touched.personalURL && formik.errors.personalURL
                }
                  InputProps={{
          startAdornment: (
            <InputAdornment position="start" >
              <span className={classes.bin1}>https://</span>
            </InputAdornment>
          ),
        }}
              />

              {/* <Box> */}
              <p style={{marginTop:"1rem"}}>
                Note: To change your profile picture, click on the "..." of the
                NFT you'd like as your picture, and select "Make Profile
                Picture"
              </p>
              {/* </Box> */}
              <button type="submit">
                Submit
              </button>
              
            </form>
           <Box sx={{px:"10px"}}>
           <button  onClick={handleClose}>
                Close
              </button>
           </Box>
          </Box>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditProfile;