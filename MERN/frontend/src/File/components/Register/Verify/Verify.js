import React from "react";
import Footer from "../../../shared/Footer";

const Verify = () => {
  return (
    <>
      <div className="container-fluid verify text-center">
        <img
          src={require("../../../images/download.jpg")}
          className="img-fluid mt-3 h-auto w-auto "
          alt="Image2"
        />
        <h3 className="m-auto p-5">Verify Yourself</h3>
        <h4>Mail Sent to Provided Email Address.Kindly verify and continue.</h4>
      </div>
      <Footer />
    </>
  );
};
export default Verify;
