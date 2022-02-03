import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import List from "./List";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function View(props) {
  const buildCard = () => {
    return props.profile.map((current) => (
      <Container>
        <Row>
          <Col>
            <Card.Body className="cardbody">
              <Card.Img
                className="cardimg"
                variant="top"
                as={Image}
                src={current.photo}
                fluid={true}
                alt="Profile image"
              />
              <Card.Title>{current.username}</Card.Title>
              <Card.Text>Age: {current.age}</Card.Text>
              <Card.Text>Location:{current.location}</Card.Text>
              <Card.Text>Hobbies:{current.hobby}</Card.Text>
              <Card.Img
              onClick={() => props.incrementCount(current.username)}
              variant="bottom"
              className="like"
              as={Image}
              src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/like-512.png"
              fluid={true}
              alt="Like button"
            />
              {current.likes}
            </Card.Body>
          </Col>

          <Col className="aboutme">
            <Card.Text>About me: {current.aboutme}</Card.Text>
          </Col>
        </Row>

        <br />
      </Container>
    ));
  };

  return (
    <div>
      <Card>{buildCard()}</Card>
    </div>
  );
}
export default View;
