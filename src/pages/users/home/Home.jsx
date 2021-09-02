import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Layout from "../../../layouts/Layout";
import CardHome from "../../../components/card/CardHome";
import "./Home.css";

const Home = () => {
  const cardData = [
    { title: "GALLERY", subtitle: "SUBTITLE" },
    { title: "ACTIVITIES", subtitle: "SUBTITLE" },
    { title: "KEYNOTES", subtitle: "SUBTITLE" },
  ]

  return (
    <Layout visibleHeader={true}>
      <div className="jumbotron">
        <div className="title">
          <h1><span>Choose</span> as you want</h1>
          <h1><span>Pay</span> as you can</h1>
        </div>
        <div className="link">
          <ul>
            <li><Link to="/shop">LATEST</Link></li>
            <li><Link to="/shop">ALL</Link></li>
          </ul>
        </div>
      </div>

      <div className="main">
        <div className="button">
          <Link to="/shop"><button>Shop Now</button></Link>
        </div>
        <div className="subtitle">
          <h2>New Concept <span>of Online Shopping</span></h2>
          <div className="garis"></div>
          <p>Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum will go here.</p>
        </div>
      </div>

      <div className="archive">
        <CardHome cardData={cardData} />
      </div>
    </Layout>
  );
};

export default withRouter(Home);
