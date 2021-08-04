import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Cardhome from "../../components/card-homepage/Cardhome";
import Footer from "../../components/footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="wrapper-homepage">
        <div className="navbar">
          <div className="title">
            <h1>
              {" "}
              <span>Choose</span> as you want{" "}
              <span>
                <br />
                Pay
              </span>{" "}
              as you can{" "}
            </h1>
          </div>
          <div className="navlink">
            <ul>
              <Link to="/product">
                <li>LATEST</li>
              </Link>
              <Link to="/shop">
                <li>ALL</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="main">
          <div className="button">
            <Link to="/shop">
              <button>Shop Now</button>
            </Link>
          </div>
          <div className="subtitle">
            <h2>
              {" "}
              New Concept <span>of Online Shopping</span>{" "}
            </h2>
            <div className="garis"></div>
            <p>
              {" "}
              Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum
              will go here. Lorem Ipsum will go here.{" "}
            </p>
          </div>
        </div>

        <div className="card-parent">
          <Cardhome title="GALLERY" subtitle="SUBTITLE" />
          <Cardhome title="ACTIVITIES" subtitle="SUBTITLE" />
          <Cardhome title="KEYNOTES" subtitle="SUBTITLE" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(Home);
