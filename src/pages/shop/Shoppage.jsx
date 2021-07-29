import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./index.css";
import Cardproduct from "../../components/card-shoppage/Cardproduct";
import { Link } from "react-router-dom";

const Shoppage = () => {
  return (
    <>
      <Header />
      <div className="flex-parent">
        <div className="flex-child">
          <aside id="featured">
            <h6>FEATURED</h6>
            <Link to="/shop">CATEGORY 1</Link>
            <Link to="/shop">CATEGORY 2</Link>
            <Link to="/shop">CATEGORY 3</Link>
            <Link to="/shop">CATEGORY 4</Link>
            <Link to="/shop" className="active">CATEGORY 5</Link>
          </aside>
        </div>

        <Cardproduct />

        <div className="flex-child">
          <aside id="filter">
            <h6>ALL </h6>
            <Link to="">FILTER 1</Link>
            <Link to="">FILTER 2</Link>
            <Link to="" className="active">FILTER 3</Link>
            <Link to="">FILTER 4</Link>
            <Link to="">FILTER 5</Link>
          </aside>
        </div>
      </div>

      <div className="pagination">
        <Link to="" className="active">1</Link>
        <Link to="">2</Link>
        <Link to="">3</Link>
        <Link to="">4</Link>
        <Link to="">5</Link>
        <Link to="">6</Link>
        <Link to="">7</Link>
        <Link to="">8</Link>
        <Link to="">9</Link>
      </div>
      <Footer />
    </>
  );
};

export default Shoppage;
