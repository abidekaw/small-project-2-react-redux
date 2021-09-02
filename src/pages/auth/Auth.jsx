import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Login from "./login/Login";
import Signup from "./signup/Signup";

const Auth = () => {
  const [tab, setTab] = useState("login");

  const renderTab = (tab) => {
    switch (tab) {
      case "login":
        return <Login />;
      case "signup":
        return <Signup />;
      default:
        break;
    }
  };

  const menuData = [
    { to: "/", exact: false, menuName: "Home" },
    { to: "/shop", exact: false, menuName: "Shop" },
    { to: "/product", exact: false, menuName: "Product" },
  ];

  return (
    <>
      <Navbar menuData={menuData} />
      <div style={{ display: "flex", width: "50%" }}>
        <h1 onClick={() => setTab("login")}>LOGIN</h1>
        <h1 onClick={() => setTab("signup")}>SIGNUP</h1>
      </div>
      <div style={{minHeight: "80vh"}}>{renderTab(tab)}</div>
      <Footer />
    </>
  );
};

export default Auth;
