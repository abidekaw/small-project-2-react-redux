import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      {props.menuData.map((val, key) => {
        return (
          <NavLink
            key={key}
            to={val.to}
            exact={val.exact}
            className={val.className}
          >
            {val.menuName}
          </NavLink>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // products: state.productReducer.products,
    carts: state.productReducer.carts,
  };
};

export default withRouter(connect(mapStateToProps, null)(Header));
