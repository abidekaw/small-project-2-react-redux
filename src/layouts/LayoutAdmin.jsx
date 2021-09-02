import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const LayoutAdmin = ({ children }) => {
  const menuData = [
    { to: "/admin", menuName: "Home", exact: true },
    { to: "/admin/product", menuName: "Products", exact: false },
  ];

  return (
    <>
      <Navbar menuData={menuData} />
      <div style={{textAlign: "center"}}>{children}</div>
      <Footer />
    </>
  );
};

export default LayoutAdmin;
