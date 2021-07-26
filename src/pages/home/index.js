import React from "react";
import Card from '../../components/card-homepage'
import Footer from "../../components/footer";
import "./index.css";

const Home = (props) => {
  const handleClick = () => {
    props.history.push('/shop')
  }

  return (
    <>
    <div className="wrapper-homepage">
      <div className="navbar">
        <div className="title">
          <h1> <span>Choose</span> as you want <span><br/>Pay</span> as you can </h1>
        </div>
        <div className="navlink">
          <ul>
            <li> <a href="#">LATEST</a> </li>
            <li> <a href="#">ALL</a> </li>
          </ul>
        </div>
      </div>

      <div className="main">
        <div className="button">
          <button onClick={handleClick}>Shop Now</button>
        </div>
        <div className="subtitle">
          <h2> New Concept <span>of Online Shopping</span> </h2>
          <div className="garis"></div>
          <p> Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum will go here. </p>
        </div>
      </div>

      <Card />
    </div>
    <Footer />
    </>
  );
};

export default Home;
