import React, { Component } from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import { TextareaAutosize } from '@mui/material';
export default class counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: 0
        };
      }
      increment = () => {
        this.setState({
          counter: this.state.counter + 1
        });
      };
    
      decrement = () => {
        this.setState({
          counter: this.state.counter - 1
        });
      };

  render() {
    return (
      <>
         <Formik
      initialValues={{ email: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required")
      })}
    ></Formik>
    {
        props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ display: "block" }}>
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={e => {
                counter.handleIncrement();
                handleChange(e);
              }}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}

            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>

            {/* <DisplayFormikState {...props} /> */}
          </form>
        );
      }}
     
      </>
    )
  }
}
