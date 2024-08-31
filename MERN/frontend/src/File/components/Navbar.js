import React from "react";
import { NavLink } from "react-router-dom";
import NavList from "../shared/NavList";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg bg-light  ">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
              <NavLink className="navbar-brand" to="/">
                <strong>DrPrax</strong>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent-7"
                aria-controls="navbarSupportedContent-7"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent-7"
              >
                <ul className="navbar-nav ml-auto ">
                  <NavList name="active" topage="/" content="Home" />
                  <NavList topage="/register" content="Register" />
                  <NavList topage="/login" content="Login" />
                  <NavList topage="/about" content="About Us" />
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
