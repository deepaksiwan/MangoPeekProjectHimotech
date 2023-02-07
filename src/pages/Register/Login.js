import React, { useState, useContext } from "react";
import Header from "../../components/Header/Header";
import { useMutation, useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/ApiCall/login";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography, Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { UserContext } from "../../context/User/UserContext";
import { actionTypes } from "../../context/User/UserReducer";
import { viewProfile } from "../../api/ApiCall/viewProfile";
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Slider from "./Slider";
import Footer2 from "../../components/Footer/Footer2";

const useStyle = makeStyles((theme) => ({
  formmainwrp: {
    padding: '7rem 0rem 3rem 0rem !important',
    '@media(max-width : 900px)': {
      padding: '6rem 0rem 3rem 0rem !important',
      '@media(max-width : 600px)': {
        padding: '5rem 0rem 0rem 0rem !important',
      }
    }
  },
  typ: {
    color: "#000",
    textDecoration: "underline !important",
    fontSize: "1rem",
  },
  error: {
    color: 'red',
    paddingTop: '10px',
    fontSize: '12px !important',
  },
  btnwrp: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media(max-width : 600px)': {
      display: 'inherit !important',
    }
  },
  loginbtn: {
    backgroundColor: '#FFCC00 !important',
    color: '#fff !important',
    borderRadius: '30px !important',
    padding: '14px !important',
    width: '240px !important',
    '@media(max-width : 1200px)': {
      width: '190px !important',
      '@media(max-width : 900px)': {
        width: '270px !important',
        '@media(max-width : 600px)': {
          width: '130px !important',
        }
      }
    }
  },
  signupbtn: {
    display: 'inherit',
    backgroundColor: '#FF5F29 !important',
    color: '#fff !important',
    borderRadius: '30px !important',
    padding: '14px !important',
    width: '240px !important',
    '@media(max-width : 1200px)': {
      width: '190px !important',
      '@media(max-width : 900px)': {
        width: '270px !important',
        '@media(max-width : 600px)': {
          width: '130px !important',
        }
      }
    }
  },
  formbox: {
    padding: '5.5rem 5rem !important',
    boxShadow: 'inset 0px 7px 15px -4px #00000024',
    borderRadius: '40px',
    backgroundColor: '#efefef96',
    '@media(max-width : 600px)': {
      padding: '1.5rem !important'
    }
  },
  input: {
    backgroundColor: '#fcfcfc75',
    boxShadow: 'inset 0px 7px 15px -4px #00000024 !important',
    padding: '12px 20px !important',
    borderRadius: '30px !important'
  },
  input2: {
    backgroundColor: '#fcfcfc75',
    boxShadow: 'inset 0px 7px 15px -4px #00000024 !important',
    borderRadius: '30px !important'
  },

}));
const Login = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const [, dispatch] = useContext(UserContext);



  const { isError, error, isLoading, mutateAsync, isSuccess } = useMutation(
    "login",
    login,
    {
      onSuccess: (data) => {
        console.log("data", data)




        try {
          if (data.responseCode === 200) {
            //  console.log(data?.responseResult);
            //console.log(data?.token);
            navigate("/not_link_wallet")
            //navigate(`/${data?.responseResult.userName}`);
            dispatch({ type: actionTypes?.SET_TOKEN, value: data?.token });
            localStorage.setItem("token", data?.token);
            dispatch({
              type: actionTypes?.SET_USER,
              value: data.responseResult,
            });
            toast.success(JSON.stringify(data.responseMessage));
          } else {
            toast.error(JSON.stringify(data.responseMessage));
          }
        } catch (error) {
          toast.error(JSON.stringify(error.message));
        }
      },
      onError: (error, data) => {
        toast.error(JSON.stringify(data.responseMessage));
      },
    }
  );


  // const {refetch}=useQuery(
  //   ["viewProfile",token],
  //   ()=>viewProfile(token),{
  //     onSuccess:(data)=>{
  //       dispatch({ type: actionTypes.SET_USER, value:data.data});
  //     }
  //   }
  // )
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      // userName: "",
      email: "",
      password: "",

    },
    validationSchema: Yup.object({
      email: Yup.string().when("isEmail", {
        is: '1',
        then: Yup.string()
          .email("Enter valid  email")
          .required("Enter valid  email"),
        otherwise: Yup.string()
          .required("Enter valid  email")
          .min(4, 'Username must be at least 4 digit')
          .max(30, 'Username must not exceed 20 digit'),
      }),


      password: Yup.string()
        .required("Enter valid password"),
    }),
    onSubmit: async (values) => {
      console.log("values", values)
      try {
        await mutateAsync({
          // userName: values.userName,
          email: values.email,
          password: values.password,

        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const RedirectRegister = () => {
    navigate("/register")
  }

  return (
    <Box>
      <Header />
      <Container>
        <Box className={classes.formmainwrp}>
          <Grid container spacing={2}>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Slider />
            </Grid>
            <Grid item lg={7} md={7} sm={12} xs={12}>
              <Box className={classes.formbox}>
                <form onSubmit={formik.handleSubmit}>
                  <FormControl fullWidth  >
                    <TextField
                      className={classes.input}
                      variant="standard"
                      name="email"

                      placeholder="Email"
                      value={formik.values.email || formik.values.userName}
                      onChange={formik.handleChange}

                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                    <Typography className={classes.error}> {formik.errors.email}</Typography>


                    <FormControl sx={{ marginTop: '10px', width: '100%', borderRadius: "30px", }}  >
                      <OutlinedInput
                        className={classes.input2}
                        sx={{ border: 'none', "& fieldset": { border: 'none' }, }}
                        variant="standard"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        disableUnderline={false}

                        InputProps={{
                          disableUnderline: true
                        }}
                        endAdornment={

                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >

                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>

                        }
                      // label="Password"
                      />
                    </FormControl>
                    <Typography className={classes.error}> {formik.errors.password}</Typography>
                    <Box height={10} />
                    <Box className={classes.btnwrp}>
                      <Button className={classes.loginbtn} type="submit">Login</Button>
                      <Button className={classes.signupbtn} onClick={RedirectRegister}>Register</Button>
                    </Box>

                  </FormControl>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Footer2 />
      </Container>

    </Box>
  );
};

export default Login;