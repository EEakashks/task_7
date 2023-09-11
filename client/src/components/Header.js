import React from 'react';
import {Navbar , Nav , Container } from 'react-bootstrap';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() { 
  return (
   
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/"  style={{fontSize:"20px", fontStyle:"italic"}} >Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
        <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
        <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}


export default Header;