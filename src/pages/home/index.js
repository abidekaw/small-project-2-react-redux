import React from "react";
import { Container, Row } from "reactstrap";
import Footer from "../../components/footer";
import "./index.css";

const Home = () => {
  return (
    <Container>
      <Row>
        <header>
          <h1>
            <span>Choose</span> as you want{" "}
            <span>
              <br /> Pay
            </span>{" "}
            as you can
          </h1>
          <nav>
            <ul>
              <li>
                <a href="#">LATEST</a>
              </li>
              <li>
                <a href="#">ALL</a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="content">
          <aside>
            <a href="shop.html">Shop Now</a>
          </aside>
          <div className="title">
            <h2>
              New Concept <span>of Online Shopping</span>
            </h2>
            <div className="garis"></div>
            <p>
              Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum
              will go here. Lorem Ipsum will go here.
            </p>
          </div>
        </div>

        <div className="card-parent">
          <div className="card-child">
            <p>Gallery</p>
            <span>SubTITLE</span>
          </div>
          <div className="card-child">
            <p>Activities</p>
            <span>SubTITLE</span>
          </div>
          <div className="card-child">
            <p>Keynotes</p>
            <span>SubTITLE</span>
          </div>
        </div>
        <Footer />
      </Row>
    </Container>
  );
};

export default Home;
