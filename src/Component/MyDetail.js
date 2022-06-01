import { Button } from "bootstrap";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MyDetail = () => {
  return (
    <div>
      <Row>
        <Col
          className="App-header"
          xs={8}
        >
          <h1 className="h1 display-4 mt-5 mb-5">
            Front-end Developer | Freelacner
          </h1>
          <p className="mb-5">
            I am a web developer for the last 2 years. My expertise shines when
            it comes to React Js, CSS, and HTML 5. I can build a site using
            React Js along with bootstrap 5 and HTML 5 I can also develop a
            website using some of the most famous platforms i.e. WordPress. The
            work that I will deliver to you will be as you like and the UI/UIX
            will also be stunning and interactive.
          </p>
        </Col>
        <Col xs={4} className="Image" style={{ backgroundColor: "red" }}>
          <img
            variant="rounded-circle"
            src="./Images/pic.jpg"
            alt="Couldnot load"
          />
        </Col>
      </Row>
      <Button>click me</Button>
    </div>
  );
};

export default MyDetail;
