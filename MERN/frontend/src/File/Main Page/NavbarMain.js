import React from "react";
import { NavLink } from "react-router-dom";
import NavList from "../shared/NavList";
const NavbarMain = () => {
  return (
    <>
      <div className="container-fluid nav_bg bg-light ">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink exact className="navbar-brand" to="/main">
                <strong>
                DrPrax
                </strong>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <NavList name="active" topage="/main" content="Home" />
                  <NavList topage="/profile" content="Profile" />
                  <NavList topage="/main/about" content="About Us" />
                  <NavList topage="/" content="Logout" />
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavbarMain;
