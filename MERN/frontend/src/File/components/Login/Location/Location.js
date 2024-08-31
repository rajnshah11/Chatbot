import React from "react";
import { Link } from "react-router-dom";
const Verify = () => {
  return (
    <>
      <section
        id="location"
        className="d-flex align-content-center flex-column"
      >
        <div className="container-fluid custom2 " />
        <div className="row ">
          <div className="col-12 text-center">
            <div className="pt-lg-0 col-md-12 pt-5 order-2 order-lg-1 ">
              <h2 className="display-6 pt-2 ">Location</h2>
              <p className="my-3">
                Help Us to get your location to determine the doctors,Testing
                Labs,Gyms,Dietician Near You.
              </p>
              <div className="mt-3  pt-1 pb-5">
                <button type="submit" className="btn btn-primary ">
                  <Link
                    to="/main"
                    className=" text-white align-content-center text-decoration-none"
                  >
                    Enable Location
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="container-fluid text-center">
          <p>
            &copy; Proost Soltuions Private Ltd.All Rights Reserved | Terms and
            Condtions{" "}
          </p>
        </footer>
      </section>
    </>
  );
};
export default Verify;
