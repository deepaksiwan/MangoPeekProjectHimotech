import React, { useState, useContext } from "react";
import Header from "../../components/Header/Header";
import { useMutation, useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/ApiCall/login";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography } from "@mui/material";
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

const useStyle = makeStyles((theme) => ({
  signupbox: {
    width: "33%",
    margin: "5rem auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    // [theme.breakpoints.up("md")]: {
    //   width: "100%",
    // },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    // [theme.breakpoints.up("lg")]: {
    //   width: "28%",
    // },
    "& input::placeholder": {
      fontSize: "13px",
      // padding:"0 10px"
    },
    "& input": {
      fontSize: "13px",
      padding: "20px 20px !important"
    }
  },
  btn: {
    textAlign: "center",
    margin: "2rem 0",
    "& button": {
      background: "#000",
      padding: "10px 27px",
      border: "none",
      borderRadius: "36px",
    }, "& button:hover": {
      background: "#000", padding: "10px 27px", border: "none", borderRadius: "36px"
    }
  },
  signup: {
    textAlign: 'center',
    margin: "3rem 0",
    "& h1": {
      fontSize: "2rem",
      fontWeight: "500",
    },
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
  }
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
        try {
          if (data.responseCode === 200) {
            // console.log(data?.responseResult);
            navigate(`/${data?.responseResult.userName}`);
            dispatch({ type: actionTypes.SET_TOKEN, value: data.token });
            localStorage.setItem("token", data.token);
            dispatch({
              type: actionTypes.SET_USER,
              value: data.responseResult,
            });
            toast.success(JSON.stringify("You are Login Successfully"));
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
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Enter valid email addresss"),
      password: Yup.string()
        // .min(4, "Minimum 4 characters")
        .required("Enter valid password"),
    }),
    onSubmit: async (values) => {
      try {
        await mutateAsync({
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
  return (
    <div>
      <Header />
      <section id="signup">
        <div className="container">
          <div className={classes.signup}>
            <h1>Log In</h1>
          </div>
          <form onSubmit={formik.handleSubmit} className={classes.signupbox}>
            <TextField
              variant="outlined"
              id="email"
              name="email"
              // label="Email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              // error={formik.touched.email && Boolean(formik.errors.email)}
              // helperText={formik.touched.email && formik.errors.email}
              sx={{
                display: "flex",
                boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",
                borderRadius: "8px",
              }}
              InputProps={{
                disableUnderline: true,
              }}
            />
            <Typography className={classes.error}> {formik.errors.email}</Typography>
            {/* <TextField
              variant="outlined"
              id="password"
              name="password"
              placeholder="Password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{
                display: "flex",
                margin: "12px",
                boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px",
                borderRadius: "35px",
              }}
              InputProps={{
                disableUnderline: true,
              }}
            /> */}

            <FormControl sx={{ marginTop: '10px', width: '100%', boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px", borderRadius: "8px", }} variant="outlined">
              {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
              <OutlinedInput
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                // error={formik.touched.password && Boolean(formik.errors.password)}
                // helperText={formik.touched.password && formik.errors.password}
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                InputProps={{
                  disableUnderline: true,
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

            <Box className={classes.btn}>
              <button
                variant="contained"
                color="primary"
                type="submit"
                className="btn btn-primary"
              >
                login
              </button>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <p className="sig-pr">
                Don't have an account?
                <span>
                  <Link to="/signup" className={classes.typ}>
                    {" "}
                    Sign up.
                  </Link>
                </span>
              </p>
              <p className="sig-pr">
                <span>
                  <Link to="/forget" className={classes.typ}>
                    {" "}
                    Forgot your password?
                  </Link>
                </span>
              </p>
            </Box>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;