import React from "react";
import { Formik,Form } from "formik";
import * as Yup from "yup";

const Forgetpassword = () => (
  <Formik
    initialValues={{
      email: "",
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email("Email is invalid")
        .required("Required")
    })}
    onSubmit={(values,{resetForm}) => {
      alert(JSON.stringify(values,null,4));
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
          <div className="container-fluid forget_div">
            <div className="row">
              <div className="col-12 col-md-12 align-content-center justify-content-center ">
                <h3 className="display-6 text-center pt-3 mt-2">SignUp</h3>
                <hr className="w-50 mx-auto"></hr>
              </div>
              <div className="col-md-6 col-10 mx-auto col-sm-6">
                <Form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className={"form-control"}
                      id="email"
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
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-md"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
                <div className="text-center ">
                  A Mail willl be Sent to you o this Mail.Kindly Check and
                  Update the password.
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }}
  </Formik>
);

export default Forgetpassword;
