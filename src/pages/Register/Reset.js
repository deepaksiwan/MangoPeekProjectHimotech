import { Box, Container, Grid, Typography, TextField } from "@mui/material";
import React from "react";
import Header from "../../components/Header/Header";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import * as Yup from "yup";
import InputAdornment from '@mui/material/InputAdornment';
import { useMutation } from "react-query";
import IconButton from '@mui/material/IconButton';
import { reset } from "../../api/ApiCall/reset";
import { useNavigate, useSearchParams } from "react-router-dom";
const useStyle = makeStyles({
  wrap18: {
    padding: "3rem 0 2rem",
    "& h5": {
      // textAlign: "center",
    },
    "@media (maxwidth: 575.98px)": {},
    "@media (maxwidth: 767.98px)": {},
    "@media (maxwidth: 991.98px)": {},
    "@media (maxwidth: 1199.98px)": {},
  },
  bag22: {
    marginTop: "2rem",
    textAlign: "center",
    "& form": {
      // boxShadow: "0px 0px 5px 0px #ccc", margin: "0 auto", width: "21%", padding: "10px", borderRadius: "28px"
    },
    "& TextField": {},
  },
  bag26: {
    "& button": {
      background: "#000",
      border: "none",
      margin: "2rem",
      padding: "10px 44px",
      borderRadius: "35px",
    },
    "& button:hover": {
      background: "#000",
      transform: "translatey(-10px)",
      transition: "0.5s ease-in-out",
    },
    "@media (maxwidth: 575.98px)": {},
    "@media (maxwidth: 767.98px)": {},
    "@media (maxwidth: 991.98px)": {},
    "@media (maxwidth: 1199.98px)": {},
  },
  error: {
    color: 'red',
    paddingTop: '10px',
    textAlign: 'left',
    fontSize: '12px !important',
  },
  signupbox: {
    width: "33%",
    margin: "2rem auto",
  },

});
const Reset = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("id"));
  const navigate = useNavigate();
  const { mutateAsync } = useMutation(
    "reset",
    reset, {
    onSuccess: (data) => {
      navigate("/login")
      console.log(data);
    }
  }
  )
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required('Enter valid password')
        .min(8, 'Password should be 8 to 26 digit')
        .max(26, 'Password should be 8 to 26 digit'),
      confirmpassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password not match")
        .required("Enter confirm password")
    }),
    onSubmit: async (values) => {
      try {
        await mutateAsync({
          newPassword: values.password,
          confirmPassword: values.confirmpassword,
          id: searchParams.get("id"),
          token: searchParams.get("token")
        });
      } catch (error) {
        // console.log(error);
      }
    },
  });



  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const [showPassword2, setShowPassword2] = React.useState(false);

  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };



  const classes = useStyle();
  return (
    <>
      <Header />

      <Box className={classes.wrap18}>
        <Container >
          <Grid container spacing={2}>
            <Grid md={12} justifyContent="center">
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5">Confirm Password</Typography>
              </Box>
            </Grid>
            <Grid md={12} sm={12}>

              <Box sx={{ textAlign: 'center' }}>
                <form onSubmit={formik.handleSubmit} className={classes.signupbox}>

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


                  {/* <TextField
                    variant="outlined"
                    sx={{
                      width : '100%',
                      marginTop: '10px',
                      boxShadow: "rgb(0 0 0 / 7%) 0px 2px 16px 0px",
                      borderRadius: "8px",
                    }}
                    InputProps={{
                      disableUnderline: true,
                    }}
                    id="confirmpassword"
                    name="confirmpassword"
                    placeholder="Confirm password"
                    type="password"
                    value={formik.values.confirmpassword}
                    onChange={formik.handleChange}
                    
                  /> */}

                  <FormControl sx={{ marginTop: '10px', width: '100%', boxShadow: "rgb(0 0 0 / 5%) 0px 2px 16px 0px", borderRadius: "8px", }} variant="outlined">
                    {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                    <OutlinedInput
                      name="confirmpassword"
                      value={formik.values.confirmpassword}
                      onChange={formik.handleChange}
                      placeholder="Confirm password"
                      // error={formik.touched.password && Boolean(formik.errors.password)}
                      // helperText={formik.touched.password && formik.errors.password}
                      id="confirmpassword"
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
                  </FormControl>
                  <Typography className={classes.error}> {formik.errors.confirmpassword}</Typography>
                  <Box className={classes.bag26}>
                    <button class="btn btn-primary btn-block" type="submit">
                      Submit
                    </button>
                  </Box>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Reset;

// <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
// <InputLabel htmlFor="standard-adornment-password">
//   Password
// </InputLabel>
// <Input
//   id="standard-adornment-password"
//   type={values.showPassword ? "text" : "password"}
//   // value={values.password}
//   onChange={handleChange("password")}
//   endAdornment={
//     <InputAdornment position="end">
//       <IconButton
//         aria-label="toggle password visibility"
//         onClick={handleClickShowPassword}
//         onMouseDown={handleMouseDownPassword}
//       >
//         {values.showPassword ? (
//           <VisibilityOff />
//         ) : (
//           <Visibility />
//         )}
//       </IconButton>
//     </InputAdornment>
//   }
// />
// </FormControl>
