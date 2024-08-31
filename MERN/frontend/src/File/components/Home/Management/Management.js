import React from "react";
import Managementteam from "./Managementteam";
const Management = () => {
  return (
    <>
      <section className=" container-fluid bg-dark text-white p-5 management_team ">
        <div className="row ">
          <div className="col-lg-12 col-12 col-md-12 align-content-center justify-content-center ">
            <h3 className="display-6 text-center ">Management Team</h3>
            <hr className="w-50 mx-auto"></hr>
          </div>
          <Managementteam
            imageurl="download"
            name="Vinita Navadgi, Founder "
            content="Vinita has 24+ yrs IT experience of working in Healthcare segment for Fortune 500 companies. It was time to set out on her own and follow her passion in Healthcare."
          />
          <Managementteam
            imageurl="download"
            name="Atul Shah, Founder"
            content="Atul is a Specialist in turning bright ideas into products and bringing them to Market. He has 25+ years of diverse experience and bootstrapped multiple startups and ideas."
          />
          <Managementteam
            imageurl="download"
            name=" Gururaj Phadnis, VP Engineering "
            content="Gururaj has 20+ yrs of Technology expertise in building various large software platforms. He is very curious about technology and always likes to be on the cutting-edge."
          />
        </div>
      </section>
    </>
  );
};
export default Management;
