import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ menuData }) => (
  <div className="styled-navbar">
    {menuData.map((val, key) => {
      return (
        <NavLink
          style={{ textDecoration: "none", listStyle: "none", color: "white" }}
          key={key}
          exact={val.exact}
          to={val.to}
        >
          {val.menuName}
        </NavLink>
      );
    })}
  </div>
);

export default Navbar;
