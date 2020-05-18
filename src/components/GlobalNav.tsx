import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Home() {
  const title = (
    <>
      <h2>Luis Calona</h2>
      <i>Software Engineer</i>
    </>
  );

  return (
    <Navbar sticky="top" bg="white" className="GlobalNav">
      <Navbar.Brand href="#">{title}</Navbar.Brand>
      <Nav>
        <Nav.Link>Projects</Nav.Link>
        <Nav.Link>About Me</Nav.Link>
      </Nav>
    </Navbar>
  );
}
