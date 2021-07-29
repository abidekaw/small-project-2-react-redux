import React from "react";
import { withRouter } from "react-router";
import Cardhome from "../../components/card-homepage/Cardhome";
import Footer from "../../components/footer/Footer";
import "./index.css";

const Homepage = (props) => {
  const toShop = () => {
    props.history.push("/shop");
  };
  const toProduct = () => {
    props.history.push("/product");
  };

  return (
    <>
      <div className="wrapper-homepage">
        <div className="navbar">
          <div className="title">
            <h1> <span>Choose</span> as you want <span><br/>Pay</span> as you can </h1>
          </div>
          <div className="navlink">
            <ul>
              <li onClick={() => toProduct()}>LATEST</li>
              <li onClick={() => toShop()}>ALL</li>
            </ul>
          </div>
        </div>

        <div className="main">
          <div className="button">
            <button onClick={() => toShop()}>Shop Now</button>
          </div>
          <div className="subtitle">
            <h2> New Concept <span>of Online Shopping</span> </h2>
            <div className="garis"></div>
            <p> Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum will go here. </p>
          </div>
        </div>

        <div className='card-parent'>
          <Cardhome title='GALLERY' subtitle='SUBTITLE' />
          <Cardhome title='ACTIVITIES' subtitle='SUBTITLE' />
          <Cardhome title='KEYNOTES' subtitle='SUBTITLE' />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(Homepage);