import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Home() {
  const SchoolProven = require("../img/SchoolProven.png");
  const TechOut = require("../img/TechOut.png");

  const title = (
    <>
      <h2>Luis Calona</h2>
      <i>Software Engineer</i>
    </>
  );

  return (
    <>
      <Container className="Home">
        <Navbar sticky="top" bg="white">
          <Navbar.Brand href="#home">{title}</Navbar.Brand>
          <Nav>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>About Me</Nav.Link>
          </Nav>
        </Navbar>

        <br />
        <br />

        <p className="Home-intro">
          Hi, I'm Luis. I'm currently a senior at UC San Diego studying Computer
          Science with a minor in Design. I will be joining Quizlet full-time in
          the fall. I've previously had internships at Chan Zuckerberg
          Initiative, Dropbox, and Bentley Systems.
        </p>

        <div className="Home-projects">
          <h2 className="Home-projects-title">My Projects</h2>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Img src={SchoolProven} />
                  <Card.Title>SchoolProven</Card.Title>
                  <Card.Body>
                    A web application aimed at providing students with a
                    comprehensive tool for researching their classes.
                  </Card.Body>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Img src={TechOut} />
                  <Card.Title>TechOut</Card.Title>
                  <Card.Body>
                    An interactive kiosk that aims to raise awareness on Geisel
                    Library’s Tech Lending Program and make its equipment more
                    accessible to UCSD students by creating a frictionless
                    process for checking out equipment, during, and after work
                    hours.
                  </Card.Body>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
