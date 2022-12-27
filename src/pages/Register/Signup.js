import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import { useMutation } from "react-query";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../../api/ApiCall/signup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { UserContext } from "../../context/User/UserContext";
import { actionTypes } from "../../context/User/UserReducer"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
const useStyle = makeStyles((theme) => ({
  signupbox: {
    width: "33%", margin: "5rem auto",
    // borderRadius:"30px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    // [theme.breakpoints.up("md")]: {
    //   width: "400%",
    // },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
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
      background: "#000", padding: "10px 27px", border: "none", borderRadius: "36px"
    },
    "& button:hover": {
      background: "#000", padding: "10px 27px", border: "none", borderRadius: "36px"
    }
  },
  signup: {
    margin: "2.5rem 0",
    "& h1": {
      fontSize: "2rem", fontWeight: "500", textAlign: "center"
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
  }
}));
const Signup = () => {
  const classes = useStyle();
  const [, dispatch] = useContext(UserContext);
  const navigate = useNavigate();
  const { isError, error, isLoading, mutateAsync, isSuccess } = useMutation(
    "signup",
    signup,
    {
      onSuccess: (data) => {
        try {
          if (data.responseCode === 200) {
            navigate("/wallet");
            dispatch({ type: actionTypes.SET_TOKEN, value: data.token });
            localStorage.setItem("token", data.token);
            toast.success(JSON.stringify("You are signup Successfully"));
            dispatch({ type: actionTypes.SET_USER, value: data.responseResult });
          } else {
            toast.error(JSON.stringify(data.responseMessage));
          }
        } catch (error) {
          toast.error(JSON.stringify(error));
        }
      },
      onError: (error, data) => {
        toast.error(JSON.stringify(data.responseMessage));
      },
    }
  );
  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Enter valid email address"),
      userName: Yup.string().trim('The contact name cannot include leading and trailing spaces')
        .strict(true)
        // .min(4, "Minimum 4 characters")
        .required("Enter valid username"),
      password: Yup.string()
        .required('Enter valid password')
        .min(8, 'Password should be 8 to 26 digit')
        .max(26, 'Password should be 8 to 26 digit')

    }),
    onSubmit: async (values) => {
      try {
        await mutateAsync({
          email: values.email,
          userName: values.userName,
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
            <h1>Sign Up</h1>
          </div>
          <form className={classes.signupbox} onSubmit={formik.handleSubmit}>
            <TextField
              // fullWidth
              id="email"
              variant="outlined"
              name="email"
              placeholder="Email"
              // label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              // error={formik.touched.email && Boolean(formik.errors.email)}
              // helperText={formik.touched.email && formik.errors.email}
              sx={{ display: "flex", boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px", borderRadius: "8px", }}
              InputProps={{
                disableUnderline: true,
              }}
            />
            <Typography className={classes.error}> {formik.errors.email}</Typography>


            <TextField
              // fullWidth
              variant="outlined"
              id="userName"
              name="userName"
              placeholder="Username"
              // label="Username"
              value={formik.values.userName}
              onChange={formik.handleChange}
              // error={formik.touched.userName && Boolean(formik.errors.userName)}
              // helperText={formik.touched.userName && formik.errors.userName}
              sx={{ display: "flex", marginTop: '10px', boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px", borderRadius: "8px", }}
              InputProps={{
                disableUnderline: true,
              }}
            />
            <Typography className={classes.error}> {formik.errors.userName}</Typography>

            {/* <TextField
              // fullWidth
              variant="outlined"
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{ display: "flex", margin: "12px", boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px", borderRadius: "8px", }}

            /> */}
            <FormControl sx={{ marginTop: '10px', width: '100%', boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px", borderRadius: "8px", }} variant="outlined">
              {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
              <OutlinedInput
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Password"
                // error={formik.touched.password && Boolean(formik.errors.password)}
                // helperText={formik.touched.password && formik.errors.password}
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
            </FormControl>
            <Typography className={classes.error}> {formik.errors.password}</Typography>

            <Box className={classes.btn}>
              <button
                variant="contained"
                color="primary"
                type="submit"
                className="btn btn-primary"
              >
                Sign Up
              </button>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <p className="sig-pr">
                Already have an account?
                <span>
                  <Link to="/login" className={classes.typ}> Sign in.</Link>
                </span>
              </p>
            </Box>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Signup;