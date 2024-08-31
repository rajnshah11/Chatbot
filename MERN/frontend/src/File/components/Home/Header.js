import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <section id="header" className="d-flex align-content-center ">
        <div className="container-fluid view1 ">
          <div className="row ">
            <div className="col-12 d-flex custom">
              <div className="pt-lg-0 col-md-6  pt-5 order-2 order-lg-1 justify-content-center flex-column">
                <h2 className="display-6 ">Personal Health Assistant</h2>
                <h4 className="my-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard{" "}
                </h4>
                <div className="mt-3  pt-1">
                  <button type="submit" className="btn btn-primary ">
                    <Link
                      to="/register"
                      className=" text-white align-content-center text-decoration-none"
                    >
                      Register
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
