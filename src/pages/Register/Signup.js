import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import { useMutation } from "react-query";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../../api/ApiCall/signup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Box, Typography, Button, Grid, Container, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { UserContext } from "../../context/User/UserContext";
import { actionTypes } from "../../context/User/UserReducer"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Footer2 from "../../components/Footer/Footer2";
import Slider from "./Slider";
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
    fontSize: "1rem"
  },
  error: {
    color: 'red',
    paddingTop: '10px',
    fontSize: '12px !important',
  },
  formbox: {
    padding: '2.5rem 3rem !important',
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
  loginbtn: {
    backgroundColor: '#FFCC00 !important',
    color: '#fff !important',
    borderRadius: '30px !important',
    padding: '14px !important',
    width: '270px !important',
    '@media(max-width : 1200px)': {
      width: '220px !important',
      '@media(max-width : 900px)': {
        width: '300px !important',
        '@media(max-width : 600px)': {
          width: '130px !important',
        }
      }
    }
  },
  signupbtn: {
    backgroundColor: '#FF5F29 !important',
    color: '#fff !important',
    borderRadius: '30px !important',
    padding: '14px !important',
    width: '270px !important',
    '@media(max-width : 1200px)': {
      width: '220px !important',
      '@media(max-width : 900px)': {
        width: '300px !important',
        '@media(max-width : 600px)': {
          width: '130px !important',
        }
      }
    }
  },
  btnwrp: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media(max-width : 600px)': {
      display: 'inherit'
    }
  },
  bothinput: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  inpwidth: {
    width: '49%',
  },
  registercont: {
    padding: '2.5rem 1.5rem 1.5rem 1.5rem',
    '@media(max-width : 900px)': {
      padding: '0rem 0rem 1.5rem 0rem',
      textAlign: 'center',
    }
  },
  
}));
const Signup = () => {
  const classes = useStyle();
  const [, dispatch] = useContext(UserContext);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const navigate = useNavigate();


  // Tooltips

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleOpen3 = () => {
    setOpen3(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  const handleOpen4 = () => {
    setOpen4(true);
  };
  const handleClose5 = () => {
    setOpen5(false);
  };

  const handleOpen5 = () => {
    setOpen5(true);
  };




  const { mutateAsync } = useMutation(
    "signup",
    signup,
    {
      onSuccess: (data) => {
        try {
          if (data.responseCode === 200) {
            // navigate("/");
            dispatch({ type: actionTypes.SET_TOKEN, value: data.token });
            localStorage.setItem("token", data.token);
            dispatch({
              type: actionTypes.SET_USER,
              value: data.responseResult,
            });
            toast.success(JSON.stringify(data.responseMessage));

          } else {
            toast.error(JSON.stringify(data.responseMessage));
          }
        } catch (error) {
          toast.error(JSON.stringify(error));
        }
      },
      onError: (error, data) => {
        console.log("error")
        toast.error(JSON.stringify(data.responseMessage));
      },
    }
  );

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };
  

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      conformPassword: "",
    },
    validationSchema: Yup.object({

      firstName: Yup
        .string().trim()
        .min(4, 'Firstname should be minimum 4 digit')
        .max(12, 'Firstname should be maximum 12 digit')
        .required('Enter valid firstname'),


      lastName: Yup
        .string().trim()
        .max(12, 'lastname should be maximum 12 digit')
        .required('Enter valid lastname'),

      userName: Yup
        .string().trim()
        .required('Enter valid username')
        .min(4, 'Username must be at least 4 digit')
        .max(20, 'Username must not exceed 20 digit'),


      email: Yup.string()
        .trim()
        .email("Invalid email format")
        .required("Enter valid email address"),


      password: Yup.string()
        .trim()
        .required('Enter valid password')
        .min(8, 'Password should be 8 to 26 digit')
        .max(26, 'Password should be 8 to 26 digit'),



      conformPassword: Yup
        .string().trim()
        .oneOf([Yup.ref("password")], "Password not match")
        .required("Enter same password")


    }),

    onSubmit: async (values) => {
      // console.log("deepak")
      try {
        // console.log(values)
        await mutateAsync({
          firstName: values.firstName,
          lastName: values.lastName,
          userName: values.userName,
          email: values.email,
          password: values.password,
          conformPassword: values.conformPassword
        });
      } catch (error) {
        console.log(error);
      }
    },

  });

  const RedirectLogin = () => {
    navigate("/login")
  }

  return (
    <Box>
      <Header />

      <Header />
      <Container>
        <Box className={classes.formmainwrp}>
          <Grid container spacing={2}>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Box className={classes.registercont}>
                <Typography variant="h5" fontWeight={700} color="#999999">Register Now,</Typography>
                <Typography color="#999999">It’s Quick, Easy and Beneficial. </Typography>
              </Box>
              <Slider />
            </Grid>
            <Grid item lg={7} md={7} sm={12} xs={12}>
              <Box className={classes.formbox}>
                <form onSubmit={formik.handleSubmit} fullWidth >


                  <Box className={classes.bothinput}>
                    <Box className={classes.inpwidth}>
                      <Tooltip classes={{ tooltps: classes.tooltps }} open={open} onClose={handleClose} onOpen={handleOpen} title="Firstname" placement="top-start">
                        <TextField
                          className={classes.input}
                          variant="standard"
                          id="firstName"
                          name="firstName"
                          placeholder="FirstName"
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                          sx={{ display: "flex", boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px", borderRadius: "8px", }}
                          InputProps={{
                            disableUnderline: true,
                          }}
                        />
                      </Tooltip>
                      <Typography className={classes.error}> {formik.touched.firstName && formik.errors.firstName}</Typography>
                    </Box>
                    <Box className={classes.inpwidth}>
                      <Tooltip className={classes.tooltps} open={open1} onClose={handleClose1} onOpen={handleOpen1} title="Lastname" placement="top-start">
                        <TextField
                          className={classes.input}
                          variant="standard"
                          id="lastName"
                          name="lastName"
                          placeholder="LastName"
                          value={formik.values.lastName}
                          onChange={formik.handleChange}
                          sx={{ display: "flex", boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px", borderRadius: "8px", }}
                          InputProps={{
                            disableUnderline: true,
                          }}
                        />
                      </Tooltip>
                      <Typography className={classes.error}> {formik.touched.lastName && formik.errors.lastName}</Typography>
                    </Box>
                  </Box>
                  <Tooltip className={classes.tooltps} open={open2} onClose={handleClose2} onOpen={handleOpen2} title="Username" placement="top-start">
                    <TextField
                      className={classes.input}
                      variant="standard"
                      id="userName"
                      name="userName"
                      placeholder="Username"
                      value={formik.values.userName}
                      onChange={formik.handleChange}
                      sx={{ display: "flex", marginTop: '10px', boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px", borderRadius: "8px", }}
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  </Tooltip>
                  <Typography className={classes.error}> {formik.touched.userName && formik.errors.userName}</Typography>
                  <Tooltip className={classes.tooltps} open={open3} onClose={handleClose3} onOpen={handleOpen3} title="Email" placement="top-start">
                    <TextField
                      className={classes.input}
                      variant="standard"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      sx={{ display: "flex", boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px", borderRadius: "8px", }}
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  </Tooltip>

                  <Typography className={classes.error}> {formik.touched.email && formik.errors.email}</Typography>

                  <FormControl sx={{ marginTop: '10px', width: '100%', borderRadius: "30px", }}>
                    <Tooltip className={classes.tooltps} open={open4} onClose={handleClose4} onOpen={handleOpen4} title="Password" placement="top-start">
                      <OutlinedInput
                        className={classes.input2}
                        sx={{ border: 'none', "& fieldset": { border: 'none' }, }}
                        variant="standard"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="password"
                        id="password"
                        type={showPassword ? 'text' : 'password'}
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
                    </Tooltip>
                  </FormControl>
                  <Typography className={classes.error}> {formik.touched.password && formik.errors.password}</Typography>


                  <FormControl sx={{ marginTop: '10px', width: '100%', borderRadius: "30px", }}>
                    <Tooltip className={classes.tooltps} open={open5} onClose={handleClose5} onOpen={handleOpen5} title="ConformPassword" placement="top-start">
                      <OutlinedInput
                        className={classes.input2}
                        sx={{ border: 'none', "& fieldset": { border: 'none' }, }}
                        variant="standard"
                        name="conformPassword"
                        value={formik.values.conformPassword}
                        onChange={formik.handleChange}
                        placeholder="confirmPassword"
                        id="conformPassword"
                        type={showPassword2 ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword2}
                              onMouseDown={handleMouseDownPassword2}
                              edge="end"
                            >
                              {showPassword2 ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                      // label="Password"
                      />
                    </Tooltip>
                  </FormControl>
                  <Typography className={classes.error}> {formik.touched.conformPassword && formik.errors.conformPassword}</Typography>

                  <Box height={10} />
                  <Box className={classes.btnwrp}>
                    <Button className={classes.signupbtn} type="submit">Register</Button>
                    <Button className={classes.loginbtn} onClick={RedirectLogin}>Login</Button>
                  </Box>
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

export default Signup;