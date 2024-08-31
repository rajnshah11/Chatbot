import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Followus = () => {
  return (
    <>
      <section className="pt-4 social-container container-fluid ">
        <div className=" row ">
          <div className="col-lg-12 col-12 col-md-12 align-content-center justify-content-center ">
            <h3 className="display-6 text-center"> Follow Us</h3>
            <hr className="w-50 mx-auto"></hr>
          </div>
          <div className="col-lg-12 col-12 col-md-12 align-content-center justify-content-center text-center ">
            <Link to="#" className="youtube social text-center px-4">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </Link>
            <Link to="#" className="facebook social text-center  px-3">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </Link>
            <Link to="#" className="twitter social text-center px-3">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </Link>
            <Link to="#" className="instagram social text-center px-3">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </Link>
          </div>
        </div>
      </section>
      <footer className="container-fluid text-center ">
        <p>
          &copy; Proost Soltuions Private Ltd.All Rights Reserved | Terms and
          Condtions{" "}
        </p>
      </footer>
    </>
  );
};
export default Followus;
