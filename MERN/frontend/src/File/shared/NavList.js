import React from "react";
import { NavLink } from "react-router-dom";
const NavList = (props) => {
  return (
    <>
      <li className={"nav-item {props.name}"}>
        <NavLink
          exact
          activeClassName="menu_active"
          className="nav-link"
          to={props.topage}
        >
          {props.content}
          <span className="sr-only">(current)</span>
        </NavLink>
      </li>
    </>
  );
};
export default NavList;
