import { connect } from "react-redux";
import { withRouter } from "react-router";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./Layout.css";

const Layout = (props) => {
  const dataLogin =
    window.localStorage.getItem("dataLogin") &&
    JSON.parse(window.localStorage.getItem("dataLogin"));

  const handleLogout = () => {
    localStorage.removeItem("dataLogin");
    alert("Berhasil Logout");
    props.history.push("/");
  };

  const authRouting = dataLogin
    ? {
        to: "/",
        menuName: (
          <i
            className="fas fa-users"
            onClick={handleLogout}
            style={{ textAlign: "end" }}
          >
            {dataLogin && <span> Hallo {dataLogin.name}</span>} <li>Logout</li>
          </i>
        ),
        exact: false,
        className: "header-right",
      }
    : {
        to: "/auth",
        menuName: <i className="fas fa-users"> login</i>,
        exact: false,
        className: "header-right",
      };

  const menuData = [
    {
      to: "/",
      menuName: "We n A Merch",
      exact: true,
      className: "header-left",
    },
    {
      to: "#",
      menuName: (
        <>
          <input type="search" placeholder="search product" />
          <i class="fas fa-search"></i>
        </>
      ),
      exact: true,
      className: "header-mid",
    },
    {
      to: "/cart",
      menuName: (
        <i className="fas fa-shopping-cart"> Cart {props.carts.length} </i>
      ),
      exact: false,
      className: "header-right",
    },
    { ...authRouting },
  ];

  return (
    <>
      {props.visibleHeader ? null : <Header menuData={menuData} />}
      <div className="layout-children">{props.children}</div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    // products: state.productReducer.products,
    carts: state.productReducer.carts,
  };
};

export default withRouter(connect(mapStateToProps, null)(Layout));
// export default Layout;
