import { Box, Container, Grid, Typography, TextField } from "@mui/material";
import React from "react";
import Header from "../../components/Header/Header";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { forget } from "../../api/ApiCall/forget"
import { useMutation } from "react-query";
import { toast } from "react-toastify";
const useStyle = makeStyles({

  wrap18: {
    padding: "6rem 0 2rem",
    textAlign: 'center',
    "& h5": {
      // textAlign: "center",
    },
    "@media (maxwidth: 575.98px)": {},
    "@media (maxwidth: 767.98px)": {},
    "@media (maxwidth: 991.98px)": {},
    "@media (maxwidth: 1199.98px)": {},
  },
  signupbox: {
    width: "33%",
    margin: "2rem auto",
  },
  bag22: {
    marginTop: "2rem",
    textAlign: "center",
    "& form": {
      // boxShadow: "0px 0px 5px 0px #ccc", margin: "0 auto", width: "21%", padding: "10px", borderRadius: "28px"
    },
    "& input": {
      fontSize: "13px",
      padding: "20px 20px !important"
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
    fontSize: '12px !important',
    textAlign: 'left'
  }

});
const Reset = () => {
  const { mutateAsync } = useMutation(
    "forget",
    forget, {
    onSuccess: (data) => {
      if (data?.responseCode === 200) {
        toast.success(JSON.stringify("Check your mail for reset password"));
      }
      else if (data?.responseCode === 404) {
        toast.error(JSON.stringify("Email not exits"));
      }
      else if (data?.responseCode === 501) {
        toast.error(JSON.stringify("Something went wrong"));
      }
    }
  }
  )
  const formik = useFormik({
    initialValues: {
      email: "",
      redirectUrl: '/reset'
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address")
        .required("Enter valid email address"),
    }),
    onSubmit: async (values) => {
      try {
        await mutateAsync({
          email: values.email
        });
      } catch (error) {
        // console.log(error);
      }
    },
  });
  const classes = useStyle();
  return (
    <>
      <Header />

      <Box className={classes.wrap18}>
        <Container >
          <Grid container spacing={2}>
            <Grid md={12} justifyContent="center">
              <Typography variant="h5">Reset Password</Typography>
            </Grid>
            <Grid md={12} sm={12}>
              <Box className={classes.bag22}>
                <form onSubmit={formik.handleSubmit} className={classes.signupbox}>
                  <TextField
                    variant="outlined"
                    //   fullWidth
                    sx={{
                      boxShadow: "rgb(0 0 0 / 7%) 0px 2px 16px 0px",
                      borderRadius: "8px",
                      width: '100%'
                    }}
                    InputProps={{
                      disableUnderline: true,
                    }}
                    id="email"
                    name="email"
                    // label = "Email"
                    placeholder="Email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  // error={
                  //   formik.touched.email &&
                  //   Boolean(formik.errors.email)
                  // }
                  // helperText={
                  //   formik.touched.email &&
                  //   formik.errors.email
                  // }
                  />
                  <Typography className={classes.error}> {formik.errors.email}</Typography>

                  <Box className={classes.bag26}>
                    <button class="btn btn-primary btn-block" type="submit">
                      Reset Password
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
