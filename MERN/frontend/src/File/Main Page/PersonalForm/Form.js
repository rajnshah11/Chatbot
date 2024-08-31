import React from "react";
import Footer from "../../shared/Footer";
import NavbarMain from "../NavbarMain";
import { Formik, Form } from "formik";
import * as Yup from "yup";
const Personaldetails = () => (
  <Formik
    initialValues={{
      fullname: "",
      email: "",
      age: "",
      phone: "",
      weight: "",
      height: "",
      gender: "",
    }}
    validationSchema={Yup.object().shape({
      fullname: Yup.string().required("Required"),
      email: Yup.string().email().required("Required"),
      age: Yup.number()
        .label("Age must be a number")
        .positive("Age can't ve negative"),
      height: Yup.number()
        .label("Weight must be a Kgs")
        .positive("Height can't be negative"),
      weight: Yup.number()
        .label("Height must be a Cms")
        .positive("Weight can't ve negative"),
      phone: Yup.string()
        .min(10)
        .matches(
          /^(?:(?:\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/,
          "Enter 10 digit Number"
        ),
      gender: Yup.string().required("Required"),
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
          <NavbarMain />
          <div className="container login_div">
            <div className="row">
              <div className="col-12 col-md-12 align-content-center justify-content-center ">
                <h3 className="display-6 text-center pt-3 mt-2">
                  Personal Details
                </h3>
                <hr className="w-50 mx-auto"></hr>
              </div>
              <div className="col-md-6 col-10 mx-auto">
                <Form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="text" className="form-label ">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="fullname"
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
                  <div className="mb-3">
                    <label htmlFor="Phone" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="string"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Mobile Number"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="phone"
                    />
                    {touched.phone && errors.phone && (
                      <span className="help-block text-danger">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="Gender" className="form-label">
                      Gender
                    </label>
                    <br />
                    <div className="d-flex flex-row">
                      <div className="pr-5">
                        <input
                          type="radio"
                          value="Female"
                          className="mr-2"
                          checked={values.gender === "Female"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="gender"
                        />
                        <label className="form-label">Female</label>
                      </div>
                      <div className="pl-5">
                        <input
                          type="radio"
                          value="Male"
                          className="mr-2"
                          checked={values.gender === "Male"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="gender"
                        />
                        <label className="form-label">Male</label>
                      </div>
                    </div>
                    {touched.gender && errors.gender && (
                      <span className="help-block text-danger">
                        {errors.gender}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="age" className="form-label">
                      Age
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      placeholder="Enter Age"
                      value={values.age}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="age"
                    />
                    {touched.age && errors.age && (
                      <span className="help-block text-danger">
                        {errors.age}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="height" className="form-label">
                      Height(in cms):
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="height"
                      placeholder="Enter Height"
                      value={values.height}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="height"
                    />
                    {touched.height && errors.height && (
                      <span className="help-block text-danger">
                        {errors.height}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="weight" className="form-label">
                      Weight (in kg):
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="weight"
                      placeholder="Enter Age"
                      value={values.weight}
                      onChange={handleChange}
                      name="weight"
                    />
                    {touched.weight && errors.weight && (
                      <span className="help-block text-danger">
                        {errors.weight}
                      </span>
                    )}
                  </div>
                  <div class="mb-3 text-center">
                    <button type="submit" className="btn btn-primary ">
                      Submit
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
    }}
  </Formik>
);
export default Personaldetails;
