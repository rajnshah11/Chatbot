import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
const Register = (props) => (
  <Formik
    initialValues={{
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    }}
    validationSchema={Yup.object().shape({
      fullname: Yup.string().required("Required"),
      email: Yup.string().email().required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Password is too short - should be 8 character minimum.")
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Must Contain  Minimum 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required")
        .min(8, "Password is too short - should be 8 character minimum.")
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/)
    })}
    onSubmit={(values,{resetForm}) => {
        axios.post(`/register`,{
            "fullname":values.fullname,
            "email":values.email,
            "password":values.password,
        })
            .then(function (response) {
                if(response.status === 200){
                  console.log("Data sent");
                } else{
                    console.log("Some error ocurred");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    
       resetForm({values:''});
    }}
    
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
      return (
        <>
          <Navbar />
          <div className="container-fluid login_div">
            <div className="row">
              <div className="col-12 col-md-12 align-content-center justify-content-center ">
                <h3 className="display-6 text-center pt-3 mt-2">SignUp</h3>
                <hr className="w-50 mx-auto"></hr>
              </div>
              <div className="col-md-6 col-10 mx-auto col-sm-6">
                <Form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="text" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Full Name"
                      value={values.fullname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="fullname"
                    />
                    {touched.fullname && errors.fullname && (
                      <span className="help-block text-danger">
                        {errors.fullname}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="email"
                    />
                    {touched.email && errors.email && (
                      <span className="help-block text-danger">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="password"
                    />
                    {touched.password && errors.password && (
                      <span className="help-block text-danger">
                        {errors.password}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="confirmPassword"
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                      <span className="help-block text-danger">
                        {errors.confirmPassword}
                      </span>
                    )}
                  </div>
                  <div className="mb-3 text-center">
                    <button type="submit" className="btn btn-primary ">Create a Account</button>
                  </div>
                </Form>
                <div className="text-center ">
                  Already have an Account?{" "}
                  <Link
                    
                    className="link text-decoration-none"
                    to="/login"
                  >
                    Login
                  </Link>
                  <p className="my-3">or sign in with:</p>
                </div>
                <div className="col-lg-12 col-12 col-md-12 align-content-center justify-content-center text-center ">
                  <Link to="#" className="google social text-center px-4">
                    <FontAwesomeIcon icon={faGoogle} size="2x" />
                  </Link>
                  <Link to="#" className="facebook social text-center  px-3">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }}
  </Formik>
);
export default Register;
