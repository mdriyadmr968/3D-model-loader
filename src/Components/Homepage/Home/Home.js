import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import model1 from "../../../Images/model1.PNG";
import model2 from "../../../Images/model22.PNG";
import model3 from "../../../Images/model33.PNG";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Row>
        <h1 className="heading">Click on a image to load 3d model</h1>
        <Col md={4}>
          <nav>
            <Link to="/">
              <Button className="btn btn-warning ms-5">Home</Button>
            </Link>{" "}
            <br />
            <Link to="firstmodel">
              <img src={model1} alt="image1" className="image_style" />
            </Link>
            <br />
            <Link to="secondmodel">
              <img src={model2} alt="image2" className="image_style" />
            </Link>
            <br />
            <Link to="thirdmodel">
              <img src={model3} alt="image3" className="image_style" />
            </Link>
            <br />
          </nav>
        </Col>
        <Col md={8}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
